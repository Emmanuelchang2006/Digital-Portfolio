"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ShieldCheck, ClipboardList, Wrench, CheckCircle2, AlertTriangle } from "lucide-react";

/* Exported types (consumed by the experience page) */
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

const TAG_CLS: Record<FindingTag, string> = {
  CRITICAL:    "text-red-700     bg-red-50     border-red-200",
  HIGH:        "text-orange-700  bg-orange-50  border-orange-200",
  MEDIUM:      "text-amber-700   bg-amber-50   border-amber-200",
  LOW:         "text-blue-700    bg-blue-50    border-blue-200",
  INFO:        "text-slate-700   bg-slate-50   border-slate-200",
  FEATURE:     "text-blue-700    bg-blue-50    border-blue-200",
  REQUIREMENT: "text-indigo-700  bg-indigo-50  border-indigo-200",
  TECHNIQUE:   "text-slate-700   bg-slate-50   border-slate-200",
  CONTROL:     "text-emerald-700 bg-emerald-50 border-emerald-200",
  NETWORK:     "text-slate-700   bg-slate-50   border-slate-200",
  PROCESS:     "text-slate-700   bg-slate-50   border-slate-200",
  REGISTRY:    "text-slate-700   bg-slate-50   border-slate-200",
  FILE:        "text-slate-700   bg-slate-50   border-slate-200",
};

const CLASS_DOT: Record<Classification, string> = {
  CONFIDENTIAL: "bg-red-400",
  RESTRICTED:   "bg-amber-400",
  INTERNAL:     "bg-blue-400",
};

function SectionHead({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
      <span className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center">
        <Icon className="w-3 h-3 text-blue-600" />
      </span>
      <h3 className="text-sm font-semibold text-slate-900 tracking-tight">{title}</h3>
    </div>
  );
}

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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-slate-950/70 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <motion.article
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative w-full sm:max-w-2xl max-h-[94vh] sm:max-h-[88vh] flex flex-col bg-white sm:rounded-2xl rounded-t-2xl border border-slate-200 overflow-hidden shadow-2xl shadow-blue-900/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dark navy header strip (case-file top band) */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300 px-5 py-3 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-md shadow-blue-500/30 flex-shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
            </span>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] min-w-0">
              <span className={`w-1.5 h-1.5 rounded-full ${CLASS_DOT[report.classification]}`} />
              <span className="text-slate-200">{report.classification}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400 truncate">{report.refId}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-md flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Report header */}
        <div className="px-5 sm:px-7 pt-6 pb-5 border-b border-slate-200 bg-gradient-to-b from-blue-50/40 to-white">
          <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-700 mb-2">
            {project.type} · {project.period}
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 leading-snug tracking-tight">
            {project.title}
          </h2>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 mt-5 text-sm">
            <div>
              <dt className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Ref</dt>
              <dd className="text-slate-800 mt-0.5 font-mono">{report.refId}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Analyst</dt>
              <dd className="text-slate-800 mt-0.5">{report.analyst}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Date</dt>
              <dd className="text-slate-800 mt-0.5">{report.date}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Status</dt>
              <dd className="text-slate-800 mt-0.5">{report.status}</dd>
            </div>
          </dl>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-5 sm:px-7 py-6 space-y-8 bg-white">
          <section>
            <SectionHead icon={ClipboardList} title="Overview" />
            <p className="text-[15px] text-slate-600 leading-relaxed">
              {report.executiveSummary}
            </p>
          </section>

          <section>
            <SectionHead icon={AlertTriangle} title="Findings" />
            <div className="space-y-2">
              {report.iocs.map((item, i) => (
                <div
                  key={i}
                  className="border border-slate-200 rounded-xl p-3 flex items-start gap-3 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
                >
                  <span
                    className={`flex-shrink-0 font-mono text-[10px] font-medium px-1.5 py-0.5 rounded border ${
                      TAG_CLS[item.tag] ?? TAG_CLS.INFO
                    }`}
                  >
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
            <SectionHead icon={Wrench} title="Methodology" />
            <ul className="space-y-1.5 text-sm text-slate-600">
              {report.methodology.map((step, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-500 select-none flex-shrink-0">·</span>
                  <span>
                    <span className="font-medium text-slate-800">{step.tool}</span>
                    {step.detail && <>, {step.detail}</>}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionHead icon={CheckCircle2} title="Impact & Outcome" />
            <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-4">
              <p className="text-[15px] text-slate-700 leading-relaxed">
                {report.outcome}
              </p>
            </div>
          </section>
        </div>
      </motion.article>
    </motion.div>
  );
}
