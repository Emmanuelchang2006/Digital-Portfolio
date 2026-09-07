"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type FormState = "idle" | "submitting" | "success" | "error";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "emmanuelchangyq@gmail.com",
    href: "mailto:emmanuelchangyq@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+65 8338 8400",
    href: "tel:+6583388400",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/emmanuel-chang",
    href: "https://www.linkedin.com/in/emmanuel-chang",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Emmanuelchang2006",
    href: "https://github.com/Emmanuelchang2006",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xdajeayd", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">

        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
            Contact
          </h1>
          <p className="text-slate-600 max-w-xl leading-relaxed">
            For internships, part-time roles, or collaborative projects in
            cybersecurity, DFIR, and AI security. Response within 24 hours.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-8 sm:gap-10">

          {/* Contact details */}
          <div>
            <h2 className="text-sm font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Details
            </h2>
            <ul className="space-y-3">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-3"
                    >
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-slate-700 flex-shrink-0 mt-1 transition-colors" />
                      <div className="min-w-0">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                          {item.label}
                        </p>
                        <p className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors break-all">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-sm font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Send a message
            </h2>

            {formState === "success" ? (
              <div className="py-8 text-center border border-slate-200 rounded-md bg-white">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-base font-semibold text-slate-900 mb-1">Message sent</h3>
                <p className="text-sm text-slate-500 max-w-xs mx-auto">
                  I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-5 px-3 py-1.5 text-sm text-slate-700 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-slate-500 transition-colors"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="internship">Internship</option>
                    <option value="parttime">Part-time role</option>
                    <option value="collaboration">Project collaboration</option>
                    <option value="general">General enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity, project, or your question."
                    className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 resize-none transition-colors"
                  />
                </div>

                {formState === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-700">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {formState === "submitting" ? (
                    <>
                      <svg className="animate-spin w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
