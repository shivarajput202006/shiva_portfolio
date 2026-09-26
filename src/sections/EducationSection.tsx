import React from 'react';
import { Calendar, MapPin, BookOpen } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { educationData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#060b18] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 / Academic Foundation"
          title="Education & Continuous Learning"
          copy="Structured academic training combining core computer science fundamentals with advanced full-stack software development."
        />

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-blue-500/25 space-y-12 my-8">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Animated Timeline Glowing Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#060b18] border-2 border-blue-500 flex items-center justify-center group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300 shadow-md shadow-blue-500/30">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Education Content Box */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#091124] border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                    <Calendar size={12} /> {edu.period}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-medium px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1 mb-1">
                  {edu.degree}
                </h3>

                <p className="text-sm font-medium text-slate-300 flex items-center gap-1.5 mb-4">
                  <MapPin size={14} className="text-blue-400" /> {edu.institution}
                </p>

                {/* Course Highlights */}
                <div className="pt-4 border-t border-slate-800/80">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                    <BookOpen size={13} className="text-cyan-400" /> Academic Focus & Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 font-mono text-xs">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
