import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  activeTab: 'privacy' | 'terms';
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({
  isOpen,
  activeTab,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {activeTab === 'privacy' ? (
              <Shield className="w-5 h-5 text-cyan-600" />
            ) : (
              <FileText className="w-5 h-5 text-cyan-600" />
            )}
            <h3 className="font-heading font-bold text-xl text-slate-900">
              {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service & Booking Rules'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          {activeTab === 'privacy' ? (
            <>
              <p className="font-semibold text-slate-800">
                Last updated: March 2026 • {BUSINESS_INFO.legalName} ({BUSINESS_INFO.name})
              </p>
              <p>
                At {BUSINESS_INFO.legalName}, we respect your privacy and are committed to protecting any personal information you provide when booking services or scheduling appointments across Oakland County and Metro Detroit.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Information We Collect</h4>
              <p>
                When booking through Square or requesting quotes, we collect details including your name, contact phone number, email address, service address, property layout, and cleaning preferences.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. How We Use Your Information</h4>
              <p>
                We use collected information solely to generate accurate service estimates, dispatch our cleaning team, send appointment confirmations, and provide concierge customer support. We never sell or share your data with third parties.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Home Access & Security</h4>
              <p>
                Any property access codes, smart lock details, or entry instructions provided are kept strictly confidential and accessible only to the designated cleaning technician assigned to your booking.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">4. Contact Us</h4>
              <p>
                For privacy-related questions, contact our Concierge Line at {BUSINESS_INFO.phone} or via email at {BUSINESS_INFO.email}.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-800">
                Last updated: March 2026 • {BUSINESS_INFO.legalName} ({BUSINESS_INFO.name})
              </p>
              <h4 className="font-bold text-slate-900">1. Payment Policy (Square Tap to Pay Only)</h4>
              <p>
                We accept Square Tap to Pay upon completion of the service. <strong>Cash is NOT accepted under any circumstances.</strong>
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. Cancellation Policy</h4>
              <p>
                Same-day cancellations carry a <strong>50% service fee</strong>. Please reschedule at least 24 hours in advance if your schedule changes.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. First-Time Clients Recommendation</h4>
              <p>
                First-time clients are strongly encouraged to start with a <strong>Deep Cleaning</strong> to establish an optimal baseline. All Deep Cleans include a complimentary choice of: inside refrigerator, baseboards, or inside stove.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">4. Homeowner Presence Optional</h4>
              <p>
                Customers do not need to be present while we clean, as long as access instructions (lockbox, garage code, concierge key) have been provided and confirmed in advance.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">5. Base Rates & Estimates</h4>
              <p>
                Base rates displayed on our site and on Square reflect standard residential and commercial layouts. Final pricing is confirmed based on property condition and selected add-ons.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
