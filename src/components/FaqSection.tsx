import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Package, Leaf, Truck } from 'lucide-react';
import { CONTACT_INFO, createDirectWhatsAppChatUrl } from '../utils/enquiry';

interface FaqItem {
  id: string;
  category: 'material' | 'bulk' | 'shipping';
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'material-source',
    category: 'material',
    question: 'What materials are SVM Traders leaf plates made from?',
    answer:
      'Our plates and bowls are crafted exclusively from naturally shed Areca palm leaf sheaths collected from regional farm networks. No trees are cut or harmed. The fallen sheaths are thoroughly washed with fresh water, heat-sterilized, and steam-pressed into sturdy dining shapes without any chemicals, bonding agents, or synthetic additives.',
  },
  {
    id: 'material-durability',
    category: 'material',
    question: 'Can these leaf plates hold hot, oily foods, gravies, and liquids?',
    answer:
      'Yes, absolutely. Areca palm leaves have a naturally water-resistant, wax-free biological cuticle that naturally withstands boiling-hot sambar, gravies, oily biryanis, and curries without leaking, softening, or sagging. Unlike paper plates or thin plastic liners, they remain firm and odorless throughout the meal.',
  },
  {
    id: 'material-compostable',
    category: 'material',
    question: 'How biodegradable are these plates compared to paper or plastic?',
    answer:
      'Our products are 100% natural, chemical-free, and home-compostable. When disposed of, they naturally break down within 60 to 90 days in home compost or soil, returning organic nutrients to the earth. They are the ideal zero-waste alternative to single-use plastics and plastic-coated paper plates.',
  },
  {
    id: 'bulk-moq',
    category: 'bulk',
    question: 'What is the minimum order quantity (MOQ) for bulk orders?',
    answer:
      'We welcome bulk requirements of all scales. From small family functions and temple prasadam distributions (100–500 pieces) to large-scale wedding caterers, convention centers, and wholesale distributors needing 5,000 to 50,000+ units. Contact us directly for tiered wholesale rates tailored to your volume.',
  },
  {
    id: 'bulk-variety',
    category: 'bulk',
    question: 'Can I mix different plate sizes and bowls in one bulk consignment?',
    answer:
      'Yes! Many caterers and event hosts order custom combinations—for example, pairing 14-inch sitting plates or 12-inch buffet plates with 8-inch tiffin snack plates and 4.5-inch curry bowls. We pack your requested assortment into labeled, corrugated cartons for easy distribution at your venue.',
  },
  {
    id: 'bulk-pricing',
    category: 'bulk',
    question: 'How do caterers and event planners get instant bulk quotes?',
    answer:
      'You can submit your required product sizes and quantity via our online "Request Quote" modal, call S. Pradeep Reddy directly at +91 9985812721 / 8186801206, or tap the WhatsApp button. We provide fast quotation responses and confirm available inventory on the same day.',
  },
  {
    id: 'shipping-hyderabad',
    category: 'shipping',
    question: 'How fast is delivery within Hyderabad and Secunderabad?',
    answer:
      'For orders within Greater Hyderabad and Secunderabad, same-day or next-day delivery can be arranged depending on order volume and stock availability. You are also welcome to arrange self-pickup directly from our Hyderabad distribution hub.',
  },
  {
    id: 'shipping-interstate',
    category: 'shipping',
    question: 'Do you deliver outside Hyderabad across Telangana and other states?',
    answer:
      'Yes, SVM Traders regularly dispatches consignments across Telangana, Andhra Pradesh, and other southern states through reputable road transport and cargo partners. We handle logistics coordination and provide tracking details for your shipment.',
  },
  {
    id: 'shipping-packaging',
    category: 'shipping',
    question: 'How are the plates packaged to prevent moisture and damage during transit?',
    answer:
      'Each pack of 25 or 50 plates is tightly shrink-wrapped to protect them from environmental humidity, dust, and transit handling. Multiple shrink-packs are then boxed in heavy-gauge corrugated master cartons to ensure they arrive in pristine, food-ready condition.',
  },
];

type CategoryFilter = 'all' | 'material' | 'bulk' | 'shipping';

export const FaqSection: React.FC<{ openEnquiryModal: (productName?: string) => void }> = ({
  openEnquiryModal,
}) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'material-source': true, // Open the first item by default for quick glance
  });
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs =
    selectedCategory === 'all'
      ? FAQS
      : FAQS.filter((faq) => faq.category === selectedCategory);

  const categories: { id: CategoryFilter; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Questions', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'material', label: 'Product Material', icon: <Leaf className="w-4 h-4" /> },
    { id: 'bulk', label: 'Bulk Ordering', icon: <Package className="w-4 h-4" /> },
    { id: 'shipping', label: 'Shipping & Delivery', icon: <Truck className="w-4 h-4" /> },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24" id="faq">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCEFE1] dark:bg-[#183a24] text-[#0F4D26] dark:text-[#a2f0b5] text-xs font-bold uppercase tracking-wider">
          Got Questions?
        </span>
        <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-base text-[#1F2A22]/80 dark:text-[#c4d6c8] max-w-xl">
          Everything you need to know about our natural leaf plates, wholesale procurement, and reliable delivery.
        </p>
      </div>

      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#1F7A3A] text-white shadow-sm'
                  : 'bg-white dark:bg-[#13271A] text-[#1F2A22]/80 dark:text-[#c4d6c8] border border-[#D5E6D3] dark:border-[#224e2f] hover:bg-[#EBF5EC] dark:hover:bg-[#1a3824]'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = !!openIds[faq.id];
          return (
            <div
              key={faq.id}
              className="bg-white dark:bg-[#13271A] rounded-2xl border border-[#D5E6D3] dark:border-[#224e2f] overflow-hidden transition-all duration-200 shadow-xs"
            >
              <h3>
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F6FAEA]/50 dark:hover:bg-[#163020]/50 transition-colors"
                >
                  <span className="font-semibold text-base sm:text-lg text-[#0F4D26] dark:text-[#e1f5e5] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#1F7A3A] text-white rotate-180'
                        : 'bg-[#EBF5EC] dark:bg-[#183622] text-[#1F7A3A] dark:text-[#a2f0b5]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
              </h3>

              {isOpen && (
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-[15px] text-[#1F2A22]/85 dark:text-[#c4d6c8] leading-relaxed border-t border-[#EBF5EC] dark:border-[#1d4128]"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Banner */}
      <div className="mt-12 bg-gradient-to-r from-[#EBF5EC] to-[#F6FAEA] dark:from-[#112417] dark:to-[#163321] rounded-2xl p-6 sm:p-8 border border-[#D5E6D3] dark:border-[#224e2f] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-serif-brand text-lg sm:text-xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">
            Have a custom requirement or specific question?
          </h4>
          <p className="text-sm text-[#1F2A22]/80 dark:text-[#c4d6c8]">
            Speak directly with S. Pradeep Reddy for instant answers and custom sample packs.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <a
            href={createDirectWhatsAppChatUrl('Hello SVM Traders, I have a question about your leaf plates.')}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm inline-flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="h-11 px-5 rounded-xl bg-[#1F7A3A] hover:bg-[#17632E] text-white font-bold text-sm inline-flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
          >
            <span>Request Quote</span>
          </button>
        </div>
      </div>
    </section>
  );
};
