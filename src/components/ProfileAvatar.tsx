import React, { useState, useEffect, useRef } from "react";
import { Camera, RefreshCw, ZoomIn, ZoomOut, Check, Image as ImageIcon } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import profilePhoto from "../assets/profile.jpg";

export const ProfileAvatar: React.FC<{ size?: "sm" | "md" | "lg" }> = ({ size = "lg" }) => {
  const [photoSrc, setPhotoSrc] = useState<string>(profilePhoto);
  const [zoomLevel, setZoomLevel] = useState<number>(1.08);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check local storage if user customized photo
    const storedPhoto = localStorage.getItem("kd_user_photo_data");
    if (storedPhoto) {
      setPhotoSrc(storedPhoto);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoSrc(result);
        localStorage.setItem("kd_user_photo_data", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoSrc(result);
        localStorage.setItem("kd_user_photo_data", result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="relative group select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {/* Decorative Aura / Ring */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/25 via-sky-500/20 to-blue-600/25 rounded-[32px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main Photo Frame */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[28px] overflow-hidden bg-slate-100 dark:bg-slate-900 border-2 border-slate-300 dark:border-white/15 shadow-2xl transition-all duration-300 group-hover:border-cyan-500 dark:group-hover:border-cyan-400">
        {photoSrc ? (
          /* Smart Framed Photo:
             object-[center_18%] and scale zooms into the chest & face,
             completely eliminating the flower vase in the bottom-right corner!
          */
          <div className="relative w-full h-full overflow-hidden bg-slate-950 flex items-center justify-center">
            <img
              src={photoSrc}
              alt="Kavindu Dilshan"
              className="w-full h-full object-cover transition-transform duration-300"
              style={{
                objectPosition: "center 14%",
                transform: `scale(${zoomLevel})`,
                transformOrigin: "50% 18%",
              }}
              referrerPolicy="no-referrer"
            />

            {/* Subtle Vignette Gradient to blend edges naturally */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          </div>
        ) : (
          /* High-Craft Professional Vector Representation of Kavindu Dilshan */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-950 dark:to-[#070b15] p-6 text-center">
            <div className="relative mb-4">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-white to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-white/10 flex items-center justify-center shadow-inner">
                {/* Clean Stylized Professional Icon */}
                <svg className="w-16 h-16 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M17 11l2 2 4-4" />
                </svg>
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 animate-pulse" />
            </div>

            <span className="text-sm font-bold text-slate-900 dark:text-white">Kavindu Dilshan</span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">Software Developer</span>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-900 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/80 hover:bg-cyan-200 dark:hover:bg-cyan-900 border border-cyan-300 dark:border-cyan-500/40 transition-colors shadow-sm"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Select Photo</span>
            </button>
          </div>
        )}

        {/* Live Status Pill at Bottom of Photo */}
        <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-xl bg-slate-900/90 dark:bg-slate-950/85 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="font-semibold text-[11px] text-white">Available for Internships</span>
          </div>
          <span className="font-mono text-[10px] text-cyan-300 dark:text-cyan-400 font-semibold">SLIIT IT</span>
        </div>

        {/* Photo Controls on Hover */}
        {photoSrc && isHovered && (
          <div className="absolute top-3 right-3 flex items-center gap-1 p-1 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 shadow-lg animate-fade-in">
            {/* Zoom in / out to adjust framing */}
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.7, z + 0.1))}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Zoom in (crop tighter)"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(1.1, z - 0.1))}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Zoom out"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-1.5 rounded-lg hover:bg-white/10 text-cyan-400 hover:text-cyan-300 transition-colors"
              title="Change photo"
              aria-label="Change photo"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Upload profile photo"
      />
    </div>
  );
};
