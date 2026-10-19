import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { EnquiryModal } from './components/EnquiryModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('svm-theme');
      if (saved) return saved === 'dark';
      return false;
    }
    return false;
  });

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    productName?: string;
  }>({
    isOpen: false,
    productName: undefined,
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('svm-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('svm-theme', 'light');
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  const openEnquiryModal = (productName?: string) => {
    setModalState({
      isOpen: true,
      productName,
    });
  };

  const closeEnquiryModal = () => {
    setModalState({
      isOpen: false,
      productName: undefined,
    });
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDark ? 'dark' : ''
      } bg-[#F6FAEA] dark:bg-[#0C1A11] text-[#1F2A22] dark:text-[#E5EFE7] selection:bg-[#1F7A3A] selection:text-white transition-colors duration-200`}
    >
      {/* Sticky Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        isDark={isDark}
        toggleDark={toggleDark}
      />

      {/* Main Content Area with Smooth Page Transitions */}
      <main className="flex-1 w-full pb-16 sm:pb-0" id="main-content">
        <div key={activePage} className="w-full page-transition">
          {activePage === 'home' && (
            <HomePage
              setActivePage={setActivePage}
              openEnquiryModal={openEnquiryModal}
            />
          )}
          {activePage === 'products' && (
            <ProductsPage openEnquiryModal={openEnquiryModal} />
          )}
          {activePage === 'about' && <AboutPage />}
          {activePage === 'contact' && <ContactPage />}
        </div>
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Mobile Sticky Bar (Call + WhatsApp) */}
      <MobileStickyBar />

      {/* Quick Quote Modal */}
      <EnquiryModal
        isOpen={modalState.isOpen}
        onClose={closeEnquiryModal}
        initialProduct={modalState.productName}
      />
    </div>
  );
}
