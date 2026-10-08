import React, { useState } from 'react';
import { PageTab, ProgramItem } from '../types';
import { PROGRAMS_DATA } from '../data/gymData';
import { Check, ArrowRight, Sparkles, Target, Zap, Clock, UserCheck } from 'lucide-react';

interface ProgramsPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (planOrProgram?: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedGoalFilter, setSelectedGoalFilter] = useState<string>('all');
  const [activeTabProgram, setActiveTabProgram] = useState<string>(PROGRAMS_DATA[0].id);

  const goalFilters = [
    { id: 'all', label: '전체 프로그램' },
    { id: 'beginner', label: '헬스 초보자' },
    { id: 'posture', label: '체형·자세 교정' },
    { id: 'fat-loss', label: '체중 감량 & 다이어트' },
    { id: 'weight-training', label: '근력 & 바디라인' },
  ];

  const getFilteredPrograms = () => {
    if (selectedGoalFilter === 'beginner') {
      return PROGRAMS_DATA.filter((p) => p.id === 'beginner-program');
    }
    if (selectedGoalFilter === 'posture') {
      return PROGRAMS_DATA.filter((p) => p.id === 'posture-alignment');
    }
    if (selectedGoalFilter === 'fat-loss') {
      return PROGRAMS_DATA.filter((p) => p.id === 'fat-loss');
    }
    if (selectedGoalFilter === 'weight-training') {
      return PROGRAMS_DATA.filter((p) => p.id === 'weight-training' || p.id === 'strength-conditioning');
    }
    return PROGRAMS_DATA;
  };

  const filteredPrograms = getFilteredPrograms();
  const currentActiveProgram = PROGRAMS_DATA.find((p) => p.id === activeTabProgram) || PROGRAMS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1D63FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curriculum & Coaching</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          목표를 현실로 만드는<br />
          머슬랩의 체계적인 운동 프로그램
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          근거 없는 억지 운동이 아닌 해부학과 생리학에 기반한 커리큘럼입니다.
          회원 개개인의 체력 수준, 관절 가동성, 일상 패턴에 맞춰 단계별로 안전하게 진행됩니다.
        </p>
      </div>

      {/* Goal Match Interactive Filter */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              내 운동 목적에 맞는 프로그램 찾기
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              현재 본인의 가장 중요한 운동 관심사를 선택해보세요.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono">5 Specialized Programs</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {goalFilters.map((filter) => {
            const isActive = selectedGoalFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => {
                  setSelectedGoalFilter(filter.id);
                  const first = filter.id === 'all'
                    ? PROGRAMS_DATA[0].id
                    : (filter.id === 'beginner' ? 'beginner-program' : (filter.id === 'posture' ? 'posture-alignment' : (filter.id === 'fat-loss' ? 'fat-loss' : 'weight-training')));
                  setActiveTabProgram(first);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#1D63FF] text-white shadow-xs font-bold'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Programs Detailed Showcase */}
      <div className="space-y-8">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            id={program.id}
            className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 sm:p-10 transition-all duration-300 shadow-xs hover:shadow-md"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              
              {/* Left Column: Core Info */}
              <div className="lg:w-7/12 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-[#1D63FF]">
                      {program.englishTitle}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {program.duration}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5" />
                      {program.level}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {program.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#1D63FF] mt-1.5">
                    {program.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Target Audience */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#1D63FF]" />
                    추천 대상
                  </h4>
                  <ul className="space-y-1.5">
                    {program.targetAudience.map((target, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="text-[#1D63FF] mt-0.5">•</span>
                        <span>{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Effects */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#1D63FF]" />
                    기대 운동 효과
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {program.keyEffects.map((effect, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 p-3 rounded-lg border border-slate-200/80 text-xs text-slate-800 flex items-start gap-2"
                      >
                        <Check className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
                        <span>{effect}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Step Curriculum & Action */}
              <div className="lg:w-5/12 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                      진행 커리큘럼 로드맵
                    </h4>
                    <span className="text-[11px] text-[#1D63FF] font-mono font-bold">4-STAGE FLOW</span>
                  </div>

                  <div className="space-y-3">
                    {program.curriculum.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200/80 shadow-2xs"
                      >
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-[#1D63FF] font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                          {idx + 1}
                        </span>
                        <span className="leading-snug pt-0.5">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
                  <button
                    onClick={() => onOpenConsultation(`${program.title} 프로그램 상담`)}
                    className="w-full py-3 px-4 bg-[#1D63FF] hover:bg-[#1554e0] active:scale-[0.99] text-white font-bold text-xs tracking-wider rounded-lg transition-all text-center flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>{program.title} 1:1 맞춤 상담 신청</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-slate-500 text-center">
                    담당 전담 코치와 일정 조율 및 체형 측정 무료 제공
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Next Step UX Guide: Programs -> Pricing */}
      <div className="border-t border-slate-200 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono font-bold text-[#1D63FF]">NEXT STEP 03</span>
          <h4 className="text-lg font-bold text-slate-900 mt-0.5">
            관심 프로그램을 결정하셨다면, 이용권과 패키지 구성을 확인해보세요
          </h4>
          <p className="text-xs text-slate-600 mt-1">
            머슬랩은 투명한 상담과 맞춤 견적으로 과도한 강요 없이 정직하게 안내합니다.
          </p>
        </div>
        <button
          onClick={() => {
            onNavigate('pricing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors whitespace-nowrap shadow-xs"
        >
          <span>가격 & 이용권 안내 보기</span>
          <ArrowRight className="w-4 h-4 text-[#1D63FF]" />
        </button>
      </div>

    </div>
  );
};
