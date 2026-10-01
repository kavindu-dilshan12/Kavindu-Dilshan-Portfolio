import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Github, Linkedin, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-300 dark:border-white/[0.06] py-12 relative text-slate-700 dark:text-slate-400 bg-slate-100/95 dark:bg-[#050811]/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-300/80 dark:border-white/[0.06]">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/10 flex items-center justify-center shadow-xs">
              <span className="font-mono font-bold text-xs text-cyan-700 dark:text-cyan-300">
                {portfolioData.personal.monogram}
              </span>
            </div>
            <div>
              <span className="text-sm font-bold text-slate-950 dark:text-white block">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] text-slate-600 dark:text-slate-400 font-mono font-medium">
                IT Undergraduate · SLIIT
              </span>
            </div>
          </div>

          {/* Quiet Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-700 dark:text-slate-400 font-medium">
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials & Top Action */}
          <div className="flex items-center gap-2">
            <a
              href={portfolioData.personal.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-400 border border-slate-300 dark:border-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-white/10 transition-colors ml-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Year */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-slate-600 dark:text-slate-400 font-mono">
          <p>© {currentYear} {portfolioData.personal.name}. All rights reserved.</p>
          <p>
            Designed &amp; Handcrafted with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
