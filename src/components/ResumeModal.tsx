import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Briefcase, Mail, MapPin, Award } from 'lucide-react';
import { personalInfo, educationData, certificationsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md transition-opacity animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0a1226] border border-blue-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="text-blue-400" size={20} />
            <h3 className="text-lg font-bold text-white tracking-tight">
              Curriculum Vitae — Shiva Rajput
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/final.pdf"
              download="Shiva_Rajput_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              <Download size={14} /> Download PDF
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Paper style inner preview */}
        <div className="bg-[#070d1e] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 text-sm">
          {/* Top Info */}
          <div className="border-b border-slate-800/80 pb-6">
            <h1 className="text-2xl font-extrabold text-white tracking-tight">SHIVA RAJPUT</h1>
            <p className="text-sm text-cyan-400 font-mono mt-1">
              Java Full-Stack Developer · MCA Student · Software Engineer
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} className="text-blue-400" /> {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail size={13} className="text-blue-400" /> {personalInfo.email}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-blue-400">📞</span> 8218078418
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={13} className="text-blue-400" /> Immediate Availability
              </span>
            </div>
          </div>

          {/* Professional Profile */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
              Professional Profile
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Dedicated and disciplined MCA candidate with solid foundations in Java, Object-Oriented Programming, Data Structures & Algorithms, and relational database systems. Hands-on experience developing modular full-stack applications with Spring Boot, MongoDB, MySQL, and modern web interfaces. Passionate about solving real-world business bottlenecks through clean, reliable code.
            </p>
          </div>

          {/* Technical Skills Matrix */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
              Technical Skillset
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-slate-100 block mb-1">Languages & Core:</strong>
                Java (OOP, Collections, Multithreading), DSA, Python Fundamentals, JavaScript (ES6+).
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-slate-100 block mb-1">Backend & Frameworks:</strong>
                Spring Boot, RESTful APIs, Spring Security, JWT, MVC Pattern.
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-slate-100 block mb-1">Databases:</strong>
                MySQL (Relational, ACID, Joins, Normalization), MongoDB (NoSQL, Mongoose).
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-slate-100 block mb-1">Tools & Platforms:</strong>
                Git, GitHub, VS Code, Eclipse IDE, Postman, Vite, Bootstrap, Tailwind CSS.
              </div>
            </div>
          </div>

          {/* Featured Academic & Practical Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-3">
              Key Engineering Projects
            </h4>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500/50 pl-3">
                <div className="flex justify-between items-baseline">
                  <strong className="text-white text-sm">Hostel Management System</strong>
                  <span className="text-[11px] font-mono text-cyan-400">Java · Spring Boot · MongoDB · Bootstrap</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Engineered institutional portal supporting room reservation workflows, automated vacancy calculation, student complaint ticketing, and digital fee receipts.
                </p>
              </div>

              <div className="border-l-2 border-cyan-500/50 pl-3">
                <div className="flex justify-between items-baseline">
                  <strong className="text-white text-sm">ScamShield – AI Scam Risk Detection</strong>
                  <span className="text-[11px] font-mono text-cyan-400">Java · Spring Boot · React · AI API · JWT</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Developed multi-vector threat analyzer inspecting SMS, suspicious emails, and phishing URLs with explainable risk indicators and token-secured REST services.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
              <GraduationCap size={15} /> Education
            </h4>
            <div className="space-y-2">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="text-slate-100 font-semibold">{edu.degree}</span>
                    <span className="text-slate-400 block">{edu.institution}</span>
                  </div>
                  <span className="font-mono text-cyan-400">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Certifications */}
          <div>
            <h4 className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
              <Award size={15} /> Certifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {certificationsData.map((c) => (
                <div key={c.id} className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-blue-400 shrink-0" />
                  <span>
                    <strong className="text-slate-200">{c.title}</strong> — {c.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            Need a custom PDF format or reference contact? Feel free to reach out.
          </p>
          <a
            href="/final.pdf"
            download="Shiva_Rajput_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 transition-transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/25"
          >
            <Download size={15} /> Download PDF Version
          </a>
        </div>
      </div>
    </div>
  );
};
