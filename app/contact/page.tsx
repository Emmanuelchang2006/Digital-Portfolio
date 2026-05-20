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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("success");
  }

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-[#080d18] min-h-screen">
      <div className="max-w-5xl mx-auto">

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
            <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-sm p-6 hover:border-slate-700 transition-all duration-300">
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
                      <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-900/40 transition-colors duration-200">
                        <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-200" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm font-medium text-slate-300 group-hover:text-blue-400 transition-colors duration-200 break-all">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Currently Available</span>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                I&apos;m open to internship opportunities, part-time roles, and collaborative
                cybersecurity, cloud security, or AI &amp; ML engineering projects.
              </p>
              <p className="text-blue-200 text-xs mt-3">Response time: within 24 hours</p>
            </div>
          </motion.div>

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-sm p-8 hover:border-slate-700 transition-all duration-300">
              <h2 className="text-lg font-bold text-white mb-6">Send a Message</h2>

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 className="w-14 h-14 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Thanks for reaching out, Emmanuel will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setFormState("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 px-5 py-2.5 bg-slate-800 text-white text-sm font-medium rounded-xl hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
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
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-blue-500/25"
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
