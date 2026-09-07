"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { X, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  onClose: () => void;
}

const MIN = 1;
const MAX = 5;

/**
 * Fullscreen image viewer.
 *
 * Desktop: scroll to zoom, drag to pan, ESC / click-outside to close.
 * Touch:   pinch to zoom, one-finger drag to pan, tap-outside to close.
 */
export default function ImageLightbox({ src, alt, onClose }: Props) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragOrigin = useRef({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  // Multi-touch state
  const pinchStart = useRef<{ distance: number; scale: number } | null>(null);

  const close = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
    onClose();
  }, [onClose]);

  /* ESC to close */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [close]);

  /* Lock body scroll */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const changeScale = useCallback((next: number) => {
    const clamped = Math.min(Math.max(next, MIN), MAX);
    setScale(clamped);
    if (clamped <= 1) setOffset({ x: 0, y: 0 });
  }, []);

  /* Non-passive wheel listener for zoom */
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      changeScale(scale + (e.deltaY < 0 ? 0.12 : -0.12));
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [scale, changeScale]);

  function zoom(delta: number) {
    changeScale(scale + delta);
  }

  /* Mouse drag pan */
  function handleMouseDown(e: React.MouseEvent) {
    if (scale <= 1) return;
    e.preventDefault();
    setDragging(true);
    dragOrigin.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  }
  function handleMouseMove(e: React.MouseEvent) {
    if (!dragging) return;
    setOffset({ x: e.clientX - dragOrigin.current.x, y: e.clientY - dragOrigin.current.y });
  }
  function stopDrag() { setDragging(false); }

  /* Touch handlers: pinch to zoom, one-finger pan */
  function handleTouchStart(e: React.TouchEvent) {
    if (e.touches.length === 2) {
      const [a, b] = [e.touches[0], e.touches[1]];
      const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      pinchStart.current = { distance, scale };
    } else if (e.touches.length === 1 && scale > 1) {
      setDragging(true);
      dragOrigin.current = {
        x: e.touches[0].clientX - offset.x,
        y: e.touches[0].clientY - offset.y,
      };
    }
  }
  function handleTouchMove(e: React.TouchEvent) {
    if (e.touches.length === 2 && pinchStart.current) {
      const [a, b] = [e.touches[0], e.touches[1]];
      const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      const next = pinchStart.current.scale * (distance / pinchStart.current.distance);
      changeScale(next);
    } else if (e.touches.length === 1 && dragging) {
      setOffset({
        x: e.touches[0].clientX - dragOrigin.current.x,
        y: e.touches[0].clientY - dragOrigin.current.y,
      });
    }
  }
  function handleTouchEnd() {
    setDragging(false);
    pinchStart.current = null;
  }

  const pct = Math.round(scale * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      {/* Toolbar */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2 z-10">
        <button
          onClick={() => zoom(0.5)}
          title="Zoom in"
          aria-label="Zoom in"
          className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => zoom(-0.5)}
          title="Zoom out"
          aria-label="Zoom out"
          className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => { setScale(1); setOffset({ x: 0, y: 0 }); }}
          title="Reset"
          aria-label="Reset zoom"
          className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        <button
          onClick={close}
          title="Close"
          aria-label="Close"
          className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white hover:bg-red-500/60 hover:border-red-400/40 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Zoom indicator / hint */}
      {scale > 1.01 ? (
        <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 rounded-full text-white/70 text-xs font-mono select-none pointer-events-none">
          {pct}%
        </div>
      ) : (
        <p className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-[11px] sm:text-xs select-none pointer-events-none text-center px-4">
          Scroll or pinch to zoom · drag to pan
        </p>
      )}

      {/* Image container */}
      <div
        ref={imageRef}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          transition: dragging ? "none" : "transform 0.15s ease",
          cursor: scale > 1 ? (dragging ? "grabbing" : "grab") : "zoom-in",
          touchAction: "none",
        }}
        className="max-w-[92vw] max-h-[86vh] sm:max-h-[90vh] select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-w-[92vw] max-h-[86vh] sm:max-h-[90vh] object-contain rounded-xl shadow-2xl shadow-black/60 bg-white"
        />
      </div>
    </motion.div>
  );
}
