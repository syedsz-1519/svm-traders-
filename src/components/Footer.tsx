import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteContent';
import { PageId } from './Navbar';

interface FooterProps {
  setActivePage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const goToFaq = () => {
    setActivePage('home');
    window.setTimeout(() => {
      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="mt-auto border-t border-[#1e6337] bg-[#0F4D26] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-3">
          <div>
            <h2 className="font-serif-brand text-2xl font-bold">{CONTACT_INFO.business}</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
              {CONTACT_INFO.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-serif-brand text-lg font-bold">Quick Links</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              <FooterPageLink label="Home" page="home" setActivePage={setActivePage} />
              <FooterPageLink label="Products" page="products" setActivePage={setActivePage} />
              <FooterPageLink label="About" page="about" setActivePage={setActivePage} />
              <FooterPageLink label="Contact" page="contact" setActivePage={setActivePage} />
              <li>
                <button type="button" onClick={goToFaq} className="text-left hover:text-[#D6A879] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  FAQ
                </button>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-serif-brand text-lg font-bold">Call</h2>
            <div className="mt-3 space-y-2">
              {[CONTACT_INFO.primaryPhone, CONTACT_INFO.secondaryPhone].map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex min-h-11 items-center gap-2 text-sm font-semibold text-white/90 hover:text-[#D6A879] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  +91 {phone.slice(0, 5)} {phone.slice(5)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>{CONTACT_INFO.owner}, Proprietor · {CONTACT_INFO.location}</p>
          <p>© 2026 SVM Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterPageLinkProps {
  label: string;
  page: PageId;
  setActivePage: (page: PageId) => void;
}

const FooterPageLink: React.FC<FooterPageLinkProps> = ({ label, page, setActivePage }) => (
  <li>
    <button
      type="button"
      onClick={() => {
        setActivePage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="text-left hover:text-[#D6A879] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {label}
    </button>
  </li>
);
