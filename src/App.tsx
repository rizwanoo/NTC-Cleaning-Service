import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [privacyModalState, setPrivacyModalState] = useState<{
    isOpen: boolean;
    tab: 'privacy' | 'terms';
  }>({
    isOpen: false,
    tab: 'privacy'
  });

  // Support URL hash synchronization for deep linking and browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'pricing', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    // On initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    navigateTo('contact');

    // Smooth scroll down to quote form section if on contact page
    setTimeout(() => {
      const el = document.getElementById('quote-form-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuote={handleOpenQuote}
      />

      {/* Page Views */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenQuote={handleOpenQuote}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onOpenQuote={handleOpenQuote}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenQuote={() => handleOpenQuote()}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialService={preselectedService}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Site Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenPrivacyModal={(tab) => setPrivacyModalState({ isOpen: true, tab })}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsAppButton />

      {/* High-Converting Mobile Sticky Bar */}
      <MobileStickyBar onOpenQuote={() => handleOpenQuote()} />

      {/* Privacy & Terms Modal */}
      <PrivacyTermsModal
        isOpen={privacyModalState.isOpen}
        activeTab={privacyModalState.tab}
        onClose={() => setPrivacyModalState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
