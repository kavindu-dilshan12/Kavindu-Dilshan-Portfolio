import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, ArrowUpRight } from "lucide-react";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-2">
            <span>05</span>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="uppercase tracking-widest text-[11px] font-semibold">Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white tracking-tight">
            Let’s Connect
          </h2>
          <p className="mt-3 text-lg text-slate-800 dark:text-slate-300 max-w-xl font-normal">
            I’m seeking an IT internship where I can contribute, learn, and grow with a development team.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Primary Invitation */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 leading-relaxed font-normal">
              Whether you are an engineering lead looking for a motivated intern with hands-on Java, Python, and React experience, or a recruiter screening candidates for upcoming cohorts, I would welcome the opportunity to connect.
            </p>

            <div className="pt-2">
              <a
                href={portfolioData.personal.emailLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white dark:text-slate-950 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-sky-300 hover:from-cyan-500 hover:to-blue-500 dark:hover:from-cyan-300 dark:hover:to-sky-200 transition-all duration-200 shadow-md shadow-cyan-950/20 dark:shadow-cyan-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs font-mono text-slate-600 dark:text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>Direct communication • Fast response within 24 hours</span>
            </div>
          </div>

          {/* Right: Direct Information Directory */}
          <div className="lg:col-span-6 space-y-3">
            {/* Email Row */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-300 dark:border-white/[0.08] flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-lg bg-cyan-100 dark:bg-slate-900 text-cyan-800 dark:text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 font-semibold">Email</div>
                  <a
                    href={portfolioData.personal.emailLink}
                    className="text-xs sm:text-sm font-bold text-slate-950 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors truncate block"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(portfolioData.personal.email, "email")}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors shrink-0"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Row */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-300 dark:border-white/[0.08] flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-lg bg-sky-100 dark:bg-slate-900 text-sky-800 dark:text-sky-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 font-semibold">Phone</div>
                  <a
                    href={portfolioData.personal.phoneLink}
                    className="text-xs sm:text-sm font-bold text-slate-950 dark:text-slate-200 hover:text-sky-700 dark:hover:text-sky-300 transition-colors truncate block"
                  >
                    {portfolioData.personal.phoneDisplay}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(portfolioData.personal.phoneDisplay, "phone")}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors shrink-0"
                aria-label="Copy phone number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Row */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-300 dark:border-white/[0.08] flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-100 dark:bg-slate-900 text-emerald-800 dark:text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 font-semibold">Location</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-950 dark:text-slate-200">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 font-bold bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-300 dark:border-white/10">
                Sri Lanka
              </span>
            </div>

            {/* Profiles Row */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-300 dark:border-white/[0.08] flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-slate-900 text-blue-800 dark:text-blue-400 shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 font-semibold">Profiles</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-950 dark:text-slate-200">
                    LinkedIn &amp; GitHub
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={portfolioData.personal.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
