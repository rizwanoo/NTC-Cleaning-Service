import React, { useState } from 'react';
import { ADDON_SERVICES, BUSINESS_INFO } from '../data/cleaningData';
import {
  Calculator,
  Sparkles,
  Check,
  ArrowRight,
  Phone,
  AlertCircle,
  RefreshCw,
  Home,
  Building,
  Layers,
  Calendar,
  Gift,
  CreditCard,
  Tag
} from 'lucide-react';

interface RealtimeQuoteCalculatorProps {
  onProceedToQuote: (preselectedService: string) => void;
}

export type NTCServiceCategory =
  | '3-rooms'
  | 'apartment-standard'
  | 'apartment-deep'
  | 'house-standard'
  | 'house-deep'
  | 'move-apartment'
  | 'move-house'
  | 'office'
  | 'post-construction'
  | 'laundry';

export const RealtimeQuoteCalculator: React.FC<RealtimeQuoteCalculatorProps> = ({
  onProceedToQuote
}) => {
  const [selectedService, setSelectedService] = useState<NTCServiceCategory>('3-rooms');
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [extraRooms, setExtraRooms] = useState<number>(0);
  const [officeSize, setOfficeSize] = useState<'small' | 'medium' | 'large'>('small');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [deepCleanChoice, setDeepCleanChoice] = useState<string>('Inside refrigerator cleaning');
  const [promoCode, setPromoCode] = useState<string>('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountType: 'fixed' | 'percent'; value: number } | null>(null);
  const [promoMessage, setPromoMessage] = useState<string>('');

  const isDeepClean =
    selectedService === 'apartment-deep' ||
    selectedService === 'house-deep';

  // Toggle add-ons
  const handleAddonToggle = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Reset
  const handleReset = () => {
    setSelectedService('3-rooms');
    setBedrooms(2);
    setExtraRooms(0);
    setOfficeSize('small');
    setSelectedAddons([]);
    setDeepCleanChoice('Inside refrigerator cleaning');
    setPromoCode('');
    setAppliedPromo(null);
    setPromoMessage('');
  };

  // Handle promo code application
  const applyPromo = (codeToApply?: string) => {
    const code = (codeToApply || promoCode).trim().toUpperCase();
    if (!code) return;

    if (code === 'FIRST TIME') {
      setAppliedPromo({ code: 'FIRST TIME', discountType: 'fixed', value: 20 });
      setPromoMessage('Promo code FIRST TIME applied ($20 OFF)');
    } else if (code === 'NTC') {
      setAppliedPromo({ code: 'NTC', discountType: 'fixed', value: 10 });
      setPromoMessage('Loyalty code NTC applied ($10 OFF)');
    } else if (code === 'NOVDEC') {
      setAppliedPromo({ code: 'NOVDEC', discountType: 'percent', value: 15 });
      setPromoMessage('Holiday appreciation code NOVDEC applied (15% OFF)');
    } else {
      setPromoMessage('Invalid promo code. Try FIRST TIME, NTC, or NOVDEC.');
    }
  };

  // Calculate Real-Time Verified Base Rate
  const calculatePrice = () => {
    let base = 150;
    let serviceLabel = '3 Rooms Only Clean';

    if (selectedService === '3-rooms') {
      base = 150 + extraRooms * 50;
      serviceLabel = `3 Rooms Only Clean ${extraRooms > 0 ? `(+${extraRooms} Extra Rooms)` : ''}`;
    } else if (selectedService === 'apartment-standard') {
      if (bedrooms === 1) base = 175;
      else if (bedrooms === 2) base = 250;
      else base = 265; // 3 BR
      serviceLabel = `Apartment Standard Clean (${bedrooms} BR)`;
    } else if (selectedService === 'apartment-deep') {
      if (bedrooms === 1) base = 300;
      else if (bedrooms === 2) base = 385;
      else base = 475; // 3 BR
      serviceLabel = `Apartment Deep Clean (${bedrooms} BR)`;
    } else if (selectedService === 'house-standard') {
      if (bedrooms <= 2) base = 250;
      else if (bedrooms === 3) base = 295;
      else if (bedrooms === 4) base = 375;
      else base = 395; // 5 BR
      serviceLabel = `House Standard Clean (${bedrooms} BR)`;
    } else if (selectedService === 'house-deep') {
      if (bedrooms <= 2) base = 400;
      else if (bedrooms === 3) base = 475;
      else if (bedrooms === 4) base = 550;
      else base = 650; // 5 BR
      serviceLabel = `House Deep Clean (${bedrooms} BR)`;
    } else if (selectedService === 'move-apartment') {
      if (bedrooms === 1) base = 325;
      else if (bedrooms === 2) base = 400;
      else if (bedrooms === 3) base = 450;
      else base = 500;
      serviceLabel = `Move-In/Out Apartment (${bedrooms} BR)`;
    } else if (selectedService === 'move-house') {
      if (bedrooms <= 2) base = 450;
      else if (bedrooms === 3) base = 550;
      else if (bedrooms === 4) base = 600;
      else base = 700;
      serviceLabel = `Move-In/Out House (${bedrooms} BR)`;
    } else if (selectedService === 'office') {
      if (officeSize === 'small') base = 200;
      else if (officeSize === 'medium') base = 300;
      else base = 400;
      serviceLabel = `Office / Daycare Cleaning (${officeSize.toUpperCase()})`;
    } else if (selectedService === 'post-construction') {
      if (bedrooms === 1) base = 300;
      else if (bedrooms === 2) base = 400;
      else base = 500;
      serviceLabel = `Post-Construction Clean (${bedrooms} BR)`;
    } else if (selectedService === 'laundry') {
      base = 45;
      serviceLabel = 'Laundry Service Pickup ($45 base / $1.25 lb)';
    }

    // Addons
    const addonsTotal = selectedAddons.reduce((acc, addonId) => {
      const found = ADDON_SERVICES.find((a) => a.id === addonId);
      return acc + (found ? found.price : 0);
    }, 0);

    const subtotal = base + addonsTotal;

    // Promo discount calculation
    let discountAmount = 0;
    if (appliedPromo) {
      if (appliedPromo.discountType === 'fixed') {
        discountAmount = appliedPromo.value;
      } else {
        discountAmount = Math.round((subtotal * appliedPromo.value) / 100);
      }
    }

    const finalRate = Math.max(0, subtotal - discountAmount);

    return {
      base,
      serviceLabel,
      addonsTotal,
      discountAmount,
      finalRate
    };
  };

  const estimate = calculatePrice();

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Calculator Header Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Verified Base Rates Estimator</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Instant Pricing & Base Rates Calculator
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              See the exact verified rates from our booking schedule for Oakland County & Metro Detroit.
            </p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Selections</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* =====================================================================
              LEFT COLUMN: Interactive Form Inputs
              ===================================================================== */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Desired Service Selection */}
            <div>
              <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                <span>1. Select Service Category</span>
                <span className="text-[11px] font-normal text-slate-500">Verified Base Rates</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: '3-rooms', label: '3 Rooms Only Clean', note: '$150 Flat Base (Client Favorite)' },
                  { id: 'apartment-standard', label: 'Apartment Standard Clean', note: '1–3 BR ($175 – $265)' },
                  { id: 'apartment-deep', label: 'Apartment Deep Clean', note: '1–3 BR ($300 – $475) + Free Choice' },
                  { id: 'house-standard', label: 'House Standard Clean', note: '2–5 BR ($250 – $395)' },
                  { id: 'house-deep', label: 'House Deep Clean', note: '2–5 BR ($400 – $650) + Free Choice' },
                  { id: 'move-apartment', label: 'Move In/Out Apartment', note: 'Studio–4 BR ($275 – $500)' },
                  { id: 'move-house', label: 'Move In/Out House', note: '2–5 BR ($450 – $700)' },
                  { id: 'office', label: 'Office / Daycare Clean', note: 'Small–Large ($200 – $400)' },
                  { id: 'post-construction', label: 'Post-Construction Clean', note: '1–3 BR ($300 – $500)' },
                  { id: 'laundry', label: 'Laundry Service Pickup', note: '$45 Base ($1.25/lb)' }
                ].map((s) => {
                  const isSelected = selectedService === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      id={`calc-service-${s.id}`}
                      onClick={() => setSelectedService(s.id as NTCServiceCategory)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-cyan-600 bg-cyan-50/80 shadow-xs ring-2 ring-cyan-500/20'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-bold leading-tight ${
                          isSelected ? 'text-cyan-950' : 'text-slate-900'
                        }`}>
                          {s.label}
                        </span>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-cyan-600 text-white flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </div>
                      <span className="text-[11px] text-cyan-800 font-medium block">
                        {s.note}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Special Highlight for Deep Clean: Free Choice */}
            {isDeepClean && (
              <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-sm animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-amber-900 font-heading font-extrabold text-xs uppercase tracking-wide mb-2">
                  <Gift className="w-4 h-4 text-amber-600" />
                  <span>Deep Cleaning Exclusive Benefit: Pick 1 FREE Option</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Inside refrigerator cleaning',
                    'Baseboards cleaning',
                    'Inside stove cleaning'
                  ].map((choice) => (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => setDeepCleanChoice(choice)}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        deepCleanChoice === choice
                          ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                          : 'bg-white text-slate-800 border-amber-200 hover:bg-amber-100/50'
                      }`}
                    >
                      ✓ {choice}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Layout / Size adjustments */}
            {selectedService === '3-rooms' ? (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Additional Rooms ($50 each): {extraRooms}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    {extraRooms > 0 ? `+$${extraRooms * 50}` : '3 rooms included'}
                  </span>
                </div>
                <div className="flex gap-2">
                  {[0, 1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setExtraRooms(num)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        extraRooms === num
                          ? 'bg-cyan-600 text-white shadow-2xs'
                          : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {num === 0 ? 'None' : `+${num} Room${num > 1 ? 's' : ''}`}
                    </button>
                  ))}
                </div>
              </div>
            ) : selectedService === 'office' ? (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block mb-2">
                  Facility Square Footage
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'small', label: 'Small Office', size: '1,000–2,000 sq ft ($200)' },
                    { id: 'medium', label: 'Medium Office', size: '2,000–4,000 sq ft ($300)' },
                    { id: 'large', label: 'Large Office', size: '5,000+ sq ft ($400)' }
                  ].map((o) => (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => setOfficeSize(o.id as any)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                        officeSize === o.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                      }`}
                    >
                      <div>{o.label}</div>
                      <div className="text-[10px] font-normal opacity-80 mt-0.5">{o.size}</div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Select Bedroom Count: {bedrooms} BR
                  </span>
                  <span className="text-xs text-cyan-800 font-semibold">
                    Changes base rate package
                  </span>
                </div>
                <div className="flex gap-2">
                  {(selectedService.includes('house') ? [2, 3, 4, 5] : [1, 2, 3, 4]).map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setBedrooms(num)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        bedrooms === num
                          ? 'bg-cyan-600 text-white shadow-2xs'
                          : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {num} Bedroom{num > 1 ? 's' : ''}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Add-on Services Selection */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  3. Verified Add-On Services (Optional)
                </label>
                <span className="text-xs text-slate-500 font-medium">
                  {selectedAddons.length} selected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
                {ADDON_SERVICES.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      id={`calc-addon-${addon.id}`}
                      onClick={() => handleAddonToggle(addon.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-50/70 shadow-2xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-cyan-600 border-cyan-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <div>
                          <span className={`text-xs font-bold block ${isSelected ? 'text-cyan-950' : 'text-slate-800'}`}>
                            {addon.name}
                          </span>
                          <span className="text-[10px] text-slate-500 block truncate max-w-[140px]">
                            {addon.description}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-cyan-800 bg-cyan-100/70 px-2 py-0.5 rounded ml-2 shrink-0">
                        +${addon.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Client Promo Code Input */}
            <div className="pt-2 border-t border-slate-200">
              <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
                4. Client Offers & Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. FIRST TIME, NTC, or NOVDEC"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono uppercase focus:outline-none focus:border-cyan-600"
                />
                <button
                  type="button"
                  onClick={() => applyPromo()}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Apply Code
                </button>
              </div>

              {promoMessage && (
                <p className="text-xs mt-1.5 font-semibold text-cyan-700">{promoMessage}</p>
              )}

              {/* Quick Click Code Pills */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setPromoCode('FIRST TIME');
                    applyPromo('FIRST TIME');
                  }}
                  className="text-[10px] font-bold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-2 py-0.5 rounded cursor-pointer"
                >
                  ⚡ New Client: 'FIRST TIME' ($20–$30 OFF)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPromoCode('NTC');
                    applyPromo('NTC');
                  }}
                  className="text-[10px] font-bold bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 px-2 py-0.5 rounded cursor-pointer"
                >
                  ⚡ Existing: 'NTC' ($10 OFF)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPromoCode('NOVDEC');
                    applyPromo('NOVDEC');
                  }}
                  className="text-[10px] font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded cursor-pointer"
                >
                  ⚡ Nov/Dec: 'NOVDEC' (15% OFF)
                </button>
              </div>
            </div>
          </div>

          {/* =====================================================================
              RIGHT COLUMN: Real-Time Dynamic Price Display & Booking Link
              ===================================================================== */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl sticky top-28">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-cyan-400" />
                  <span className="font-heading font-bold text-sm tracking-wide">
                    Live Verified Rate
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                  Acuity / Square Rates
                </span>
              </div>

              {/* Price display */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-slate-400 block mb-1">
                  Estimated Base Total:
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-heading font-extrabold text-cyan-400">
                    ${estimate.finalRate}
                  </span>
                  {estimate.discountAmount > 0 && (
                    <span className="text-lg text-slate-400 line-through">
                      ${estimate.base + estimate.addonsTotal}
                    </span>
                  )}
                </div>
                {estimate.discountAmount > 0 && (
                  <div className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
                    <Tag className="w-3 h-3" />
                    <span>Includes ${estimate.discountAmount} promo discount</span>
                  </div>
                )}
              </div>

              {/* Itemized Estimate Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Service:</span>
                  <span className="font-semibold text-white text-right max-w-[200px] truncate">{estimate.serviceLabel}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Base Rate:</span>
                  <span className="font-semibold text-white">${estimate.base}</span>
                </div>
                {isDeepClean && (
                  <div className="flex justify-between items-center text-amber-300 font-bold">
                    <span>Free Deep Clean Gift:</span>
                    <span>{deepCleanChoice}</span>
                  </div>
                )}
                {selectedAddons.length > 0 && (
                  <div className="pt-2 border-t border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-400">Add-ons ({selectedAddons.length}):</span>
                      <span className="font-bold text-cyan-300">+${estimate.addonsTotal}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {selectedAddons
                        .map((id) => ADDON_SERVICES.find((a) => a.id === id)?.name)
                        .filter(Boolean)
                        .join(', ')}
                    </p>
                  </div>
                )}
              </div>

              {/* Payment & Cancellation Notice */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 mb-6 space-y-1 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5 font-bold text-cyan-300">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Square Tap to Pay Accepted (Cash Not Accepted)</span>
                </div>
                <p className="text-slate-400">
                  Same-day cancellations are subject to a 50% service fee. First-time clients are strongly encouraged to start with a Deep Cleaning.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  id="calc-book-square-btn"
                  href={BUSINESS_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-heading font-extrabold text-sm tracking-wide uppercase transition-all shadow-md hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>Book Cleaning on Square</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  id="calc-concierge-call-btn"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Call the Concierge Line: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
