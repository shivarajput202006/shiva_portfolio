import React from 'react';
import { MapPin, Mail, Briefcase, GraduationCap, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#050a17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 / About Me"
          title="Curious Mind. Engineering Discipline."
          copy="A dedicated MCA student focused on building dependable backend systems and full-stack web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="p-5 rounded-2xl bg-[#091124] border border-blue-500/20 text-slate-200 shadow-lg shadow-black/20 font-medium">
              "{personalInfo.aboutText}"
            </p>

            <p className="text-slate-400 text-sm sm:text-base">
              My engineering philosophy revolves around clarity and robustness. Whether crafting
              object-oriented domain models in Java, implementing relational constraints in MySQL,
              or designing modular REST endpoints with Spring Boot, I prioritize maintainability
              and real-world utility over temporary shortcuts.
            </p>

            <p className="text-slate-400 text-sm sm:text-base">
              I am actively preparing for software development internships and entry-level positions
              where I can bring fresh energy, strong foundational knowledge, and an eager appetite
              for learning from seasoned engineering teams.
            </p>

            {/* Core Values checklist */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>Clean OOP Principles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span>REST API Best Practices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>Database Normalization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span>Continuous Learning Mindset</span>
              </div>
            </div>
          </div>

          {/* Quick Details Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Card 1: Role */}
            <div className="p-5 rounded-2xl bg-[#081024] border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Briefcase size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                    Current Focus & Role
                  </span>
                  <strong className="text-white text-sm">MCA Student / Java Developer</strong>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Specializing in backend services, Spring Boot, Java collections, and full-stack interfaces.
              </p>
            </div>

            {/* Card 2: Location */}
            <div className="p-5 rounded-2xl bg-[#081024] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                    Location
                  </span>
                  <strong className="text-white text-sm">India (Agra, Uttar Pradesh)</strong>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Open to on-site, hybrid, and remote opportunities across India and globally.
              </p>
            </div>

            {/* Card 3: Email */}
            <div className="p-5 rounded-2xl bg-[#081024] border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                    Direct Contact
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-white text-xs sm:text-sm hover:text-cyan-400 transition-colors font-mono break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Quickest way to reach out for interviews, internships, and technical collaborations.
              </p>
            </div>

            {/* Card 4: Education Preview */}
            <div className="p-5 rounded-2xl bg-[#081024] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                    Academic Pathway
                  </span>
                  <strong className="text-white text-sm">MCA (Pursuing) · BCA Graduated</strong>
                </div>
              </div>
              <div className="text-xs text-slate-400 mt-2 space-y-1">
                <p className="text-slate-300">
                  <span className="text-cyan-400 font-mono text-[10px]">MCA:</span> Hindustan College of Science & Technology, Mathura
                </p>
                <div className="flex items-center justify-between">
                  <span>
                    <span className="text-blue-400 font-mono text-[10px]">BCA:</span> Dr. MPS Group of Institutions, Agra
                  </span>
                  <a href="#education" className="text-cyan-400 hover:underline font-mono inline-flex items-center gap-1">
                    Timeline <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
