import React, { useState } from 'react';
import { FAQItem } from '../types';
import {
  ChevronDown,
  ShieldCheck,
  Sparkles,
  ClipboardCheck,
  DollarSign,
  Calendar,
  Search,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface FAQAccordionProps {
  items: FAQItem[];
  onOpenQuote?: () => void;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, onOpenQuote }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // first two open by default
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'insurance':
        return <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />;
      case 'process':
        return <ClipboardCheck className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />;
      case 'pricing':
        return <DollarSign className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />;
      case 'booking':
        return <Calendar className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'insurance':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-heading font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 border border-emerald-300/60 px-2 py-0.5 rounded-md">
            <ShieldCheck className="w-3 h-3 text-emerald-700" />
            Insurance & Trust
          </span>
        );
      case 'process':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-heading font-extrabold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 border border-cyan-300/60 px-2 py-0.5 rounded-md">
            <ClipboardCheck className="w-3 h-3 text-cyan-700" />
            Cleaning Process
          </span>
        );
      case 'pricing':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-heading font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-2 py-0.5 rounded-md">
            Rates & Estimates
          </span>
        );
      case 'booking':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-heading font-extrabold uppercase tracking-wider text-indigo-800 bg-indigo-100/70 border border-indigo-300/60 px-2 py-0.5 rounded-md">
            Scheduling & Keys
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-heading font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-300/60 px-2 py-0.5 rounded-md">
            Service Policy
          </span>
        );
    }
  };

  // Filter items based on category and search query
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedFilter === 'all' || item.category === selectedFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-7">
      {/* -------------------------------------------------------------
          TRUST HIGHLIGHT PILLS (Directly addressing insurance & processes)
          ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_8px_24px_rgba(6,182,212,0.1)] flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100/80 border border-emerald-300/60 flex items-center justify-center shrink-0 text-emerald-700 shadow-2xs">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-sm text-slate-900 leading-tight">
              $2M Liability & Bonded
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Full coverage protecting your home, fixtures, and commercial property.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_8px_24px_rgba(6,182,212,0.1)] flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-100/80 border border-cyan-300/60 flex items-center justify-center shrink-0 text-cyan-700 shadow-2xs">
            <ClipboardCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-sm text-slate-900 leading-tight">
              45-Point Clean Checklist
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Standardized top-to-bottom methodology verified by an on-site lead.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_8px_24px_rgba(6,182,212,0.1)] flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100/80 border border-amber-300/60 flex items-center justify-center shrink-0 text-amber-700 shadow-2xs">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-sm text-slate-900 leading-tight">
              24-Hour Clean Guarantee
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              If any spot is missed, we return and re-clean it free within 48 hours.
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          FILTER CONTROLS & SEARCH INPUT (Glass Clean Styling)
          ------------------------------------------------------------- */}
      <div className="p-3 sm:p-4 rounded-2xl bg-white/65 backdrop-blur-xl border border-white/90 shadow-[0_8px_30px_rgba(6,182,212,0.1)] flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Category Filter Pills: Sleek Slate-900 with Light Cyan Outlines */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-extrabold transition-all border cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/40 shadow-2xs'
            }`}
          >
            All Questions
          </button>

          <button
            type="button"
            onClick={() => setSelectedFilter('insurance')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-extrabold transition-all border flex items-center gap-1.5 cursor-pointer ${
              selectedFilter === 'insurance'
                ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/40 shadow-2xs'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Insurance & Guarantee</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedFilter('process')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-extrabold transition-all border flex items-center gap-1.5 cursor-pointer ${
              selectedFilter === 'process'
                ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/40 shadow-2xs'
            }`}
          >
            <ClipboardCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Cleaning Process</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedFilter('pricing')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-extrabold transition-all border cursor-pointer ${
              selectedFilter === 'pricing'
                ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/40 shadow-2xs'
            }`}
          >
            Pricing
          </button>

          <button
            type="button"
            onClick={() => setSelectedFilter('booking')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-extrabold transition-all border cursor-pointer ${
              selectedFilter === 'booking'
                ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/40 shadow-2xs'
            }`}
          >
            Booking & Keys
          </button>
        </div>

        {/* Quick Search Input */}
        <div className="relative w-full md:w-56 shrink-0">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-white/90 border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all shadow-2xs"
          />
        </div>
      </div>

      {/* -------------------------------------------------------------
          ACCORDION LIST (Glassmorphic Panels)
          ------------------------------------------------------------- */}
      <div className="space-y-3.5">
        {filteredItems.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200 text-slate-500 text-sm">
            No matching questions found for "{searchQuery}". Try selecting another category or resetting the search.
          </div>
        ) : (
          filteredItems.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                id={`faq-panel-${idx}`}
                className={`rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-xl border ${
                  isOpen
                    ? 'border-cyan-400/80 bg-white/90 shadow-[0_10px_30px_rgba(6,182,212,0.14)] ring-1 ring-cyan-400/30'
                    : 'border-white/80 bg-white/65 hover:bg-white/80 hover:border-cyan-200 shadow-2xs'
                }`}
              >
                <button
                  id={`faq-toggle-${idx}`}
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    {getCategoryIcon(item.category)}
                    <div className="space-y-1.5">
                      {getCategoryBadge(item.category)}
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-950 leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 mt-1 border ${
                      isOpen
                        ? 'rotate-180 bg-slate-900 text-cyan-300 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                        : 'bg-white/80 text-slate-600 border-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pl-12 sm:pl-14 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-cyan-100/70 pt-3">
                    <p className="font-normal">{item.answer}</p>

                    {item.category === 'insurance' && (
                      <div className="mt-4 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between gap-3 text-xs text-emerald-900">
                        <span className="flex items-center gap-1.5 font-bold">
                          <FileText className="w-4 h-4 text-emerald-700" />
                          Certificate of Insurance (COI) available upon booking request
                        </span>
                        {onOpenQuote && (
                          <button
                            type="button"
                            onClick={onOpenQuote}
                            className="font-heading font-extrabold text-emerald-800 hover:text-emerald-950 underline underline-offset-2 shrink-0 cursor-pointer"
                          >
                            Request with Quote
                          </button>
                        )}
                      </div>
                    )}

                    {item.category === 'process' && (
                      <div className="mt-4 p-3 rounded-xl bg-cyan-50/70 border border-cyan-200/80 flex items-center justify-between gap-3 text-xs text-cyan-950">
                        <span className="flex items-center gap-1.5 font-bold">
                          <CheckCircle2 className="w-4 h-4 text-cyan-700" />
                          Color-coded microfiber rags prevent kitchen & bathroom cross-contamination
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
