import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Info,
  CheckCircle2,
  ArrowUpRight,
  Shield,
  Home,
  GraduationCap,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'backend'>('all');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return p.technologies.includes('React.js') || p.technologies.includes('Bootstrap');
    if (filter === 'backend') return p.technologies.includes('Spring Boot') || p.technologies.includes('MySQL');
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-[#050914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            eyebrow="03 / Selected Work"
            title="Projects Engineered With Purpose"
            copy="Real-world systems constructed with modular Java architecture, secure data persistence, and modern web experiences."
          />

          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('fullstack')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === 'fullstack'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Full-Stack
              </button>
              <button
                onClick={() => setFilter('backend')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === 'backend'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Backend
              </button>
            </div>

            <a
              href="https://github.com/shivarajput202006"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-colors"
            >
              <Github size={14} /> GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isScamShield = project.id === 'scamshield-ai';
            const isHostel = project.id === 'hostel-management';

            return (
              <article
                key={project.id}
                className="group relative rounded-3xl bg-[#081024] border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Mockup Header */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-slate-900 via-[#07132a] to-[#040916] p-6 sm:p-8 flex flex-col justify-between border-b border-slate-800/80">
                  {/* Subtle Grid overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-15 pointer-events-none group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />

                  {/* Top Bar: Number & Type */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                      {project.number}
                    </span>

                    <span className="text-[11px] font-mono text-slate-400">
                      {isScamShield ? 'AI Security Platform' : isHostel ? 'Management Suite' : 'Database Application'}
                    </span>
                  </div>

                  {/* Visual Centerpiece Iconography */}
                  <div className="relative z-10 my-auto flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-cyan-400 shadow-inner group-hover:scale-110 group-hover:border-cyan-400/60 transition-transform duration-300">
                      {isScamShield ? (
                        <Shield size={28} />
                      ) : isHostel ? (
                        <Home size={28} />
                      ) : (
                        <GraduationCap size={28} />
                      )}
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Quick Feature Badges preview */}
                  <div className="relative z-10 flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Key Highlights bullet list */}
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.liveUrl || '#contact'}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 transition-all shadow-md shadow-blue-500/20 hover:-translate-y-0.5"
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        <Github size={13} /> Code
                      </a>
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4"
                    >
                      <Info size={13} /> View Details
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
