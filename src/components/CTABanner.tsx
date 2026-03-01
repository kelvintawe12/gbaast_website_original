import React from 'react';
import { Link } from 'react-router-dom';
export function CTABanner() {
  return (
    <section className="relative bg-[#C8102E] py-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Join GBAAST?
        </h2>
        <p className="text-xl text-white/90 mb-10 font-medium">
          Give your child the gift of bilingual excellence and a bright future.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/apply"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#C8102E] font-bold rounded shadow-lg hover:bg-gray-100 transition-colors text-center">

            Apply Now
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors text-center">

            Contact Us
          </Link>
        </div>
      </div>
    </section>);

}