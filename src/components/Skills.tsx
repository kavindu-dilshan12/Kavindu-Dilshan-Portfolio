import React from "react";
import { portfolioData, SkillCategory } from "../data/portfolioData";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-2">
            <span>02</span>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="uppercase tracking-widest text-[11px] font-semibold">Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-400 max-w-xl font-normal">
            Practical skills developed through coursework at SLIIT, hands-on full-stack development, and algorithmic problem solving.
          </p>
        </div>

        {/* Artisanal Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((category: SkillCategory, idx: number) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-300 dark:border-white/[0.08] hover:border-cyan-600 dark:hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.06] mb-4">
                  <h3 className="text-sm font-bold text-slate-950 dark:text-white tracking-tight group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-xs text-slate-700 dark:text-slate-400 mb-5 leading-relaxed font-normal">
                  {category.description}
                </p>

                {/* Unboxed / Tactile Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-900 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/[0.08] hover:border-cyan-600 dark:hover:border-cyan-400 transition-colors shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-200 dark:border-white/[0.04] text-[11px] font-mono text-slate-600 dark:text-slate-500 flex items-center justify-between font-medium">
                <span>{category.skills.length} core competencies</span>
                <span className="text-cyan-700 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
            Focused on clean architecture, object-oriented principles, and secure API implementations.
          </p>
        </div>
      </div>
    </section>
  );
};
