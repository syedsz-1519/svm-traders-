import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Check, Sparkles, MessageCircle, Truck, BadgePercent, MapPin, CheckCircle2, Clock, Building2 } from 'lucide-react';
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

      {/* HIGH-CONTRAST BENTO GRID: DIRECT HYDERABAD WHOLESALE SUPPLY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full" id="contact-cta">
        <div className="w-full bg-[#0A1D11] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-[#1e582f]">
          {/* Subtle botanical glow background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F7A3A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9ACD32]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Marquee Header */}
          <div className="relative z-10 max-w-3xl mb-10 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183d23] border border-[#276b3c] text-[#9ACD32] text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Direct Factory Wholesale • Greater Hyderabad Supply</span>
            </div>
            <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight mb-3">
              Direct Hyderabad Wholesale Supply &amp; Bulk Tableware
            </h2>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed">
              Supplying Telugu wedding caterers, banquet halls, temple Annadanam trusts, and wholesale dealers across Hyderabad with 100% natural, leak-proof Areca palm leaf plates.
            </p>
          </div>

          {/* Bento Grid: 2 Large Modules */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            {/* Bento Card 1: Bulk Tiers & Volume Savings (7 cols) */}
            <div className="lg:col-span-7 bg-[#112918] border border-[#235833] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-lg text-left">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#1a4425] text-[#9ACD32] flex items-center justify-center shrink-0">
                      <BadgePercent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">Tiered Bulk Ordering &amp; Discounts</h3>
                      <p className="text-xs text-[#9ACD32]">Competitive factory pricing scaled to your event size</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-[#1a4425] text-[#a2f0b5] px-2.5 py-1 rounded-md border border-[#2c6e3d]">
                    Factory-Direct
                  </span>
                </div>

                {/* 3 Tier Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {/* Tier 1 */}
                  <div className="bg-[#0b1f12] p-4 rounded-xl border border-[#1e4e2a] flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-extrabold text-[#9ACD32] uppercase tracking-wider block mb-1">
                        Event Pack
                      </span>
                      <h4 className="text-base font-bold text-white mb-1">100 – 500 pcs</h4>
                      <p className="text-xs text-stone-300 leading-snug">
                        For birthdays, home poojas &amp; intimate gatherings.
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-[#a2f0b5] mt-3 block pt-2 border-t border-white/10">
                      Mixed Size Cartons
                    </span>
                  </div>

                  {/* Tier 2: Highlighted */}
                  <div className="bg-[#173e21] p-4 rounded-xl border border-[#2d8045] flex flex-col justify-between relative shadow-sm">
                    <span className="absolute -top-2.5 right-3 text-[10px] font-black uppercase tracking-wider bg-[#9ACD32] text-[#0A1D11] px-2 py-0.5 rounded-full">
                      Caterer Choice
                    </span>
                    <div>
                      <span className="text-[11px] font-extrabold text-[#9ACD32] uppercase tracking-wider block mb-1">
                        Banquet Tier
                      </span>
                      <h4 className="text-base font-bold text-white mb-1">1,000 – 5,000 pcs</h4>
                      <p className="text-xs text-stone-200 leading-snug">
                        For wedding feasts, buffets &amp; convention dinners.
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-[#9ACD32] mt-3 block pt-2 border-t border-white/10">
                      Volume Discount Rates
                    </span>
                  </div>

                  {/* Tier 3 */}
                  <div className="bg-[#0b1f12] p-4 rounded-xl border border-[#1e4e2a] flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-extrabold text-[#9ACD32] uppercase tracking-wider block mb-1">
                        Mega &amp; Temple
                      </span>
                      <h4 className="text-base font-bold text-white mb-1">10,000+ pcs</h4>
                      <p className="text-xs text-stone-300 leading-snug">
                        For temple Annadanam &amp; regional wholesale re-sellers.
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-[#a2f0b5] mt-3 block pt-2 border-t border-white/10">
                      Maximum Factory Margins
                    </span>
                  </div>
                </div>
              </div>

              {/* Quality Guarantee Strip */}
              <div className="pt-3 border-t border-[#1e4e2a] flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-stone-300">
                <span className="flex items-center gap-1.5 text-white font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9ACD32]" />
                  Steam-Pressed Food Grade
                </span>
                <span className="flex items-center gap-1.5 text-white font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9ACD32]" />
                  Zero Chemical Coatings
                </span>
                <span className="flex items-center gap-1.5 text-white font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9ACD32]" />
                  Zero Breakage Guarantee
                </span>
              </div>
            </div>

            {/* Bento Card 2: Hyper-Local Dispatch Hub (5 cols) */}
            <div className="lg:col-span-5 bg-[#112918] border border-[#235833] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-lg text-left">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#1a4425] text-[#9ACD32] flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Hyper-Local Dispatch Hub</h3>
                    <p className="text-xs text-[#9ACD32]">Express delivery across Greater Hyderabad</p>
                  </div>
                </div>

                <p className="text-xs text-stone-300 mb-4 leading-relaxed">
                  Fast fulfillment for event organizers and caterers. Same-day emergency delivery or convenient warehouse self-pickup:
                </p>

                {/* Local Area Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {[
                    'Madhapur',
                    'Gachibowli',
                    'Kukatpally',
                    'Secunderabad',
                    'Banjara Hills',
                    'Jubilee Hills',
                    'Shamshabad',
                    'Uppal',
                    'Begumpet',
                    'Kompally',
                    'Miyapur',
                    'Dilsukhnagar',
                  ].map((loc) => (
                    <span
                      key={loc}
                      className="px-2.5 py-1 rounded-md bg-[#0a1e12] border border-[#1b4b27] text-stone-200 text-xs font-medium flex items-center gap-1"
                    >
                      <MapPin className="w-2.5 h-2.5 text-[#9ACD32]" />
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dispatch badges */}
              <div className="pt-3 border-t border-[#1e4e2a] flex items-center justify-between text-xs text-stone-300">
                <span className="flex items-center gap-1.5 font-medium text-white">
                  <Clock className="w-3.5 h-3.5 text-[#9ACD32]" />
                  Same-Day Delivery
                </span>
                <span className="flex items-center gap-1.5 font-medium text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9ACD32]" />
                  Moisture-Proof Shrink Packs
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Action & Direct Helpline Command Bar */}
          <div className="relative z-10 bg-[#112918] border border-[#235833] rounded-2xl p-6 sm:p-7 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              {/* Primary Call Action (4 cols) */}
              <a
                href={`tel:${CONTACT_INFO.primaryPhone}`}
                className="md:col-span-4 bg-[#0a1e12] hover:bg-[#153a20] border border-[#235833] rounded-xl p-4 flex items-center gap-3.5 transition-all hover:scale-[1.02] active:scale-[0.98] group text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#0F4D26] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#9ACD32] block">
                    Owner Direct Helpline
                  </span>
                  <span className="text-lg font-extrabold text-white tracking-tight block">
                    +91 {CONTACT_INFO.primaryPhone}
                  </span>
                  <span className="text-xs text-stone-400">
                    S. Pradeep Reddy • Instant Quote
                  </span>
                </div>
              </a>

              {/* Secondary Call Action (4 cols) */}
              <a
                href={`tel:${CONTACT_INFO.secondaryPhone}`}
                className="md:col-span-4 bg-[#0a1e12] hover:bg-[#153a20] border border-[#235833] rounded-xl p-4 flex items-center gap-3.5 transition-all hover:scale-[1.02] active:scale-[0.98] group text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#0F4D26] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#9ACD32] block">
                    Bulk Dispatches &amp; Transit
                  </span>
                  <span className="text-lg font-extrabold text-white tracking-tight block">
                    +91 {CONTACT_INFO.secondaryPhone}
                  </span>
                  <span className="text-xs text-stone-400">
                    Logistics &amp; Warehouse Desk
                  </span>
                </div>
              </a>

              {/* Modal Trigger CTA (4 cols) */}
              <div className="md:col-span-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => openEnquiryModal()}
                  className="w-full h-12 px-6 rounded-xl bg-[#9ACD32] hover:bg-[#88bd2b] text-[#0A1D11] font-extrabold text-sm flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer"
                >
                  <span>Request Wholesale Rate Card</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={createDirectWhatsAppChatUrl(
                    'Hello SVM Traders, I would like to enquire about wholesale leaf plates for an event in Hyderabad.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-10 px-4 rounded-xl bg-[#163a21] hover:bg-[#1d4c2b] text-[#a2f0b5] font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-[#29683c]"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Chat on WhatsApp for Photo Samples</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

