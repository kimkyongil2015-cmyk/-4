import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { HomePage } from './pages/HomePage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { PricingPage } from './pages/PricingPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { LocationPage } from './pages/LocationPage';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageTab>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPlan, setConsultationPlan] = useState('');

  // Synchronize state with URL hash for true multi-page UX and browser history support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageTab;
      const validTabs: PageTab[] = ['home', 'facilities', 'programs', 'pricing', 'reviews', 'location'];
      if (validTabs.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: PageTab) => {
    setCurrentPage(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (planOrProgram?: string) => {
    setConsultationPlan(planOrProgram || '');
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-[#1D63FF] selection:text-white">
      
      {/* 3-Zone Top Navigation Contract Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {currentPage === 'facilities' && (
          <FacilitiesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {currentPage === 'programs' && (
          <ProgramsPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {currentPage === 'pricing' && (
          <PricingPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {currentPage === 'reviews' && (
          <ReviewsPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {currentPage === 'location' && (
          <LocationPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
      </main>

      {/* Floating Quick Consultation Button */}
      <aside aria-label="Quick booking action" className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => handleOpenConsultation()}
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#1D63FF] hover:bg-[#1554e0] active:scale-95 text-white font-bold text-xs tracking-wider rounded-full shadow-[0_4px_25px_rgba(29,99,255,0.35)] transition-all"
          aria-label="상담 문의 열기"
        >
          <MessageSquare className="w-4 h-4 fill-white text-white" />
          <span className="hidden sm:inline">빠른 상담 문의</span>
        </button>
      </aside>

      {/* Global Consultation & Price Inquiry Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultPlanOrProgram={consultationPlan}
      />

      {/* Quiet, Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

    </div>
  );
}
