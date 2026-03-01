import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  FlaskConical,
  Monitor,
  Briefcase,
  Languages,
  Trophy,
  ArrowRight } from
'lucide-react';
const programs = [
{
  title: 'Arts & Humanities',
  description:
  'Literature, languages, history, philosophy, and creative arts for well-rounded cultural education.',
  icon: BookOpen
},
{
  title: 'Sciences',
  description:
  'Mathematics, physics, chemistry, and biology with hands-on laboratory experience.',
  icon: FlaskConical
},
{
  title: 'Technology',
  description:
  'Computer science, digital skills, and engineering fundamentals for the modern world.',
  icon: Monitor
},
{
  title: 'Business Studies',
  description:
  'Accounting, economics, and management principles for future entrepreneurs and leaders.',
  icon: Briefcase
},
{
  title: 'Bilingual Studies',
  description:
  'Intensive French and English proficiency program for complete bilingual fluency.',
  icon: Languages
},
{
  title: 'Sports & Physical Education',
  description:
  'Comprehensive athletics program promoting fitness, teamwork, and healthy competition.',
  icon: Trophy
}];

export function DegreePrograms() {
  return (
    <section id="programs" className="bg-[#F5F7FA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
            Our Academic Programs
          </h2>
          <div className="w-24 h-1 bg-[#C8102E] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100">

                <div className="w-14 h-14 bg-[#002B5B]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C8102E]/10 transition-colors">
                  <Icon className="h-7 w-7 text-[#002B5B] group-hover:text-[#C8102E] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#002B5B] mb-3 group-hover:text-[#C8102E] transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {program.description}
                </p>
                <Link
                  to="/programs"
                  className="inline-flex items-center text-[#002B5B] font-semibold group-hover:text-[#C8102E] transition-colors">

                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>);

          })}
        </div>
      </div>
    </section>);

}