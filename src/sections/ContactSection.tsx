import React, { useState, FormEvent } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Ready for integration; prepare mailto link as reliable bridge
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#050a17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="08 / Get In Touch"
          title="Let's Connect & Build"
          copy="Whether you have an internship opportunity, full-stack software role, or technical inquiry, my inbox is open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#091124] border border-blue-500/25 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-cyan-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={12} className="text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={12} /> Copy Email
                    </>
                  )}
                </button>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Official Email
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors font-mono break-all"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Usually responds within 24 hours. Preferred channel for recruiter correspondence.
              </p>
            </div>

            {/* Social & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#091124] border border-slate-800 hover:border-cyan-500/40 transition-colors block"
              >
                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                  <Github size={16} />
                  <span className="text-xs font-mono font-bold text-white">GitHub</span>
                </div>
                <p className="text-[11px] font-mono text-slate-400">@{personalInfo.githubUsername}</p>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#091124] border border-slate-800 hover:border-blue-500/40 transition-colors block"
              >
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <Linkedin size={16} />
                  <span className="text-xs font-mono font-bold text-white">LinkedIn</span>
                </div>
                <p className="text-[11px] font-mono text-slate-400">Shiva Rajput</p>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#091124] border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Location
                  </span>
                  <span className="text-xs text-slate-200 font-medium">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#091124] border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-800/80 text-blue-400">
                  <span className="text-sm">📞</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href="tel:8218078418"
                    className="text-xs text-slate-200 font-medium font-mono hover:text-cyan-400 transition-colors"
                  >
                    +91 8218078418
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#091124] border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Fill in the details below. All fields validated client-side.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-blue-950/40 border border-blue-500/30 text-slate-200 space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <CheckCircle2 size={18} />
                    <span>Message Prepared!</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Because this is a static frontend deployment, you can immediately send your message directly to Shiva's inbox using your preferred email client:
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 shadow-md transition-all hover:scale-105"
                    >
                      <Mail size={14} /> Open in Email App
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 rounded-xl font-mono text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                      >
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Tech Recruiter"
                        className={`w-full px-4 py-3 rounded-xl bg-[#060b18] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500/60 focus:border-rose-500'
                            : 'border-slate-800 focus:border-blue-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-rose-400 font-mono flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                      >
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#060b18] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500/60 focus:border-rose-500'
                            : 'border-slate-800 focus:border-blue-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-400 font-mono flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Subject / Topic <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Developer Internship Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-[#060b18] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-rose-400 font-mono flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, technical challenge, or question..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#060b18] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-rose-400 font-mono flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
                    >
                      <Send size={14} /> Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
