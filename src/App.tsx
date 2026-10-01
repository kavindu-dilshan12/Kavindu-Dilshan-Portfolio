import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { AmbientBackground } from "./components/AmbientBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 transition-colors duration-300">
        {/* Dynamic Ambient Background with subtle parallax and architectural grid */}
        <AmbientBackground />

        {/* Fixed Sticky Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1 w-full overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
