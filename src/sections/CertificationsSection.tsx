import React, { useState } from 'react';
import { Award, ShieldCheck, X } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { certificationsData } from '../data/portfolioData';
import { CertificateItem } from '../types/portfolio';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certifications" className="py-24 bg-[#050a17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 / Credentials"
          title="Verified Certifications & Learning"
          copy="Industry-recognized courses and corporate job simulations validating Java development, data analysis, and professional communication."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="group p-6 rounded-2xl bg-[#091124] border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
            >
              <div>
                {/* Header: Code & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">
                    CERT #{cert.code}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/50 transition-all">
                    <Award size={18} />
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 font-semibold mb-3">
                  Issued by {cert.issuer}
                </p>

                {/* Specialization / Scope */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {cert.specialization}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/70">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View verification info */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <ShieldCheck size={14} /> Completed
                </span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 underline underline-offset-4"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Details Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-md bg-[#0a1226] border border-blue-500/30 rounded-2xl shadow-2xl p-6 text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              aria-label="Close"
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-xs">
              <Award size={16} /> Verified Coursework Credential
            </div>

            <h3 className="text-xl font-bold text-white mb-1">{selectedCert.title}</h3>
            <p className="text-xs font-mono text-blue-400 mb-4">Issuer: {selectedCert.issuer}</p>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2 mb-5">
              <strong className="text-white block font-mono text-xs">Course Focus:</strong>
              <p>{selectedCert.specialization}</p>
              <div className="pt-2 border-t border-slate-800">
                <strong className="text-white block font-mono text-xs mb-1">Key Competencies:</strong>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
