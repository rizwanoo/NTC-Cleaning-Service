import React, { useState } from 'react';
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  Quote,
  Sparkles,
  Home,
  Building2,
  KeyRound,
  MapPin,
  ArrowRight,
  Award,
  Filter
} from 'lucide-react';

export interface SuccessStory {
  id: string;
  author: string;
  role: string;
  neighborhood: string;
  category: 'residential' | 'airbnb' | 'move' | 'commercial';
  categoryLabel: string;
  rating: number;
  date: string;
  resultBadge: string;
  quote: string;
  keyHighlight: string;
  verifiedType: string;
  avatarInitials: string;
  accentColor: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    author: 'Elena & Marcus R.',
    role: 'Homeowners & Parents',
    neighborhood: 'Birmingham, MI',
    category: 'residential',
    categoryLabel: 'Recurring Residential',
    rating: 5,
    date: 'February 2026',
    resultBadge: 'Saved 6+ Hours Every Weekend',
    quote:
      'We set up biweekly cleanings with Now That’s Clean after our baby was born in Birmingham. Their team is punctual, polite, and they never rush through the bathrooms or kitchen. Coming home on cleaning days is the best feeling of the week.',
    keyHighlight: 'Deep bathroom disinfection and pet-safe products',
    verifiedType: 'Verified Homeowner',
    avatarInitials: 'EM',
    accentColor: 'from-cyan-500 to-sky-500'
  },
  {
    id: 'story-2',
    author: 'David P.',
    role: 'Property Manager',
    neighborhood: 'Bloomfield Hills, MI',
    category: 'airbnb',
    categoryLabel: 'Luxury Residence & Turnover',
    rating: 5,
    date: 'January 2026',
    resultBadge: '5.0★ Cleanliness Across 64 Stays',
    quote:
      'I manage corporate furnished units near Bloomfield Hills. Finding a reliable cleaning team that shows up consistently was tough until I found Now That’s Clean. The Square Tap to Pay checkout is effortless and their checklists keep everything immaculate.',
    keyHighlight: 'Complete turnover turnaround and detailed inspection',
    verifiedType: 'Verified Client',
    avatarInitials: 'DP',
    accentColor: 'from-amber-500 to-orange-500'
  },
  {
    id: 'story-3',
    author: 'Christina T.',
    role: 'Relocating Resident',
    neighborhood: 'Royal Oak, MI',
    category: 'move',
    categoryLabel: 'Move-Out & Inspection',
    rating: 5,
    date: 'March 2026',
    resultBadge: '100% Deposit Refunded ($2,400)',
    quote:
      'Booked their Move-Out clean for our townhouse in Royal Oak before closing. The landlord inspected the stove, baseboards, and closets with zero deductions. Transparent pricing with no surprises.',
    keyHighlight: 'Baseboard, oven, and inside-cabinet deep scrubbing',
    verifiedType: 'Verified Tenant',
    avatarInitials: 'CT',
    accentColor: 'from-teal-500 to-emerald-500'
  },
  {
    id: 'story-4',
    author: 'Dr. Aaron V.',
    role: 'Practice Director',
    neighborhood: 'Troy, MI',
    category: 'commercial',
    categoryLabel: 'Medical & Commercial Office',
    rating: 5,
    date: 'February 2026',
    resultBadge: 'Zero Sanitization Audit Flags',
    quote:
      'Our medical office in Troy requires thorough sanitation each week. Now That’s Clean provides detailed documentation, brings clean commercial equipment, and respects our privacy protocols. Excellent local partner.',
    keyHighlight: 'Healthcare-grade surface sanitization & itemized logging',
    verifiedType: 'Verified Commercial Client',
    avatarInitials: 'AV',
    accentColor: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'story-5',
    author: 'Mateo & Sofia L.',
    role: 'Homeowners',
    neighborhood: 'Rochester Hills, MI',
    category: 'residential',
    categoryLabel: 'Deep Cleaning & Appliance Choice',
    rating: 5,
    date: 'March 2026',
    resultBadge: 'Event-Ready in 24 Hours',
    quote:
      'We had family flying into Metro Detroit for an anniversary celebration and needed an intensive deep clean. We chose the inside refrigerator as our free deep-clean gift, and it looked brand new. Guests complimented the fresh scent immediately.',
    keyHighlight: 'Free refrigerator scrub, tile grout, and baseboards',
    verifiedType: 'Verified Homeowner',
    avatarInitials: 'ML',
    accentColor: 'from-indigo-500 to-cyan-500'
  },
  {
    id: 'story-6',
    author: 'Sarah & Keith B.',
    role: 'Dual-Career Family & Pet Owners',
    neighborhood: 'Detroit, MI',
    category: 'residential',
    categoryLabel: 'Weekly Care + Pet Hair Extraction',
    rating: 5,
    date: 'January 2026',
    resultBadge: '100% Pet-Hair Free Furniture',
    quote:
      'With two golden retrievers in the house, our rugs and sofas felt impossible to keep clean. Now That’s Clean transformed our home into an allergen-free sanctuary. Wouldn’t trust anyone else in the Detroit area.',
    keyHighlight: 'Specialized rubber-blade pet hair extraction and upholstery care',
    verifiedType: 'Weekly Recurring Client',
    avatarInitials: 'SB',
    accentColor: 'from-cyan-600 to-teal-500'
  }
];

interface ClientSuccessStoriesProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const ClientSuccessStories: React.FC<ClientSuccessStoriesProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredStories =
    activeCategory === 'all'
      ? SUCCESS_STORIES
      : SUCCESS_STORIES.filter((story) => story.category === activeCategory);

  return (
    <section
      id="client-success-stories"
      className="py-24 bg-gradient-to-b from-white via-cyan-50/30 to-slate-50 relative overflow-hidden border-t border-b border-slate-200/80"
    >
      {/* Ambient Glass Reflections & Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            HEADER & SOCIAL PROOF BADGES
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-cyan-400/50 shadow-2xs backdrop-blur-md mb-4">
            <Sparkles className="w-4 h-4 text-cyan-700" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-slate-800">
              Verified Social Proof
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight mb-4">
            Client Success Stories
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Discover why Oakland County & Metro Detroit homeowners, busy parents, and facility managers trust Now That’s Clean for pristine, dependable care.
          </p>

          {/* Social Proof Metric Bar (Glassmorphic Strip) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 p-3 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_8px_30px_rgba(6,182,212,0.1)]">
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cyan-50/50 border border-cyan-100/80">
              <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-heading font-extrabold text-slate-900 text-base">4.9 / 5.0</span>
              <span className="text-[11px] text-slate-500 font-medium">340+ Verified Reviews</span>
            </div>

            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cyan-50/50 border border-cyan-100/80">
              <div className="flex items-center gap-1 text-cyan-600 mb-0.5">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-heading font-extrabold text-slate-900 text-base">99.4%</span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">On-Time Arrival Rate</span>
            </div>

            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cyan-50/50 border border-cyan-100/80">
              <div className="flex items-center gap-1 text-emerald-600 mb-0.5">
                <Award className="w-4 h-4" />
                <span className="font-heading font-extrabold text-slate-900 text-base">100%</span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">Satisfaction Guarantee</span>
            </div>

            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cyan-50/50 border border-cyan-100/80">
              <div className="flex items-center gap-1 text-cyan-600 mb-0.5">
                <ShieldCheck className="w-4 h-4 text-cyan-700" />
                <span className="font-heading font-extrabold text-slate-900 text-base">Square</span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">Tap to Pay Protection</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FILTER TABS (Sleek Slate-900 with Light Cyan Outlines)
            ========================================================================= */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            id="filter-all-stories"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-heading font-extrabold transition-all border-2 flex items-center gap-2 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/85 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/50 hover:border-cyan-300 shadow-sm'
            }`}
          >
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>All Stories</span>
            <span className="px-1.5 py-0.2 rounded bg-slate-800 text-cyan-300 text-[10px] border border-cyan-400/40">
              {SUCCESS_STORIES.length}
            </span>
          </button>

          <button
            id="filter-residential-stories"
            onClick={() => setActiveCategory('residential')}
            className={`px-4 py-2 rounded-xl text-xs font-heading font-extrabold transition-all border-2 flex items-center gap-2 cursor-pointer ${
              activeCategory === 'residential'
                ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/85 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/50 hover:border-cyan-300 shadow-sm'
            }`}
          >
            <Home className="w-3.5 h-3.5 text-cyan-400" />
            <span>Residential</span>
          </button>

          <button
            id="filter-airbnb-stories"
            onClick={() => setActiveCategory('airbnb')}
            className={`px-4 py-2 rounded-xl text-xs font-heading font-extrabold transition-all border-2 flex items-center gap-2 cursor-pointer ${
              activeCategory === 'airbnb'
                ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/85 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/50 hover:border-cyan-300 shadow-sm'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Turnover & Executive</span>
          </button>

          <button
            id="filter-move-stories"
            onClick={() => setActiveCategory('move')}
            className={`px-4 py-2 rounded-xl text-xs font-heading font-extrabold transition-all border-2 flex items-center gap-2 cursor-pointer ${
              activeCategory === 'move'
                ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/85 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/50 hover:border-cyan-300 shadow-sm'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5 text-cyan-400" />
            <span>Move-Out & Turnaround</span>
          </button>

          <button
            id="filter-commercial-stories"
            onClick={() => setActiveCategory('commercial')}
            className={`px-4 py-2 rounded-xl text-xs font-heading font-extrabold transition-all border-2 flex items-center gap-2 cursor-pointer ${
              activeCategory === 'commercial'
                ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/85 hover:bg-slate-900 text-slate-200 hover:text-white border-cyan-400/50 hover:border-cyan-300 shadow-sm'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Commercial & Office</span>
          </button>
        </div>

        {/* =========================================================================
            GLASSMORPHIC STORY CARDS GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              id={`story-card-${story.id}`}
              className="relative rounded-3xl p-7 bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_12px_36px_rgba(6,182,212,0.12)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.22)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Subtle top iridescent highlight border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-amber-300 opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Decorative subtle background quote watermark */}
              <Quote className="absolute -bottom-4 -right-4 w-28 h-28 text-cyan-500/5 -rotate-12 pointer-events-none" />

              <div>
                {/* Top Card Row: Rating & Result Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-100/70 border border-cyan-300/60 text-cyan-900 text-[11px] font-heading font-extrabold shadow-2xs">
                    <CheckCircle2 className="w-3 h-3 text-cyan-700" />
                    <span>{story.resultBadge}</span>
                  </span>
                </div>

                {/* Customer Review Quote */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                  "{story.quote}"
                </p>

                {/* Specific Highlight / What was done */}
                <div className="mb-6 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-800">Result:</strong> {story.keyHighlight}
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer: Author Profile & Verification */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Initials Avatar with Gradient Ring */}
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${story.accentColor} text-white flex items-center justify-center font-heading font-extrabold text-xs shadow-sm ring-2 ring-white`}
                  >
                    {story.avatarInitials}
                  </div>

                  <div>
                    <span className="font-heading font-extrabold text-sm text-slate-950 block">
                      {story.author}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <MapPin className="w-3 h-3 text-cyan-600 shrink-0" />
                      <span>{story.neighborhood}</span>
                    </div>
                  </div>
                </div>

                {/* Verification Tag */}
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>{story.verifiedType}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5 font-medium">
                    {story.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            BOTTOM CALL TO ACTION (Glass Clean Strip)
            ========================================================================= */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-cyan-400/40 shadow-[0_12px_40px_rgba(6,182,212,0.15)] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-heading font-extrabold text-xl text-slate-950">
              Ready to Experience the Now That’s Clean Standard?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Join hundreds of happy Oakland County & Metro Detroit residents and property managers who enjoy spotless spaces.
            </p>
          </div>

          <button
            id="stories-quote-btn"
            onClick={() => onOpenQuote()}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold text-sm tracking-wide border-2 border-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.35)] hover:shadow-[0_0_22px_rgba(6,182,212,0.55)] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>GET AN ESTIMATE OR BOOK</span>
            <ArrowRight className="w-4 h-4 text-cyan-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
