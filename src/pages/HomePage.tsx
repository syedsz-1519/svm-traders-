import React from 'react';
import { ArrowRight, Check, Leaf, MapPin, PackageCheck, ShieldCheck, Truck } from 'lucide-react';
import { ProductImage } from '../components/ProductImage';
import { FaqSection } from '../components/FaqSection';
import { CONTACT_INFO, SITE_CONTENT, TRUST_BADGES } from '../data/siteContent';
import { PageId } from '../components/Navbar';

interface HomePageProps {
  setActivePage: (page: PageId) => void;
  openEnquiryModal: (productName?: string) => void;
}

const reasonIcons = [Leaf, ShieldCheck, Check];
const packIcons = [PackageCheck, Truck, Leaf];

export const HomePage: React.FC<HomePageProps> = ({ setActivePage, openEnquiryModal }) => (
  <div className="relative w-full">
    <div className="leaf-watermark-tr" aria-hidden="true" />

    <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-2 lg:gap-14 lg:px-8">
      <div className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#BDE0C6] bg-[#DCEFE1] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0F4D26] dark:border-[#225032] dark:bg-[#183a24] dark:text-[#a2f0b5]">
          <Leaf aria-hidden="true" className="h-4 w-4" />
          {CONTACT_INFO.location}
        </p>
        <h1 className="font-serif-brand text-4xl font-bold leading-tight tracking-tight text-[#0F4D26] dark:text-[#d7f9dc] sm:text-5xl lg:text-6xl">
          {SITE_CONTENT.hero.headline}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[#1F2A22]/85 dark:text-[#d0dfd3]">
          {SITE_CONTENT.hero.subheading}
        </p>
        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#1F7A3A] px-7 font-bold text-white shadow-md transition-colors hover:bg-[#17632E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A]"
          >
            {SITE_CONTENT.hero.quoteCta}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              setActivePage('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex min-h-13 items-center justify-center rounded-xl border border-[#1F7A3A] bg-white px-7 font-bold text-[#0F4D26] transition-colors hover:bg-[#F6FAEA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] dark:bg-[#163321] dark:text-[#d7f9dc] dark:hover:bg-[#1c3d28]"
          >
            {SITE_CONTENT.hero.productsCta}
          </button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-xl">
        <div className="grid aspect-[4/3] grid-cols-[1.15fr_0.85fr] grid-rows-2 gap-3">
          {SITE_CONTENT.hero.images.map((image, index) => (
            <div
              key={image.src}
              className={`overflow-hidden rounded-2xl border-4 border-white bg-[#F5F1E7] shadow-xl dark:border-[#1b3322] ${
                index === 0 ? 'row-span-2 rounded-[2rem]' : ''
              }`}
            >
              <ProductImage
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="eager"
                fetchPriority={index === 0 ? 'high' : 'auto'}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mx-auto mt-4 flex max-w-sm items-center gap-3 rounded-2xl border border-[#D5E6D3] bg-white/95 p-4 shadow-lg backdrop-blur dark:border-[#224e2f] dark:bg-[#13271A]/95">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EBF5EC] text-[#1F7A3A] dark:bg-[#1a3824] dark:text-[#52d274]">
            <PackageCheck aria-hidden="true" className="h-6 w-6" />
          </span>
          <div>
            <p className="font-bold text-[#0F4D26] dark:text-[#d7f9dc]">Natural leaf tableware</p>
            <p className="text-sm text-stone-600 dark:text-stone-300">For events, catering and everyday use</p>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        title={SITE_CONTENT.sectionTitles.gallery}
        subtitle="Browse every product photo, including individual pieces, serving ideas and stacks."
      />
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4">
        {SITE_CONTENT.galleryImages.map((image) => (
          <figure key={image.src} className="overflow-hidden rounded-2xl border border-[#D5E6D3] bg-white shadow-sm dark:border-[#224e2f] dark:bg-[#13271A]">
            <div className="aspect-[4/3] bg-[#F5F1E7] dark:bg-[#183622]">
              <ProductImage
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="px-3 py-3 sm:px-4">
              <p className="text-sm font-bold text-[#0F4D26] dark:text-[#d7f9dc]">{image.productName}</p>
              <p className="mt-1 text-xs font-semibold text-[#8A5A32] dark:text-[#d6a879]">{image.categoryLabel}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => {
            setActivePage('products');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#1F7A3A] px-6 font-bold text-white transition-colors hover:bg-[#17632E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A]"
        >
          Check the Products
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </section>

    <section className="border-y border-[#D5E6D3] bg-[#EBF5EC]/70 px-4 py-20 dark:border-[#1d4128] dark:bg-[#112417]/70 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={SITE_CONTENT.sectionTitles.whyChooseUs} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SITE_CONTENT.reasons.map((reason, index) => {
            const Icon = reasonIcons[index];
            return (
              <article key={reason.title} className="h-full rounded-2xl border border-[#D5E6D3] bg-white p-7 shadow-sm dark:border-[#224e2f] dark:bg-[#13271A]">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBF5EC] text-[#1F7A3A] dark:bg-[#1a3824] dark:text-[#52d274]">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="font-serif-brand text-xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">{reason.title}</h3>
                <p className="mt-2 leading-relaxed text-[#1F2A22]/80 dark:text-[#c4d6c8]">{reason.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section
      aria-labelledby="campaign-heading"
      className="border-y border-[#D5E6D3] bg-[#F5F1E7] px-4 py-16 dark:border-[#224e2f] dark:bg-[#17261a] sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-10 lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#1F7A3A] dark:text-[#82d991]">
            {SITE_CONTENT.campaign.eyebrow}
          </p>
          <h2
            id="campaign-heading"
            className="font-serif-brand text-3xl font-bold tracking-tight text-[#0F4D26] dark:text-[#d7f9dc] sm:text-4xl"
          >
            {SITE_CONTENT.campaign.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#1F2A22]/85 dark:text-[#d0dfd3] sm:text-lg">
            {SITE_CONTENT.campaign.text}
          </p>
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#1F7A3A] px-6 font-bold text-white shadow-md transition-colors hover:bg-[#17632E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A]"
          >
            {SITE_CONTENT.campaign.quoteCta}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
        <div className="relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl border border-[#202020] bg-black shadow-2xl md:aspect-video md:max-w-none">
          <video
            controls
            playsInline
            preload="metadata"
            aria-label={SITE_CONTENT.campaign.videoLabel}
            className="absolute inset-0 h-full w-full bg-black object-contain"
          >
            <source src={SITE_CONTENT.campaign.videoSrc} type="video/mp4" />
            Your browser does not support embedded video. Please use the quote button to contact SVM Traders.
          </video>
        </div>
      </div>
    </section>

    <section aria-label="Product qualities" className="border-y border-[#D5E6D3] bg-[#EBF5EC] px-4 py-7 dark:border-[#1d4128] dark:bg-[#112417]">
      <ul className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-[#0F4D26] dark:text-[#d7f9dc] sm:gap-x-12">
        {TRUST_BADGES.map((badge) => (
          <li key={badge} className="inline-flex items-center gap-2">
            <Check aria-hidden="true" className="h-4 w-4 text-[#1F7A3A] dark:text-[#52d274]" />
            {badge}
          </li>
        ))}
      </ul>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading title={SITE_CONTENT.bulkOrders.title} />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {SITE_CONTENT.bulkOrders.packs.map((pack, index) => {
          const Icon = packIcons[index];
          return (
            <article key={pack.name} className="h-full rounded-2xl border border-[#D5E6D3] bg-white p-6 shadow-sm dark:border-[#224e2f] dark:bg-[#13271A]">
              <Icon aria-hidden="true" className="mb-4 h-7 w-7 text-[#1F7A3A] dark:text-[#52d274]" />
              <h3 className="font-serif-brand text-xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">{pack.name}</h3>
              <p className="mt-1 text-lg font-semibold text-[#8A5A32] dark:text-[#d6a879]">{pack.quantity}</p>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">{pack.use}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#F5F1E7] p-6 dark:bg-[#2a251c] sm:flex-row sm:items-center">
        <p className="text-[#1F2A22] dark:text-[#e8e0d2]">{SITE_CONTENT.bulkOrders.note}</p>
        <button
          type="button"
          onClick={() => openEnquiryModal()}
          className="min-h-12 rounded-xl bg-[#1F7A3A] px-6 font-bold text-white transition-colors hover:bg-[#17632E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A]"
        >
          {SITE_CONTENT.products.quoteCta}
        </button>
      </div>
    </section>

    <section className="bg-[#F5F1E7] px-4 py-16 dark:bg-[#2a251c] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-start">
        <MapPin aria-hidden="true" className="h-6 w-6 shrink-0 text-[#8A5A32]" />
        <div>
          <h2 className="font-serif-brand text-2xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">{SITE_CONTENT.delivery.title}</h2>
          <p className="mt-2 max-w-4xl leading-relaxed text-[#1F2A22]/85 dark:text-[#e8e0d2]">{SITE_CONTENT.delivery.text}</p>
        </div>
      </div>
    </section>

    <FaqSection openEnquiryModal={openEnquiryModal} />

    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#0F4D26] p-8 text-white shadow-xl sm:flex-row sm:items-center sm:p-10">
        <div>
          <h2 className="font-serif-brand text-2xl font-bold sm:text-3xl">Need leaf plates for your next order?</h2>
          <p className="mt-2 text-white/80">Contact SVM Traders in {CONTACT_INFO.location} for a quote.</p>
        </div>
        <button
          type="button"
          onClick={() => openEnquiryModal()}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 font-bold text-[#0F4D26] transition-colors hover:bg-[#F5F1E7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {SITE_CONTENT.hero.quoteCta}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </section>
  </div>
);

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => (
  <header className="mx-auto max-w-2xl space-y-3 text-center">
    <h2 className="font-serif-brand text-3xl font-bold tracking-tight text-[#0F4D26] dark:text-[#d7f9dc] sm:text-4xl">
      {title}
    </h2>
    {subtitle && <p className="text-base text-[#1F2A22]/80 dark:text-[#c4d6c8]">{subtitle}</p>}
  </header>
);
