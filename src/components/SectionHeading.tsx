import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  copy,
  align = 'left',
}) => {
  return (
    <div className={`mb-12 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-semibold">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
        {title}
      </h2>
      {copy && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
          {copy}
        </p>
      )}
    </div>
  );
};
