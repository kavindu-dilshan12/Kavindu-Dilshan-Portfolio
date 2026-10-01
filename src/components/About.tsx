import React from "react";
import { portfolioData } from "../data/portfolioData";
import { AbstractCodeGraphic } from "./AbstractCodeGraphic";
import { FileText, FileDown, Mail, ArrowUpRight, GraduationCap } from "lucide-react";

export const About: React.FC = () => {
  const hasResume = Boolean(portfolioData.personal.resumeUrl?.trim());

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Kicker */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
            <span>01</span>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="uppercase tracking-widest text-[11px]">Background &amp; Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
              {portfolioData.personal.aboutText}
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] space-y-4">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight">
                Academic &amp; Practical Foundation
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Currently pursuing a BSc (Hons) in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT). My coursework focuses on algorithms, object-oriented design in Java and C++, and database architectures. Alongside academic studies, I build practical software applications to understand end-to-end full-stack workflows and clean code principles.
              </p>
            </div>

            {/* Focus Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/[0.06]">
                <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-1">Architecture</div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-200">
                  Full-Stack Applications
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Connecting React interfaces with Spring Boot REST backends and MySQL databases.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/[0.06]">
                <div className="text-xs font-mono text-sky-700 dark:text-sky-400 mb-1">Engineering</div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-200">
                  API &amp; Systems Integration
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Building Python services that interact with external REST APIs and sandboxes safely.
                </div>
              </div>
            </div>

            {/* Interactive Architecture Blueprint Component */}
            <div className="pt-6">
              <AbstractCodeGraphic />
            </div>
          </div>

          {/* Right Column: Handcrafted Credential & CV Spec Sheet */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 p-6 space-y-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">Undergraduate Profile</span>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">SLIIT</span>
              </div>

              {/* Specification Table */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-white/[0.04]">
                  <span className="text-slate-500 dark:text-slate-400">Program</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200 text-right">
                    BSc (Hons) in Information Technology
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-white/[0.04]">
                  <span className="text-slate-500 dark:text-slate-400">Status</span>
                  <span className="font-medium text-cyan-700 dark:text-cyan-300">Undergraduate (2024 – Present)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-white/[0.04]">
                  <span className="text-slate-500 dark:text-slate-400">Target Role</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200">IT / Software Development Intern</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Location</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200">Malabe, Sri Lanka</span>
                </div>
              </div>

              {/* CV Action */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Curriculum Vitae</span>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {portfolioData.personal.resumeFileName}
                  </span>
                </div>

                {hasResume ? (
                  <a
                    href={portfolioData.personal.resumeUrl}
                    download={portfolioData.personal.resumeFileName}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white dark:text-slate-950 bg-cyan-600 dark:bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-300 transition-colors shadow-sm"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download CV (PDF)</span>
                  </a>
                ) : (
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-slate-700 dark:text-slate-300">Available on request</span>
                    <a
                      href={`mailto:${portfolioData.personal.email}?subject=Internship%20Inquiry%20-%20CV%20Request%20for%20Kavindu%20Dilshan`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-cyan-700 dark:text-cyan-400 hover:underline transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Request CV</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
