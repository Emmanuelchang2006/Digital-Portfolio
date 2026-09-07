import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark-glow border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-dark opacity-40 pointer-events-none" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <ShieldCheck className="w-5 h-5 text-white" />
            </span>
            <div>
              <Link
                href="/"
                className="text-white font-semibold text-base tracking-tight hover:text-blue-300 transition-colors"
              >
                Emmanuel Chang
              </Link>
              <p className="text-xs text-slate-400 mt-0.5">
                Cybersecurity &amp; Security Engineering, Singapore
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Emmanuelchang2006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-slate-700 transition-all"
            >
              <FaGithub className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-chang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-300 hover:bg-white/5 border border-transparent hover:border-slate-700 transition-all"
            >
              <FaLinkedin className="w-[18px] h-[18px]" />
            </a>
            <a
              href="mailto:emmanuelchangyq@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-300 hover:bg-white/5 border border-transparent hover:border-slate-700 transition-all"
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500">
          <span>© {currentYear} Emmanuel Chang</span>
          <div className="flex items-center gap-4">
            <Link href="/resume" className="text-slate-400 hover:text-white transition-colors">
              Resume
            </Link>
            <Link href="/experience" className="text-slate-400 hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
