import React, { useState } from 'react';
import { PageTab, PricingPlan } from '../types';
import { PRICING_PLANS } from '../data/gymData';
import { Check, ArrowRight, Sparkles, HelpCircle, ShieldCheck, MessageSquare } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (planOrProgram?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'membership' | 'pt'>('membership');

  const filteredPlans = activeCategory === 'all'
    ? PRICING_PLANS
    : PRICING_PLANS.filter((plan) => plan.category === activeCategory);

  const includedBenefits = [
    { title: '1인 독립 프라이빗 샤워부스', desc: '호텔급 개별 부스 및 다이슨 헤어드라이어 전석 배치' },
    { title: '인바디 3D 정밀 체형 측정', desc: '체성분 분석 및 관절 가동범위 1:1 맞춤 리포트 제공' },
    { title: '웰컴 머신 오리엔테이션', desc: '전문 코치가 필수 머신 세팅법과 안전 수칙을 직접 1:1 안내' },
    { title: '프리미엄 운동복 & 타월 지원', desc: '매일 살균 세탁된 최고급 코튼 타월과 운동복 무상 대여' },
    { title: '일일 2시간 무료 자주식 주차', desc: '지하 1~3층 여유로운 주차 공간 등록 지원' },
    { title: '자유로운 휴회(홀딩) 제도', desc: '출장, 여행, 부상 시 잔여 기간 걱정 없는 분할 홀딩' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1D63FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Membership & PT Plans</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          목적과 기간에 맞춘<br />
          머슬랩 멤버십 & PT 안내
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          머슬랩은 등록 기간과 개인 운동 목표에 맞춘 맞춤 견적 및 프로모션을 투명하게 안내해드립니다.
          과도한 장기 결제 강요 없이 본인의 일정에 맞는 최적의 플랜을 선택해보세요.
        </p>

        {/* Prompt Compliance Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-slate-700 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#1D63FF] shrink-0" />
          <span>
            머슬랩은 정기 프로모션과 제휴 혜택에 따라 정확한 맞춤 견적을 제공하므로, 아래 [가격 문의] 버튼을 통해 실시간 혜택을 확인하실 수 있습니다.
          </span>
        </div>
      </div>

      {/* Plan Category Filter */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveCategory('membership')}
          className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeCategory === 'membership'
              ? 'bg-[#1D63FF] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          헬스 멤버십 이용권 (1 / 3 / 6 / 12개월)
        </button>
        <button
          onClick={() => setActiveCategory('pt')}
          className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeCategory === 'pt'
              ? 'bg-[#1D63FF] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          1:1 퍼스널 트레이닝 (PT) 패키지
        </button>
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2.5 text-xs font-medium rounded-lg transition-all ${
            activeCategory === 'all'
              ? 'bg-[#1D63FF] text-white shadow-xs font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          전체 비교
        </button>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPlans.map((plan) => {
          const isPop = plan.isPopular;
          return (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xs ${
                isPop
                  ? 'border-2 border-[#1D63FF] shadow-md -translate-y-1'
                  : 'border border-slate-200 hover:border-slate-300'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-6">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    isPop ? 'bg-[#1D63FF] text-white shadow-xs' : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="pt-2">
                  <span className="text-xs font-mono text-slate-400">
                    {plan.periodOrSessions}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="my-6 py-4 px-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 block mb-1">
                    등록 견적 및 특별 프로모션
                  </span>
                  <div className="text-lg font-bold text-slate-900 flex items-center justify-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-[#1D63FF]" />
                    <span>상담 및 가격 문의</span>
                  </div>
                  <span className="text-[11px] text-[#1D63FF] font-semibold block mt-1">
                    신규 가입 추가 혜택 적용 가능
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-500">포함 혜택 및 서비스</p>
                  <ul className="space-y-2">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#1D63FF] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenConsultation(`${plan.name} (${plan.periodOrSessions}) 가격 문의`)}
                  className={`w-full py-3 px-4 rounded-lg font-bold text-xs tracking-wider transition-all text-center flex items-center justify-center gap-2 ${
                    isPop
                      ? 'bg-[#1D63FF] hover:bg-[#1554e0] text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span>{plan.name} 가격 문의</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* All-Inclusive Membership Value Table */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold text-[#1D63FF] uppercase tracking-wider">
            All-Inclusive Experience
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            머슬랩 회원이라면 누구나 누리는 기본 혜택
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            추가 결제 유도 없이 머슬랩의 모든 프리미엄 인프라를 기본으로 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {includedBenefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1D63FF]" />
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#1D63FF]" />
          <h3 className="text-lg font-bold text-slate-900">
            이용권 및 결제 관련 자주 묻는 질문
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">
              Q. 운동복과 개인 라커는 별도 비용이 발생하나요?
            </h4>
            <p className="text-slate-600">
              머슬랩은 회원님의 편의를 위해 살균 세탁된 최고급 코튼 운동복과 수건을 무료로 대여해드립니다. 개인 라커의 경우 등록 기간별 프로모션에 따라 무료 지원 혜택이 적용됩니다.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">
              Q. 출장이나 개인 사정이 생겼을 때 홀딩(휴회)이 가능한가요?
            </h4>
            <p className="text-slate-600">
              네, 가능합니다. 3개월 이상 회원권부터 회원 전용 앱 또는 데스크를 통해 연간 최대 30~60일까지 위약금 없이 자유롭게 분할 정지가 가능합니다.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">
              Q. 첫 등록 시 헬스 기구 사용법을 배울 수 있나요?
            </h4>
            <p className="text-slate-600">
              네! 모든 신규 회원님께는 전담 코치가 배정되어 1:1 인바디 체형 분석 및 필수 머신 조작법을 알려드리는 무료 웰컴 오리엔테이션이 제공됩니다.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">
              Q. 결제 수단 및 무이자 할부 혜택이 있나요?
            </h4>
            <p className="text-slate-600">
              국내 주요 카드사 무이자 2~12개월 할부 혜택 및 제로페이/지역사랑상품권 결제가 모두 가능합니다. 자세한 무이자 카드 안내는 상담 시 친절히 도와드립니다.
            </p>
          </div>
        </div>
      </div>

      {/* Next Step UX Guide: Pricing -> Reviews */}
      <div className="border-t border-slate-200 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono font-bold text-[#1D63FF]">NEXT STEP 04</span>
          <h4 className="text-lg font-bold text-slate-900 mt-0.5">
            플랜을 확인하셨다면, 실제 회원들의 이용 후기를 살펴보세요
          </h4>
          <p className="text-xs text-slate-600 mt-1">
            초보자부터 헬스 매니아까지 남녀 회원들의 진솔한 만족도와 운동 성과를 공개합니다.
          </p>
        </div>
        <button
          onClick={() => {
            onNavigate('reviews');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors whitespace-nowrap shadow-xs"
        >
          <span>회원 후기 보러가기</span>
          <ArrowRight className="w-4 h-4 text-[#1D63FF]" />
        </button>
      </div>

    </div>
  );
};
