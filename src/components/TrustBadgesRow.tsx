import React from 'react';
import { Check, Leaf, Recycle, ShieldCheck } from 'lucide-react';
import { TRUST_BADGES } from '../data/siteContent';

const badgeIcons = [Leaf, ShieldCheck, Recycle, Check];

export const TrustBadgesRow: React.FC = () => (
  <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
    {TRUST_BADGES.map((label, index) => {
      const Icon = badgeIcons[index];
      return (
        <li
          key={label}
          className="inline-flex items-center gap-2.5 rounded-full border border-[#BDE0C6] bg-[#DCEFE1] px-4 py-2 text-[#0F4D26] shadow-sm dark:border-[#225032] dark:bg-[#183a24] dark:text-[#a6fab9] sm:px-5 sm:py-2.5"
        >
          <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-[#1F7A3A] dark:text-[#52d274] sm:h-5 sm:w-5" strokeWidth={1.7} />
          <span className="text-xs font-bold tracking-tight sm:text-sm">{label}</span>
        </li>
      );
    })}
  </ul>
);
