import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#C8102E] text-white shadow-lg hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C8102E] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      aria-label="Back to top">

      <ChevronUp className="h-6 w-6" />
    </button>);

}