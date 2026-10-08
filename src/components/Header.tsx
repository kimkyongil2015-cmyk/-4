import React, { useState } from 'react';
import { PageTab } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';
import { MuscleLabLogo } from './MuscleLabLogo';

interface HeaderProps {
  currentPage: PageTab;
  onNavigate: (page: PageTab) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'facilities', label: '시설' },
    { id: 'programs', label: '프로그램' },
    { id: 'pricing', label: '가격' },
    { id: 'reviews', label: '회원 후기' },
    { id: 'location', label: '오시는 길' },
  ];

  const handleNavClick = (page: PageTab) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Official Brand Logo from User Design */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center text-left focus:outline-none transition-transform hover:scale-[1.02] active:scale-[0.98]"
            aria-label="머슬랩 홈으로 이동"
          >
            <MuscleLabLogo className="h-11 sm:h-12" />
          </button>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="메인 내비게이션">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-slate-900 font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1D63FF] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 Primary actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-[#1D63FF] hover:bg-[#1554e0] active:scale-[0.98] rounded-md transition-all whitespace-nowrap shadow-sm shadow-[#1D63FF]/20"
            >
              <span>상담 예약</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#1D63FF] rounded transition-all whitespace-nowrap"
            >
              상담 예약
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 animate-fadeIn shadow-lg">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-3 rounded-md text-left text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-[#1D63FF] font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs bg-blue-50 text-[#1D63FF] px-2 py-0.5 rounded font-semibold">현재 페이지</span>}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-[#1D63FF] hover:bg-[#1554e0] rounded-md transition-colors shadow-sm"
            >
              <span>1:1 맞춤 상담 신청하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
