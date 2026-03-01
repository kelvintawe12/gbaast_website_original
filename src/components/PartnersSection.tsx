import React from 'react';
export function PartnersSection() {
  const partners = [
  'Ministry of Education',
  'GCE Board',
  'Alliance Française',
  'British Council',
  'UNESCO',
  'UNICEF',
  'MTN Foundation',
  'Orange Cameroon'];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
          Our Partners & Collaborators
        </h2>
        <div className="w-24 h-1 bg-[#C8102E] mx-auto mb-8"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We collaborate with leading educational institutions, government
          bodies, and organizations to provide our students with the best
          possible education and opportunities.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) =>
          <div
            key={index}
            className="bg-[#F5F7FA] h-24 rounded-lg flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer border border-gray-100">

              <span className="font-bold text-gray-400 text-center leading-tight">
                {partner}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>);

}