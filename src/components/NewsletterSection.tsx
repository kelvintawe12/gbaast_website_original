import React from 'react';
export function NewsletterSection() {
  return (
    <section className="bg-[#002B5B] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">
              Stay Connected
            </h2>
            <p className="text-white/80">
              Get the latest updates on admissions, events, and school news.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md">
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}>

              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
                required />

              <button
                type="submit"
                className="px-6 py-3 bg-[#C8102E] text-white font-bold rounded hover:bg-red-700 transition-colors whitespace-nowrap">

                Subscribe
              </button>
            </form>
            <p className="text-white/50 text-xs mt-3 text-center sm:text-left">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>);

}