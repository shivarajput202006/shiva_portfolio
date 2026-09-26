import React from 'react';
import { Download, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-24 bg-[#060b18] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#091530] via-[#081229] to-[#050a18] border border-blue-500/30 p-8 sm:p-12 shadow-2xl">
          {/* Ambient Glow */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-500/15 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/15 text-cyan-400 border border-blue-500/25">
                <FileText size={13} />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Interested in working together?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Download my comprehensive resume detailing academic achievements in MCA, verified certifications in Java and Data Quality, full-stack project implementations, and problem-solving credentials.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-cyan-400" /> MCA Candidate
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-cyan-400" /> Java & Spring Boot
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-cyan-400" /> Open to Internships / Full-Time
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={personalInfo.resumeUrl}
                download="Shiva_Rajput_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 text-center"
              >
                <Download size={15} />
                Download Resume PDF
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5 text-center"
              >
                <Eye size={15} />
                View Interactive Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
