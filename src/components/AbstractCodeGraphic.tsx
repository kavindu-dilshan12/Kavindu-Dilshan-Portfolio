import React, { useState } from "react";
import { Server, ShieldCheck, Database, Bot, Cpu, Layers, Terminal } from "lucide-react";

export const AbstractCodeGraphic: React.FC = () => {
  const [activeProject, setActiveProject] = useState<"notes" | "bot">("notes");
  const [activeNode, setActiveNode] = useState<number>(0);

  const notesNodes = [
    {
      title: "React + Vite UI",
      type: "Client Layer",
      icon: Layers,
      color: "text-cyan-600 dark:text-cyan-400",
      borderColor: "border-cyan-500",
      snippet: `// Client State & Protected Route\nconst { token } = useAuth();\nconst res = await api.get('/notes', {\n  headers: { Authorization: \`Bearer \${token}\` }\n});`,
      detail: "Clean responsive interface managing note creation, live updates, and secure bearer token dispatch.",
    },
    {
      title: "JWT Security Filter",
      type: "Auth Boundary",
      icon: ShieldCheck,
      color: "text-indigo-600 dark:text-indigo-400",
      borderColor: "border-indigo-500",
      snippet: `@Component\npublic class JwtAuthFilter extends OncePerRequestFilter {\n  // Validates HMAC claims and extracts user context\n  // Guards all private note endpoints\n}`,
      detail: "Spring Security filter intercepting requests, parsing cryptographically signed claims, and guarding resources.",
    },
    {
      title: "Spring Boot + MySQL",
      type: "Persistence & AI",
      icon: Database,
      color: "text-emerald-600 dark:text-emerald-400",
      borderColor: "border-emerald-500",
      snippet: `@Service\npublic class NoteService {\n  // CRUD persistence in relational MySQL\n  // Integrated AI-assistant service helper\n}`,
      detail: "Decoupled service architecture connecting relational MySQL storage and AI assistant integration.",
    },
  ];

  const botNodes = [
    {
      title: "Client Configuration",
      type: "Python 3 Environment",
      icon: Terminal,
      color: "text-amber-600 dark:text-amber-400",
      borderColor: "border-amber-500",
      snippet: `import os\nfrom binance.client import Client\n\n# Safe Testnet Credentials (Zero Capital Risk)\nAPI_KEY = os.getenv('BINANCE_TESTNET_KEY')\nclient = Client(API_KEY, API_SECRET, testnet=True)`,
      detail: "Configures sandbox environment with secure secret management, preventing real capital exposure.",
    },
    {
      title: "Testnet Handshake",
      type: "API Gateway",
      icon: Cpu,
      color: "text-cyan-600 dark:text-cyan-400",
      borderColor: "border-cyan-500",
      snippet: `def test_connection():\n    status = client.get_system_status()\n    assert status['status'] == 0, 'Testnet offline'\n    print('Binance Testnet Connected Successfully')`,
      detail: "Verifies HMAC signature, timestamp synchronization, and API connectivity to the Binance Testnet.",
    },
    {
      title: "Planned Analytics",
      type: "Roadmap Module",
      icon: Bot,
      color: "text-sky-600 dark:text-sky-400",
      borderColor: "border-sky-500",
      snippet: `# Planned Roadmap Modules:\n# 1. Real-time ticker stream ingest\n# 2. Market signal analysis\n# 3. Automated risk limits & paper execution`,
      detail: "Architecture blueprint designed to integrate technical indicators and automated virtual order execution.",
    },
  ];

  const currentNodes = activeProject === "notes" ? notesNodes : botNodes;
  const currentNode = currentNodes[activeNode] || currentNodes[0];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer subtle glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent rounded-2xl blur-xl pointer-events-none" />

      {/* Main Workbench Surface */}
      <div className="relative rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-white/10 shadow-xl dark:shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Workbench Header: Project Switcher */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-100/90 dark:bg-slate-900/60 border-b border-slate-200 dark:border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 dark:bg-slate-700 inline-block" />
            <span className="text-xs font-mono text-slate-800 dark:text-slate-300 font-semibold">
              System Architecture Diagram
            </span>
          </div>

          {/* Clean Segmented Controls */}
          <div className="flex items-center gap-1 p-0.5 rounded-lg bg-slate-200 dark:bg-black/40 border border-slate-300 dark:border-white/[0.06]">
            <button
              onClick={() => {
                setActiveProject("notes");
                setActiveNode(0);
              }}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                activeProject === "notes"
                  ? "bg-white dark:bg-slate-800 text-cyan-800 dark:text-cyan-300 font-bold shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200"
              }`}
            >
              Cloud Notes
            </button>
            <button
              onClick={() => {
                setActiveProject("bot");
                setActiveNode(0);
              }}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                activeProject === "bot"
                  ? "bg-white dark:bg-slate-800 text-amber-800 dark:text-amber-300 font-bold shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200"
              }`}
            >
              Python Bot
            </button>
          </div>
        </div>

        {/* Interactive Architecture Flow Pipeline */}
        <div className="p-5 border-b border-slate-200 dark:border-white/[0.06] bg-slate-50/70 dark:bg-slate-950/40">
          <div className="grid grid-cols-3 gap-2.5">
            {currentNodes.map((node, idx) => {
              const isSelected = activeNode === idx;
              const Icon = node.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveNode(idx)}
                  className={`text-left p-3 rounded-xl border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                    isSelected
                      ? `bg-white dark:bg-slate-900 ${node.borderColor} shadow-md ring-1 ring-cyan-500/20`
                      : "bg-white/80 dark:bg-slate-950/70 border-slate-200 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/15 opacity-85 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-4 h-4 ${node.color}`} />
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      Step {idx + 1}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {node.title}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono truncate mt-0.5">
                    {node.type}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Component Code & Insight View */}
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-slate-700 dark:text-slate-400">
              Inspecting: <strong className="text-slate-900 dark:text-white font-bold">{currentNode.title}</strong>
            </span>
            <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
              Interactive Preview
            </span>
          </div>

          {/* High-Contrast Code Box (Always clear & crisp) */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-100 leading-relaxed overflow-x-auto whitespace-pre selection:bg-cyan-500/30 shadow-inner">
            {currentNode.snippet}
          </div>

          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {currentNode.detail}
          </p>
        </div>

        {/* Footer Micro-Bar */}
        <div className="px-5 py-2.5 bg-slate-100/90 dark:bg-black/30 border-t border-slate-200 dark:border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
          <span>Click components to inspect architecture</span>
          <span className="text-slate-800 dark:text-slate-300 font-medium">
            {activeProject === "notes" ? "Spring Boot + React" : "Python + Binance API"}
          </span>
        </div>
      </div>
    </div>
  );
};
