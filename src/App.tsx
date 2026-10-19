import React, { lazy, Suspense, useState } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppBubble } from './components/WhatsAppBubble';
import { MobileStickyBar } from './components/MobileStickyBar';
import { EnquiryModal } from './components/EnquiryModal';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then((module) => ({ default: module.ProductsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })));

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

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-16 sm:pb-0" id="main-content">
        <div key={activePage} className="w-full">
          <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-16 text-center text-[#0F4D26]" role="status">Loading…</div>}>
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
          </Suspense>
        </div>
      </main>

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
