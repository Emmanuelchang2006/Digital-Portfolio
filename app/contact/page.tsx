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
    <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">

      <div className="relative max-w-5xl mx-auto">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">Get In Touch</h1>
          <p className="text-slate-500 max-w-xl mx-auto">
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
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/70 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-5">Contact Details</h2>
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
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-200">
                        <Icon className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors duration-200" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors duration-200 break-all">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-green-50 rounded-2xl border border-green-200 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-green-800">Currently Available</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                I&apos;m open to internship opportunities, part-time roles, and collaborative
                cybersecurity, cloud security, or AI &amp; ML engineering projects.
              </p>
              <p className="text-slate-400 text-xs mt-3">Response time: within 24 hours</p>
            </div>
          </motion.div>

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/70 p-8 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-6">Send a Message</h2>

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 className="w-14 h-14 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Thanks for reaching out. Emmanuel will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-6 px-5 py-2.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-200 border border-slate-200 hover:border-slate-300 transition-all duration-200"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
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
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
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
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-200"
                    >
                      <option value="" disabled className="text-slate-400">Select a subject</option>
                      <option value="internship">Internship Opportunity</option>
                      <option value="parttime">Part-time Role</option>
                      <option value="collaboration">Project Collaboration</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Error state */}
                  {formState === "error" && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or email directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
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
