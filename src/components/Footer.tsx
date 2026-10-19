import React from 'react';
import { Phone, MapPin, User, CheckCircle2 } from 'lucide-react';
import { ThreeLeafIcon } from './ThreeLeafIcon';
import { TrustBadgesRow } from './TrustBadgesRow';
import { CONTACT_INFO } from '../utils/enquiry';
import { PageId } from './Navbar';

interface FooterProps {
  setActivePage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="w-full bg-[#0F4D26] text-white pt-16 pb-12 mt-20 relative z-10 border-t border-[#166031]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <ThreeLeafIcon size={26} className="text-[#9ACD32]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-brand text-2xl font-bold tracking-tight text-white leading-tight">
                  {CONTACT_INFO.business}
                </span>
                <span className="text-xs font-medium text-[#9ACD32] tracking-wide">
                  {CONTACT_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-white/80 max-w-sm leading-relaxed">
              Supplying natural, hand-stitched eco-friendly leaf plates direct from Hyderabad for caterers, event planners, temples, restaurants and wholesalers.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-white/90 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
              <User className="w-3.5 h-3.5 text-[#9ACD32]" />
              <span>Owner: {CONTACT_INFO.owner}</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-white/80">
              <MapPin className="w-3.5 h-3.5 text-[#9ACD32]" />
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="font-serif-brand text-lg font-bold text-white tracking-wide mb-1">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-white/85">
              <button
                type="button"
                onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left hover:text-[#9ACD32] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => { setActivePage('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left hover:text-[#9ACD32] transition-colors cursor-pointer"
              >
                Our Products (5 Sizes)
              </button>
              <button
                type="button"
                onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left hover:text-[#9ACD32] transition-colors cursor-pointer"
              >
                About SVM Traders
              </button>
              <button
                type="button"
                onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left hover:text-[#9ACD32] transition-colors cursor-pointer"
              >
                Contact &amp; Bulk Orders
              </button>
            </div>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <h4 className="font-serif-brand text-lg font-bold text-white tracking-wide mb-1">
              Direct Phone Orders
            </h4>
            <p className="text-xs text-white/80">
              Tap to call directly for bulk orders, wholesale inquiries or custom sizes:
            </p>
            <div className="flex flex-col space-y-2 pt-1">
              <a
                href={`tel:${CONTACT_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/15"
              >
                <Phone className="w-4 h-4 text-[#9ACD32] fill-current" />
                <span>+91 {CONTACT_INFO.primaryPhone}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.secondaryPhone}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/15"
              >
                <Phone className="w-4 h-4 text-[#9ACD32] fill-current" />
                <span>+91 {CONTACT_INFO.secondaryPhone}</span>
              </a>
            </div>
            <div className="pt-2 text-xs text-white/70 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#9ACD32]" />
              <span>Price &amp; Minimum Order: On Request</span>
            </div>
          </div>
        </div>

        {/* Middle Section: Trust Badges */}
        <div className="py-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-4 text-center">
            Our Commitments to Quality &amp; Sustainability
          </p>
          <TrustBadgesRow variant="footer" />
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-3">
          <p>© 2026 {CONTACT_INFO.business}. All rights reserved.</p>
          <p className="text-white/60">
            {CONTACT_INFO.location} • Owner: {CONTACT_INFO.owner}
          </p>
        </div>
      </div>
    </footer>
  );
};
