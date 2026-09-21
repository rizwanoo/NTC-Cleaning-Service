import React from 'react';
import { PageId } from '../types';
import { PRICING_PACKAGES, ADDON_SERVICES, BUSINESS_INFO } from '../data/cleaningData';
import { RealtimeQuoteCalculator } from '../components/RealtimeQuoteCalculator';
import {
  Sparkles,
  Check,
  ArrowRight,
  Phone,
  Calendar,
  AlertCircle,
  Gift,
  CreditCard,
  Tag
} from 'lucide-react';

interface PricingPageProps {
  onOpenQuote: (packageTitle?: string) => void;
  onNavigate: (page: PageId) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      {/* Light-Themed Hero Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200 py-16 sm:py-20 relative overflow-hidden mb-12">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-900 text-xs font-bold tracking-wide shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span>Upfront & Transparent Metro Detroit Base Rates</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 mt-4 mb-4 tracking-tight">
            Transparent Pricing & Real-Time Base Rates
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Professional cleaning with zero hidden charges, verified base rates on Square, and convenient Tap to Pay checkout upon service completion.
          </p>

          {/* Prominent Pricing Estimate Notice */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-2.5 bg-white px-5 py-3 rounded-2xl text-xs text-slate-700 border border-slate-200 shadow-2xs max-w-2xl text-left">
            <AlertCircle className="w-4 h-4 text-cyan-600 shrink-0" />
            <span>
              <strong>First-Time Policy:</strong> First-time clients are strongly encouraged to start with a Deep Cleaning. All Deep Cleans include a free choice of inside refrigerator, baseboards, or inside stove.
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* =========================================================================
            FEATURED REAL-TIME QUOTE CALCULATOR SECTION
            ========================================================================= */}
        <section id="realtime-calculator-section" className="scroll-mt-32">
          <RealtimeQuoteCalculator
            onProceedToQuote={(selectedService) => onOpenQuote(selectedService)}
          />
        </section>

        {/* =========================================================================
            STANDARD CLEANING PACKAGES CARDS
            ========================================================================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Verified Base Packages
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-2 mb-2">
              Explore Our All-Inclusive Cleaning Tiers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Choose the service level tailored to your home or facility across Oakland County and Metro Detroit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 border flex flex-col justify-between transition-all ${
                  pkg.isPopular
                    ? 'border-cyan-500 shadow-xl ring-2 ring-cyan-500/25 bg-white relative'
                    : 'border-slate-200 bg-white hover:shadow-lg'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-900 text-cyan-300 border border-cyan-400 font-bold text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular Clean
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                      {pkg.name}
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 min-h-[32px] mb-4">{pkg.tagline}</p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">
                      {pkg.startingPrice > 0 ? 'Base Rate' : 'Pricing Structure'}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading font-extrabold text-4xl text-slate-900">
                        {pkg.startingPrice > 0 ? `$${pkg.startingPrice}` : 'Custom'}
                      </span>
                      {pkg.id === 'recurring-package' && (
                        <span className="text-xs font-semibold text-slate-500">/ visit</span>
                      )}
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block leading-tight">
                      {pkg.priceNote}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8 text-xs sm:text-sm">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      What's Included:
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-700">
                        <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                      <div className="pt-3 border-t border-slate-100 text-xs text-slate-400 space-y-1">
                        <span className="block font-semibold text-slate-400">Not included by default:</span>
                        {pkg.notIncluded.map((notFeat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-slate-300">•</span>
                            <span>{notFeat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 mb-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="font-semibold text-slate-700">Best For: </span>
                    {pkg.bestFor}
                  </div>
                  <a
                    href={BUSINESS_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-heading font-bold text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 text-center block ${
                      pkg.isPopular
                        ? 'bg-slate-900 hover:bg-slate-800 text-white border border-cyan-400'
                        : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-cyan-300" />
                    <span>{pkg.ctaText}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            OPTIONAL ADD-ONS SECTION
            ========================================================================= */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Customize Your Clean
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-2 mb-2">
              Optional Add-On Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Need extra attention for appliances, baseboards, laundry, or high-touch zones? Add any of these extras to your booking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADDON_SERVICES.map((addon) => (
              <div
                key={addon.id}
                className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-cyan-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      {addon.name}
                    </h3>
                    <span className="font-heading font-extrabold text-sm text-cyan-700 bg-cyan-100/70 px-2.5 py-1 rounded-lg">
                      +${addon.price}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {addon.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            COMMERCIAL & CUSTOM CLEANING CALLOUT
            ========================================================================= */}
        <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                Commercial & Facility Services
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Have a Commercial Facility, Office Suite, Daycare, or Renovation Project?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We provide custom walkthroughs, itemized janitorial proposals, and dedicated account management for corporate offices, daycare centers, and post-construction sites across Oakland County & Metro Detroit.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-cyan-200">
                <span>✓ Flexible after-hours & weekend schedules</span>
                <span>✓ Square Tap to Pay accepted</span>
                <span>✓ Commercial-grade sanitization</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenQuote('Commercial Cleaning')}
                className="w-full py-4 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold text-sm tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2 border-2 border-cyan-400 cursor-pointer"
              >
                <span>Request Facility Consultation</span>
                <ArrowRight className="w-4 h-4 text-cyan-300" />
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Concierge: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Policies Footer */}
        <div className="text-center text-xs text-slate-500 max-w-3xl mx-auto space-y-1.5 pt-4">
          <p>
            *Base rates shown are standard starting rates for Oakland County & Metro Detroit Area homes and facilities.
          </p>
          <p>
            Same-day cancellations carry a 50% service fee. Payments are processed via Square Tap to Pay upon completion (cash is not accepted).
          </p>
        </div>
      </div>
    </div>
  );
};
