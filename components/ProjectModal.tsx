"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

/* Exported types (used by the experience page) */
export type Classification = "CONFIDENTIAL" | "RESTRICTED" | "INTERNAL";
export type FindingTag =
  | "CRITICAL" | "HIGH" | "MEDIUM" | "LOW"
  | "FEATURE" | "REQUIREMENT" | "TECHNIQUE" | "CONTROL"
  | "NETWORK" | "PROCESS" | "REGISTRY" | "FILE" | "INFO";

export interface IOCFinding {
  tag: FindingTag;
  label: string;
  detail: string;
}
export interface MethodologyStep {
  tool: string;
  detail: string;
}
export interface ProjectReport {
  classification: Classification;
  refId: string;
  date: string;
  analyst: string;
  status: string;
  iocTitle: string;
  executiveSummary: string;
  iocs: IOCFinding[];
  methodology: MethodologyStep[];
  outcome: string;
}
export interface ModalProject {
  title: string;
  period: string;
  type: string;
  report: ProjectReport;
}

interface Props {
  project: ModalProject;
  onClose: () => void;
}

/* Restrained tag palette. All colours read as accents, not decoration. */
const TAG_CLS: Record<FindingTag, string> = {
  CRITICAL:    "text-red-700     bg-red-50     border-red-200",
  HIGH:        "text-orange-700  bg-orange-50  border-orange-200",
  MEDIUM:      "text-amber-700   bg-amber-50   border-amber-200",
  LOW:         "text-blue-700    bg-blue-50    border-blue-200",
  INFO:        "text-slate-700   bg-slate-50   border-slate-200",
  FEATURE:     "text-slate-700   bg-slate-50   border-slate-200",
  REQUIREMENT: "text-slate-700   bg-slate-50   border-slate-200",
  TECHNIQUE:   "text-slate-700   bg-slate-50   border-slate-200",
  CONTROL:     "text-emerald-700 bg-emerald-50 border-emerald-200",
  NETWORK:     "text-slate-700   bg-slate-50   border-slate-200",
  PROCESS:     "text-slate-700   bg-slate-50   border-slate-200",
  REGISTRY:    "text-slate-700   bg-slate-50   border-slate-200",
  FILE:        "text-slate-700   bg-slate-50   border-slate-200",
};

export default function ProjectModal({ project, onClose }: Props) {
  const { report } = project;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-slate-900/50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.18 }}
        className="relative w-full sm:max-w-2xl max-h-[94vh] sm:max-h-[88vh] flex flex-col bg-white sm:rounded-lg rounded-t-lg border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Classification bar. Restrained, single row. */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-slate-500 min-w-0">
            <span className="text-slate-900">{report.classification}</span>
            <span className="text-slate-300">/</span>
            <span className="truncate">{report.refId}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-md flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Header */}
        <div className="px-5 sm:px-7 pt-6 pb-5 border-b border-slate-200">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
            {project.type}, {project.period}
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 leading-snug tracking-tight">
            {project.title}
          </h2>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 mt-5 text-sm">
            <div>
              <dt className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Ref</dt>
              <dd className="text-slate-700">{report.refId}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Analyst</dt>
              <dd className="text-slate-700">{report.analyst}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Date</dt>
              <dd className="text-slate-700">{report.date}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Status</dt>
              <dd className="text-slate-700">{report.status}</dd>
            </div>
          </dl>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-5 sm:px-7 py-6 space-y-8">

          <section>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Overview</h3>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              {report.executiveSummary}
            </p>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Findings</h3>
            <div className="space-y-2">
              {report.iocs.map((item, i) => (
                <div key={i} className="border border-slate-200 rounded p-3 flex items-start gap-3">
                  <span className={`flex-shrink-0 font-mono text-[10px] font-medium px-1.5 py-0.5 rounded border ${TAG_CLS[item.tag] ?? TAG_CLS.INFO}`}>
                    {item.tag}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-900">{item.label}</p>
                    <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Methodology</h3>
            <ul className="space-y-1.5 text-sm text-slate-600">
              {report.methodology.map((step, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-slate-400 select-none flex-shrink-0">·</span>
                  <span>
                    <span className="font-medium text-slate-800">{step.tool}</span>
                    {step.detail && <>, {step.detail}</>}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Impact &amp; Outcome</h3>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              {report.outcome}
            </p>
          </section>

        </div>
      </motion.article>
    </motion.div>
  );
}
