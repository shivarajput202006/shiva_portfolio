import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a1226] border border-blue-500/25 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 border border-slate-700/40 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-blue-400 font-semibold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
            PROJECT {project.number}
          </span>
          <span className="text-xs text-slate-400 font-mono">{project.subtitle}</span>
        </div>

        <h3
          id="modal-project-title"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
        >
          {project.title}
        </h3>

        {/* Graphic Header / Banner */}
        <div className="relative mb-6 rounded-xl overflow-hidden border border-slate-800 bg-gradient-to-br from-blue-950/40 via-slate-900 to-cyan-950/30 p-6 flex flex-col justify-between min-h-[140px]">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Cpu size={14} className="text-cyan-400" /> Java Full-Stack Architecture
            </span>
            <span className="text-blue-400 font-semibold">Production Ready</span>
          </div>

          <div className="my-3">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-slate-300 bg-slate-800/70 px-2 py-0.5 rounded border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem Solved */}
        <div className="mb-6">
          <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <ShieldCheck size={14} /> Problem Solved
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
            {project.problemSolved}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2.5">
            <Layers size={14} /> Key Architecture & Features
          </h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Role & Contribution */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
            Role & Engineering Responsibilities
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.role}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 transition-all hover:-translate-y-0.5"
            >
              <Github size={15} /> Source Code
            </a>
            <a
              href={project.liveUrl || '#contact'}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 font-bold transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
            >
              <ExternalLink size={15} /> Live Demo / Inquire
            </a>
          </div>
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-slate-200 transition-colors font-mono"
          >
            Close Esc
          </button>
        </div>
      </div>
    </div>
  );
};
