import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Terminal,
  Server,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  // Typing animation for developer titles
  const roles = personalInfo.typingRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < target.length) {
          setCurrentText(target.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(target.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradients & Circuit Grid Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.25) 0%, transparent 55%), radial-gradient(circle at 85% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 45%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Animated Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium text-emerald-400 tracking-wide">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Greeting and Role */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Shiva Rajput
              </span>
            </h1>

            <p className="text-base sm:text-xl font-mono text-cyan-400/90 font-medium mb-5 tracking-tight">
              MCA Student <span className="text-slate-600">|</span> Java Full-Stack Developer{' '}
              <span className="text-slate-600">|</span> Software Developer
            </p>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
              {personalInfo.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
              >
                View My Projects
                <ArrowDown size={15} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/50 transition-all hover:-translate-y-0.5"
              >
                Contact Me
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Shiva_Rajput_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 border border-slate-800 transition-all"
                title="Download Shiva Rajput Resume PDF"
              >
                <Download size={15} />
                Download Resume
              </a>
            </div>

            {/* Social Icons & Location Meta */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <Github size={16} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Shiva Rajput"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
                >
                  <Mail size={16} />
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={14} className="text-blue-400" />
                <span>Agra, India</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-slate-400">
                <Code2 size={14} className="text-cyan-400" />
                <span>Spring Boot · Java 21 · MongoDB</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Developer Terminal Card + Avatar visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Backlight Ring */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

            {/* Developer Console Card */}
            <div className="relative w-full max-w-md bg-[#0a1226]/90 border border-blue-500/25 rounded-2xl shadow-2xl p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-500 ml-2">
                    shiva.developer.java
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400/90">
                  <Terminal size={13} />
                  <span>v2026.0</span>
                </div>
              </div>

              {/* Developer Profile Header inside Card */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-blue-400 p-[2px] shadow-lg shadow-blue-500/20">
                    <div className="w-full h-full bg-[#070e20] rounded-[14px] flex items-center justify-center font-bold text-xl text-white font-mono">
                      SR
                    </div>
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0a1226]" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Shiva Rajput</h3>
                  {/* Dynamic Typing Title */}
                  <div className="flex items-center gap-1 text-xs font-mono text-cyan-400 font-semibold min-h-[20px]">
                    <span>&gt; {currentText}</span>
                    <span className="inline-block w-1.5 h-3.5 bg-cyan-400 animate-pulse" />
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    MCA Student @ HCST Mathura
                  </p>
                </div>
              </div>

              {/* Code Snippet lines */}
              <div className="bg-[#050914] rounded-xl p-4 border border-slate-800/90 font-mono text-xs text-slate-300 space-y-1.5 overflow-x-auto">
                <div className="text-slate-500">// Core developer configuration</div>
                <p>
                  <span className="text-blue-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                  <span className="text-emerald-400">'Java'</span>,{' '}
                  <span className="text-emerald-400">'Spring Boot'</span>,{' '}
                  <span className="text-emerald-400">'MongoDB'</span>],
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">mindset:</span>{' '}
                  <span className="text-emerald-400">'Continuous Problem Solving'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">seeking:</span>{' '}
                  <span className="text-emerald-400">'Software Developer Internship / Role'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">deliver:</span>{' '}
                  <span className="text-amber-400">()</span> =&gt;{' '}
                  <span className="text-cyan-300">impactfulSoftware</span>
                </p>
                <p>&#125;;</p>
              </div>

              {/* Live Metric Pills */}
              <div className="grid grid-cols-3 gap-2.5 mt-4 text-center">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/70">
                  <span className="block text-base font-bold text-white font-mono">02+</span>
                  <span className="text-[10px] text-slate-400 font-mono">Systems Built</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/70">
                  <span className="block text-base font-bold text-cyan-400 font-mono">13+</span>
                  <span className="text-[10px] text-slate-400 font-mono">Tech Skills</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/70">
                  <span className="block text-base font-bold text-emerald-400 font-mono">08</span>
                  <span className="text-[10px] text-slate-400 font-mono">Certificates</span>
                </div>
              </div>

              {/* Quick resume view link */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Recruiter quick check</span>
                <button
                  onClick={onOpenResumeModal}
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
                >
                  Quick Resume Preview →
                </button>
              </div>
            </div>

            {/* Floating Tech Badges around visual */}
            <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#09152e] border border-blue-500/30 text-xs font-mono text-slate-200 shadow-xl shadow-black/40">
              <span className="text-amber-400">☕</span> Java 21
            </div>

            <div className="hidden sm:flex absolute -bottom-3 -right-3 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#09152e] border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-xl shadow-black/40">
              <Server size={13} className="text-cyan-400" /> Spring Boot
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
