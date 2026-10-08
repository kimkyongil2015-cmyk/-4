import React from 'react';
import { PageTab } from '../types';
import { LOCATION_INFO } from '../data/gymData';
import { Phone, MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { MuscleLabLogo } from './MuscleLabLogo';

interface FooterProps {
  onNavigate: (page: PageTab) => void;
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (tab: PageTab) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100/90 border-t border-slate-200 text-slate-600">
      {/* Main Footer Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="mb-2">
              <MuscleLabLogo variant="horizontal" className="h-11" />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              머슬랩은 남녀 모두를 위한 모던 프리미엄 피트니스 클럽입니다.
              국제 규격의 명품 머신 라인업과 인체공학적 솔루션으로 안전하고 확실한 신체 변화를 약속합니다.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>상호명: 머슬랩 (MUSCLE LAB) · 대표자: [대표자명 입력란]</p>
              <p>사업자등록번호: [000-00-00000] · 통신판매업신고: [제2026-서울강남-0000호]</p>
            </div>
          </div>

          {/* Col 3: Navigation Menu */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
              메뉴 바로가기
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#1D63FF] transition-colors"
                >
                  HOME
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('facilities')}
                  className="hover:text-[#1D63FF] transition-colors"
                >
                  시설 둘러보기
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programs')}
                  className="hover:text-[#1D63FF] transition-colors"
                >
                  트레이닝 프로그램
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pricing')}
                  className="hover:text-[#1D63FF] transition-colors"
                >
                  이용권 & 가격 안내
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('reviews')}
                  className="hover:text-[#1D63FF] transition-colors"
                >
                  회원 실제 후기
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('location')}
                  className="hover:text-[#1D63FF] transition-colors"
                >
                  오시는 길 & 주차 안내
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Operation Hours */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
              운영 시간
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">평일</p>
                  <p className="text-slate-600">{LOCATION_INFO.operatingHours.weekdays}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">주말 / 공휴일</p>
                  <p className="text-slate-600">{LOCATION_INFO.operatingHours.weekends}</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                {LOCATION_INFO.operatingHours.holidayNotice}
              </p>
            </div>
          </div>

          {/* Col 5: Location & Contact */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
              위치 및 연락처
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">센터 주소</p>
                  <p className="text-slate-600">{LOCATION_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">상담 문의 직통</p>
                  <p className="text-slate-600">{LOCATION_INFO.phone}</p>
                </div>
              </div>
              <div className="pt-1">
                <button
                  onClick={() => handleNav('location')}
                  className="inline-flex items-center text-xs text-[#1D63FF] hover:underline font-semibold"
                >
                  <span>주차 및 대중교통 상세 안내</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>
              본 사이트에 게재된 가격 안내 및 회원 후기는 상담 예약 지원을 위한 예시 안내 및 문의 기반 서비스입니다.
            </span>
          </div>
          <p>© {new Date().getFullYear()} MUSCLE LAB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
