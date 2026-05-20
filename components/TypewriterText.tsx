"use client";

import { useState, useEffect } from "react";

interface Props {
  text: string;
  /** ms per character */
  speed?: number;
  /** ms before typing begins */
  startDelay?: number;
  className?: string;
}

export default function TypewriterText({
  text,
  speed = 38,
  startDelay = 0,
  className = "",
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);

  /* wait for startDelay, then begin */
  useEffect(() => {
    const t = setTimeout(() => setActive(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  /* type one character at a time */
  useEffect(() => {
    if (!active) return;
    let i = 0;
    setDisplayed("");
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(iv);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(iv);
  }, [active, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {/* cursor: blinks when done typing, solid while typing */}
      <span
        aria-hidden="true"
        className={`inline-block w-px h-[0.85em] align-middle ml-0.5 bg-cyan-400 ${
          done ? "cursor-blink" : "opacity-100"
        }`}
      />
    </span>
  );
}
