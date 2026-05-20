import Link from "next/link";
import { Mail, Phone, Eye } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-cyan-900/60 rounded-lg flex items-center justify-center border border-cyan-700/40">
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <span className="font-semibold text-white">Emmanuel Chang</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Cybersecurity & Digital Forensics student committed to defending
              digital landscapes and building secure systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/resume", label: "Resume" },
                { href: "/experience", label: "Experience" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:emmanuelchangyq@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  emmanuelchangyq@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6583388400"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +65 8338 8400
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/emmanuel-chang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors duration-200"
                >
                  <FaLinkedin className="w-4 h-4 flex-shrink-0" />
                  www.linkedin.com/in/emmanuel-chang
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {currentYear} Emmanuel Chang. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
