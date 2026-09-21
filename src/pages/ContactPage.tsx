import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/cleaningData';
import { QuoteForm } from '../components/QuoteForm';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle,
  Calendar,
  CreditCard,
  Instagram,
  Gift,
  ShoppingBag,
  Sparkles
} from 'lucide-react';

interface ContactPageProps {
  initialService?: string;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService, onNavigate }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden mb-12">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-3 py-1.5 rounded-full border border-cyan-800">
            Oakland County & Metro Detroit Area
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white mt-4 mb-4 tracking-tight">
            Connect With Now That’s Clean
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Book directly on our live calendar, request a custom facility consultation, or contact our Concierge team directly.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Contact Details Quick Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1: Phone */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Concierge Line
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 hover:text-cyan-700 transition-colors block"
              >
                {BUSINESS_INFO.phone}
              </a>
              <span className="text-xs text-slate-500 mt-1 block">
                Direct phone support
              </span>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Email Inquiries
              </span>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-cyan-700 transition-colors block break-all"
              >
                {BUSINESS_INFO.email}
              </a>
              <span className="text-xs text-slate-500 mt-1 block">
                Quote replies within 1 hour
              </span>
            </div>
          </div>

          {/* Card 3: Instagram */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Instagram
              </span>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-cyan-700 transition-colors block"
              >
                @{BUSINESS_INFO.instagramHandle}
              </a>
              <span className="text-xs text-slate-500 mt-1 block">
                Before & after reels & tips
              </span>
            </div>
          </div>

          {/* Card 4: Service Area Hub */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Service Hub
              </span>
              <span className="font-heading font-bold text-sm sm:text-base text-slate-900 block">
                {BUSINESS_INFO.address}
              </span>
              <span className="text-xs text-slate-500 mt-1 block">
                Oakland County & Detroit Area
              </span>
            </div>
          </div>
        </div>

        {/* Official Hubs, Referral Program & Etsy Store */}
        <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-cyan-500/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                Official Portals & Rewards
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Client Hub, Referral Rewards & Curated Products
              </h3>
            </div>
            <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full font-semibold self-start sm:self-auto">
              Direct Access
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Schedule Services & Products */}
            <a
              href={BUSINESS_INFO.links.scheduleProducts}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/15 rounded-2xl p-5 flex flex-col justify-between transition-all hover:-translate-y-0.5 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-cyan-500/30 text-cyan-200 px-2 py-0.5 rounded">
                    Linktree Hub
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                  Schedule Services & Products
                </h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Book direct services, view specialty packages, and access client links at linktr.ee/NowThatsClean.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-300">
                <span>linktr.ee/NowThatsClean</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* 2. NTC Referral Program */}
            <a
              href={BUSINESS_INFO.links.referralProgram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-amber-500/20 to-amber-900/20 hover:from-amber-500/30 hover:to-amber-900/30 border border-amber-400/30 rounded-2xl p-5 flex flex-col justify-between transition-all hover:-translate-y-0.5 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
                    <Gift className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-400/30 text-amber-200 px-2 py-0.5 rounded">
                    Earn Points
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                  NTC Referral Program
                </h4>
                <p className="text-xs text-amber-100/80 mt-1.5 leading-relaxed">
                  Join our rewards program. Earn points, credits, and discounts when friends or neighbors book a clean.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-400/20 flex items-center justify-between text-xs font-bold text-amber-300">
                <span>Join Referral Program</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* 3. Budget Friendly Items to Wow Your Client */}
            <a
              href={BUSINESS_INFO.links.etsyShop}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/15 rounded-2xl p-5 flex flex-col justify-between transition-all hover:-translate-y-0.5 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-400/20 text-orange-300 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500/30 text-orange-200 px-2 py-0.5 rounded">
                    Etsy Shop
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-white group-hover:text-orange-300 transition-colors uppercase leading-snug">
                  BUDGET FRIENDLY ITEMS TO WOW YOUR CLIENT
                </h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Cleaning Biz Academy listing: high-impact finishing touches and tools guaranteed to impress your clients.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-orange-300">
                <span>View on Etsy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </div>

        {/* The Main Quote Form Section */}
        <section id="quote-form-section">
          <QuoteForm initialService={initialService} />
        </section>

        {/* Hours & Square Notice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Operating & Cleaning Hours
              </h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Monday – Friday:</span>
                <span className="font-bold text-slate-900">8:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Saturday:</span>
                <span className="font-bold text-slate-900">9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-600 font-medium">Sunday:</span>
                <span className="font-semibold text-slate-400">Commercial / Special appointment</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider mb-2">
                <CreditCard className="w-4 h-4" />
                <span>Square Tap to Pay Only</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl text-white mb-2">
                Payment & Cancellation Policy
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We accept Square Tap to Pay. Cash is NOT accepted. Same-day cancellations carry a 50% service fee. You do not need to be home if access is pre-arranged.
              </p>
            </div>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Directly on Square</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map Hub Component */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md">
          <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                Service Hub & Coverage Zone
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900 mt-2">
                Oakland County & Metro Detroit Area
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                {BUSINESS_INFO.address} • Birmingham, Bloomfield Hills, Troy, Royal Oak, Rochester & Detroit
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Oakland+County,+MI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:text-cyan-700 hover:border-cyan-500 text-xs font-bold transition-colors shrink-0"
            >
              <span>Open in Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative h-[360px] bg-slate-100 overflow-hidden">
            <iframe
              title="Now That's Clean Service Area Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-83.55%2C42.45%2C-83.05%2C42.75&amp;layer=mapnik&amp;marker=42.6000%2C-83.3000"
              className="w-full h-full grayscale-[20%] contrast-[105%]"
            />

            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200 max-w-xs pointer-events-none hidden sm:block">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading font-bold text-sm text-slate-900 block">
                    {BUSINESS_INFO.legalName}
                  </span>
                  <span className="text-xs text-slate-500 block">
                    Oakland County & Metro Detroit Area
                  </span>
                  <div className="flex items-center gap-1 mt-1 text-[11px] font-bold text-emerald-600">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Crews Active in Area</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
