import React, { useState } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppBubble } from './components/WhatsAppBubble';
import { MobileStickyBar } from './components/MobileStickyBar';
import { EnquiryModal } from './components/EnquiryModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    productName?: string;
  }>({
    isOpen: false,
    productName: undefined,
  });

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
    <div className="min-h-screen flex flex-col bg-[#F6FAEA] text-[#1F2A22] selection:bg-[#1F7A3A] selection:text-white">
      {/* Sticky Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        openEnquiryModal={openEnquiryModal}
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

      {/* Footer with prominent Contact Us modal trigger */}
      <Footer setActivePage={setActivePage} />

      {/* Floating WhatsApp Bubble Action Button on Right Side */}
      <WhatsAppBubble />

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
