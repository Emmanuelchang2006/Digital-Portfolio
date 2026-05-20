"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    value: "www.linkedin.com/in/emmanuel-chang",
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
    <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-900 min-h-screen overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-cyan-500 rounded-full blur-3xl opacity-[0.08] pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-[0.10] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] bg-cyan-600 rounded-full blur-3xl opacity-[0.07] pointer-events-none" />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Get In Touch</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Interested in working together or have a question? Feel free to reach out. I&apos;d love to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Contact Details ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300">
              <h2 className="text-lg font-bold text-white mb-5">Contact Details</h2>
              <div className="space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-cyan-900/30 group-hover:border-cyan-700/40 transition-all duration-200">
                        <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-200" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors duration-200 break-all">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability card */}
            <div className="relative bg-white/5 backdrop-blur-md rounded-2xl border border-cyan-500/30 p-6 overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/[0.04] pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-white">Currently Available</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I&apos;m open to internship opportunities, part-time roles, and collaborative
                  cybersecurity, cloud security, or AI &amp; ML engineering projects.
                </p>
                <p className="text-slate-500 text-xs mt-3">Response time: within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300">
              <h2 className="text-lg font-bold text-white mb-6">Send a Message</h2>

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 className="w-14 h-14 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Thanks for reaching out. Emmanuel will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-6 px-5 py-2.5 bg-white/5 text-white text-sm font-medium rounded-xl hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/40 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/40 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-800/80 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/40 transition-all duration-200"
                    >
                      <option value="" disabled className="bg-slate-800 text-slate-500">Select a subject</option>
                      <option value="internship" className="bg-slate-800">Internship Opportunity</option>
                      <option value="parttime" className="bg-slate-800">Part-time Role</option>
                      <option value="collaboration" className="bg-slate-800">Project Collaboration</option>
                      <option value="general" className="bg-slate-800">General Enquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity, project, or your question..."
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/40 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Error state */}
                  {formState === "error" && (
                    <div className="flex items-center gap-2 p-3 bg-red-950/50 border border-red-800/50 rounded-xl text-sm text-red-400">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or email directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-700/70 border border-cyan-600/40 text-white text-sm font-semibold rounded-xl hover:bg-cyan-600/80 hover:border-cyan-500/60 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-cyan-500/20"
                  >
                    {formState === "submitting" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
