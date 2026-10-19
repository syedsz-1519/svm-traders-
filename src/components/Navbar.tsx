import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteContent';

export type PageId = 'home' | 'products' | 'about' | 'contact';

interface NavbarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  openEnquiryModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  openEnquiryModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Our Range' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    openEnquiryModal();
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#102216] shadow-[0_2px_12px_rgba(15,77,38,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)] border-b border-[#E3EDE1] dark:border-[#1c3825] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand Logo & Name */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex h-16 w-28 shrink-0 items-center text-left sm:h-[4.5rem] sm:w-36"
          aria-label={`${CONTACT_INFO.business} home`}
        >
          <img
            src="/images/svm-traders-logo.webp"
            alt="SVM Traders"
            width={1024}
            height={765}
            fetchPriority="high"
            className="h-full w-full object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-5 text-[15px] font-medium xl:gap-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`relative py-2 font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#0F4D26] dark:text-[#a2f0b5] font-bold'
                    : 'text-[#1F2A22] dark:text-[#c4d6c8] hover:text-[#1F7A3A] dark:hover:text-[#a2f0b5]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1F7A3A] dark:bg-[#52d274] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${CONTACT_INFO.primaryPhone}`}
            className="hidden h-11 items-center gap-2 rounded-xl border border-[#1F7A3A] px-4 text-sm font-semibold text-[#0F4D26] transition-colors hover:bg-[#F6FAEA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] dark:text-[#d7f9dc] dark:hover:bg-[#183321] sm:inline-flex"
            aria-label={`Call SVM Traders now at ${CONTACT_INFO.primaryPhone}`}
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call</span>
          </a>

          <a
            href={`tel:${CONTACT_INFO.primaryPhone}`}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F7A3A] text-white shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] sm:hidden"
            aria-label={`Call SVM Traders at ${CONTACT_INFO.primaryPhone}`}
          >
            <Phone className="w-4 h-4 fill-current" />
          </a>

          <button
            type="button"
            onClick={handleQuoteClick}
            className="hidden min-h-11 items-center justify-center rounded-xl bg-[#1F7A3A] px-4 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#17632E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] sm:inline-flex"
          >
            Request a Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-[#0F4D26] transition-colors hover:bg-[#F6FAEA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] dark:text-[#a2f0b5] dark:hover:bg-[#183321] lg:hidden"
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden border-t border-[#E3EDE1] dark:border-[#1c3825] bg-white dark:bg-[#102216] px-5 py-4 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#EBF5EC] dark:bg-[#183622] text-[#0F4D26] dark:text-[#a2f0b5]'
                    : 'text-[#1F2A22] dark:text-[#c4d6c8] hover:bg-[#F6FAEA] dark:hover:bg-[#152e1d]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#1F7A3A] dark:bg-[#52d274]" />
                )}
              </button>
            );
          })}
          <div className="pt-3 border-t border-[#E3EDE1] dark:border-[#1c3825] flex flex-col gap-2">
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-[#1F7A3A] text-white font-semibold text-sm shadow-xs"
              aria-label={`Call +91 ${CONTACT_INFO.primaryPhone}`}
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.secondaryPhone}`}
              className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-[#F6FAEA] dark:bg-[#163321] text-[#0F4D26] dark:text-[#a2f0b5] border border-[#D5E6D3] dark:border-[#204a2d] font-semibold text-sm"
              aria-label={`Call +91 ${CONTACT_INFO.secondaryPhone}`}
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <button
              type="button"
              onClick={handleQuoteClick}
              className="w-full min-h-12 rounded-xl bg-[#1F7A3A] px-4 text-white font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A]"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
