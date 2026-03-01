import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';

export function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show back button on home page or admin login
  if (location.pathname === '/' || location.pathname === '/admin/login') {
    return null;
  }

  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // If no history, go to home page
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleBack}
      className="fixed left-4 top-24 z-40 bg-[#002B5B] text-white p-3 rounded-full shadow-lg hover:bg-[#C8102E] transition-all duration-300 hover:shadow-xl hover:scale-110 group"
      aria-label="Go back"
    >
      <ArrowLeftIcon className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
    </button>
  );
}
