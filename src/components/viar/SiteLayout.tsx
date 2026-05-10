import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

const SiteLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-[#2D2D2D] flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default SiteLayout;
