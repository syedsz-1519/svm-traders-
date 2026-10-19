import React from 'react';
import { Phone, MessageCircle, Leaf, Droplets, PackageCheck, Target, Sparkles } from 'lucide-react';
import { CONTACT_INFO, SITE_CONTENT } from '../data/siteContent';
import { createDirectWhatsAppChatUrl } from '../utils/enquiry';

export const AboutPage: React.FC = () => {
  const stepIcons = [Leaf, Droplets, PackageCheck];

  return (
    <div className="w-full relative">
      <div className="leaf-watermark-tr" />
      <div className="leaf-watermark-bl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#DCEFE1] dark:bg-[#183a24] text-[#0F4D26] dark:text-[#a2f0b5] text-xs font-bold uppercase tracking-wider border border-[#BDE0C6] dark:border-[#225032]">
            <Sparkles className="w-3.5 h-3.5 text-[#1F7A3A] dark:text-[#52d274]" />
            <span>OUR BACKGROUND &amp; CRAFT</span>
          </div>
          <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] tracking-tight">
            {SITE_CONTENT.about.title}
          </h1>
          <p className="text-base text-[#1F2A22]/80 dark:text-[#c4d6c8]">
            Natural leaf plates, supplied from {CONTACT_INFO.location}.
          </p>
        </div>

        {/* Two Columns: Story & Mission on Left, How Our Plates Are Made on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* Our Story */}
            <div className="bg-white dark:bg-[#13271A] rounded-2xl p-7 border border-[#D5E6D3] dark:border-[#224e2f] shadow-xs">
              <h2 className="font-serif-brand text-2xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] mb-4">
                Our Story
              </h2>
              <p className="text-base text-[#1F2A22] dark:text-[#d0dfd3] leading-relaxed">
                {SITE_CONTENT.about.text}
              </p>
            </div>

            {/* Highlighted "Our Mission" card */}
            <div className="bg-[#DCEFE1] dark:bg-[#163622] rounded-2xl p-7 border border-[#BDE0C6] dark:border-[#245434] shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#1F7A3A] text-white flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-serif-brand text-xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">
                  Our Mission
                </h3>
              </div>
              <p className="text-base sm:text-lg font-medium text-[#0F4D26] dark:text-[#d7f9dc] italic leading-relaxed">
                &ldquo;{SITE_CONTENT.about.mission}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: How Our Plates Are Made */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <h2 className="font-serif-brand text-2xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] mb-2">
              How It&apos;s Made
            </h2>

            {SITE_CONTENT.process.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div
                  key={step.title}
                  className="bg-white dark:bg-[#13271A] rounded-2xl p-6 border border-[#D5E6D3] dark:border-[#224e2f] shadow-xs flex items-start gap-4 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EBF5EC] dark:bg-[#1a3824] flex items-center justify-center text-[#1F7A3A] dark:text-[#52d274] shrink-0">
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-serif-brand text-lg font-bold text-[#0F4D26] dark:text-[#d7f9dc] mb-1">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-sm text-[#1F2A22]/85 dark:text-[#c4d6c8] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Owner Card */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-[#13271A] rounded-2xl p-6 sm:p-8 border border-[#D5E6D3] dark:border-[#224e2f] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            {/* Initials avatar "SPR" */}
            <div className="w-16 h-16 rounded-full bg-[#0F4D26] text-white flex items-center justify-center font-serif-brand text-xl font-bold shadow-md shrink-0 border-2 border-[#9ACD32]">
              SPR
            </div>
            <div>
              <h3 className="font-serif-brand text-xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">
                {CONTACT_INFO.owner}
              </h3>
              <p className="text-sm font-semibold text-[#1F7A3A] dark:text-[#88d982]">
                Proprietor, SVM Traders
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                {CONTACT_INFO.location}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="flex-1 sm:flex-initial h-12 px-6 rounded-xl bg-[#1F7A3A] hover:bg-[#17632E] text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now</span>
            </a>
            <a
              href={createDirectWhatsAppChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial h-12 px-6 rounded-xl bg-[#166534] hover:bg-[#14532D] text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
