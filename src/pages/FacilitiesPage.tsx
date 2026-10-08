import React, { useState } from 'react';
import { PageTab, FacilityItem } from '../types';
import { FACILITIES_DATA } from '../data/gymData';
import { CheckCircle2, ArrowRight, Sparkles, Shield, ChevronRight } from 'lucide-react';

interface FacilitiesPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (planOrProgram?: string) => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFacilityModal, setSelectedFacilityModal] = useState<FacilityItem | null>(null);

  const categories = [
    { id: 'all', label: '전체 시설' },
    { id: 'weight', label: '웨이트존' },
    { id: 'cardio', label: '유산소존' },
    { id: 'free-weight', label: '프리웨이트존' },
    { id: 'stretching', label: '스트레칭존' },
    { id: 'amenities', label: '샤워 & 편의시설' },
  ];

  const filteredFacilities = selectedCategory === 'all'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((item) => item.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1D63FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Space & Hardware Standards</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          최고의 퍼포먼스를 완성하는<br />
          머슬랩의 프리미엄 시설
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          세계 최고 수준의 인체공학적 머신 라인업과 1인 프라이빗 샤워 부스까지,
          남녀 회원 모두가 쾌적하게 운동에만 몰입할 수 있도록 공간 전체를 디자인했습니다.
        </p>
      </div>

      {/* Category Segmented Controls (Interactive Functional Filter Buttons) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-[#1D63FF] text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Facility Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filteredFacilities.map((facility) => (
          <div
            key={facility.id}
            className="group bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
          >
            <div>
              {/* Image Container with Fallback Protection */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={facility.image}
                  alt={facility.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold text-white bg-black/60 px-3 py-1 rounded-md backdrop-blur-md">
                    {facility.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <span className="text-xs font-mono text-slate-400">
                    {facility.englishName}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                    {facility.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#1D63FF] mt-1">
                    {facility.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {facility.description}
                </p>

                {/* Key Specs */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <p className="text-xs font-semibold text-slate-500">주요 특징 및 하이라이트</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {facility.keySpecs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1D63FF] shrink-0 mt-0.5" />
                        <span className="leading-snug">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended For */}
                <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-700 flex items-start gap-2 border border-slate-200/80">
                  <span className="text-[#1D63FF] font-bold shrink-0">추천 대상:</span>
                  <span>{facility.recommendedFor}</span>
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-4">
              <button
                onClick={() => setSelectedFacilityModal(facility)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-4 transition-colors"
              >
                보유 장비 전체 리스트 보기
              </button>
              <button
                onClick={() => onOpenConsultation(`${facility.name} 투어 문의`)}
                className="px-4 py-2 text-xs font-bold text-white bg-[#1D63FF] hover:bg-[#1554e0] rounded-md transition-colors shadow-xs"
              >
                시설 투어 예약
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Hygiene & Space Guarantee Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D63FF] shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              24시간 항균 환기 및 청결 관리 시스템
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              모든 머신은 매일 살균 소독되며, 1인 샤워실은 매회 청결 점검을 원칙으로 운영됩니다.
              불쾌한 땀 냄새 없이 늘 산뜻한 공기를 유지합니다.
            </p>
          </div>
        </div>
        <button
          onClick={() => onOpenConsultation('시설 무료 체험 및 투어')}
          className="px-6 py-3 text-xs font-bold text-white bg-[#1D63FF] hover:bg-[#1554e0] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-xs"
        >
          직접 방문하여 둘러보기
        </button>
      </div>

      {/* Next Step UX Guide: Facilities -> Programs */}
      <div className="border-t border-slate-200 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono font-bold text-[#1D63FF]">NEXT STEP 02</span>
          <h4 className="text-lg font-bold text-slate-900 mt-0.5">
            시설을 확인하셨다면, 나에게 맞는 프로그램을 알아보세요
          </h4>
          <p className="text-xs text-slate-600 mt-1">
            웨이트 트레이닝부터 체형 교정, 체중 감량, 초보자 루틴까지 준비되어 있습니다.
          </p>
        </div>
        <button
          onClick={() => {
            onNavigate('programs');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors whitespace-nowrap shadow-xs"
        >
          <span>프로그램 둘러보기</span>
          <ArrowRight className="w-4 h-4 text-[#1D63FF]" />
        </button>
      </div>

      {/* Facility Detail Modal */}
      {selectedFacilityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#1D63FF]">
                  {selectedFacilityModal.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {selectedFacilityModal.name} 보유 장비
                </h3>
              </div>
              <button
                onClick={() => setSelectedFacilityModal(null)}
                className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <p className="text-slate-600">
                {selectedFacilityModal.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  주요 보유 머신 & 장비 리스트
                </h4>
                <ul className="space-y-2">
                  {selectedFacilityModal.equipmentList.map((eq, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D63FF]" />
                      <span>{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedFacilityModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                닫기
              </button>
              <button
                onClick={() => {
                  setSelectedFacilityModal(null);
                  onOpenConsultation(`${selectedFacilityModal.name} 장비 체험 문의`);
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#1D63FF] hover:bg-[#1554e0] rounded-md transition-colors shadow-xs"
              >
                이 구역 투어 신청
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
