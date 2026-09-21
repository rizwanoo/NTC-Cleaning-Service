import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES_DATA, PRICING_PACKAGES, FAQ_DATA } from '../data/cleaningData';
import { MichiganMapVisual } from '../components/MichiganMapVisual';
import { FAQAccordion } from '../components/FAQAccordion';
import { GlassCleanMotionGraphic } from '../components/GlassCleanMotionGraphic';
import { ClientSuccessStories } from '../components/ClientSuccessStories';
import {
  Sparkles,
  Phone,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Leaf,
  Building,
  Home,
  Star,
  Award,
  ChevronRight,
  Check,
  CreditCard,
  Gift,
  Tag,
  ListChecks,
  AlertCircle,
  Calendar
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  // 6 Popular Services for homepage
  const popularServices = SERVICES_DATA.slice(0, 6);

  // 3 Popular packages for pricing preview
  const pricingPreview = PRICING_PACKAGES.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* =========================================================================
          SECTION 1: HERO SECTION (Now That's Clean Premier Detroit Care)
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-white via-cyan-50/40 to-slate-100/80 text-slate-900 overflow-hidden border-b border-slate-200/80">
        <GlassCleanMotionGraphic />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content: Dynamic Glass Screen Text Box with Pulsing Neon Edge */}
            <div className="lg:col-span-7">
              <div className="relative p-6 sm:p-9 rounded-3xl bg-white/70 backdrop-blur-xl border-2 animate-neon-box shadow-[0_15px_45px_rgba(6,182,212,0.18)] overflow-hidden space-y-6 text-center lg:text-left group">
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 animate-glass-sheen" />
                </div>

                {/* Eyebrow / Local Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-cyan-400/50 text-slate-800 text-xs font-heading font-extrabold tracking-wide shadow-2xs backdrop-blur-md relative z-10">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span>Oakland County & Metro Detroit Area • Concierge Cleaning</span>
                </div>

                {/* Headline */}
                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.1] relative z-10">
                  Now That’s Clean.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-sky-700">
                    Detail-Focused
                  </span>{' '}
                  Care You Can Trust.
                </h1>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal relative z-10">
                  {BUSINESS_INFO.subheading}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 relative z-10">
                  <a
                    id="hero-book-btn"
                    href={BUSINESS_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold text-base tracking-wide border-2 border-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.35)] hover:shadow-[0_0_24px_rgba(6,182,212,0.55)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5"
                  >
                    <Calendar className="w-5 h-5 text-cyan-300" />
                    <span>BOOK ON SQUARE / ACUITY</span>
                    <ArrowRight className="w-4 h-4 text-cyan-300" />
                  </a>

                  <a
                    id="hero-call-btn"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-cyan-400/80 hover:border-cyan-300 font-heading font-bold text-base tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Call Concierge: {BUSINESS_INFO.phone}</span>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="pt-5 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-slate-800 font-bold relative z-10">
                  <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>Oakland County</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>Square Tap to Pay</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>No Cash Accepted</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>Concierge Line</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card: Semi-translucent Glass Panel with Real NTC Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/80 shadow-[0_20px_50px_rgba(6,182,212,0.18)] bg-white/80 backdrop-blur-xl ring-1 ring-cyan-400/30 group">
                <img
                  src="/assets/ntc/house-clean.jpg"
                  alt="Now That's Clean professional cleaning technician preparing a home in Oakland County"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80';
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-white/20 pointer-events-none" />

                {/* Micro badge 1: Live Status */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-cyan-400/50 rounded-xl py-2 px-3 flex items-center gap-2 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-slate-900">Metro Detroit Active Dispatch</span>
                </div>

                {/* Micro badge 2: Starting rates Glass Panel */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-cyan-400/50 rounded-2xl p-4 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Client Favorite
                    </span>
                    <span className="font-heading font-extrabold text-slate-900 text-base">
                      3 Rooms Clean $150
                    </span>
                  </div>
                  <a
                    href={BUSINESS_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold text-xs border border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all"
                  >
                    Book Now
                  </a>
                </div>
              </div>

              {/* Decorative floating micro-icon element */}
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-slate-900 text-cyan-300 flex items-center justify-center shadow-lg border-2 border-white transform -rotate-6">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: SPECIAL PROMOTIONS & DEEP CLEANING BENEFIT CALLOUT
          ========================================================================= */}
      <section className="py-8 bg-gradient-to-r from-cyan-900 via-slate-900 to-cyan-950 text-white border-b border-cyan-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Promo 1: Deep Clean Benefit */}
            <div className="flex items-center gap-3.5 bg-white/10 p-3.5 rounded-2xl border border-cyan-400/30">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <span className="text-amber-300 font-extrabold text-xs uppercase tracking-wide block">
                  Deep Clean Exclusive Free Gift
                </span>
                <p className="text-xs text-slate-200">
                  Free choice of: Inside refrigerator, Baseboards, or Inside stove!
                </p>
              </div>
            </div>

            {/* Promo 2: First-Time Clients */}
            <div className="flex items-center gap-3.5 bg-white/10 p-3.5 rounded-2xl border border-cyan-400/30">
              <div className="w-10 h-10 rounded-xl bg-cyan-400 text-slate-950 flex items-center justify-center shrink-0 font-bold">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-cyan-300 font-extrabold text-xs uppercase tracking-wide block">
                  Client Promo Codes
                </span>
                <p className="text-xs text-slate-200">
                  Use <strong>FIRST TIME</strong> ($20–$30 OFF) or <strong>NTC</strong> ($10 OFF)
                </p>
              </div>
            </div>

            {/* Promo 3: Square Payment Policy */}
            <div className="flex items-center gap-3.5 bg-white/10 p-3.5 rounded-2xl border border-cyan-400/30">
              <div className="w-10 h-10 rounded-xl bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0 font-bold">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <span className="text-emerald-300 font-extrabold text-xs uppercase tracking-wide block">
                  Square Tap to Pay Accepted
                </span>
                <p className="text-xs text-slate-200">
                  Cash is NOT accepted. Secure contactless payment at completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRUST / QUICK BENEFITS
          ========================================================================= */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100/90 hover:border-cyan-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-lg text-slate-900 mb-1.5">
                Concierge Detail
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Meticulous room-by-room attention ensuring living areas, kitchens, bathrooms, and baseboards are sanitized.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100/90 hover:border-cyan-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-lg text-slate-900 mb-1.5">
                Presence Optional
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                You do not need to be present while we clean, provided access has been arranged. Enjoy your free time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100/90 hover:border-cyan-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-lg text-slate-900 mb-1.5">
                Professional Supplies
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We bring commercial-grade disinfectants, microfiber, and HEPA vacuums. Fresh and sanitized for every visit.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100/90 hover:border-cyan-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-lg text-slate-900 mb-1.5">
                Residential & Commercial
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Serving apartments, multi-story houses, offices, daycares, post-construction sites, and laundry pickups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: PREPARING FOR YOUR CLEANING CHECKLIST
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-bold border border-cyan-200 mb-3">
                <ListChecks className="w-4 h-4 text-cyan-600" />
                <span>Client Protocol</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-950 tracking-tight">
                Preparing for Your Cleaning Checklist
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                To help our cleaners achieve the best possible result, please review these quick preparation steps:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white font-bold text-sm flex items-center justify-center mb-3">
                  1
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-sm mb-1">
                  Confirm Booking Info
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verify your address, contact number, access instructions, and entry codes prior to our arrival.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white font-bold text-sm flex items-center justify-center mb-3">
                  2
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-sm mb-1">
                  Remove Clutter & Mats
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear floors, countertops, and remove bathroom rugs so our team can immediately reach all surface areas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white font-bold text-sm flex items-center justify-center mb-3">
                  3
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-sm mb-1">
                  Secure Pets
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ensure dogs and cats are safely crated or comfortably placed in a non-serviced room for their safety.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white font-bold text-sm flex items-center justify-center mb-3">
                  4
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-sm mb-1">
                  Power & Hot Water
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Active electricity and running hot water are required to operate vacuums and achieve sanitizing temperatures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: POPULAR SERVICES
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100/60 px-3 py-1 rounded-full">
              What We Do
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-3 mb-3">
              Popular Verified Services & Base Rates
            </h2>
            <p className="text-slate-600 text-base">
              Explore our core cleaning solutions designed for homes, apartments, rentals, and offices across Oakland County and Metro Detroit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={`${service.title} - Now That's Clean in Oakland County & Metro Detroit`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  {service.popularBadge && (
                    <span className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-xs text-cyan-300 font-bold text-xs px-2.5 py-1 rounded-full border border-cyan-400">
                      {service.popularBadge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-xs font-medium text-cyan-300 block">Base Rate</span>
                    <span className="font-heading font-extrabold text-lg">{service.startingPrice}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-xs font-bold text-slate-900 group-hover:text-cyan-600 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={BUSINESS_INFO.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 font-bold text-xs transition-colors border border-cyan-400"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-sm tracking-wide transition-all shadow-sm cursor-pointer"
            >
              <span>View All 10 Cleaning Services & Base Rates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-heading font-bold text-sm tracking-wide transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Appointment on Square</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY CHOOSE US
          ========================================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100/70 px-3 py-1 rounded-full">
                Why Metro Detroit Chooses Us
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Concierge Cleaning That Elevates Your Home
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                At Now That’s Clean, we understand that your home is your sanctuary. We deliver a reliable, detail-focused cleaning experience for clients who value their time, comfort, consistency, and exceptional results.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      Deep Clean First Policy
                    </h3>
                    <p className="text-sm text-slate-600 mt-0.5">
                      First-time clients are strongly encouraged to start with a Deep Cleaning to establish our highest standard of hygiene.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      Free Deep Clean Appliance Choice
                    </h3>
                    <p className="text-sm text-slate-600 mt-0.5">
                      All Deep Cleanings include your complimentary choice of inside refrigerator, baseboards, or inside stove.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      Square Tap to Pay Only
                    </h3>
                    <p className="text-sm text-slate-600 mt-0.5">
                      Contactless, transparent card payment processed through Square. No cash is accepted for staff security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      Oakland County Specialists
                    </h3>
                    <p className="text-sm text-slate-600 mt-0.5">
                      Dedicated to Oakland County and Metro Detroit communities with punctual arrival windows and respect for your property.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side imagery */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/assets/ntc/apartment-clean.jpg"
                  alt="Spotless kitchen and living area cleaned by Now That's Clean"
                  className="rounded-2xl h-64 sm:h-72 w-full object-cover shadow-sm"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80';
                  }}
                />
                <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-cyan-400/30">
                  <span className="text-cyan-300 font-bold text-xs uppercase tracking-wider block mb-1">
                    The Now That’s Clean Standard
                  </span>
                  <p className="text-sm text-slate-300">
                    "Every home is treated with the same meticulous care and precision we would expect for our own."
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:pt-8">
                <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
                  <div className="flex items-center gap-2 text-cyan-900 font-bold text-sm mb-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600" />
                    <span>Quality Protocol Guarantee</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our cleaners follow strict room-by-room protocols to ensure your kitchen, bathrooms, and floors are spotless.
                  </p>
                </div>
                <img
                  src="/assets/ntc/supplies.jpg"
                  alt="Now That's Clean professional cleaning supplies"
                  className="rounded-2xl h-64 sm:h-72 w-full object-cover shadow-sm"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: HOW IT WORKS
          ========================================================================= */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Simple & Transparent
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-3 mb-3">
              How Booking Works
            </h2>
            <p className="text-slate-300 text-base">
              Booking your Oakland County & Metro Detroit cleaning is seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/80 relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-400 font-heading font-extrabold text-lg flex items-center justify-center mb-6">
                  01
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Select Your Base Package
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Choose from our verified base rates (e.g. 3 Rooms $150, Apartment $175+, or House $250+). First-time clients start with Deep Clean.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-cyan-300 flex items-center gap-1">
                <span>Transparent rates on Square</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/80 relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400 text-amber-400 font-heading font-extrabold text-lg flex items-center justify-center mb-6">
                  02
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Customize & Pick Date
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Pick your free Deep Clean gift (Fridge, Baseboards, or Stove) and select your preferred arrival date on our live schedule.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-amber-300 flex items-center gap-1">
                <span>Apply promo code FIRST TIME or NTC</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/80 relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-400 font-heading font-extrabold text-lg flex items-center justify-center mb-6">
                  03
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Enjoy A Spotless Home
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  You do not need to be present if entry is arranged. Review the immaculate results and pay easily via Square Tap to Pay.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-emerald-300 flex items-center gap-1">
                <span>Tap to Pay • No cash</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PRICING PREVIEW
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
              Upfront Base Rates
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-3 mb-3">
              Popular Verified Packages
            </h2>
            <p className="text-slate-600 text-base">
              Clear base rates directly from our booking platform with zero hidden surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPreview.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 border flex flex-col justify-between transition-all ${
                  pkg.isPopular
                    ? 'border-cyan-500 shadow-xl ring-2 ring-cyan-500/20 relative bg-white'
                    : 'border-slate-200 bg-slate-50/70 hover:shadow-lg'
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-900 text-cyan-300 border border-cyan-400 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Client Favorite
                  </span>
                )}

                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">{pkg.tagline}</p>

                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <span className="text-xs text-slate-400 block mb-1">Base Price</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading font-extrabold text-4xl text-slate-900">
                        ${pkg.startingPrice}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block">{pkg.priceNote}</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-sm">
                    {pkg.features.slice(0, 5).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                        <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href={BUSINESS_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-heading font-bold text-sm tracking-wide transition-all text-center block ${
                      pkg.isPopular
                        ? 'bg-slate-900 hover:bg-slate-800 text-white border border-cyan-400 shadow-md'
                        : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                    }`}
                  >
                    {pkg.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('pricing')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-800 hover:border-cyan-600 hover:text-cyan-700 font-bold text-sm transition-colors cursor-pointer"
            >
              <span>View All Packages, Subscriptions & Base Rates Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: SERVICE AREA (Oakland County & Metro Detroit Map)
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-cyan-50/30 to-white text-slate-900 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/80 px-3 py-1 rounded-full border border-cyan-300/60">
              Metro Detroit Coverage
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-3 mb-3">
              Serving Oakland County & Surrounding Cities
            </h2>
            <p className="text-slate-600 text-base">
              Providing reliable, concierge cleaning across Oakland, Wayne, and Macomb counties.
            </p>
          </div>

          <MichiganMapVisual
            onRequestQuote={() => onOpenQuote()}
            onSelectCity={() => {}}
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CLIENT SUCCESS STORIES
          ========================================================================= */}
      <ClientSuccessStories onOpenQuote={onOpenQuote} />

      {/* =========================================================================
          SECTION 9: FAQ
          ========================================================================= */}
      <section id="faq-section" className="py-24 bg-gradient-to-b from-slate-50 via-cyan-50/20 to-white relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-cyan-400/50 shadow-2xs backdrop-blur-md mb-4">
              <Shield className="w-4 h-4 text-cyan-700" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-slate-800">
                Transparent Policies
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Clear answers about Square Tap to Pay, the Deep Cleaning free gift, cancellation policies, and arrival procedures.
            </p>
          </div>

          <FAQAccordion items={FAQ_DATA} onOpenQuote={onOpenQuote} />

          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-cyan-300/50 shadow-xs text-sm text-slate-600">
              <span>Have a specific question about your home or custom scope?</span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="font-heading font-extrabold text-cyan-800 hover:text-cyan-900 inline-flex items-center gap-1.5 underline underline-offset-4"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call the Concierge Line: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FINAL CTA
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-white via-cyan-50/40 to-slate-100/90 text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-12 rounded-3xl bg-white/75 backdrop-blur-xl border-2 border-cyan-400/50 shadow-[0_20px_60px_rgba(6,182,212,0.18)] text-center relative z-10 space-y-6">
          <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-cyan-900 bg-cyan-100/80 px-4 py-1.5 rounded-full border border-cyan-300/60 shadow-2xs">
            Oakland County & Metro Detroit Area
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight">
            Ready for a Cleaner, Fresher Space?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose your cleaning package, select your preferred date, and pay securely via Square Tap to Pay upon completion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold text-base tracking-wide border-2 border-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.35)] hover:shadow-[0_0_24px_rgba(6,182,212,0.55)] transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-cyan-300" />
              <span>BOOK YOUR CLEANING ON SQUARE</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-cyan-400/80 hover:border-cyan-300 font-heading font-bold text-base tracking-wide shadow-[0_0_14px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center gap-2 backdrop-blur-xs"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Concierge: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <p className="text-xs text-slate-500 pt-2 font-medium">
            Oakland County & Metro Detroit Area • Monday–Saturday Service
          </p>
        </div>
      </section>
    </div>
  );
};
