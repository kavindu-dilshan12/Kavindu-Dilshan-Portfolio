import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export const AmbientBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 25;
      const y = (e.clientY / innerHeight - 0.5) * 25;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isDark = theme === "dark";

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden transition-colors duration-500"
      aria-hidden="true"
    >
      {/* Completely Clean Smooth Base Canvas (NO grid lines, NO boxes) */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark ? "bg-[#060911]" : "bg-[#f8fafc]"
        }`}
      />

      {/* Smooth Soft Radial Atmospheric Glows (Velvety, diffused, pure) */}
      <div
        className={`absolute -top-[10%] left-[10%] w-[600px] h-[600px] rounded-full blur-[140px] transition-transform duration-1000 ease-out ${
          isDark ? "bg-cyan-500/10" : "bg-cyan-500/12"
        }`}
        style={{
          transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`,
        }}
      />
      <div
        className={`absolute top-[30%] -right-[5%] w-[650px] h-[650px] rounded-full blur-[150px] transition-transform duration-1000 ease-out ${
          isDark ? "bg-blue-600/10" : "bg-sky-400/12"
        }`}
        style={{
          transform: `translate3d(${-mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px, 0)`,
        }}
      />
      <div
        className={`absolute bottom-[5%] left-[20%] w-[550px] h-[550px] rounded-full blur-[140px] transition-transform duration-1000 ease-out ${
          isDark ? "bg-indigo-600/08" : "bg-blue-300/10"
        }`}
        style={{
          transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
        }}
      />
    </div>
  );
};
