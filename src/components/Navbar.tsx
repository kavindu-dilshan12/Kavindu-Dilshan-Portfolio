import React, { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import { Menu, X, ArrowUpRight, FileDown, Github, Linkedin, Sun, Moon, Download } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = portfolioData.navLinks.map((link) =>
        link.href.replace("#", "")
      );
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const hasResume = Boolean(portfolioData.personal.resumeUrl?.trim());

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-[#060911]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.06] py-3 shadow-lg shadow-black/5 dark:shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Handcrafted KD Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
            aria-label="Kavindu Dilshan Portfolio Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 border border-slate-300 dark:border-white/10 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-all duration-300 shadow-sm">
              <span className="font-mono font-bold text-sm tracking-wider bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-sky-200 bg-clip-text text-transparent">
                {portfolioData.personal.monogram}
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 opacity-80" />
            </div>
            <div className="text-left">
              <span className="block text-sm font-semibold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-mono tracking-tight">
                IT Undergrad · SLIIT
              </span>
            </div>
          </a>

          {/* Clean Typographic Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/[0.06] backdrop-blur-md"
            aria-label="Main navigation"
          >
            {portfolioData.navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs font-medium transition-colors relative focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 rounded-full ${
                    isActive
                      ? "text-cyan-600 dark:text-cyan-300 font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-[2px] bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-cyan-400 dark:to-sky-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Socials, Theme Toggle & Action Button */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: "16s" }} />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <a
              href={portfolioData.personal.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="/kavindu-portfolio.zip"
              download="kavindu-portfolio.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/90 dark:hover:bg-slate-800 border border-slate-300 dark:border-white/10 transition-colors"
              title="Download Portfolio Source Code (.ZIP)"
            >
              <Download className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Download Code</span>
            </a>

            {hasResume ? (
              <a
                href={portfolioData.personal.resumeUrl}
                download={portfolioData.personal.resumeFileName}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-500/30 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>CV</span>
              </a>
            ) : (
              <a
                href="#contact"
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700 dark:border-white/10 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 shadow-sm"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3 h-3 text-slate-300" />
              </a>
            )}
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[61px] bg-black/60 dark:bg-black/80 backdrop-blur-md z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white dark:bg-[#090d19] border-b border-slate-200 dark:border-white/10 p-5 shadow-2xl flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {portfolioData.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href="/kavindu-portfolio.zip"
                  download="kavindu-portfolio.zip"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/10"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Download Code</span>
                </a>
                <a
                  href={portfolioData.personal.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              {hasResume ? (
                <a
                  href={portfolioData.personal.resumeUrl}
                  download={portfolioData.personal.resumeFileName}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-500/40"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
              ) : (
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800"
                >
                  <span>Connect with Kavindu</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
