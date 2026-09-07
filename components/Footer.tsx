import Link from "next/link";
import { Mail, Shield } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100/70 text-slate-500 border-t border-slate-200 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-200 flex-shrink-0">
              <Shield className="w-4 h-4 text-blue-600" />
            </div>
            <div className="min-w-0">
              <Link
                href="/"
                className="font-semibold text-slate-900 text-sm hover:text-blue-700 transition-colors"
              >
                Emmanuel Chang
              </Link>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Cybersecurity <span className="text-slate-300">•</span> Digital Forensics <span className="text-slate-300">•</span> AI Security
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <a
              href="https://github.com/Emmanuelchang2006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
            >
              <FaGithub className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-chang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-blue-700 hover:bg-white transition-colors"
            >
              <FaLinkedin className="w-[18px] h-[18px]" />
            </a>
            <a
              href="mailto:emmanuelchangyq@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-blue-700 hover:bg-white transition-colors"
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>
            <span className="ml-3 text-[11px] text-slate-400 hidden sm:inline">
              © {currentYear}
            </span>
          </div>
        </div>

        <p className="sm:hidden text-[11px] text-slate-400 mt-3">
          © {currentYear} Emmanuel Chang
        </p>
      </div>
    </footer>
  );
}
