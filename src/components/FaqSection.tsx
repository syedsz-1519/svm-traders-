import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';

interface FaqSectionProps {
  openEnquiryModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ openEnquiryModal }) => (
  <section id="faq" className="border-y border-[#D5E6D3] bg-[#EBF5EC]/70 px-4 py-20 dark:border-[#1d4128] dark:bg-[#112417]/70 sm:px-6 sm:py-24 lg:px-8">
    <div className="mx-auto max-w-4xl">
      <header className="mx-auto mb-10 max-w-2xl space-y-3 text-center">
        <h2 className="font-serif-brand text-3xl font-bold tracking-tight text-[#0F4D26] dark:text-[#d7f9dc] sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </header>

      <div className="space-y-3">
        {SITE_CONTENT.faq.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-[#D5E6D3] bg-white p-5 shadow-sm open:border-[#9ACD32] dark:border-[#224e2f] dark:bg-[#13271A]"
          >
            <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#0F4D26] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F7A3A] dark:text-[#d7f9dc] [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span aria-hidden="true" className="text-xl text-[#1F7A3A] transition-transform group-open:rotate-45 dark:text-[#52d274]">+</span>
            </summary>
            <p className="pt-3 leading-relaxed text-[#1F2A22]/85 dark:text-[#c4d6c8]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={openEnquiryModal}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#1F7A3A] px-6 font-bold text-white transition-colors hover:bg-[#17632E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A]"
        >
          Request a Quote
        </button>
      </div>
    </div>
  </section>
);
