import React, { useEffect, useState } from 'react';
const testimonials = [
{
  quote:
  'GBAAST has transformed my life. The bilingual education has opened so many doors for me, and I feel confident facing my GCE exams.',
  name: 'Marie-Claire Nguemo',
  program: 'Sciences Track',
  year: 'Form 5, 2024',
  avatar: 'https://i.pravatar.cc/150?img=47'
},
{
  quote:
  "The teachers here truly care about each student. I've improved so much in both French and English, and the boarding experience has taught me independence.",
  name: 'Emmanuel Fotso',
  program: 'Technology Track',
  year: 'Form 4, 2024',
  avatar: 'https://i.pravatar.cc/150?img=11'
},
{
  quote:
  'I love the extracurricular activities at GBAAST. Being part of the debate club and science club has helped me discover my passions.',
  name: 'Aisha Mbarga',
  program: 'Arts & Humanities',
  year: 'Form 3, 2024',
  avatar: 'https://i.pravatar.cc/150?img=5'
}];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="experience" className="bg-[#F5F7FA] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
            What Our Students Say
          </h2>
          <div className="w-24 h-1 bg-[#C8102E] mx-auto"></div>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="text-[#C8102E] text-6xl font-serif absolute top-4 left-8 opacity-20">
            "
          </div>

          <div className="min-h-[160px] flex items-center justify-center mb-8 relative z-10">
            <p className="text-xl md:text-2xl text-[#002B5B] font-medium italic leading-relaxed transition-opacity duration-500">
              "{testimonials[activeIndex].quote}"
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={testimonials[activeIndex].avatar}
              alt={testimonials[activeIndex].name}
              className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[#C8102E]" />

            <h4 className="font-bold text-[#002B5B] text-lg">
              {testimonials[activeIndex].name}
            </h4>
            <p className="text-gray-500 text-sm">
              {testimonials[activeIndex].program},{' '}
              {testimonials[activeIndex].year}
            </p>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) =>
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-[#C8102E]' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

}