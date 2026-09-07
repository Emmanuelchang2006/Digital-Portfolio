import Link from "next/link";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <Link href="/" className="text-slate-900 font-medium hover:text-blue-700 transition-colors">
              Emmanuel Chang
            </Link>
            <span className="hidden sm:inline text-slate-300">·</span>
            <span>© {currentYear}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Emmanuelchang2006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              <FaGithub className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-chang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-blue-700 transition-colors"
            >
              <FaLinkedin className="w-[18px] h-[18px]" />
            </a>
            <a
              href="mailto:emmanuelchangyq@gmail.com"
              aria-label="Email"
              className="text-slate-500 hover:text-blue-700 transition-colors"
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
