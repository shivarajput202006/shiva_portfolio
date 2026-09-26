import React, { useState } from 'react';
import { ChevronRight, Milestone } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { journeyData } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(7);

  return (
    <section id="journey" className="py-24 bg-[#060b18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="06 / Progression"
          title="The Developer Journey"
          copy="A deliberate trajectory from mastering Java fundamentals to constructing end-to-end full-stack architectures."
        />

        {/* Interactive Step Navigator for desktop and tablets */}
        <div className="hidden lg:grid grid-cols-7 gap-2 mb-10 p-2 rounded-2xl bg-slate-900/60 border border-slate-800">
          {journeyData.map((item) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`p-3 rounded-xl text-left transition-all ${
                activeStep === item.step
                  ? 'bg-blue-600/20 border border-blue-500/40 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                <span>STAGE 0{item.step}</span>
                {item.step === 7 && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
              </div>
              <p className="text-xs font-bold truncate">{item.title}</p>
            </button>
          ))}
        </div>

        {/* Selected Step Spotlight Banner */}
        {journeyData.find((j) => j.step === activeStep) && (
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#081229] via-[#091530] to-[#050b1a] border border-blue-500/30 shadow-2xl">
            {(() => {
              const current = journeyData.find((j) => j.step === activeStep)!;
              return (
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                      <Milestone size={15} />
                      <span>PHASE 0{current.step} — {current.period}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {current.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {current.description}
                    </p>
                  </div>

                  <div className="shrink-0 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Core Technologies Involved:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {current.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-cyan-300 font-mono text-xs border border-blue-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Vertical Step Sequence List */}
        <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-8 space-y-8">
          {journeyData.map((item) => (
            <div
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`relative cursor-pointer group transition-all duration-300 ${
                activeStep === item.step ? 'opacity-100' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  activeStep === item.step
                    ? 'bg-cyan-400 border-white shadow-lg shadow-cyan-400/50 scale-125'
                    : 'bg-[#060b18] border-slate-600 group-hover:border-cyan-400'
                }`}
              />

              <div className="p-4 sm:p-5 rounded-xl bg-[#091124] border border-slate-800/80 group-hover:border-blue-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] text-cyan-400 font-bold">
                      0{item.step}
                    </span>
                    <span className="text-xs font-mono text-slate-400">· {item.period}</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 text-xs font-mono text-blue-400 group-hover:text-cyan-300">
                  <span>Explore</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
