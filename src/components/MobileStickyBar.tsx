import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, createDirectWhatsAppChatUrl } from '../utils/enquiry';

export const MobileStickyBar: React.FC = () => {
  const whatsappUrl = createDirectWhatsAppChatUrl();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 dark:bg-[#102216]/95 backdrop-blur-md border-t border-[#D5E6D3] dark:border-[#1e422a] p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${CONTACT_INFO.primaryPhone}`}
          className="h-12 min-h-[44px] flex items-center justify-center gap-2 rounded-xl bg-[#1F7A3A] hover:bg-[#17632E] text-white font-semibold text-sm shadow-sm active:scale-95 transition-all"
          aria-label="Call SVM Traders"
        >
          <Phone className="w-4 h-4 fill-current shrink-0" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 min-h-[44px] flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm shadow-sm active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
