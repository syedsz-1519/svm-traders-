import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createDirectWhatsAppChatUrl } from '../utils/enquiry';

export const WhatsAppBubble: React.FC = () => {
  const whatsappUrl = createDirectWhatsAppChatUrl(
    'Hello SVM Traders, I would like to enquire about eco friendly leaf plates in Hyderabad.'
  );

  return (
    <aside className="fixed bottom-20 sm:bottom-7 right-5 sm:right-7 z-40 flex items-center justify-end pointer-events-auto">
      {/* Outer wrapper with hover tooltip */}
      <div className="relative group">
        {/* Hover Tooltip Pill */}
        <div className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center gap-1.5 bg-[#0F4D26] text-white text-xs font-bold py-2 px-3.5 rounded-xl shadow-lg border border-[#1b6b38] whitespace-nowrap pointer-events-none transition-all duration-200 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0">
          <span>Chat on WhatsApp</span>
          <span className="text-[#9ACD32]">·</span>
          <span className="text-[#9ACD32]">Online Now</span>
          {/* Tooltip arrow */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 border-4 border-transparent border-l-[#0F4D26]" />
        </div>

        {/* Subtle Pulse Radar Animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* WhatsApp Circular Bubble Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition-all hover:scale-110 active:scale-95 cursor-pointer focus:outline-hidden focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
          aria-label="Chat directly on WhatsApp with SVM Traders Hyderabad"
          title="Chat directly on WhatsApp with SVM Traders Hyderabad"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white" />
        </a>
      </div>
    </aside>
  );
};
