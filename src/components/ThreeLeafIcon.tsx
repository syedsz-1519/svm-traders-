import React from 'react';

interface ThreeLeafIconProps {
  className?: string;
  size?: number;
}

export const ThreeLeafIcon: React.FC<ThreeLeafIconProps> = ({ className = 'text-[#1F7A3A]', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central upright leaf */}
      <path
        d="M20 4C20 4 27 12 26 21C25 28 20 31 20 31C20 31 15 28 14 21C13 12 20 4 20 4Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M20 9V29"
        stroke="#9ACD32"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Left angled leaf */}
      <path
        d="M20 22C20 22 10 18 6 25C2 31 6 35 6 35C6 35 12 34 16 30C19 27 20 22 20 22Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M18 24C14 26 10 28 8 32"
        stroke="#9ACD32"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Right angled leaf */}
      <path
        d="M20 22C20 22 30 18 34 25C38 31 34 35 34 35C34 35 28 34 24 30C21 27 20 22 20 22Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M22 24C26 26 30 28 32 32"
        stroke="#9ACD32"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Stem base */}
      <path
        d="M20 31V37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
