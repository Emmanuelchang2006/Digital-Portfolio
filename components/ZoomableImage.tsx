"use client";

import Image from "next/image";
import { ZoomIn } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  onOpen: () => void;
  /** Tailwind aspect utility, e.g. "aspect-[4/3]" (default) or "aspect-video" */
  aspect?: string;
  /** object-fit for the image */
  fit?: "contain" | "cover";
  /** Adds inner padding (useful for logo/certificate images) */
  padded?: boolean;
  /** Applied to the outer button */
  className?: string;
  sizes?: string;
  /** Corner radius; defaults to `rounded-lg` */
  radius?: string;
}

/**
 * Image tile with a hover zoom affordance. On hover it dims slightly, scales
 * the image by ~1.03, and reveals a small magnifying-glass badge to signal
 * that the image is clickable. Clicking calls `onOpen` (typically to launch
 * the site-wide ImageLightbox).
 */
export default function ZoomableImage({
  src,
  alt,
  onOpen,
  aspect = "aspect-[4/3]",
  fit = "contain",
  padded = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 400px",
  radius = "rounded-lg",
}: Props) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open image: ${alt}`}
      className={`group relative block w-full ${aspect} ${radius} overflow-hidden bg-white border border-slate-200 hover:border-slate-400 transition-colors focus:outline-none ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`${fit === "cover" ? "object-cover" : "object-contain"} ${padded ? "p-3" : ""} transition-transform duration-500 group-hover:scale-[1.03]`}
      />

      {/* Overlay dim (very subtle) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-200"
      />

      {/* Magnifier badge */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <div className="flex items-center gap-1.5 pl-2 pr-2.5 py-1.5 rounded-md bg-white/95 border border-slate-200 text-slate-900 shadow-sm">
          <ZoomIn className="w-3.5 h-3.5" />
          <span className="text-[11px] font-medium tracking-wide">View</span>
        </div>
      </div>
    </button>
  );
}
