import React, { useState } from 'react';
import { Phone, X, Sparkles, Calendar, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      aria-label="Concierge quick contact"
      className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 md:bottom-7 md:right-7 z-40 flex flex-col items-end"
    >
      {/* Mini Floating Popover / Tooltip */}
      {showTooltip && (
        <div
          role="status"
          className="mb-2 max-w-xs p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border-2 border-cyan-400/60 shadow-[0_12px_32px_rgba(6,182,212,0.25)] text-slate-800 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-heading font-extrabold text-[11px] text-slate-950 uppercase tracking-wide">
                NTC Concierge Line
              </span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              aria-label="Dismiss message preview"
              className="text-slate-400 hover:text-slate-700 p-0.5 rounded cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-600 leading-snug mb-2">
            Questions about base rates or service fit? Call our Concierge Line or schedule directly on Square.
          </p>
          <div className="flex gap-2 pt-1 border-t border-slate-100">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 py-1 px-2 bg-slate-900 text-white rounded-lg text-center font-bold text-[11px]"
            >
              Call 346-491-1010
            </a>
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-1 px-2 bg-cyan-600 text-white rounded-lg text-center font-bold text-[11px]"
            >
              Book Now
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button styled consistently with slate-900 navigation elements */}
      <div className="flex items-center gap-2">
        <a
          id="floating-instagram-btn"
          href={BUSINESS_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Now That's Clean Instagram"
          className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-pink-600 border border-slate-200 shadow-md flex items-center justify-center transition-all hover:scale-105"
        >
          <Instagram className="w-4 h-4" />
        </a>

        <a
          id="floating-concierge-btn"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          onMouseEnter={() => setShowTooltip(true)}
          aria-label="Call the Now That's Clean Concierge Line"
          className="group relative flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold text-xs sm:text-sm tracking-wide border-2 border-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.35)] hover:shadow-[0_0_26px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
        >
          {/* Icon with status ping indicator */}
          <div className="relative flex items-center justify-center">
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          </div>

          <span>Concierge: {BUSINESS_INFO.phone}</span>
        </a>
      </div>
    </aside>
  );
};
