import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Languages, Monitor, ArrowRight } from 'lucide-react';
export function ResearchSection() {
  const areas = [
  {
    title: 'STEM Laboratory',
    icon: FlaskConical,
    description:
    'Hands-on science experiments and projects in our modern laboratory facilities, preparing students for scientific careers.'
  },
  {
    title: 'Language Center',
    icon: Languages,
    description:
    'Dedicated language immersion programs ensuring complete bilingual fluency in English and French.'
  },
  {
    title: 'Digital Skills Hub',
    icon: Monitor,
    description:
    'Computer programming, digital literacy, and technology skills for the 21st century workplace.'
  }];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002B5B] mb-6 leading-tight">
              Academic Excellence & Innovation
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At GBAAST, we go beyond traditional teaching methods. Our
              specialized centers provide students with practical skills and
              real-world experience, ensuring they are well-prepared for higher
              education and future careers.
            </p>
            <Link
              to="/programs"
              className="inline-flex items-center px-8 py-4 bg-[#002B5B] text-white font-bold rounded hover:bg-[#001A3A] transition-colors group">

              Learn More{' '}
              <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex-1 w-full space-y-6">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F5F7FA] p-6 rounded-lg border-l-4 border-[#002B5B] hover:border-[#C8102E] transition-colors shadow-sm hover:shadow-md">

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full shadow-sm mr-4 text-[#002B5B]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#002B5B] mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}