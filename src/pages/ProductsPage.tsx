import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { PRODUCTS, CONTACT_INFO, createWhatsAppEnquiryUrl } from '../utils/enquiry';
import { TrustBadgesRow } from '../components/TrustBadgesRow';

interface ProductsPageProps {
  openEnquiryModal: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ openEnquiryModal }) => {
  const handleProductWhatsApp = (productName: string) => {
    const url = createWhatsAppEnquiryUrl({
      name: 'Customer',
      phone: '',
      product: productName,
      quantity: 'On Request',
      message: `I would like to enquire about bulk pricing for ${productName}.`,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full relative">
      <div className="leaf-watermark-tr" />
      <div className="leaf-watermark-bl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-24">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#DCEFE1] dark:bg-[#183a24] text-[#0F4D26] dark:text-[#a2f0b5] text-xs font-bold uppercase tracking-wider border border-[#BDE0C6] dark:border-[#225032]">
            <Sparkles className="w-3.5 h-3.5 text-[#1F7A3A] dark:text-[#52d274]" />
            <span>OUR PRODUCTS</span>
          </div>

          <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] tracking-tight">
            Our Products
          </h1>

          <p className="text-base sm:text-lg text-[#1F2A22]/85 dark:text-[#d0dfd3] leading-relaxed">
            Natural leaf plates for events, catering and daily use. Contact us for bulk pricing.
          </p>
        </div>

        {/* Grid of 5 Product Cards (3 + 2 on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-[#13271A] rounded-2xl overflow-hidden border border-[#D5E6D3] dark:border-[#224e2f] shadow-xs card-hover flex flex-col p-6 group"
            >
              {/* Product Photo */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#EBF5EC] dark:bg-[#183622] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Dark Green Pill with the name */}
              <div className="flex justify-center -mt-8 mb-4 relative z-10">
                <div className="px-5 py-2 rounded-full bg-[#0F4D26] text-white font-bold text-sm shadow-md tracking-tight">
                  {product.name}
                </div>
              </div>

              {/* Size Line & Best For */}
              <div className="text-center mb-5 space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1F7A3A] dark:text-[#88d982]">
                  {product.sizeSpec}
                </p>
                <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                  {product.subtitle}
                </p>
                <div className="pt-2 border-t border-[#EBF5EC] dark:border-[#1d4128] space-y-1">
                  <p className="text-sm font-bold text-[#0F4D26] dark:text-white">
                    {CONTACT_INFO.priceNote}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    {CONTACT_INFO.moqNote}
                  </p>
                </div>
              </div>

              {/* Two Buttons: Request Quote & WhatsApp */}
              <div className="mt-auto pt-3 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => openEnquiryModal(product.name)}
                  className="flex-1 h-12 rounded-xl bg-[#1F7A3A] hover:bg-[#17632E] text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center cursor-pointer"
                >
                  Request Quote
                </button>
                <button
                  type="button"
                  onClick={() => handleProductWhatsApp(product.name)}
                  className="w-12 h-12 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                  aria-label={`Chat on WhatsApp about ${product.name}`}
                  title="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                </button>
              </div>
            </div>
          ))}

          {/* Row 2: remaining 2 products centered on desktop */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-center gap-8">
            {PRODUCTS.slice(3, 5).map((product) => (
              <div
                key={product.id}
                className="w-full sm:max-w-[390px] bg-white dark:bg-[#13271A] rounded-2xl overflow-hidden border border-[#D5E6D3] dark:border-[#224e2f] shadow-xs card-hover flex flex-col p-6 group"
              >
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#EBF5EC] dark:bg-[#183622] mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex justify-center -mt-8 mb-4 relative z-10">
                  <div className="px-5 py-2 rounded-full bg-[#0F4D26] text-white font-bold text-sm shadow-md tracking-tight">
                    {product.name}
                  </div>
                </div>

                <div className="text-center mb-5 space-y-1.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1F7A3A] dark:text-[#88d982]">
                    {product.sizeSpec}
                  </p>
                  <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                    {product.subtitle}
                  </p>
                  <div className="pt-2 border-t border-[#EBF5EC] dark:border-[#1d4128] space-y-1">
                    <p className="text-sm font-bold text-[#0F4D26] dark:text-white">
                      {CONTACT_INFO.priceNote}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      {CONTACT_INFO.moqNote}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-3 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(product.name)}
                    className="flex-1 h-12 rounded-xl bg-[#1F7A3A] hover:bg-[#17632E] text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center cursor-pointer"
                  >
                    Request Quote
                  </button>
                  <button
                    type="button"
                    onClick={() => handleProductWhatsApp(product.name)}
                    className="w-12 h-12 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                    aria-label={`Chat on WhatsApp about ${product.name}`}
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pale-Green Banner Below */}
        <div className="mt-16 bg-[#DCEFE1] dark:bg-[#132d1d] rounded-2xl p-6 sm:p-8 border border-[#BDE0C6] dark:border-[#225533] shadow-xs text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-serif-brand text-xl sm:text-2xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">
              Need bulk pricing or a custom size?
            </h3>
            <p className="text-sm text-[#1F2A22]/85 dark:text-[#c4d6c8] mt-1">
              Call {CONTACT_INFO.primaryPhone} or chat on WhatsApp for fast wholesale dispatch in Hyderabad and across Telangana.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="h-11 px-5 rounded-xl bg-[#0F4D26] hover:bg-[#17632E] text-white font-bold text-sm inline-flex items-center gap-2 shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now</span>
            </a>
            <button
              type="button"
              onClick={() => handleProductWhatsApp('All Products Bulk Inquiry')}
              className="h-11 px-5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm inline-flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12">
          <TrustBadgesRow />
        </div>
      </div>
    </div>
  );
};
