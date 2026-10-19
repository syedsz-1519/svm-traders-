import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductImage } from '../components/ProductImage';
import { PRODUCTS, SITE_CONTENT } from '../data/siteContent';

interface ProductsPageProps {
  openEnquiryModal: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ openEnquiryModal }) => (
  <div className="relative w-full">
    <div className="leaf-watermark-tr" aria-hidden="true" />
    <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
        <h1 className="font-serif-brand text-4xl font-bold tracking-tight text-[#0F4D26] dark:text-[#d7f9dc] sm:text-5xl">
          {SITE_CONTENT.products.title}
        </h1>
        <p className="text-base text-[#1F2A22]/80 dark:text-[#c4d6c8] sm:text-lg">
          {SITE_CONTENT.products.subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <article key={product.id} className="card-hover flex flex-col overflow-hidden rounded-2xl border border-[#D5E6D3] bg-white p-4 shadow-sm dark:border-[#224e2f] dark:bg-[#13271A]">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#F5F1E7] dark:bg-[#183622]">
              <ProductImage
                src={product.image}
                alt={product.imageAlt}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="mt-5 font-serif-brand text-xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">
              {product.name}
            </h2>
            <button
              type="button"
              onClick={() => openEnquiryModal(product.name)}
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#EBF5EC] px-5 font-bold text-[#0F4D26] transition-colors hover:bg-[#DCEFE1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] dark:bg-[#193a24] dark:text-[#a2f0b5] dark:hover:bg-[#21492d]"
            >
              {SITE_CONTENT.products.cardCta}
            </button>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-sm font-medium text-stone-600 dark:text-stone-300">
        {SITE_CONTENT.products.pricingNote}
      </p>

      <section className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#D5E6D3] bg-[#EBF5EC] p-6 dark:border-[#224e2f] dark:bg-[#13291b] sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="font-serif-brand text-xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">
            {SITE_CONTENT.products.bulkHeading}
          </h2>
        </div>
        <button
          type="button"
          onClick={() => openEnquiryModal()}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#1F7A3A] px-6 font-bold text-white transition-colors hover:bg-[#17632E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A]"
        >
          {SITE_CONTENT.products.quoteCta}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </section>
    </main>
  </div>
);
