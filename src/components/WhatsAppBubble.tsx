import type { FC } from 'react';
import { MessageCircle } from 'lucide-react';
import { createDirectWhatsAppChatUrl } from '../utils/enquiry';

export const WhatsAppBubble: FC = () => {
  const whatsappUrl = createDirectWhatsAppChatUrl();

  return (
    <aside className="fixed bottom-20 sm:bottom-7 right-5 sm:right-7 z-40 flex items-center justify-end pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#166534] text-white shadow-[0_8px_25px_rgba(22,101,52,0.35)] transition-colors hover:bg-[#14532D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#166534]"
        aria-label="Chat directly on WhatsApp with SVM Traders Hyderabad"
        title="Chat directly on WhatsApp with SVM Traders Hyderabad"
      >
        <MessageCircle className="h-7 w-7 fill-current text-white" />
      </a>
    </aside>
  );
};
