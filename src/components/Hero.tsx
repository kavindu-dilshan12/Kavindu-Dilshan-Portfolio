import React from "react";
import { portfolioData } from "../data/portfolioData";
import { ProfileAvatar } from "./ProfileAvatar";
import { ArrowDown, Mail, Github, Linkedin, MapPin, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            {/* Live Status Kicker */}
            <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 font-mono mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-cyan-700 dark:text-cyan-300 font-medium">
                {portfolioData.personal.badgeText}
              </span>
              <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">{portfolioData.personal.location}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-4 text-balance">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 dark:from-white dark:via-slate-100 dark:to-cyan-300 bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 mb-6">
              {portfolioData.personal.heroSubtitle}
            </p>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-8 font-normal">
              {portfolioData.personal.heroIntro}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400 font-mono mb-8">
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
                SLIIT Undergraduate
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
                Java · Python · React
              </span>
            </div>

            {/* Action Buttons & Profiles */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white dark:text-slate-950 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-sky-300 hover:from-cyan-500 hover:to-blue-500 dark:hover:from-cyan-300 dark:hover:to-sky-200 transition-all duration-200 shadow-lg shadow-cyan-950/20 dark:shadow-cyan-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Contact Me</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href={portfolioData.personal.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-cyan-500 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={portfolioData.personal.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-sky-500 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: User Profile Photo with Smart Framing (Flower vase cropped out) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <ProfileAvatar size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
