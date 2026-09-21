import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

interface MobileStickyBarProps {
  onOpenQuote: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuote }) => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-lg safe-bottom"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          id="mobile-sticky-call"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs tracking-wide shadow-sm active:scale-[0.98] transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400" />
          <span>CALL CONCIERGE</span>
        </a>

        <a
          id="mobile-sticky-book"
          href={BUSINESS_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold text-xs tracking-wide shadow-sm active:scale-[0.98] transition-transform"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>BOOK CLEANING</span>
        </a>
      </div>
    </aside>
  );
};
