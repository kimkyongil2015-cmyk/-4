import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Phone, User, Dumbbell, Sparkles } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlanOrProgram?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultPlanOrProgram = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('다이어트 & 체중 감량');
  const [preferredProgram, setPreferredProgram] = useState(defaultPlanOrProgram || '헬스 멤버십 이용권');
  const [preferredTime, setPreferredTime] = useState('평일 저녁 (18:00 ~ 21:00)');
  const [memo, setMemo] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('이름을 입력해주세요.');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9-]/g, '');
    if (!cleanPhone || cleanPhone.length < 9) {
      setErrorMsg('정확한 연락처를 입력해주세요. (예: 010-1234-5678)');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setMemo('');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mx-auto text-[#1D63FF]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              상담 예약이 접수되었습니다!
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              <strong className="text-slate-900">{name}</strong>님, 머슬랩에 관심을 가져주셔서 감사합니다.<br />
              담당 전문 상담 매니저가 <span className="text-[#1D63FF] font-semibold">{phone}</span> 번호로 
              15분 이내에 친절하게 안내 연락드리겠습니다.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 text-left space-y-2 mt-6">
              <div className="flex justify-between">
                <span className="text-slate-500">신청 관심 항목</span>
                <span className="text-slate-900 font-medium">{preferredProgram}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">선택 운동 목표</span>
                <span className="text-slate-900 font-medium">{goal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">희망 방문 시간</span>
                <span className="text-slate-900 font-medium">{preferredTime}</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full mt-6 py-3 px-4 bg-[#1D63FF] hover:bg-[#1554e0] text-white font-bold text-sm rounded-lg transition-colors shadow-sm"
            >
              확인
            </button>
          </div>
        ) : (
          <div>
            <div className="space-y-1 mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D63FF] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>1:1 Custom Consultation</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                머슬랩 방문 상담 및 가격 문의
              </h2>
              <p className="text-xs text-slate-500">
                인바디 3D 정밀 체형 측정 및 센터 무료 투어가 함께 제공됩니다.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    이름 <span className="text-[#1D63FF]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D63FF] focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    연락처 <span className="text-[#1D63FF]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="010-0000-0000"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D63FF] focus:bg-white"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  관심 항목 / 프로그램 선택
                </label>
                <div className="relative">
                  <Dumbbell className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <select
                    value={preferredProgram}
                    onChange={(e) => setPreferredProgram(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-8 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1D63FF] focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="헬스 멤버십 이용권">헬스 멤버십 이용권 (1 / 3 / 6 / 12개월)</option>
                    <option value="1:1 PT 스타터 (10회)">1:1 PT 스타터 (10회 패키지)</option>
                    <option value="1:1 PT 바디 체인지 (20회)">1:1 PT 바디 체인지 (20회 시그니처)</option>
                    <option value="1:1 PT 마스터 (30회)">1:1 PT 마스터 (30회 VIP 코스)</option>
                    <option value="체형 관리 & 밸런스 프로그램">체형 관리 & 밸런스 교정 프로그램</option>
                    <option value="체중 감량 & 다이어트 프로그램">체중 감량 & 다이어트 프로그램</option>
                    <option value="초보자 운동 입문 코스">초보자 운동 온보딩 코스</option>
                    <option value="기타 방문 상담 및 시설 투어">기타 방문 상담 및 시설 투어</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    운동 목표
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1D63FF] focus:bg-white"
                  >
                    <option value="다이어트 & 체중 감량">체중 감량 & 다이어트</option>
                    <option value="근력 강화 & 벌크업">근력 강화 & 벌크업</option>
                    <option value="체형 교정 & 통증 완화">체형 교정 (거북목/허리)</option>
                    <option value="헬스 초보 탈출">헬스 초보 탈출 및 기초</option>
                    <option value="체력 증진 & 일상 활력">체력 증진 & 건강 유지</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    희망 상담 시간
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1D63FF] focus:bg-white"
                    >
                      <option value="평일 오전 (09:00 ~ 12:00)">평일 오전 (09:00 ~ 12:00)</option>
                      <option value="평일 오후 (12:00 ~ 18:00)">평일 오후 (12:00 ~ 18:00)</option>
                      <option value="평일 저녁 (18:00 ~ 21:00)">평일 저녁 (18:00 ~ 21:00)</option>
                      <option value="주말 (10:00 ~ 18:00)">주말 (10:00 ~ 18:00)</option>
                      <option value="시간 무관 빠른 연락">시간 무관 빠른 연락 희망</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  추가 문의 사항 (선택)
                </label>
                <textarea
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  placeholder="예: 퇴근 후 방문하고 싶습니다 / 무릎이 안 좋은데 가능한가요?"
                  rows={2}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D63FF] focus:bg-white resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#1D63FF] hover:bg-[#1554e0] active:scale-[0.99] text-white font-bold text-sm tracking-wide rounded-lg transition-all shadow-md shadow-[#1D63FF]/20"
                >
                  상담 및 가격 문의 신청하기
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                개인정보는 오직 상담 예약 및 시설 안내 연락 목적으로만 안전하게 사용됩니다.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
