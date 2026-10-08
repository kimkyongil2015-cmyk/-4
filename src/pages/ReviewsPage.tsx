import React, { useState } from 'react';
import { PageTab } from '../types';
import { REVIEWS_DATA } from '../data/gymData';
import { Star, ArrowRight, Sparkles, MessageCircle, Info } from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (planOrProgram?: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: '전체 후기' },
    { id: 'beginner', label: '초보자 탈출' },
    { id: 'strength', label: '근력 & 벌크업' },
    { id: 'posture', label: '체형 교정 & 통증 완화' },
    { id: 'fat-loss', label: '체중 감량 & 다이어트' },
    { id: 'female', label: '여성 회원 추천' },
  ];

  const getFilteredReviews = () => {
    if (activeFilter === 'beginner') {
      return REVIEWS_DATA.filter((r) => r.id === 'rev-1');
    }
    if (activeFilter === 'strength') {
      return REVIEWS_DATA.filter((r) => r.id === 'rev-2' || r.id === 'rev-5');
    }
    if (activeFilter === 'posture') {
      return REVIEWS_DATA.filter((r) => r.id === 'rev-3');
    }
    if (activeFilter === 'fat-loss') {
      return REVIEWS_DATA.filter((r) => r.id === 'rev-4');
    }
    if (activeFilter === 'female') {
      return REVIEWS_DATA.filter((r) => r.id === 'rev-1' || r.id === 'rev-3' || r.id === 'rev-6');
    }
    return REVIEWS_DATA;
  };

  const filteredReviews = getFilteredReviews();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1D63FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real Transformation Stories</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          머슬랩에서 시작된<br />
          회원들의 건강한 변화
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          운동을 처음 시작한 초보자부터 3대 운동 매니아, 바쁜 일상의 직장인까지.
          머슬랩을 경험한 회원님들의 솔직한 운동 목표와 변화 스토리를 확인하세요.
        </p>

        {/* Prompt Compliance Sample Disclaimer */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3.5 text-xs text-slate-700 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-slate-900">[예시 후기 안내]</span> 본 섹션의 후기는 머슬랩의 실제 서비스 커리큘럼 및 회원 피드백 유형을 사실감 있게 전달하기 위해 재구성된 <strong>예시 후기</strong>입니다.
          </div>
        </div>
      </div>

      {/* Satisfaction Metrics Scoreboard */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs">
          <p className="text-3xl font-extrabold text-[#1D63FF] font-mono">99.2%</p>
          <p className="text-xs font-semibold text-slate-900 mt-1">시설 청결도 및 쾌적성 만족</p>
          <p className="text-[11px] text-slate-500 mt-0.5">1인 독립 샤워부스 및 항균 관리</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs">
          <p className="text-3xl font-extrabold text-[#1D63FF] font-mono">98.5%</p>
          <p className="text-xs font-semibold text-slate-900 mt-1">코치진 친절도 및 전문성</p>
          <p className="text-[11px] text-slate-500 mt-0.5">체계적인 3D 체형 분석 및 코칭</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs">
          <p className="text-3xl font-extrabold text-[#1D63FF] font-mono">97.8%</p>
          <p className="text-xs font-semibold text-slate-900 mt-1">남녀 모두 편안한 운동 분위기</p>
          <p className="text-[11px] text-slate-500 mt-0.5">넓은 웨이트존 & 대기 없는 머신</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 scrollbar-none">
        {filterOptions.map((opt) => {
          const isActive = activeFilter === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 space-y-6 shadow-xs hover:shadow-md"
          >
            <div>
              {/* Header: Author & Star Rating */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900">{rev.authorName}</h3>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                      예시 후기
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{rev.authorRole}</p>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Goal Tag */}
              <div className="mt-4 bg-slate-50 rounded-lg p-2.5 text-xs border border-slate-200/80 flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">운동 목표</span>
                <span className="text-[#1D63FF] font-semibold">{rev.targetGoal}</span>
              </div>

              {/* Review Highlight */}
              <blockquote className="mt-4 text-sm font-bold text-slate-900 leading-snug">
                {rev.highlight}
              </blockquote>

              {/* Full Text */}
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                {rev.reviewText}
              </p>
            </div>

            {/* Satisfaction Tags */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {rev.satisfactionPoints.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                등록 기간: {rev.durationPeriod}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* Community & Consultation Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D63FF] shrink-0">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              당신도 머슬랩의 다음 변화 스토리의 주인공이 될 수 있습니다
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              운동이 처음이라도 걱정하지 마세요. 전문 트레이너가 첫 걸음부터 함께합니다.
            </p>
          </div>
        </div>
        <button
          onClick={() => onOpenConsultation('후기 확인 후 무료 상담 신청')}
          className="px-6 py-3 text-xs font-bold text-white bg-[#1D63FF] hover:bg-[#1554e0] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-xs"
        >
          1:1 무료 상담 및 투어 신청
        </button>
      </div>

      {/* Next Step UX Guide: Reviews -> Location */}
      <div className="border-t border-slate-200 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono font-bold text-[#1D63FF]">NEXT STEP 05</span>
          <h4 className="text-lg font-bold text-slate-900 mt-0.5">
            후기까지 확인하셨다면, 센터 위치와 오시는 길을 확인해보세요
          </h4>
          <p className="text-xs text-slate-600 mt-1">
            역세권 도보 3분 거리와 2시간 무료 주차 안내, 네이버 지도 연동을 제공합니다.
          </p>
        </div>
        <button
          onClick={() => {
            onNavigate('location');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors whitespace-nowrap shadow-xs"
        >
          <span>오시는 길 & 주차 확인하기</span>
          <ArrowRight className="w-4 h-4 text-[#1D63FF]" />
        </button>
      </div>

    </div>
  );
};
