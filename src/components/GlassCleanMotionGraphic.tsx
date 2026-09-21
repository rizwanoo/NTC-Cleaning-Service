import React from 'react';

export const GlassCleanMotionGraphic: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* -------------------------------------------------------------
          LAYER 1: Dynamic Light Beams with Pulsing Hue & Refraction
          ------------------------------------------------------------- */}
      <div className="absolute inset-0">
        {/* Primary Soft Cyan / Sky Light Beam */}
        <div
          className="absolute -top-32 -left-24 w-[750px] h-[750px] rounded-full bg-gradient-to-br from-cyan-300/30 via-sky-200/20 to-transparent blur-3xl animate-light-beam"
          style={{ transformOrigin: 'top left' }}
        />

        {/* Secondary Warm Amber / Florida Sunlight Refraction Beam */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-amber-200/30 via-rose-100/15 to-transparent blur-3xl animate-float-reverse" />

        {/* Pulsing Chromatic Prism Center Beam */}
        <div className="absolute top-1/3 left-1/3 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-teal-200/25 via-indigo-100/20 to-amber-100/20 blur-3xl animate-beam-color" />

        {/* Angular Refraction Streaks (Prism Ray Effects) */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-soft-light"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 30% 0%, rgba(6, 182, 212, 0.35) 0%, transparent 60%),
              radial-gradient(ellipse at 85% 20%, rgba(245, 158, 11, 0.25) 0%, transparent 50%),
              linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.7) 48%, rgba(6, 182, 212, 0.3) 50%, rgba(168, 85, 247, 0.25) 52%, transparent 60%)
            `
          }}
        />
      </div>

      {/* -------------------------------------------------------------
          LAYER 2: Geometric Clean Glass Shapes & Prism Facets
          Translucent frosted geometric polygons that refract light
          ------------------------------------------------------------- */}
      <div className="absolute inset-0">
        {/* Prism Facet 1 - Floating Diamond / Hexagon Glass Top-Left */}
        <div className="absolute top-16 left-[6%] w-36 h-36 animate-prism-1">
          <div className="w-full h-full rounded-3xl bg-gradient-to-br from-white/70 via-cyan-100/30 to-white/10 backdrop-blur-md border border-white/80 shadow-[0_8px_32px_rgba(6,182,212,0.15)] transform rotate-45 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl border border-cyan-300/40 bg-gradient-to-tr from-transparent via-white/50 to-transparent" />
          </div>
        </div>

        {/* Prism Facet 2 - Angular Glass Rhombus Center-Right */}
        <div className="absolute top-28 right-[12%] w-48 h-48 animate-prism-2">
          <div className="w-full h-full rounded-3xl bg-gradient-to-tr from-white/60 via-amber-100/25 to-sky-100/20 backdrop-blur-lg border border-white/90 shadow-[0_12px_36px_rgba(245,158,11,0.12)] transform -rotate-12 flex items-center justify-center">
            <div className="w-28 h-28 rounded-xl border border-amber-300/30 bg-gradient-to-bl from-white/60 via-transparent to-cyan-200/20" />
          </div>
        </div>

        {/* Prism Facet 3 - Delicate Triangular Refractor Bottom-Left */}
        <div className="absolute bottom-16 left-[18%] w-32 h-32 animate-prism-3">
          <div className="w-full h-full rounded-2xl bg-gradient-to-b from-white/65 via-teal-50/30 to-white/10 backdrop-blur-md border border-white/70 shadow-[0_8px_28px_rgba(20,184,166,0.12)] transform rotate-12" />
        </div>

        {/* Prism Facet 4 - Geometric Clean Cube Silhouette Far Right */}
        <div className="absolute bottom-24 right-[5%] w-40 h-40 animate-prism-1">
          <div className="w-full h-full rounded-3xl bg-gradient-to-tl from-white/55 via-indigo-50/20 to-white/15 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(99,102,241,0.1)] transform rotate-24" />
        </div>

        {/* Complex Multi-Faceted SVG Prism Specular Highlight Network */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="prism-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="prism-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <g stroke="url(#prism-grad-1)" strokeWidth="1" fill="none" opacity="0.65">
            <polygon points="120,80 220,50 280,140 180,170" />
            <polygon points="820,120 940,90 980,210 860,240" />
            <polygon points="450,420 540,360 610,430 520,490" />
            <line x1="120" y1="80" x2="280" y2="140" stroke="url(#prism-grad-2)" strokeWidth="1.5" />
            <line x1="820" y1="120" x2="980" y2="210" stroke="url(#prism-grad-2)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      {/* -------------------------------------------------------------
          LAYER 3: Floating Clean Bubbles with Specular Highlights
          ------------------------------------------------------------- */}
      <div className="absolute inset-0">
        <div className="absolute left-[7%] bottom-0 w-8 h-8 rounded-full bg-cyan-200/35 border border-cyan-400/60 backdrop-blur-2xs shadow-inner animate-bubble-drift-1 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white/95 absolute top-1 left-1.5 shadow-[0_0_4px_white]" />
        </div>
        <div className="absolute left-[24%] bottom-0 w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-200/40 via-sky-100/30 to-white/60 border border-cyan-300/70 backdrop-blur-xs shadow-inner animate-bubble-drift-2 flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-white/95 absolute top-2 left-2 shadow-[0_0_5px_white]" />
        </div>
        <div className="absolute left-[42%] bottom-0 w-7 h-7 rounded-full bg-amber-200/35 border border-amber-300/60 backdrop-blur-2xs shadow-inner animate-bubble-drift-3 flex items-center justify-center">
          <span className="w-1 h-1 rounded-full bg-white/95 absolute top-1 left-1" />
        </div>
        <div className="absolute right-[31%] bottom-0 w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-200/40 via-teal-100/30 to-white/60 border border-cyan-300/70 backdrop-blur-xs shadow-inner animate-bubble-drift-4 flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-white/95 absolute top-2 left-2 shadow-[0_0_4px_white]" />
        </div>
        <div className="absolute right-[14%] bottom-0 w-9 h-9 rounded-full bg-cyan-300/30 border border-cyan-400/60 backdrop-blur-2xs shadow-inner animate-bubble-drift-5 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white/95 absolute top-1.5 left-1.5 shadow-[0_0_4px_white]" />
        </div>
        <div className="absolute right-[4%] bottom-0 w-6 h-6 rounded-full bg-sky-200/40 border border-sky-400/50 backdrop-blur-2xs shadow-inner animate-bubble-drift-6 flex items-center justify-center">
          <span className="w-1 h-1 rounded-full bg-white/95 absolute top-1 left-1" />
        </div>
      </div>

      {/* -------------------------------------------------------------
          LAYER 4: Iridescent Micro-Sparks Drifting & Twinkling Upward
          ------------------------------------------------------------- */}
      <div className="absolute inset-0">
        {/* Micro-spark 1 (Cyan diamond) */}
        <div className="absolute left-[15%] bottom-0 animate-spark-1">
          <svg className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>

        {/* Micro-spark 2 (Amber gold star) */}
        <div className="absolute left-[35%] bottom-0 animate-spark-2">
          <svg className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>

        {/* Micro-spark 3 (Violet shimmer) */}
        <div className="absolute left-[58%] bottom-0 animate-spark-3">
          <svg className="w-4 h-4 text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>

        {/* Micro-spark 4 (Emerald freshness) */}
        <div className="absolute right-[22%] bottom-0 animate-spark-4">
          <svg className="w-3.5 h-3.5 text-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.8)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>

        {/* Micro-spark 5 (White sparkle diamond) */}
        <div className="absolute right-[8%] bottom-0 animate-spark-5">
          <svg className="w-4 h-4 text-white drop-shadow-[0_0_7px_rgba(255,255,255,0.9)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
