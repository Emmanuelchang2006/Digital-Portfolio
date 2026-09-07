import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-md bg-white/5 border border-slate-800 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
            </span>
            <div>
              <Link href="/" className="text-white font-semibold text-[15px] tracking-tight hover:text-blue-300 transition-colors">
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
              className="w-9 h-9 rounded-md flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-slate-800 transition-colors"
            >
              <FaGithub className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-chang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-md flex items-center justify-center text-slate-400 hover:text-blue-300 hover:bg-white/5 border border-transparent hover:border-slate-800 transition-colors"
            >
              <FaLinkedin className="w-[18px] h-[18px]" />
            </a>
            <a
              href="mailto:emmanuelchangyq@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-md flex items-center justify-center text-slate-400 hover:text-blue-300 hover:bg-white/5 border border-transparent hover:border-slate-800 transition-colors"
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-500">
          <span>© {currentYear} Emmanuel Chang</span>
          <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
