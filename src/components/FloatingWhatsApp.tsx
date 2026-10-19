import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createDirectWhatsAppChatUrl } from '../utils/enquiry';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = createDirectWhatsAppChatUrl();

  return (
    <aside className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-3.5 rounded-full shadow-[0_8px_20px_rgba(37,211,102,0.35)] transition-all hover:scale-105 active:scale-95 group"
        aria-label="Chat on WhatsApp with SVM Traders"
      >
        <MessageCircle className="w-5 h-5 fill-current shrink-0" />
        <span className="font-semibold text-sm tracking-tight pr-1">Chat on WhatsApp</span>
      </a>
    </aside>
  );
};
