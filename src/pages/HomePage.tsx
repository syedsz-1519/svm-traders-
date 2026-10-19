import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Check, Sparkles, MessageCircle, Truck } from 'lucide-react';
import { PRODUCTS, CONTACT_INFO, createDirectWhatsAppChatUrl } from '../utils/enquiry';
import { TrustBadgesRow } from '../components/TrustBadgesRow';
import { FaqSection } from '../components/FaqSection';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { PageId } from '../components/Navbar';

interface HomePageProps {
  setActivePage: (page: PageId) => void;
  openEnquiryModal: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActivePage, openEnquiryModal }) => {
  const heroPlateImg = '/src/assets/images/hero_leaf_plates_1792384289533.jpg';
  const detailPlateImg = '/src/assets/images/leaf_plate_detail_1792384290338.jpg';


  return (
    <div className="w-full relative">
      {/* Decorative leaf watermarks */}
      <div className="leaf-watermark-tr" />
      <div className="leaf-watermark-bl" />

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCEFE1] dark:bg-[#183a24] text-[#0F4D26] dark:text-[#a2f0b5] border border-[#BDE0C6] dark:border-[#225032] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#1F7A3A] dark:text-[#52d274]" />
              <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase">
                100% NATURAL • CHEMICAL FREE • BIODEGRADABLE
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="font-serif-brand text-[42px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight text-[#0F4D26] dark:text-[#d7f9dc] leading-[1.08]">
              Eco Friendly <br className="hidden sm:inline" />
              Leaf Plates
            </h1>

            {/* Punchy Subhead */}
            <p className="text-xl sm:text-2xl font-bold text-[#1F7A3A] dark:text-[#88d982] tracking-tight">
              Natural. Hand-stitched. Safe for the Environment.
            </p>

            {/* Body */}
            <p className="text-[17px] sm:text-[18px] text-[#1F2A22] dark:text-[#d0dfd3] max-w-xl leading-relaxed">
              Natural leaf plates made by SVM Traders in Hyderabad, a plastic-free choice for events, catering, temples and daily use.
            </p>

            {/* Two Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="h-[52px] px-8 rounded-xl bg-[#1F7A3A] hover:bg-[#17632E] text-white font-bold text-[16px] shadow-sm inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setActivePage('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="h-[52px] px-8 rounded-xl bg-white dark:bg-[#163321] text-[#1F7A3A] dark:text-[#a2f0b5] border-[1.5px] border-[#1F7A3A] dark:border-[#327a48] font-bold text-[16px] shadow-xs hover:bg-[#F6FAEA] dark:hover:bg-[#1c3d28] inline-flex items-center justify-center transition-all cursor-pointer"
              >
                <span>View Products</span>
              </button>
            </div>

            {/* Contact Card */}
            <div className="w-full max-w-xl bg-white dark:bg-[#142a1b] rounded-2xl p-4 border border-[#D5E6D3] dark:border-[#224e2f] shadow-xs mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EBF5EC] dark:bg-[#1a3824] flex items-center justify-center text-[#1F7A3A] dark:text-[#52d274] shrink-0">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#1F7A3A] dark:text-[#88d982]">
                    Quick Order Helpline
                  </span>
                  <a
                    href={`tel:${CONTACT_INFO.primaryPhone}`}
                    className="text-[15px] sm:text-[16px] font-bold text-[#0F4D26] dark:text-white tracking-tight hover:underline"
                  >
                    {CONTACT_INFO.primaryPhone} • {CONTACT_INFO.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-[#D5E6D3] dark:bg-[#224e2f]" />

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#DCEFE1] dark:bg-[#183a24] text-[#1F7A3A] dark:text-[#52d274] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">
                    Verified Supplier
                  </span>
                  <span className="text-sm font-bold text-[#0F4D26] dark:text-white">
                    Owner: {CONTACT_INFO.owner}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Product Photo with Overlap */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#D5E6D3] dark:border-[#204a2d] bg-white dark:bg-[#142a1b]">
              <img
                src={heroPlateImg}
                alt="Stack of authentic natural hand-stitched leaf plates by SVM Traders"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F4D26]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between p-3.5 bg-white/90 dark:bg-[#102216]/90 backdrop-blur-md rounded-2xl shadow-md border border-[#D5E6D3]/70 dark:border-[#224e2f]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#1F7A3A] dark:text-[#52d274]" />
                  <span className="text-sm font-bold text-[#0F4D26] dark:text-white">
                    Hand-Stitched Leaf Plates
                  </span>
                </div>
                <span className="text-xs font-bold bg-[#DCEFE1] dark:bg-[#183a24] px-2.5 py-1 rounded-full text-[#0F4D26] dark:text-[#a2f0b5]">
                  100% Biodegradable
                </span>
              </div>
            </div>

            {/* Overlapping Detail Card */}
            <div className="absolute -bottom-6 -left-2 sm:left-4 max-w-[220px] bg-white dark:bg-[#13271A] p-3 rounded-2xl shadow-xl border border-[#D5E6D3] dark:border-[#204a2d] flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-[#EBF5EC] dark:bg-[#183622]">
                <img
                  src={detailPlateImg}
                  alt="Close-up detail of leaf veins and texture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#0F4D26] dark:text-[#a2f0b5]">
                  Authentic Leaf
                </span>
                <span className="text-[11px] text-stone-500 dark:text-stone-300 leading-tight">
                  Hand-Stitched &amp; Cleaned
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES ROW */}
      <section className="w-full bg-[#EBF5EC] dark:bg-[#112417] py-10 px-4 sm:px-6 lg:px-8 border-y border-[#D5E6D3] dark:border-[#1d4128]">
        <div className="max-w-7xl mx-auto">
          <TrustBadgesRow />
        </div>
      </section>

      {/* "OUR RANGE" - 5 PRODUCT CARDS IN BANNER STYLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24" id="our-range">
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCEFE1] dark:bg-[#183a24] text-[#0F4D26] dark:text-[#a2f0b5] text-xs font-bold uppercase tracking-wider">
            Our Products Catalog
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] tracking-tight">
            Our Range
          </h2>
          <p className="text-base text-[#1F2A22]/80 dark:text-[#c4d6c8] max-w-xl">
            Bulk &amp; B2B Wholesale Supply Direct from Hyderabad
          </p>
        </div>

        {/* 5 Product Grid (3 on row 1, 2 centered on row 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-[#13271A] rounded-2xl overflow-hidden border border-[#D5E6D3] dark:border-[#224e2f] shadow-xs card-hover flex flex-col p-5 group"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#EBF5EC] dark:bg-[#183622] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Dark Green Pill Title */}
              <div className="flex justify-center -mt-8 mb-4 relative z-10">
                <div className="px-5 py-1.5 rounded-full bg-[#0F4D26] text-white font-bold text-sm shadow-md">
                  {product.name}
                </div>
              </div>

              <div className="space-y-1 text-center mb-5">
                <p className="text-sm font-semibold text-stone-600 dark:text-stone-300">
                  {CONTACT_INFO.priceNote}
                </p>
                <p className="text-xs text-[#1F7A3A] dark:text-[#88d982]">
                  {CONTACT_INFO.moqNote}
                </p>
              </div>

              <button
                type="button"
                onClick={() => openEnquiryModal(product.name)}
                className="mt-auto w-full h-11 rounded-xl bg-[#EBF5EC] dark:bg-[#193a24] hover:bg-[#1F7A3A] dark:hover:bg-[#1F7A3A] text-[#1F7A3A] dark:text-[#a2f0b5] hover:text-white dark:hover:text-white font-bold text-sm flex items-center justify-center transition-colors cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          ))}

          {/* Row 2: 2 products centered */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-center gap-8">
            {PRODUCTS.slice(3, 5).map((product) => (
              <div
                key={product.id}
                className="w-full sm:max-w-[380px] bg-white dark:bg-[#13271A] rounded-2xl overflow-hidden border border-[#D5E6D3] dark:border-[#224e2f] shadow-xs card-hover flex flex-col p-5 group"
              >
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#EBF5EC] dark:bg-[#183622] mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex justify-center -mt-8 mb-4 relative z-10">
                  <div className="px-5 py-1.5 rounded-full bg-[#0F4D26] text-white font-bold text-sm shadow-md">
                    {product.name}
                  </div>
                </div>

                <div className="space-y-1 text-center mb-5">
                  <p className="text-sm font-semibold text-stone-600 dark:text-stone-300">
                    {CONTACT_INFO.priceNote}
                  </p>
                  <p className="text-xs text-[#1F7A3A] dark:text-[#88d982]">
                    {CONTACT_INFO.moqNote}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openEnquiryModal(product.name)}
                  className="mt-auto w-full h-11 rounded-xl bg-[#EBF5EC] dark:bg-[#193a24] hover:bg-[#1F7A3A] dark:hover:bg-[#1F7A3A] text-[#1F7A3A] dark:text-[#a2f0b5] hover:text-white dark:hover:text-white font-bold text-sm flex items-center justify-center transition-colors cursor-pointer"
                >
                  Enquire Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick B2B Banner */}
        <div className="mt-16 bg-[#EBF5EC] dark:bg-[#13291b] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#D5E6D3] dark:border-[#204a2d] shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-[#1a3824] flex items-center justify-center text-[#1F7A3A] dark:text-[#52d274] shrink-0 shadow-xs">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-brand text-lg font-bold text-[#0F4D26] dark:text-[#d7f9dc]">
                Need bulk pricing or custom sizing?
              </h4>
              <p className="text-sm text-[#1F2A22]/80 dark:text-[#c4d6c8]">
                Contact SVM Traders for customized bulk packaging and dispatch schedules.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#1F7A3A] hover:bg-[#17632E] text-white font-bold text-sm transition-colors cursor-pointer"
          >
            Get Bulk Pricing
          </button>
        </div>
      </section>

      {/* WHY CHOOSE SVM TRADERS - 3 CARDS */}
      <section className="w-full bg-[#EBF5EC]/60 dark:bg-[#112417]/60 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-[#D5E6D3] dark:border-[#1c3e27]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCEFE1] dark:bg-[#183a24] text-[#0F4D26] dark:text-[#a2f0b5] text-xs font-bold uppercase tracking-wider">
              Our Standards
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] tracking-tight">
              Why Choose SVM Traders
            </h2>
            <p className="text-base text-[#1F2A22]/80 dark:text-[#c4d6c8]">
              Committed to pure, unadulterated botanical tableware for wholesome gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-[#13271A] rounded-2xl p-8 border border-[#D5E6D3] dark:border-[#224e2f] shadow-xs flex flex-col items-start card-hover">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF5EC] dark:bg-[#1a3824] flex items-center justify-center text-[#1F7A3A] dark:text-[#52d274] mb-6">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-serif-brand text-xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] mb-3">
                100% Natural
              </h3>
              <p className="text-sm text-[#1F2A22]/80 dark:text-[#c4d6c8] leading-relaxed">
                Handcrafted from naturally fallen areca palm leaves gathered by local farm networks. No trees cut, zero dyes or chemicals.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-[#13271A] rounded-2xl p-8 border border-[#D5E6D3] dark:border-[#224e2f] shadow-xs flex flex-col items-start card-hover">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF5EC] dark:bg-[#1a3824] flex items-center justify-center text-[#1F7A3A] dark:text-[#52d274] mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-serif-brand text-xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] mb-3">
                No Chemicals
              </h3>
              <p className="text-sm text-[#1F2A22]/80 dark:text-[#c4d6c8] leading-relaxed">
                Steam-pressed and sterilized using clean thermal pressure. Completely chemical-free, food-grade, and safe for dining.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-[#13271A] rounded-2xl p-8 border border-[#D5E6D3] dark:border-[#224e2f] shadow-xs flex flex-col items-start card-hover">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF5EC] dark:bg-[#1a3824] flex items-center justify-center text-[#1F7A3A] dark:text-[#52d274] mb-6">
                <Check className="w-7 h-7 stroke-[2.5]" />
              </div>
              <h3 className="font-serif-brand text-xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] mb-3">
                Plastic-Free Alternative
              </h3>
              <p className="text-sm text-[#1F2A22]/80 dark:text-[#c4d6c8] leading-relaxed">
                An authentic zero-waste dining solution that breaks down naturally in 60-90 days, returning clean nutrients to the soil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED CUSTOMER TESTIMONIALS CAROUSEL */}
      <TestimonialsCarousel />

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <FaqSection openEnquiryModal={openEnquiryModal} />

      {/* IMPROVISED CLOSING ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full" id="contact-cta">
        <div className="w-full bg-[#0F4D26] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden border border-[#1b6b38] flex flex-col items-center text-center">
          {/* Subtle botanical glow background */}
          <div className="absolute inset-0 bg-radial from-[#1F7A3A]/25 via-transparent to-transparent pointer-events-none" />

          {/* Heading block */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-3 mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#9ACD32] bg-white/10 px-3.5 py-1 rounded-full">
              Direct Hyderabad Wholesale Supply
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold leading-tight">
              Need Plates for an Event? Connect With Us Today
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
              Direct manufacturer pricing for caterers, wedding banquets, temples, restaurants, and wholesalers across Hyderabad.
            </p>
          </div>

          {/* 3 Balanced Contact Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl">
            {/* Card 1: Primary Call */}
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="w-12 h-12 rounded-full bg-white text-[#0F4D26] flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#9ACD32] mb-1">
                Primary Helpline
              </span>
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                +91 {CONTACT_INFO.primaryPhone}
              </span>
              <span className="text-xs text-white/70">
                Contact: {CONTACT_INFO.owner}
              </span>
            </a>

            {/* Card 2: WhatsApp Featured */}
            <a
              href={createDirectWhatsAppChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] group border border-white/20"
            >
              <div className="w-12 h-12 rounded-full bg-white text-[#25D366] flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <span className="text-xs uppercase tracking-wider font-bold text-white/90 mb-1">
                Instant WhatsApp Chat
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight mb-1">
                Chat on WhatsApp
              </span>
              <span className="text-xs text-white/90 font-medium">
                +91 {CONTACT_INFO.primaryPhone} • Quick Quotes
              </span>
            </a>

            {/* Card 3: Secondary Call */}
            <a
              href={`tel:${CONTACT_INFO.secondaryPhone}`}
              className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="w-12 h-12 rounded-full bg-white text-[#0F4D26] flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#9ACD32] mb-1">
                Secondary Helpline
              </span>
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                +91 {CONTACT_INFO.secondaryPhone}
              </span>
              <span className="text-xs text-white/70">
                Bulk Orders &amp; Dispatches
              </span>
            </a>
          </div>

          {/* Quick Quote Modal Trigger Button */}
          <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="h-12 px-8 rounded-xl bg-white text-[#0F4D26] hover:bg-[#F6FAEA] font-bold text-sm inline-flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer"
            >
              <span>Request Custom Price Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-white/75">
              ✓ Doorstep delivery across Greater Hyderabad &amp; Telangana
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
