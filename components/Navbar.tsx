"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_10px_-6px_rgba(15,23,42,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Home"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-sm shadow-blue-500/30">
              <ShieldCheck className="w-4 h-4 text-white" />
            </span>
            <span className="font-semibold text-slate-900 text-[15px] tracking-tight">
              Emmanuel Chang
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-100/60 border border-slate-200/70">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-sm rounded-full transition-colors ${
                    isActive
                      ? "text-white bg-gradient-to-br from-blue-600 to-indigo-700 shadow-sm shadow-blue-500/25 font-medium"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-slate-200 py-2 bg-white/95 backdrop-blur">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 text-[15px] rounded-lg ${
                    isActive
                      ? "text-white font-medium bg-gradient-to-br from-blue-600 to-indigo-700"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
