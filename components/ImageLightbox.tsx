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

export default function ImageLightbox({ src, alt, onClose }: Props) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragOrigin = useRef({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  /* ── Close helpers ── */
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

  /* Non-passive wheel listener for zoom (passive wheel blocks preventDefault) */
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      setScale(s => Math.min(Math.max(s + (e.deltaY < 0 ? 0.12 : -0.12), MIN), MAX));
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  /* Reset pan when scale returns to 1 */
  useEffect(() => {
    if (scale <= 1) setOffset({ x: 0, y: 0 });
  }, [scale]);

  /* ── Zoom buttons ── */
  function zoom(delta: number) {
    setScale(s => Math.min(Math.max(s + delta, MIN), MAX));
  }

  /* ── Drag to pan ── */
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
      {/* ── Toolbar ── */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <button
          onClick={() => zoom(0.5)}
          title="Zoom in"
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => zoom(-0.5)}
          title="Zoom out"
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => { setScale(1); setOffset({ x: 0, y: 0 }); }}
          title="Reset"
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        <button
          onClick={close}
          title="Close"
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white hover:bg-red-500/60 hover:border-red-400/40 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* ── Zoom level indicator ── */}
      {scale > 1.01 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 rounded-full text-white/60 text-xs font-mono select-none pointer-events-none">
          {pct}%
        </div>
      )}

      {/* ── Hint ── */}
      {scale <= 1.01 && (
        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/30 text-xs select-none pointer-events-none">
          Scroll to zoom · drag when zoomed
        </p>
      )}

      {/* ── Image container ── */}
      <div
        ref={imageRef}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          transition: dragging ? "none" : "transform 0.15s ease",
          cursor: scale > 1 ? (dragging ? "grabbing" : "grab") : "zoom-in",
        }}
        className="max-w-[90vw] max-h-[90vh] select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl shadow-black/60"
        />
      </div>
    </motion.div>
  );
}
