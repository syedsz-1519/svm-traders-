import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Building2 } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  orderType: string;
  comment: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'K. Venkateshwara Rao',
    role: 'Lead Caterer, Sri Sai Catering Services',
    location: 'Kukatpally & Madhapur, Hyderabad',
    rating: 5,
    orderType: 'Wedding Banquet • 4,000 pcs (12" Buffet Plates & 4.5" Bowls)',
    comment:
      'We catered a 3-day Telugu wedding in Madhapur and ordered 4,000 buffet plates and curry bowls from SVM Traders. The plates were exceptionally rigid, did not sag with hot sambar or biryani, and the guests appreciated the authentic, chemical-free dining experience. Pradeep Reddy ensured delivery was on time at our venue.',
  },
  {
    id: 't-2',
    name: 'Radhika Sharma',
    role: 'Managing Director, Events by Radhika',
    location: 'Banjara Hills, Hyderabad',
    rating: 5,
    orderType: 'Traditional Sit-Down Feast • 2,500 pcs (14" Sitting Plates)',
    comment:
      'Finding spotless, naturally pressed 14-inch sitting plates in bulk in Hyderabad was difficult until we partnered with SVM Traders. Their large sit-down plates are uniformly finished, completely clean, and leak-proof. They have become our go-to partner for luxury eco-friendly events.',
  },
  {
    id: 't-3',
    name: 'M. Satyanarayana',
    role: 'Trustee, Sri Lakshmi Temple Trust',
    location: 'Secunderabad',
    rating: 5,
    orderType: 'Monthly Temple Prasadam • 1,500 pcs (8" Tiffin Plates & Bowls)',
    comment:
      'We place recurring bulk orders for our monthly temple Annadanam and prasadam distribution. SVM Traders provides pure, odorless, clean leaf plates that honor our sacred traditions. Even with hot ghee and payasam, there is zero leakage. Honest pricing and dependable supply.',
  },
  {
    id: 't-4',
    name: 'Anand Varma',
    role: 'Operations Head, Green Leaf Organic Cafe',
    location: 'Jubilee Hills, Hyderabad',
    rating: 5,
    orderType: 'Weekly Cafe Supply • 800 pcs (8" Snack & 12" Dining)',
    comment:
      'Replacing synthetic disposable tableware with SVM Traders botanical leaf plates has elevated our restaurant branding. Our diners love the natural leaf texture, and knowing the plates are 100% biodegradable and sourced locally in Hyderabad aligns with our zero-plastic mission.',
  },
  {
    id: 't-5',
    name: 'Sunita & Rajesh Reddy',
    role: 'Family Event Hosts',
    location: 'Gachibowli, Hyderabad',
    rating: 5,
    orderType: 'Gruhapravesam Ceremony • 400 pcs (Full Table Set)',
    comment:
      'We ordered a combined carton of 12-inch buffet plates, tiffin plates, and bowls for our housewarming lunch. Excellent thickness, natural aroma, and far better finish than regular plastic or foam alternatives. Ordering directly over WhatsApp was very smooth.',
  },
];

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = TESTIMONIALS.length;

  // Auto-advance every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  const activeItem = TESTIMONIALS[currentIndex];

  return (
    <section
      className="w-full bg-[#EBF5EC]/40 dark:bg-[#112417]/40 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-[#D5E6D3] dark:border-[#1d4128]"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Customer Testimonials Carousel"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCEFE1] dark:bg-[#183a24] text-[#0F4D26] dark:text-[#a2f0b5] text-xs font-bold uppercase tracking-wider">
            Verified Customer Reviews
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] tracking-tight">
            Trusted by Caterers &amp; Event Planners Across Hyderabad
          </h2>
          <p className="text-base text-[#1F2A22]/80 dark:text-[#c4d6c8] max-w-xl">
            See how our 100% natural Areca leaf plates perform at weddings, banquets, temples, and celebrations.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="relative bg-white dark:bg-[#13271A] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#D5E6D3] dark:border-[#224e2f] shadow-lg">
          {/* Subtle Quote Watermark */}
          <div className="absolute top-6 right-8 text-[#1F7A3A]/10 dark:text-[#52d274]/10 pointer-events-none">
            <Quote className="w-20 h-20 rotate-180" />
          </div>

          <div className="relative z-10 flex flex-col justify-between min-h-[260px]">
            {/* Top Row: Stars + Order Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-1" aria-label={`Rating: ${activeItem.rating} out of 5 stars`}>
                {[...Array(activeItem.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EBF5EC] dark:bg-[#183622] text-[#0F4D26] dark:text-[#a2f0b5] text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A3A] dark:text-[#52d274]" />
                <span>{activeItem.orderType}</span>
              </div>
            </div>

            {/* Quote Body */}
            <blockquote className="text-lg sm:text-xl text-[#1F2A22] dark:text-[#d7f9dc] font-medium leading-relaxed italic mb-8">
              "{activeItem.comment}"
            </blockquote>

            {/* Author Details & Carousel Nav */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#D5E6D3] dark:border-[#204a2d]">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#1F7A3A] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                  {activeItem.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#0F4D26] dark:text-white leading-tight">
                    {activeItem.name}
                  </h4>
                  <div className="flex flex-wrap items-center gap-1 text-xs text-stone-600 dark:text-stone-300 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-[#1F7A3A] dark:text-[#52d274] shrink-0" />
                    <span>{activeItem.role}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-[#1F7A3A] dark:text-[#a2f0b5]">{activeItem.location}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3 self-end sm:self-center">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-[#EBF5EC] dark:bg-[#183622] hover:bg-[#1F7A3A] hover:text-white dark:hover:bg-[#1F7A3A] text-[#0F4D26] dark:text-[#a2f0b5] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous customer review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5 px-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentIndex
                          ? 'w-6 bg-[#1F7A3A] dark:bg-[#52d274]'
                          : 'w-2 bg-[#D5E6D3] dark:bg-[#2a5538] hover:bg-[#1F7A3A]/50'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-[#EBF5EC] dark:bg-[#183622] hover:bg-[#1F7A3A] hover:text-white dark:hover:bg-[#1F7A3A] text-[#0F4D26] dark:text-[#a2f0b5] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next customer review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
