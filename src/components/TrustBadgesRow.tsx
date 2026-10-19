import React from 'react';
import { Leaf, Recycle, ShieldCheck, Globe } from 'lucide-react';
import { TRUST_BADGES } from '../utils/enquiry';

interface TrustBadgesRowProps {
  variant?: 'pills' | 'cards' | 'footer';
  className?: string;
}

export const TrustBadgesRow: React.FC<TrustBadgesRowProps> = ({ variant = 'pills', className = '' }) => {
  const badgeData = [
    { label: TRUST_BADGES[0], icon: Leaf, desc: 'Made purely from authentic fallen leaves' },
    { label: TRUST_BADGES[1], icon: Recycle, desc: 'Naturally decomposes back into the earth' },
    { label: TRUST_BADGES[2], icon: ShieldCheck, desc: 'Zero artificial chemicals, glue or wax' },
    { label: TRUST_BADGES[3], icon: Globe, desc: '100% eco-friendly and earth friendly' },
  ];

  if (variant === 'footer') {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 ${className}`}>
        {badgeData.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/10 text-white border border-white/15 backdrop-blur-xs"
            >
              <Icon className="w-4 h-4 text-[#9ACD32] shrink-0" strokeWidth={1.8} />
              <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">{item.label}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`}>
      {badgeData.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#DCEFE1] dark:bg-[#183a24] text-[#0F4D26] dark:text-[#a6fab9] border border-[#BDE0C6] dark:border-[#225032] shadow-xs"
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#1F7A3A] dark:text-[#52d274] shrink-0" strokeWidth={1.7} />
            <span className="text-xs sm:text-sm font-bold tracking-tight">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};
