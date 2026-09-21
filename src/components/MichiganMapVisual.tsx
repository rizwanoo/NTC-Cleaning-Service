import React, { useState } from 'react';
import { SERVICE_CITIES, BUSINESS_INFO } from '../data/cleaningData';
import { ServiceAreaCity } from '../types';
import { MapPin, CheckCircle, Search, Clock, Sparkles, Shield, ArrowRight } from 'lucide-react';

interface MichiganMapVisualProps {
  onSelectCity?: (cityName: string) => void;
  onRequestQuote?: () => void;
}

export const MichiganMapVisual: React.FC<MichiganMapVisualProps> = ({ onSelectCity, onRequestQuote }) => {
  const [selectedCity, setSelectedCity] = useState<ServiceAreaCity>(SERVICE_CITIES[0]); // default Oakland County
  const [zipQuery, setZipQuery] = useState('');
  const [zipResult, setZipResult] = useState<{ status: 'idle' | 'found' | 'not-found'; message: string; city?: string }>({
    status: 'idle',
    message: ''
  });

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipQuery.trim();
    if (!cleanZip) return;

    const matched = SERVICE_CITIES.find((c) =>
      c.zipCodes.some((z) => z === cleanZip || cleanZip.startsWith(z.slice(0, 3)))
    );

    if (matched) {
      setSelectedCity(matched);
      setZipResult({
        status: 'found',
        city: matched.name,
        message: `Great news! We provide daily residential, deep cleaning & commercial care in ${matched.name} (${cleanZip}).`
      });
    } else {
      // Check if Michigan zip starting with 483, 480, 481, 482
      if (cleanZip.startsWith('483') || cleanZip.startsWith('480') || cleanZip.startsWith('482') || cleanZip.startsWith('481')) {
        setZipResult({
          status: 'found',
          city: 'Oakland County & Metro Detroit Area',
          message: `Yes! Zip ${cleanZip} is within our active Oakland County & Metro Detroit service perimeter.`
        });
      } else {
        setZipResult({
          status: 'not-found',
          message: `Zip ${cleanZip} may be outside our primary Oakland County / Metro Detroit radius. Please call our Concierge Line at 346-491-1010 to check availability.`
        });
      }
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Side: Map Graphic & Nodes */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80 shadow-inner">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Oakland County & Metro Detroit Coverage Hub
                </span>
              </div>
              <span className="text-xs text-slate-400">Concierge Line: 346-491-1010</span>
            </div>

            {/* Stylized Regional Graphic */}
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto flex items-center justify-center p-2">
              <svg viewBox="0 0 500 380" className="w-full h-full drop-shadow-md select-none">
                <defs>
                  <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
                  </radialGradient>
                  <linearGradient id="routeLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>

                {/* Regional boundaries */}
                <rect x="50" y="40" width="400" height="300" rx="24" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />

                {/* Service Area Boundary Polygons */}
                <polygon
                  points="90,80 280,70 310,210 160,250 80,180"
                  fill="url(#hubGlow)"
                  stroke="#0891b2"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />

                <polygon
                  points="230,170 420,150 440,300 270,320 200,260"
                  fill="url(#hubGlow)"
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Radar Rings */}
                <circle cx="190" cy="150" r="75" fill="none" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.25" />
                <circle cx="330" cy="240" r="70" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" />

                {/* Connecting Rays */}
                <line x1="190" y1="150" x2="330" y2="240" stroke="url(#routeLine)" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />

                {/* Oakland County Hub Node */}
                <g className="cursor-pointer" onClick={() => setSelectedCity(SERVICE_CITIES[0])}>
                  <circle cx="190" cy="150" r="14" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="190" cy="150" r="5" fill="#0f172a" />
                  <text x="190" y="180" fill="#38bdf8" fontSize="13" fontWeight="800" textAnchor="middle">
                    ★ Oakland County Hub
                  </text>
                  <text x="190" y="196" fill="#94a3b8" fontSize="10" textAnchor="middle">
                    Primary Service Base
                  </text>
                </g>

                {/* Metro Detroit Area Hub Node */}
                <g className="cursor-pointer" onClick={() => setSelectedCity(SERVICE_CITIES[1])}>
                  <circle cx="330" cy="240" r="14" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="330" cy="240" r="5" fill="#0f172a" />
                  <text x="330" y="270" fill="#fbbf24" fontSize="13" fontWeight="800" textAnchor="middle">
                    ★ Metro Detroit Area
                  </text>
                  <text x="330" y="286" fill="#94a3b8" fontSize="10" textAnchor="middle">
                    Serving Region
                  </text>
                </g>

                {/* Feature tags on graphic */}
                <rect x="70" y="280" width="130" height="34" rx="8" fill="#1e293b" stroke="#334155" />
                <text x="135" y="302" fill="#38bdf8" fontSize="10" fontWeight="700" textAnchor="middle">
                  Tap to Pay • Square
                </text>

                <rect x="290" y="70" width="150" height="34" rx="8" fill="#1e293b" stroke="#334155" />
                <text x="365" y="92" fill="#fbbf24" fontSize="10" fontWeight="700" textAnchor="middle">
                  Concierge Entry Ok
                </text>
              </svg>
            </div>

            <p className="text-center text-xs text-slate-400 mt-2">
              Customers do not need to be present as long as secure entry instructions are arranged in advance.
            </p>
          </div>

          {/* Quick Zone Pill Selectors */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {SERVICE_CITIES.map((city) => (
              <button
                key={city.name}
                onClick={() => {
                  setSelectedCity(city);
                  if (onSelectCity) onSelectCity(city.name);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCity.name === city.name
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Selected Zone Specs & Live Zip Lookup */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                Verified Coverage Region
              </span>
              <span className="flex items-center gap-1.5 text-xs text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800">
                <Clock className="w-3.5 h-3.5" />
                {selectedCity.driveTime}
              </span>
            </div>

            <h3 className="text-2xl font-heading font-extrabold text-white mb-1">
              {selectedCity.name}
            </h3>
            <p className="text-sm text-slate-400 mb-4">{selectedCity.county}</p>

            <div className="space-y-3 text-sm">
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                <span className="block text-xs font-semibold text-slate-400 mb-1">Common Services:</span>
                <span className="text-slate-200">{selectedCity.popularServices}</span>
              </div>

              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                <span className="block text-xs font-semibold text-slate-400 mb-1">Coverage Zip Highlights:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selectedCity.zipCodes.slice(0, 8).map((z) => (
                    <span key={z} className="bg-slate-800 text-cyan-300 px-2 py-0.5 rounded text-xs font-mono">
                      {z}
                    </span>
                  ))}
                  <span className="text-xs text-slate-500 self-center">& surrounding</span>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold text-xs tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Book Cleaning in {selectedCity.name}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Zip Checker */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5">
            <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Check Your Michigan Zip Code</span>
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Check service availability for Oakland County or Metro Detroit.
            </p>

            <form onSubmit={handleZipCheck} className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. 48301 or 48201"
                maxLength={5}
                value={zipQuery}
                onChange={(e) => setZipQuery(e.target.value.replace(/\D/g, ''))}
                className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold text-xs rounded-xl shrink-0 transition-all cursor-pointer"
              >
                Verify
              </button>
            </form>

            {zipResult.status !== 'idle' && (
              <div
                className={`mt-3 p-3 rounded-xl text-xs flex items-start gap-2.5 ${
                  zipResult.status === 'found'
                    ? 'bg-cyan-950/80 border border-cyan-800 text-cyan-200'
                    : 'bg-amber-950/80 border border-amber-800 text-amber-200'
                }`}
              >
                <CheckCircle
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    zipResult.status === 'found' ? 'text-cyan-400' : 'text-amber-400'
                  }`}
                />
                <p className="leading-snug">{zipResult.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FloridaMapVisual = MichiganMapVisual;
