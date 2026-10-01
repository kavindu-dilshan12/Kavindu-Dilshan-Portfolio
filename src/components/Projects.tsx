import React from "react";
import { portfolioData, ProjectItem } from "../data/portfolioData";
import { Github, ExternalLink, Layers, Cpu, Database, FileCode } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-2">
            <span>03</span>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="uppercase tracking-widest text-[11px] font-semibold">Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-400 max-w-xl font-normal">
            Software development projects demonstrating full-stack engineering, secure authentication, database schemas, and API integration.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {portfolioData.projects.map((project: ProjectItem) => {
            const hasGithub = Boolean(project.githubUrl?.trim());
            const hasLiveDemo = Boolean(project.liveDemoUrl?.trim());

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-white dark:bg-slate-950/70 border border-slate-300 dark:border-white/[0.08] overflow-hidden shadow-md dark:shadow-2xl backdrop-blur-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Left Column: Editorial Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Quiet Metadata Header */}
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-600 dark:text-slate-400 mb-3 font-semibold">
                        <span className="text-cyan-800 dark:text-cyan-400">{project.type}</span>
                        {project.isInDevelopment && (
                          <>
                            <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
                            <span className="text-amber-800 dark:text-amber-400">Status: In Development</span>
                          </>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white mb-3 tracking-tight">
                        {project.title}
                      </h3>

                      {/* Exact Description */}
                      <p className="text-sm sm:text-base text-slate-800 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Bulleted Accomplishments */}
                      <div className="space-y-3 mb-6">
                        <div className="text-xs font-mono text-slate-700 dark:text-slate-400 uppercase tracking-wider font-bold">
                          {project.isInDevelopment ? "Completed Foundation" : "Key Architectural Features"}
                        </div>
                        <ul className="space-y-2">
                          {project.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-normal">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 shrink-0 mt-2" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Planned Functionality (if applicable) */}
                      {project.plannedBullets && project.plannedBullets.length > 0 && (
                        <div className="p-4 rounded-xl bg-amber-50 dark:bg-slate-900/60 border border-amber-300 dark:border-amber-500/20 mb-6 space-y-2">
                          <div className="text-xs font-mono text-amber-900 dark:text-amber-300 uppercase tracking-wider font-bold">
                            Planned Roadmap
                          </div>
                          <ul className="space-y-1.5">
                            {project.plannedBullets.map((bullet, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 shrink-0 mt-2" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="text-[11px] text-slate-600 dark:text-slate-400 italic pt-1">
                            Operates strictly on the Binance Testnet environment with zero real funds.
                          </div>
                        </div>
                      )}

                      {/* Tech Stack List */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold text-slate-900 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Conditional Project Links (Hidden if not configured) */}
                    {(hasGithub || hasLiveDemo) && (
                      <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-200 dark:border-white/[0.06]">
                        {hasGithub && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-white/10 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span>Source Code</span>
                          </a>
                        )}
                        {hasLiveDemo && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white dark:text-slate-950 bg-cyan-700 dark:bg-cyan-400 hover:bg-cyan-600 dark:hover:bg-cyan-300 transition-colors shadow-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Application</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Handcrafted Architecture Diagram */}
                  <div className="lg:col-span-5 bg-slate-100/70 dark:bg-[#050811] p-6 sm:p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-white/[0.06]">
                    {project.id === "cloud-notes" ? (
                      /* Cloud Notes Diagram */
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-400 font-semibold">
                          <span>Multi-Tier Architecture</span>
                          <span className="text-[11px] text-cyan-800 dark:text-cyan-400">Full-Stack Flow</span>
                        </div>

                        <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-white/10 space-y-3 shadow-sm">
                          {/* Client */}
                          <div className="flex items-center justify-between p-2.5 rounded-lg bg-cyan-50 dark:bg-slate-900/80 border border-cyan-300 dark:border-cyan-500/30">
                            <div className="flex items-center gap-2 text-slate-950 dark:text-slate-200 font-bold">
                              <Layers className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
                              <span>React + Vite UI</span>
                            </div>
                            <span className="text-[10px] text-cyan-800 dark:text-cyan-300 font-semibold">Client Tier</span>
                          </div>

                          {/* Arrow with Auth */}
                          <div className="text-center text-[10px] text-slate-700 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
                            <span>↓</span>
                            <span className="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/70 border border-indigo-300 dark:border-indigo-500/30 text-indigo-900 dark:text-indigo-300 font-semibold">
                              JWT Token Authorization
                            </span>
                            <span>↓</span>
                          </div>

                          {/* Spring Boot */}
                          <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50 dark:bg-slate-900/80 border border-blue-300 dark:border-blue-500/30">
                            <div className="flex items-center gap-2 text-slate-950 dark:text-slate-200 font-bold">
                              <Cpu className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                              <span>Spring Boot REST API</span>
                            </div>
                            <span className="text-[10px] text-blue-800 dark:text-blue-300 font-semibold">Backend Tier</span>
                          </div>

                          {/* Arrow to DB */}
                          <div className="text-center text-[10px] text-slate-600 dark:text-slate-400 font-medium">
                            <span>↓ Relational Persistence &amp; Service Logic</span>
                          </div>

                          {/* MySQL + AI */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-slate-900/80 border border-teal-300 dark:border-teal-500/30 text-center">
                              <Database className="w-4 h-4 text-teal-700 dark:text-teal-400 mx-auto mb-1" />
                              <span className="text-[11px] text-slate-950 dark:text-slate-200 block font-bold">MySQL</span>
                              <span className="text-[9px] text-slate-600 dark:text-slate-400 font-medium">Relational DB</span>
                            </div>

                            <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-slate-900/80 border border-purple-300 dark:border-purple-500/30 text-center">
                              <Cpu className="w-4 h-4 text-purple-700 dark:text-purple-400 mx-auto mb-1" />
                              <span className="text-[11px] text-slate-950 dark:text-slate-200 block font-bold">AI Assistant</span>
                              <span className="text-[9px] text-slate-600 dark:text-slate-400 font-medium">Service Module</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* AI Crypto Bot Diagram */
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-400 font-semibold">
                          <span>Sandbox Testnet Environment</span>
                          <span className="text-[11px] text-amber-800 dark:text-amber-400">Zero-Risk Setup</span>
                        </div>

                        <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-white/10 space-y-3 shadow-sm">
                          <div className="p-3 rounded-lg bg-amber-50 dark:bg-slate-900/80 border border-amber-300 dark:border-amber-500/30 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-950 dark:text-slate-200 font-bold">
                              <FileCode className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                              <span>Python 3 Script Engine</span>
                            </div>
                            <span className="text-[10px] text-emerald-800 dark:text-emerald-400 font-bold">Connected</span>
                          </div>

                          <div className="text-center text-[10px] text-slate-600 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
                            <span>↕</span>
                            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-300 font-semibold">
                              HMAC-SHA256 Testnet Auth
                            </span>
                            <span>↕</span>
                          </div>

                          <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-950 dark:text-slate-200 font-bold">
                              <Cpu className="w-4 h-4 text-sky-700 dark:text-sky-400" />
                              <span>Binance Spot Testnet</span>
                            </div>
                            <span className="text-[10px] text-slate-600 dark:text-slate-400 font-semibold">REST API</span>
                          </div>

                          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/20 text-[11px] text-amber-900 dark:text-amber-200/90 leading-relaxed font-normal">
                            Simulated test balance environment enabling client authentication and protocol testing without risking real capital.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global GitHub Profile Action */}
        <div className="mt-14 p-8 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-300 dark:border-white/[0.08] shadow-md dark:shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <Github className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
              <span>Explore My Code on GitHub</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 mt-1 font-normal">
              Review repository commits, project branches, and ongoing programming progress.
            </p>
          </div>

          <a
            href={portfolioData.personal.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 dark:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-white/10 hover:border-cyan-600 dark:hover:border-cyan-400/40 transition-colors shadow-xs shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Explore My GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
