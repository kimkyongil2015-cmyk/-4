import React, { useState } from 'react';
import { PageTab } from '../types';
import { LOCATION_INFO } from '../data/gymData';
import { MapPin, Phone, Clock, Car, Navigation, ExternalLink, Copy, Check, Sparkles, Building2, Train } from 'lucide-react';

interface LocationPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (planOrProgram?: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [copied, setCopied] = useState(false);
  const [showNaverModal, setShowNaverModal] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(LOCATION_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1D63FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Location & Visit Information</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          오시는 길 & 방문 안내
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          대중교통 접근성이 뛰어난 역세권에 위치해 있으며, 지하 1~3층 자주식 주차장과 2시간 무료 주차를 지원합니다.
          사전 예약 시 전담 매니저가 1:1 맞춤 시설 투어를 진행해드립니다.
        </p>
      </div>

      {/* Main Grid: Location Info Cards & Map Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Essential Contact & Parking Info (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Address Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#1D63FF]" />
                센터 주소
              </span>
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1 text-[11px] text-[#1D63FF] hover:underline font-semibold"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>주소 복사</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-sm font-bold text-slate-900 leading-relaxed">
              {LOCATION_INFO.address}
            </p>
            <p className="text-xs text-slate-500">
              ※ 실제 지점 오픈 시 확정 도로명 주소로 실시간 업데이트됩니다.
            </p>
          </div>

          {/* Contact & Phone Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-xs">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#1D63FF]" />
              상담 문의 전화
            </span>
            <p className="text-lg font-bold text-slate-900 font-mono">
              {LOCATION_INFO.phone}
            </p>
            <p className="text-xs text-slate-500">
              상담 가능 시간: 평일 09:00 ~ 21:00 / 주말 10:00 ~ 18:00
            </p>
          </div>

          {/* Operating Hours Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-xs">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#1D63FF]" />
              운영 시간
            </span>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-semibold text-slate-900">평일 (월 ~ 금)</span>
                <span className="font-mono text-[#1D63FF] font-bold">06:00 ~ 24:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-semibold text-slate-900">주말 및 공휴일</span>
                <span className="font-mono text-[#1D63FF] font-bold">09:00 ~ 21:00</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                {LOCATION_INFO.operatingHours.holidayNotice}
              </p>
            </div>
          </div>

          {/* Parking & Transit Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Car className="w-4 h-4 text-[#1D63FF]" />
                주차 안내
              </span>
              <p className="text-xs text-slate-900 font-semibold">
                {LOCATION_INFO.parking.guide}
              </p>
              <p className="text-xs text-[#1D63FF] mt-1 font-semibold">
                ✓ {LOCATION_INFO.parking.benefit}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                {LOCATION_INFO.parking.valet}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Train className="w-4 h-4 text-[#1D63FF]" />
                대중교통 안내
              </span>
              <p className="text-xs text-slate-700">
                • {LOCATION_INFO.publicTransport.subway}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                • {LOCATION_INFO.publicTransport.bus}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Naver Map Integration & Visual Route Guide (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Map Container */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            
            {/* Map Top Bar */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#03C75A]" />
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  네이버 지도 연동 스페이스
                </span>
              </div>

              {/* Naver Map Button Required by User Prompt */}
              <a
                href={LOCATION_INFO.naverMapQuery}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#03C75A] hover:bg-[#02b350] rounded-md transition-colors shadow-xs"
              >
                <span>네이버 지도 보기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Interactive Embedded Real Map View centered on Sindaebang Station */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden group">
              {/* Live Interactive Map using OSM Tiles centered at Sindaebang Station (37.4866, 126.9129) */}
              <iframe
                title="신대방역 및 머슬랩 위치 지도"
                src="https://www.openstreetmap.org/export/embed.html?bbox=126.9040%2C37.4815%2C126.9218%2C37.4918&amp;layer=mapnik&amp;marker=37.4866%2C126.9129"
                className="w-full h-full border-0"
                loading="lazy"
              />

              {/* Top-Right Badge: Station & Real Map Info */}
              <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#03C75A] animate-pulse" />
                <div className="text-left">
                  <p className="text-[11px] font-black text-slate-900 leading-tight flex items-center gap-1">
                    <Train className="w-3 h-3 text-[#1D63FF]" />
                    2호선 신대방역 인근
                  </p>
                  <p className="text-[10px] text-slate-500">실시간 지도 로드됨</p>
                </div>
              </div>

              {/* Map Floating Action Button: Directly jump to Naver Map */}
              <div className="absolute bottom-3 right-3 z-10 flex gap-2">
                <a
                  href={LOCATION_INFO.naverMapQuery}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 bg-[#03C75A] hover:bg-[#02b350] active:scale-95 text-xs font-bold text-white rounded-lg transition-all flex items-center gap-1.5 shadow-lg shadow-black/15"
                >
                  <span>네이버 지도에서 크게보기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Walking Directions Details */}
            <div className="p-6 border-t border-slate-100 space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                도보 오시는 길 상세 안내
              </h4>
              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-50 text-[#1D63FF] font-bold flex items-center justify-center shrink-0 text-[10px]">1</span>
                  <span>신대방역 4번 출구(또는 1번 출구)로 나와 도보 1~2분 거리로 이동합니다.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-50 text-[#1D63FF] font-bold flex items-center justify-center shrink-0 text-[10px]">2</span>
                  <span>대림로 방면 머슬랩 타워를 확인합니다.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-50 text-[#1D63FF] font-bold flex items-center justify-center shrink-0 text-[10px]">3</span>
                  <span>중앙 전용 엘리베이터를 타고 B1 인포메이션 데스크로 오시면 전담 매니저가 맞이해드립니다.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Tour Booking Box: The final conversion destination */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <span className="text-xs font-bold text-[#1D63FF] uppercase tracking-wider">
                Visit Booking
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                방문 전 무료 투어 & 상담을 예약하세요
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                기다림 없이 전담 매니저가 라커, 샤워실, 머신존을 직접 1:1 안내해드립니다.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation('방문 시설 투어 & 상담')}
              className="px-6 py-3.5 text-xs font-bold text-white bg-[#1D63FF] hover:bg-[#1554e0] rounded-lg transition-all shadow-md shadow-[#1D63FF]/20 whitespace-nowrap shrink-0"
            >
              1:1 방문 예약하기
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
