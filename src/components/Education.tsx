import React from "react";
import { portfolioData } from "../data/portfolioData";
import { BookOpen } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-2">
            <span>04</span>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="uppercase tracking-widest text-[11px] font-semibold">Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-400 max-w-xl font-normal">
            Undergraduate academic studies in Information Technology with specialized coursework in software systems and algorithms.
          </p>
        </div>

        {/* Academic Ledger */}
        <div className="space-y-8 max-w-4xl">
          {/* Degree 1: SLIIT */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-300 dark:border-white/[0.08] shadow-md dark:shadow-xl backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-white/[0.06] mb-4">
              <div>
                <span className="text-xs font-mono text-cyan-800 dark:text-cyan-400 font-bold">SLIIT · Sri Lanka</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight mt-0.5">
                  BSc (Hons) in Information Technology
                </h3>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-slate-600 dark:text-slate-400 font-semibold">
                <span className="text-cyan-800 dark:text-cyan-300 font-bold block">Undergraduate</span>
                <span>2024 – Present</span>
              </div>
            </div>

            <p className="text-sm font-semibold text-slate-800 dark:text-slate-300 mb-6">
              Sri Lanka Institute of Information Technology (SLIIT)
            </p>

            {/* Relevant Coursework */}
            <div>
              <div className="text-xs font-mono text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
                <BookOpen className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
                <span>Relevant Coursework</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Object-Oriented Programming",
                  "Data Structures and Algorithms",
                  "Database Design and Development",
                  "Software Engineering",
                  "Web and Mobile Development",
                ].map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-300 dark:border-white/[0.05] text-xs font-semibold text-slate-900 dark:text-slate-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Degree 2: GCE A/L */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-300 dark:border-white/[0.08] shadow-md dark:shadow-xl backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-white/[0.06] mb-3">
              <div>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-semibold">Secondary Education</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white tracking-tight mt-0.5">
                  GCE Advanced Level – Commerce Stream
                </h3>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-slate-600 dark:text-slate-400 font-semibold">
                <span>2023 (Examination held in 2024)</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 leading-relaxed font-normal">
              Completed Advanced Level secondary education in the Commerce stream, providing foundational training in analytical thinking and business workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
