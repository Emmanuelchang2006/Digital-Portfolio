"use client";

import { useEffect } from "react";

/**
 * Very restrained ambient background helper.
 *
 * Sets two CSS custom properties on <html> (--mx, --my) that ease toward
 * the current pointer position. `body::before` uses those variables to
 * position a very large, very soft radial gradient — so the page's
 * background atmosphere gently follows the cursor without producing a
 * visible spotlight.
 *
 * Disabled on coarse-pointer (touch) devices and when the user has
 * requested reduced motion. In both cases the gradient stays at its
 * default position (defined in globals.css).
 */
export default function AmbientCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarsePointer || reducedMotion) return;

    let mx = 0.18;
    let my = 0.12;
    let tx = 0.18;
    let ty = 0.12;
    let raf = 0;
    const root = document.documentElement;

    function onMove(e: PointerEvent) {
      tx = e.clientX / window.innerWidth;
      ty = e.clientY / window.innerHeight;
    }

    function tick() {
      // Very slow easing so the gradient reads as ambient shift, not a
      // cursor-following effect. A visitor should barely notice movement.
      mx += (tx - mx) * 0.022;
      my += (ty - my) * 0.022;
      root.style.setProperty("--mx", `${(mx * 100).toFixed(2)}%`);
      root.style.setProperty("--my", `${(my * 100).toFixed(2)}%`);
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      root.style.removeProperty("--mx");
      root.style.removeProperty("--my");
    };
  }, []);

  return null;
}
