import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/cleaningData';
import {
  Sparkles,
  MapPin,
  Heart,
  ShieldCheck,
  Phone,
  ArrowRight,
  Eye,
  Check,
  Calendar,
  CreditCard,
  Gift
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuote: () => void;
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden mb-12">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 via-slate-700 to-cyan-400 p-0.5 shadow-xl overflow-hidden mb-4">
            <img
              src={BUSINESS_INFO.logoExternalUrl}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = BUSINESS_INFO.logoUrl;
              }}
              referrerPolicy="no-referrer"
              alt="Now That’s Clean (NTC) Official Logo"
              className="w-full h-full object-cover rounded-[14px] bg-white"
            />
          </div>
          <br />
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-3 py-1.5 rounded-full border border-cyan-800">
            About Now That’s Clean (NTC)
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white mt-4 mb-4 tracking-tight">
            Concierge Standard. Impeccable Detail.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Now That’s Clean delivers a reliable, detail-focused cleaning experience for clients across Oakland County and Metro Detroit who value their time, comfort, consistency, and exceptional results.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Brand Story & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Our Story
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Rooted in Oakland County & Metro Detroit
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                From Birmingham and Bloomfield Hills to Troy, Royal Oak, Rochester, and Detroit, keeping up with active family calendars and professional workspaces leaves little time for deep sanitizing and housekeeping.
              </p>
              <p>
                We established Now That’s Clean to create a premier cleaning experience that homeowners, apartment residents, and corporate facilities can depend on. No surprise charges, no cash handoffs, and no rushed shortcuts.
              </p>
              <p>
                We process all payments safely via Square Tap to Pay upon completion, reward first-time clients with free appliance gifts on Deep Cleans, and provide direct online booking so you can secure a spot on our live calendar in under 60 seconds.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                MI
              </div>
              <div>
                <span className="font-heading font-bold text-slate-900 text-sm block">
                  Service Area Hub
                </span>
                <span className="text-xs text-slate-500">
                  Oakland County & Metro Detroit Area, Michigan
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="/assets/ntc/house-clean.jpg"
              alt="Now That's Clean professional cleaning technician preparing a home in Oakland County"
              className="rounded-3xl h-64 sm:h-80 w-full object-cover shadow-md"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80';
              }}
            />
            <div className="space-y-4">
              <img
                src="/assets/ntc/apartment-clean.jpg"
                alt="Now That's Clean spotless living space in Metro Detroit"
                className="rounded-3xl h-44 sm:h-52 w-full object-cover shadow-sm"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80';
                }}
              />
              <div className="bg-slate-900 text-white rounded-2xl p-5 text-xs space-y-2 border border-cyan-400/30">
                <span className="text-cyan-300 font-bold uppercase tracking-wider block">
                  The NTC Commitment
                </span>
                <p className="text-slate-300 leading-snug">
                  Providing Metro Detroit residences and businesses with transparent, reliable, high-standard service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl text-slate-900 mb-3">
                Our Mission
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To elevate the standard of cleanliness and hygiene across Oakland County and Metro Detroit homes, allowing individuals and families to focus on what matters most while returning to a fresh, healthy sanctuary.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-cyan-700 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Reliable • Punctual • Respectful</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl text-slate-900 mb-3">
                Our Approach
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We take an intentional, structured approach to every visit. Using standardized room checklists, dedicated equipment, and commercial sanitizers, we ensure countertops, appliances, floors, and baseboards are immaculate.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-amber-700 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Deep Clean First Standard</span>
            </div>
          </div>
        </div>

        {/* What You Can Expect Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
              Service Standards
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-3 mb-3">
              What You Can Expect
            </h2>
            <p className="text-slate-300 text-base">
              Every client interaction and service visit is held to our five core service principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-1">
                Presence Optional
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                You do not need to be home while we clean as long as access instructions are confirmed.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-1">
                Square Tap to Pay
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Contactless, transparent card payment processed through Square. No cash is accepted.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Gift className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-1">
                Free Deep Clean Choice
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Choose inside refrigerator, baseboards, or inside stove as your complimentary Deep Clean gift.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-1">
                Transparent Base Rates
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clear base pricing (e.g. 3 Rooms $150, 1BR $175, 2BR $250) with promo code support.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-1">
                Concierge Line
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct phone assistance at 346-491-1010 for inquiries, scheduling, and commercial quotes.
              </p>
            </div>
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold text-sm tracking-wide uppercase transition-all shadow-md inline-flex items-center justify-center gap-2 border-2 border-cyan-400"
            >
              <Calendar className="w-4 h-4 text-cyan-300" />
              <span>Book on Square Calendar</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-extrabold text-sm tracking-wide uppercase transition-all inline-flex items-center justify-center gap-2 border border-white/20"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              <span>Call Concierge: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
