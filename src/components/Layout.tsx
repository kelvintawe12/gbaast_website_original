import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';
import { BackButton } from './BackButton';

export function Layout({ children }: {children: React.ReactNode;}) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white selection:bg-[#C8102E] selection:text-white">
      <Navbar />
      <BackButton />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BackToTop />
    </div>);

}