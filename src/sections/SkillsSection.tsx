import React, { useState } from 'react';
import {
  Code2,
  Boxes,
  Binary,
  Server,
  Network,
  FileCode2,
  Code,
  LayoutGrid,
  Database,
  DatabaseBackup,
  GitBranch,
  Terminal,
  FileCode,
  CheckCircle,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { skillsData } from '../data/portfolioData';

// Map icon names to Lucide icons
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Boxes,
  Binary,
  Server,
  Network,
  FileCode2,
  Code,
  LayoutGrid,
  Database,
  DatabaseBackup,
  GitBranch,
  Terminal,
  FileCode,
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'backend' | 'frontend' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'core', label: 'Core & DSA' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'tools', label: 'Database & Tools' },
  ] as const;

  const filteredSkills = skillsData.filter((skill) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'tools') return skill.category === 'tools' || skill.category === 'backend' && (skill.id === 'mysql' || skill.id === 'mongodb');
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="py-24 bg-[#060b18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            eyebrow="02 / Technical Toolkit"
            title="Skills & Engineering Proficiency"
            copy="A structured dashboard of core languages, frameworks, databases, and workflow utilities I leverage every day."
          />

          {/* Interactive Category Segmented Tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-900/90 rounded-xl border border-slate-800 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const Icon = iconMap[skill.iconName] || Code2;
            return (
              <div
                key={skill.id}
                className="group relative p-5 rounded-2xl bg-[#091124] border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top: Icon & Level Tag */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/15 transition-all">
                      <Icon size={20} />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        {skill.level}
                      </span>
                      <span className="font-mono text-xs font-bold text-cyan-400">
                        {skill.value}%
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-1.5">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {skill.description}
                  </p>
                </div>

                {/* Animated Progress Bar */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Competency Summary */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#071022] via-[#09152f] to-[#071022] border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-cyan-400 shrink-0" size={20} />
            <p className="text-xs sm:text-sm text-slate-300">
              Continuously building depth: active on <strong className="text-white">LeetCode</strong> for DSA & exploring advanced <strong className="text-white">Spring Boot microservices</strong>.
            </p>
          </div>
          <a
            href="https://github.com/shivarajput202006"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
          >
            Review GitHub Commits →
          </a>
        </div>
      </div>
    </section>
  );
};
