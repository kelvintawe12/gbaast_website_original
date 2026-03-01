import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
export function AlumniSection() {
  const alumni = [
  {
    name: 'Jean-Pierre Nkoulou',
    role: 'Medical Student, University of Yaoundé',
    year: 'Class of 2021',
    quote:
    'GBAAST prepared me exceptionally well for university. The bilingual education gave me an advantage in my medical studies.',
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    name: 'Sandrine Mbah',
    role: 'Engineering Student, ENSPY',
    year: 'Class of 2022',
    quote:
    'The technology program at GBAAST sparked my passion for engineering. I am grateful for the strong foundation.',
    gradient: 'from-red-400 to-red-600'
  },
  {
    name: 'Paul Tchinda',
    role: 'Business Student, ESSEC Douala',
    year: 'Class of 2020',
    quote:
    'The discipline and work ethic I learned at GBAAST continue to serve me well in my business studies.',
    gradient: 'from-emerald-400 to-emerald-600'
  }];

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
            Our Graduates Network
          </h2>
          <div className="w-24 h-1 bg-[#C8102E] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our graduates are excelling in universities and careers across
            Cameroon and beyond. Join a community of successful alumni.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {alumni.map((person, index) =>
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow relative">

              <Quote className="absolute top-6 right-6 h-8 w-8 text-gray-100" />
              <div
              className={`w-20 h-20 rounded-full bg-gradient-to-br ${person.gradient} mb-6 shadow-inner`}>
            </div>
              <h3 className="text-xl font-bold text-[#002B5B] mb-1">
                {person.name}
              </h3>
              <p className="text-[#C8102E] font-semibold text-sm mb-1">
                {person.role}
              </p>
              <p className="text-gray-400 text-xs mb-4 uppercase tracking-wider">
                {person.year}
              </p>
              <p className="text-gray-600 italic leading-relaxed">
                "{person.quote}"
              </p>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link
            to="/alumni"
            className="inline-flex items-center px-8 py-4 bg-white border-2 border-[#002B5B] text-[#002B5B] font-bold rounded hover:bg-[#002B5B] hover:text-white transition-colors group">

            View All Graduates{' '}
            <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>);

}