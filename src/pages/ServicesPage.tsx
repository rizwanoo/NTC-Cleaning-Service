import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/cleaningData';
import { GlassCleanMotionGraphic } from '../components/GlassCleanMotionGraphic';
import {
  Sparkles,
  Plus,
  ArrowRight,
  Phone,
  ShieldCheck,
  Building,
  Home,
  CheckCircle2,
  Check,
  Calendar,
  Gift,
  CreditCard,
  Tag
} from 'lucide-react';

interface ServicesPageProps {
  onOpenQuote: (serviceTitle?: string) => void;
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'residential' | 'specialized' | 'commercial'>('all');

  const filteredServices = SERVICES_DATA.filter((s) =>
    selectedCategory === 'all' ? true : s.category === selectedCategory
  );

  const counts = {
    all: SERVICES_DATA.length,
    residential: SERVICES_DATA.filter((s) => s.category === 'residential').length,
    specialized: SERVICES_DATA.filter((s) => s.category === 'specialized').length,
    commercial: SERVICES_DATA.filter((s) => s.category === 'commercial').length
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      {/* =========================================================================
          SERVICES HERO SECTION
          ========================================================================= */}
      <section className="bg-gradient-to-b from-white via-cyan-50/40 to-slate-100/70 border-b border-slate-200/90 py-16 sm:py-24 relative overflow-hidden mb-12">
        <GlassCleanMotionGraphic />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-cyan-400/40 shadow-2xs backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-slate-800">
              Oakland County & Metro Detroit Solutions
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold text-cyan-800">
              Square Tap to Pay Accepted
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 mt-5 mb-4 tracking-tight">
            Transparent Base Rates & Professional Services
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From routine home maintenance and deep sanitizing with complimentary appliance gifts to commercial offices, daycares, post-construction, and wash/dry/fold laundry across Metro Detroit.
          </p>

          {/* Floating Trust Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-bold text-slate-700 mt-6 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 border border-slate-200/80 shadow-2xs text-slate-800">
              <Gift className="w-3.5 h-3.5 text-amber-500" />
              Deep Clean Includes 1 Free Appliance Gift
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 border border-slate-200/80 shadow-2xs text-slate-800">
              <CreditCard className="w-3.5 h-3.5 text-cyan-600" />
              Square Tap to Pay Only (No Cash)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 border border-slate-200/80 shadow-2xs text-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Presence Optional with Access Arranged
            </span>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 max-w-3xl mx-auto p-2 bg-white/60 backdrop-blur-md rounded-2xl border border-cyan-400/40 shadow-inner">
            <button
              id="services-tab-all"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2.5 rounded-xl text-xs font-heading font-extrabold transition-all flex items-center gap-2 border-2 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.45)]'
                  : 'bg-slate-900/85 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/50 hover:border-cyan-300 shadow-sm'
              }`}
            >
              <span>All Services</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-400 text-slate-950'
                    : 'bg-slate-800 text-cyan-300 border border-cyan-400/40'
                }`}
              >
                {counts.all}
              </span>
            </button>

            <button
              id="services-tab-residential"
              onClick={() => setSelectedCategory('residential')}
              className={`px-4 py-2.5 rounded-xl text-xs font-heading font-extrabold transition-all flex items-center gap-2 border-2 cursor-pointer ${
                selectedCategory === 'residential'
                  ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.45)]'
                  : 'bg-slate-900/85 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/50 hover:border-cyan-300 shadow-sm'
              }`}
            >
              <Home className="w-3.5 h-3.5 text-cyan-400" />
              <span>Residential & Recurring</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  selectedCategory === 'residential'
                    ? 'bg-cyan-400 text-slate-950'
                    : 'bg-slate-800 text-cyan-300 border border-cyan-400/40'
                }`}
              >
                {counts.residential}
              </span>
            </button>

            <button
              id="services-tab-specialized"
              onClick={() => setSelectedCategory('specialized')}
              className={`px-4 py-2.5 rounded-xl text-xs font-heading font-extrabold transition-all flex items-center gap-2 border-2 cursor-pointer ${
                selectedCategory === 'specialized'
                  ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.45)]'
                  : 'bg-slate-900/85 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/50 hover:border-cyan-300 shadow-sm'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Specialized & Move-In/Out</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  selectedCategory === 'specialized'
                    ? 'bg-cyan-400 text-slate-950'
                    : 'bg-slate-800 text-cyan-300 border border-cyan-400/40'
                }`}
              >
                {counts.specialized}
              </span>
            </button>

            <button
              id="services-tab-commercial"
              onClick={() => setSelectedCategory('commercial')}
              className={`px-4 py-2.5 rounded-xl text-xs font-heading font-extrabold transition-all flex items-center gap-2 border-2 cursor-pointer ${
                selectedCategory === 'commercial'
                  ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.45)]'
                  : 'bg-slate-900/85 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/50 hover:border-cyan-300 shadow-sm'
              }`}
            >
              <Building className="w-3.5 h-3.5 text-cyan-400" />
              <span>Office & Commercial</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  selectedCategory === 'commercial'
                    ? 'bg-cyan-400 text-slate-950'
                    : 'bg-slate-800 text-cyan-300 border border-cyan-400/40'
                }`}
              >
                {counts.commercial}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid / Detailed Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {filteredServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Image side */}
                  <div className={`lg:col-span-5 relative h-72 lg:h-auto min-h-[300px] ${isEven ? '' : 'lg:order-2'} bg-slate-100`}>
                    <img
                      src={service.image}
                      alt={`${service.title} - Now That's Clean in Oakland County & Metro Detroit`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />

                    {service.popularBadge && (
                      <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-xs text-amber-400 font-bold text-xs px-3 py-1 rounded-full border border-slate-700 shadow-sm">
                        {service.popularBadge}
                      </span>
                    )}

                    <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md rounded-xl p-3 border border-slate-800 text-white">
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Base Rate</span>
                      <span className="font-heading font-extrabold text-base sm:text-lg text-cyan-400">
                        {service.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Details side */}
                  <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${isEven ? '' : 'lg:order-1'}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
                          {service.category}
                        </span>
                        {service.id.includes('deep') && (
                          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                            Includes 1 Free Appliance Gift
                          </span>
                        )}
                      </div>

                      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3">
                        {service.title}
                      </h2>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {service.fullDescription}
                      </p>

                      {/* What's Included */}
                      <div className="mb-6">
                        <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                          <span>What's Included in This Service</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                          {service.includes.map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recommended Add-ons */}
                      {service.recommendedAddons && service.recommendedAddons.length > 0 && (
                        <div className="mb-6 pt-4 border-t border-slate-100">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                            Popular Add-ons for This Clean:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {service.recommendedAddons.map((addon, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-medium"
                              >
                                <Plus className="w-3 h-3 text-cyan-600" />
                                {addon}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTAs */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs text-slate-500 text-center sm:text-left">
                        Tap to Pay via Square • Presence optional
                      </div>
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <a
                          href={`tel:${BUSINESS_INFO.phoneRaw}`}
                          className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-cyan-600" />
                          <span>Call Concierge</span>
                        </a>
                        <a
                          href={BUSINESS_INFO.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-1.5 border border-cyan-400"
                        >
                          <Calendar className="w-3.5 h-3.5 text-cyan-300" />
                          <span>Book on Square</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Walkthrough Banner */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Commercial & Facility Solutions
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Need a Custom Walkthrough for Your Facility or Daycare?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              We arrange on-site reviews and scheduled sanitize runs for daycare centers, corporate office suites, retail spaces, and post-construction sites across Metro Detroit.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm text-center flex items-center justify-center gap-2 border border-white/20"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => onOpenQuote('Commercial')}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm text-center shadow-md flex items-center justify-center gap-2 border-2 border-cyan-400 cursor-pointer"
            >
              <span>Request Commercial Consultation</span>
              <ArrowRight className="w-4 h-4 text-cyan-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
