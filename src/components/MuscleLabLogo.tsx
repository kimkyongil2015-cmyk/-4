import React from 'react';
import officialLogoImg from '../assets/images/muscle_lab_logo.png';

const FALLBACK_LOGO_URL =
  'https://postfiles.pstatic.net/MjAyNjEwMDhfODYg/MDAxNzkxNDM5NDk0NjU0.1o_RCCHXIVdRvU1dqVKL23KMmLp2074qZLuwbCxxysQg.-HPEmInuqvdiEQcLDgNo7wDnCVE4bSXh5PL3CilkBdkg.PNG/ChatGPT_Image_2026%EB%85%84_10%EC%9B%94_8%EC%9D%BC_%EC%98%A4%ED%9B%84_03_03_48.png?type=w773';

interface MuscleLabLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'markOnly';
  showText?: boolean;
}

export const MuscleLabLogo: React.FC<MuscleLabLogoProps> = ({
  className = 'h-11 w-auto',
}) => {
  return (
    <div className={`inline-flex items-center shrink-0 select-none ${className}`}>
      <img
        src={officialLogoImg}
        alt="MUSCLE LAB 머슬랩 로고"
        className="h-full w-auto max-h-full object-contain"
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src !== FALLBACK_LOGO_URL) {
            target.src = FALLBACK_LOGO_URL;
          }
        }}
      />
    </div>
  );
};
