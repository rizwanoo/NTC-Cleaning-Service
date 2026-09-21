import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/cleaningData';
import { Phone, MapPin, Clock, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Instagram, CreditCard, ExternalLink, Gift, ShoppingBag } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPrivacyModal: (tab: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacyModal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-600 pt-16 pb-24 md:pb-16 border-t border-slate-200/90 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            BANNER: NTC Concierge Cleaning Callout
            ========================================================================= */}
        <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                <span>Oakland County & Metro Detroit Premier Care</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-950 tracking-tight">
                Detail-Focused, Concierge-Style Cleaning
              </h3>
              <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
                At Now That’s Clean, we provide a reliable, detail-focused cleaning experience for clients who value their time, comfort, consistency, and exceptional results.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-1">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Free Fridge, Stove, or Baseboard Choice on Deep Clean
                </span>
                <span className="flex items-center gap-1.5 text-cyan-800">
                  <CreditCard className="w-4 h-4 text-cyan-600" />
                  Tap to Pay via Square (No Cash)
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3">
              <a
                href={BUSINESS_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-heading font-extrabold text-sm border-2 border-cyan-400 shadow-md text-center flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
              >
                <span>Book Your Cleaning</span>
                <ArrowRight className="w-4 h-4 text-cyan-300" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 px-5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl font-bold text-xs text-center flex items-center justify-center gap-2 transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>Call the Concierge Line: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FEATURED SITE LINKS & CLIENT REWARDS (Linktree, Referral & Etsy)
            ========================================================================= */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-700 block">
                Official Portals & Rewards
              </span>
              <h4 className="font-heading font-extrabold text-xl text-slate-900 tracking-tight">
                Quick Access Hubs & Client Perks
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Schedule Services & Products */}
            <a
              id="footer-link-schedule-products"
              href={BUSINESS_INFO.links.scheduleProducts}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-slate-50/80 p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-cyan-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded-md border border-cyan-200/60">
                    Linktree Hub
                  </span>
                </div>
                <h5 className="font-heading font-extrabold text-base text-slate-900 group-hover:text-cyan-800 transition-colors">
                  Schedule Services & Products
                </h5>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Book direct appointments, view current cleaning offerings, and explore products at linktr.ee/NowThatsClean.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cyan-700 group-hover:text-cyan-800">
                <span>Open linktr.ee/NowThatsClean</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* 2. NTC Referral Program */}
            <a
              id="footer-link-referral-program"
              href={BUSINESS_INFO.links.referralProgram}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 hover:bg-amber-50/80 p-5 rounded-2xl border border-amber-200/80 shadow-2xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Gift className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md border border-amber-300">
                    Earn Points
                  </span>
                </div>
                <h5 className="font-heading font-extrabold text-base text-slate-900 group-hover:text-amber-900 transition-colors">
                  NTC Referral Program
                </h5>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Earn points and valuable reward credits every time a friend or neighbor books a cleaning with Now That’s Clean.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-xs font-bold text-amber-800 group-hover:text-amber-950">
                <span>Join Referral Rewards</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* 3. Budget Friendly Items to Wow Your Client */}
            <a
              id="footer-link-etsy-wow-items"
              href={BUSINESS_INFO.links.etsyShop}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-slate-50/80 p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-orange-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-orange-50 text-orange-800 px-2 py-0.5 rounded-md border border-orange-200">
                    Etsy Shop
                  </span>
                </div>
                <h5 className="font-heading font-extrabold text-base text-slate-900 group-hover:text-orange-900 transition-colors uppercase leading-snug">
                  BUDGET FRIENDLY ITEMS TO WOW YOUR CLIENT
                </h5>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Cleaning Biz Academy listing: high-impact finishing touches and tools guaranteed to impress your clients.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-700 group-hover:text-orange-800">
                <span>View on Etsy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        {/* =========================================================================
            4-COLUMN FOOTER LINKS
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-slate-800 p-0.5 shadow-xs shrink-0 overflow-hidden">
                <img
                  src={BUSINESS_INFO.logoExternalUrl}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = BUSINESS_INFO.logoUrl;
                  }}
                  referrerPolicy="no-referrer"
                  alt="Now That’s Clean Logo"
                  className="w-full h-full object-cover rounded-[14px] bg-white"
                />
              </div>
              <div>
                <span className="block font-heading font-bold text-slate-900 text-lg tracking-tight">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[11px] font-semibold text-cyan-700 uppercase tracking-wider block">
                  {BUSINESS_INFO.legalName}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Detail-focused concierge residential and commercial cleaning across Oakland County, Michigan and the Metro Detroit Area.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-700 bg-white py-2.5 px-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0" />
              <span className="font-medium">Oakland County & Metro Detroit</span>
            </div>

            <a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-pink-700 hover:text-pink-800 transition-colors bg-pink-50 px-3 py-1.5 rounded-xl border border-pink-200"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Follow @{BUSINESS_INFO.instagramHandle}</span>
            </a>
          </div>

          {/* Col 2: Quick Links & Portals */}
          <div>
            <h3 className="text-slate-900 font-heading font-bold text-base mb-4 tracking-wide">
              Quick Links & Portals
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => handleNav('home')}
                  className="hover:text-cyan-700 font-medium transition-colors focus:outline-none cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors focus:outline-none cursor-pointer"
                >
                  Services & Base Rates
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-pricing"
                  onClick={() => handleNav('pricing')}
                  className="hover:text-cyan-700 font-medium transition-colors focus:outline-none cursor-pointer"
                >
                  Pricing & Packages
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => handleNav('about')}
                  className="hover:text-cyan-700 font-medium transition-colors focus:outline-none cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => handleNav('contact')}
                  className="hover:text-cyan-700 font-medium transition-colors focus:outline-none cursor-pointer"
                >
                  Contact & Booking
                </button>
              </li>
              <li className="pt-2 border-t border-slate-200/80">
                <a
                  href={BUSINESS_INFO.links.scheduleProducts}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 font-bold hover:underline inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Schedule Services & Products</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.links.referralProgram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 font-bold hover:underline inline-flex items-center gap-1.5"
                >
                  <Gift className="w-3.5 h-3.5" />
                  <span>NTC Referral Program</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.links.etsyShop}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 font-bold hover:underline inline-flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Items to Wow Clients (Etsy)</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 font-bold hover:text-cyan-700 inline-flex items-center gap-1"
                >
                  <span>Square Booking Calendar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-slate-900 font-heading font-bold text-base mb-4 tracking-wide">
              Verified Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left cursor-pointer"
                >
                  3 Rooms Only Clean ($150)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left cursor-pointer"
                >
                  Apartment Cleaning ($175+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left cursor-pointer"
                >
                  House Cleaning ($250+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left cursor-pointer"
                >
                  Move In / Move Out ($275+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left cursor-pointer"
                >
                  Office & Daycare Cleaning ($200+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left cursor-pointer"
                >
                  Post Construction ($300+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left cursor-pointer"
                >
                  Laundry Service Pickup ($45 base)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details & Hours */}
          <div>
            <h3 className="text-slate-900 font-heading font-bold text-base mb-4 tracking-wide">
              Contact & Policies
            </h3>
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{BUSINESS_INFO.serviceRegion}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Concierge Line</span>
                  <a
                    id="footer-phone-link"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-slate-900 font-bold hover:text-cyan-700 transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-start gap-2 text-slate-600">
                  <CreditCard className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                  <span>Tap to Pay via Square accepted. Cash not accepted.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Same-day cancellations subject to 50% service fee.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {BUSINESS_INFO.name} ({BUSINESS_INFO.shortName}). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              id="footer-privacy-btn"
              onClick={() => onOpenPrivacyModal('privacy')}
              className="hover:text-cyan-700 font-medium transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              id="footer-terms-btn"
              onClick={() => onOpenPrivacyModal('terms')}
              className="hover:text-cyan-700 font-medium transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
