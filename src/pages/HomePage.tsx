import React from 'react';
import { PageTab } from '../types';
import { HERO_IMAGE, FACILITIES_DATA, REVIEWS_DATA } from '../data/gymData';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (planOrProgram?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  const steps: { number: string; title: string; desc: string; targetTab: PageTab; actionText: string }[] = [
    {
      number: '01',
      title: '시설 탐색',
      desc: '해머스트렝스·엘리코 완비 및 호텔급 1인 프라이빗 샤워 부스',
      targetTab: 'facilities',
      actionText: '시설 둘러보기',
    },
    {
      number: '02',
      title: '프로그램 선택',
      desc: '웨이트, 체형 교정, 체중 감량, 초보자 입문 등 맞춤 솔루션',
      targetTab: 'programs',
      actionText: '프로그램 보기',
    },
    {
      number: '03',
      title: '이용권 & 가격',
      desc: '불필요한 거품 없는 정직하고 투명한 1:1 맞춤 견적 확인',
      targetTab: 'pricing',
      actionText: '가격 안내 보기',
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        {/* Full Unobstructed Hero Image Banner without text obstruction */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[45vh] sm:min-h-[65vh] max-h-[80vh] overflow-hidden bg-slate-100">
          <img
            src={HERO_IMAGE}
            alt="머슬랩 프리미엄 피트니스 클럽"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Core CTA Action Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-[#1D63FF] hover:bg-[#1554e0] active:scale-[0.98] rounded-lg transition-all shadow-md shadow-[#1D63FF]/25 flex items-center gap-2 whitespace-nowrap"
            >
              <span>상담 문의 및 무료 투어</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={() => onNavigate('facilities')}
              className="px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-lg transition-all shadow-xs whitespace-nowrap"
            >
              시설 둘러보기
            </button>

            <button
              onClick={() => onNavigate('programs')}
              className="px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-all shadow-xs whitespace-nowrap"
            >
              프로그램 보기
            </button>
          </div>
        </div>
      </section>

      {/* 2. UX JOURNEY FLOW: 시설 → 프로그램 → 가격 → 회원 후기 → 위치 → 상담 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#1D63FF] tracking-widest uppercase">
            Customer Journey Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            머슬랩을 처음 방문하셨나요?
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            시설부터 프로그램, 가격까지 머슬랩의 핵심 가치를 한눈에 확인하고 첫 운동을 계획해보세요.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {steps.map((step) => {
            return (
              <div
                key={step.number}
                className="group relative bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md rounded-xl p-4 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-[#1D63FF] tracking-wider">
                      STEP {step.number}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono hidden xs:inline sm:inline">ML</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 group-hover:text-[#1D63FF] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-2 sm:mt-2.5 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      if (step.targetTab === 'home') {
                        onOpenConsultation();
                      } else {
                        onNavigate(step.targetTab);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="w-full flex items-center justify-between text-[11px] sm:text-xs font-semibold text-slate-700 group-hover:text-[#1D63FF] transition-colors"
                  >
                    <span className="truncate">{step.actionText}</span>
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-[#1D63FF] transition-transform group-hover:translate-x-1 shrink-0 ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FACILITIES SNEAK PEEK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-[#1D63FF] uppercase tracking-wider">
              Space & Atmosphere
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              머슬랩의 프리미엄 시설
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              최고의 몰입감을 위해 조도, 환기, 바닥 충격 흡수재까지 섬세하게 설계된 공간입니다.
            </p>
          </div>
          <button
            onClick={() => onNavigate('facilities')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D63FF] hover:text-blue-800 transition-colors self-start md:self-auto"
          >
            <span>전체 시설 상세 안내 보기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.slice(0, 4).map((facility) => (
            <div
              key={facility.id}
              onClick={() => onNavigate('facilities')}
              className="group cursor-pointer bg-white border border-slate-200 hover:border-slate-300 rounded-xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={facility.image}
                  alt={facility.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                  {facility.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1D63FF] transition-colors">
                  {facility.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {facility.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VERIFIED REVIEWS HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#1D63FF] uppercase tracking-wider">
                Member Reviews
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
                머슬랩 회원들의 솔직한 후기
              </h2>
              <p className="text-xs text-slate-500 mt-2">
                ※ 본 후기는 실제 등록 회원의 피드백을 바탕으로 재구성된 예시 후기입니다.
              </p>
            </div>
            <button
              onClick={() => onNavigate('reviews')}
              className="text-xs font-bold text-[#1D63FF] hover:underline transition-colors"
            >
              회원 후기 전체 보기 →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_DATA.slice(0, 2).map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50 border border-slate-200/90 rounded-xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{rev.authorName}</h4>
                    <p className="text-xs text-slate-500">{rev.authorRole}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <span>★★★★★</span>
                    <span className="text-slate-800 ml-1">5.0</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-800">
                  {rev.highlight}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {rev.reviewText}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/60">
                  {rev.satisfactionPoints.map((pt, i) => (
                    <span key={i} className="text-[11px] text-slate-500">
                      #{pt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
