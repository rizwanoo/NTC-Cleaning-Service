import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/cleaningData';
import { Phone, Menu, X, Sparkles, ArrowRight, ShieldCheck, Star, Calendar, ExternalLink, Gift } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing & Packages' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & Booking' }
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Ambient Announcement Strip (Light Theme) */}
      <div className="bg-gradient-to-r from-cyan-900 via-slate-900 to-cyan-950 text-slate-100 text-xs py-2 px-4 hidden sm:block border-b border-cyan-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold text-white">
              Now That’s Clean • Oakland County & Metro Detroit Area
            </span>
            <span className="text-cyan-500">•</span>
            <span className="text-cyan-200">Tap to Pay via Square (No Cash)</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={BUSINESS_INFO.links.scheduleProducts}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cyan-200 hover:text-white font-medium transition-colors"
              title="Schedule Services & Products on Linktree"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>Linktree Hub</span>
            </a>
            <a
              href={BUSINESS_INFO.links.referralProgram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold transition-colors"
              title="Join NTC Referral Program"
            >
              <Gift className="w-3.5 h-3.5 text-amber-400" />
              <span>Referral Program</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1 text-white hover:text-cyan-200 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Concierge: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Light Navigation Bar */}
      <div
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 shadow-md border-b border-slate-200/90'
            : 'py-3.5 shadow-xs border-b border-slate-200/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Official NTC Logo & Badges */}
            <button
              id="nav-logo-btn"
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-xl p-1 -ml-1 transition-transform hover:scale-[1.01] cursor-pointer"
            >
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 via-slate-800 to-cyan-500 p-0.5 shadow-sm overflow-hidden group-hover:shadow-md transition-all shrink-0">
                <img
                  src={BUSINESS_INFO.logoExternalUrl}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = BUSINESS_INFO.logoUrl;
                  }}
                  referrerPolicy="no-referrer"
                  alt="Now That’s Clean (NTC) Logo"
                  className="w-full h-full object-cover rounded-[14px] bg-white"
                />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-lg sm:text-xl text-slate-950 tracking-tight leading-none group-hover:text-cyan-800 transition-colors">
                    Now That’s Clean
                  </span>
                  <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-cyan-100 text-cyan-800 rounded">
                    Metro Detroit
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mt-0.5">
                  NTC Cleaning Service • Oakland County
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all relative cursor-pointer ${
                      isActive
                        ? 'text-cyan-800 bg-cyan-50/90 font-bold shadow-2xs'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-3.5 right-3.5 h-0.5 bg-cyan-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Phone & Primary Booking CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                id="nav-phone-link"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-cyan-700 transition-colors group"
                title="Call the Concierge Line"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                id="nav-book-btn"
                href={BUSINESS_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 border-2 border-cyan-400"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>Book Your Cleaning</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                id="nav-mobile-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                aria-label="Call Now That's Clean Concierge"
                className="p-2 rounded-xl bg-cyan-50 text-cyan-700 hover:bg-cyan-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                id="nav-hamburger-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Light Theme) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-slate-900 border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 p-2.5 mb-2 bg-gradient-to-r from-cyan-50 to-slate-50 rounded-xl border border-cyan-200/50">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <span className="text-xs font-semibold text-slate-700">
              Oakland County & Metro Detroit • Square Tap to Pay
            </span>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                    isActive ? 'bg-cyan-50 text-cyan-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-600" />}
                </button>
              );
            })}
          </nav>

          {/* Quick External Links in Mobile Drawer */}
          <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 block">
              Official Hubs & Rewards
            </span>
            <a
              href={BUSINESS_INFO.links.scheduleProducts}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-cyan-50 text-slate-800 text-xs font-semibold transition-colors"
            >
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-cyan-600" />
                <span>Schedule Services & Products (Linktree)</span>
              </div>
              <span className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-500 font-bold">linktr.ee</span>
            </a>
            <a
              href={BUSINESS_INFO.links.referralProgram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/70 hover:bg-amber-100/70 text-amber-950 text-xs font-semibold transition-colors"
            >
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-amber-600" />
                <span>NTC Referral Program</span>
              </div>
              <span className="text-[10px] bg-amber-200/80 text-amber-900 px-1.5 py-0.5 rounded font-bold">Earn Rewards</span>
            </a>
            <a
              href={BUSINESS_INFO.links.etsyShop}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold transition-colors"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span>Items to Wow Your Client (Etsy)</span>
              </div>
              <span className="text-[10px] bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded font-bold">Etsy Store</span>
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
            <a
              id="mobile-nav-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 text-slate-900 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>Call Concierge: {BUSINESS_INFO.phone}</span>
            </a>
            <a
              id="mobile-nav-book"
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 border border-cyan-400"
            >
              <Calendar className="w-4 h-4 text-cyan-300" />
              <span>Book Your Cleaning</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-center text-xs text-slate-500">
              Oakland County & Metro Detroit Area • Tap to Pay Accepted
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
