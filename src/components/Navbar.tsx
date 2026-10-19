import React, { useState } from 'react';
import { Phone, Menu, X, Sun, Moon } from 'lucide-react';
import { ThreeLeafIcon } from './ThreeLeafIcon';
import { CONTACT_INFO } from '../utils/enquiry';

export type PageId = 'home' | 'products' | 'about' | 'contact';

interface NavbarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  isDark: boolean;
  toggleDark: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  isDark,
  toggleDark,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#102216] shadow-[0_2px_12px_rgba(15,77,38,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)] border-b border-[#E3EDE1] dark:border-[#1c3825] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Mobile: Hamburger left */}
        <div className="flex md:hidden items-center shrink-0 w-10">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -ml-2 rounded-lg text-[#0F4D26] dark:text-[#a2f0b5] hover:bg-[#F6FAEA] dark:hover:bg-[#183321] transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Brand Logo & Name */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 sm:gap-3 text-left group cursor-pointer md:mr-auto mx-auto md:mx-0"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EBF5EC] dark:bg-[#1a3824] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <ThreeLeafIcon size={26} className="text-[#1F7A3A] dark:text-[#52d274]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-brand text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight text-[#0F4D26] dark:text-[#d7f9dc] leading-tight">
              {CONTACT_INFO.business}
            </span>
            <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-[#1F7A3A] dark:text-[#88d982] tracking-normal -mt-0.5">
              {CONTACT_INFO.tagline}
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-[16px] font-medium"
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

        {/* Right Actions: Dark mode toggle & Call Now Button */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleDark}
            className="p-2.5 rounded-xl border border-[#D5E6D3] dark:border-[#22472d] text-[#0F4D26] dark:text-[#a2f0b5] bg-white dark:bg-[#162e1e] hover:bg-[#F6FAEA] dark:hover:bg-[#1c3a26] transition-all cursor-pointer shadow-xs"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Desktop "Call Now" Button */}
          <a
            href={`tel:${CONTACT_INFO.primaryPhone}`}
            className="hidden sm:inline-flex items-center gap-2 h-[46px] px-5 rounded-xl bg-[#1F7A3A] hover:bg-[#17632E] text-white font-semibold text-[15px] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            aria-label={`Call SVM Traders now at ${CONTACT_INFO.primaryPhone}`}
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call Now</span>
          </a>

          {/* Mobile: Call Icon */}
          <a
            href={`tel:${CONTACT_INFO.primaryPhone}`}
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-[#1F7A3A] text-white shadow-xs"
            aria-label={`Call SVM Traders at ${CONTACT_INFO.primaryPhone}`}
          >
            <Phone className="w-4 h-4 fill-current" />
          </a>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E3EDE1] dark:border-[#1c3825] bg-white dark:bg-[#102216] px-5 py-4 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
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
              className="w-full h-11 flex items-center justify-center gap-2 rounded-xl bg-[#1F7A3A] text-white font-semibold text-sm shadow-xs"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call {CONTACT_INFO.primaryPhone}</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.secondaryPhone}`}
              className="w-full h-11 flex items-center justify-center gap-2 rounded-xl bg-[#F6FAEA] dark:bg-[#163321] text-[#0F4D26] dark:text-[#a2f0b5] border border-[#D5E6D3] dark:border-[#204a2d] font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call {CONTACT_INFO.secondaryPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
