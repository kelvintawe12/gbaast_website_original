import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StarIcon,
  TrophyIcon,
  BookOpenIcon,
  MapPinIcon,
  ChevronRightIcon,
  QuoteIcon,
  AwardIcon,
  UsersIcon,
  ArrowRightIcon,
  FilterIcon } from
'lucide-react';
const spotlights = [
{
  id: 1,
  name: 'Amara Osei',
  program: 'Sciences',
  year: 'Form 5 (A-Level)',
  achievement: 'National Science Olympiad Champion 2024',
  quote:
  'GBAAST taught me that curiosity and hard work are the only tools you need to solve any problem.',
  detail:
  'Amara won first place at the National Science Olympiad, representing Cameroon at the African Science Fair in Nairobi. She plans to study Medicine at the University of Yaoundé I.',
  image:
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80',
  initials: 'AO',
  gradient: 'from-blue-600 to-indigo-800',
  featured: true,
  category: 'Academic',
  badges: ['Science', 'National Champion', 'Form 5']
},
{
  id: 2,
  name: 'Jean-Paul Mbarga',
  program: 'Technology',
  year: 'Form 4',
  achievement: 'Built a school attendance app used by 3 schools',
  quote:
  'The coding skills I learned here let me build real solutions for real problems in my community.',
  detail:
  'Jean-Paul developed a mobile attendance tracking app during his free periods. The app is now used by GBAAST and two neighboring schools, tracking over 1,500 students daily.',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  initials: 'JM',
  gradient: 'from-emerald-600 to-teal-800',
  featured: true,
  category: 'Innovation',
  badges: ['Technology', 'Innovation', 'Form 4']
},
{
  id: 3,
  name: 'Fatima Al-Hassan',
  program: 'Arts & Humanities',
  year: 'Form 5 (A-Level)',
  achievement: 'Published debut novel at age 17',
  quote:
  'My literature teacher at GBAAST saw a writer in me before I saw one in myself.',
  detail:
  'Fatima published her debut novel "Voices of the Savanna" — a bilingual story set in Northern Cameroon. The book has been adopted by several schools as supplementary reading material.',
  image:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
  initials: 'FA',
  gradient: 'from-purple-600 to-indigo-800',
  featured: false,
  category: 'Arts',
  badges: ['Arts', 'Published Author', 'Form 5']
},
{
  id: 4,
  name: 'Samuel Tabi',
  program: 'Sports & PE',
  year: 'Form 3',
  achievement: 'Selected for Cameroon U-17 Football Team',
  quote:
  'GBAAST proves every day that you can be a top student AND a top athlete.',
  detail:
  'Samuel was scouted and selected for the Cameroon Under-17 national football team while maintaining a GPA of 3.7. He balances training sessions with academic excellence.',
  image:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
  initials: 'ST',
  gradient: 'from-amber-500 to-orange-700',
  featured: false,
  category: 'Sports',
  badges: ['Sports', 'National Team', 'Form 3']
},
{
  id: 5,
  name: 'Esther Ngono',
  program: 'Business Studies',
  year: 'Form 5 (A-Level)',
  achievement: 'Won Regional Young Entrepreneur Award',
  quote:
  'The entrepreneurship projects at GBAAST gave me real business experience before I even graduated.',
  detail:
  'Esther launched a school supplies cooperative that serves 200+ students. Her business model won the Regional Young Entrepreneur Award and a grant of 500,000 CFA francs.',
  image:
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
  initials: 'EN',
  gradient: 'from-rose-600 to-red-800',
  featured: false,
  category: 'Business',
  badges: ['Business', 'Entrepreneur', 'Form 5']
},
{
  id: 6,
  name: 'Pierre Atangana',
  program: 'Bilingual Studies',
  year: 'Form 4',
  achievement: 'Bilingual Debate Champion — West Africa 2024',
  quote: 'Being truly bilingual is a superpower. GBAAST gave me that power.',
  detail:
  'Pierre represented Cameroon at the West African Bilingual Debate Championship, competing in both English and French. He won the Best Speaker award in both languages.',
  image:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
  initials: 'PA',
  gradient: 'from-cyan-600 to-blue-800',
  featured: false,
  category: 'Academic',
  badges: ['Bilingual', 'Debate', 'Form 4']
}];

const categories = [
'All',
'Academic',
'Innovation',
'Arts',
'Sports',
'Business'];

export function StudentSpotlightPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState<
    (typeof spotlights)[0] | null>(
    null);
  const featured = spotlights.filter((s) => s.featured);
  const filtered =
  activeCategory === 'All' ?
  spotlights :
  spotlights.filter((s) => s.category === activeCategory);
  return (
    <div className="pt-20 bg-[#F5F7FA] min-h-screen">
      {/* Hero */}
      <div className="bg-[#002B5B] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8102E] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-sm font-medium mb-6">
            <StarIcon className="h-4 w-4 text-[#C8102E]" />
            Celebrating Excellence
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Student Spotlight
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
            Meet the remarkable students who are achieving extraordinary things
            at GBAAST — in academics, sports, arts, and innovation.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="text-white">Student Spotlight</span>
          </div>
        </div>
      </div>

      {/* Featured Spotlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <TrophyIcon className="h-6 w-6 text-[#C8102E]" />
            <h2 className="text-2xl font-bold text-[#002B5B]">
              Featured This Month
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {featured.map((student) =>
            <div
              key={student.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">

                <div className="flex flex-col sm:flex-row">
                  {/* Image / Avatar */}
                  <div
                  className={`sm:w-48 h-48 sm:h-auto bg-gradient-to-br ${student.gradient} flex items-center justify-center flex-shrink-0 relative overflow-hidden`}>

                    <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover opacity-80"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = 'none';
                    }} />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#C8102E] text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <StarIcon className="h-3 w-3" /> Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {student.badges.map((badge) =>
                    <span
                      key={badge}
                      className="text-xs bg-[#002B5B]/10 text-[#002B5B] px-2 py-0.5 rounded-full font-medium">

                          {badge}
                        </span>
                    )}
                    </div>
                    <h3 className="text-xl font-bold text-[#002B5B] mb-0.5">
                      {student.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {student.program} · {student.year}
                    </p>

                    <div className="flex items-start gap-2 mb-4 bg-[#C8102E]/5 rounded-lg p-3">
                      <TrophyIcon className="h-4 w-4 text-[#C8102E] flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold text-[#C8102E]">
                        {student.achievement}
                      </p>
                    </div>

                    <blockquote className="text-sm text-gray-600 italic leading-relaxed mb-4 border-l-2 border-[#002B5B]/20 pl-3">
                      "{student.quote}"
                    </blockquote>

                    <button
                    onClick={() => setSelectedStudent(student)}
                    className="text-sm font-semibold text-[#002B5B] hover:text-[#C8102E] transition-colors flex items-center gap-1">

                      Read full story <ArrowRightIcon className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* All Spotlights */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-[#002B5B]">
              All Spotlights
            </h2>
            <div className="flex items-center gap-2 flex-wrap">
              <FilterIcon className="h-4 w-4 text-gray-400" />
              {categories.map((cat) =>
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-[#002B5B] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-[#002B5B] hover:text-[#002B5B]'}`}>

                  {cat}
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((student) =>
            <div
              key={student.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">

                {/* Header */}
                <div
                className={`bg-gradient-to-br ${student.gradient} p-5 relative`}>

                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-bold">
                        {student.initials}
                      </span>
                    </div>
                    <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">
                      {student.category}
                    </span>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-bold text-white">{student.name}</h3>
                    <p className="text-white/70 text-xs">
                      {student.program} · {student.year}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-start gap-2 mb-3 bg-amber-50 rounded-lg p-2.5">
                    <AwardIcon className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-amber-700 leading-snug">
                      {student.achievement}
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 italic leading-relaxed mb-4">
                    "{student.quote}"
                  </p>
                  <button
                  onClick={() => setSelectedStudent(student)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 border border-[#002B5B] text-[#002B5B] text-sm font-semibold rounded-lg hover:bg-[#002B5B] hover:text-white transition-colors">

                    Read Story <ArrowRightIcon className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Nominate Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-14 h-14 bg-[#002B5B]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <UsersIcon className="h-7 w-7 text-[#002B5B]" />
          </div>
          <h2 className="text-3xl font-bold text-[#002B5B] mb-3">
            Nominate a Student
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Know a GBAAST student who deserves recognition? Teachers, parents,
            and students can nominate someone for the monthly spotlight.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C8102E] text-white font-bold px-8 py-4 rounded hover:bg-red-700 transition-colors">

            Submit a Nomination <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedStudent &&
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedStudent(null)}>

          <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}>

            <div
            className={`bg-gradient-to-br ${selectedStudent.gradient} p-6`}>

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {selectedStudent.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {selectedStudent.name}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {selectedStudent.program} · {selectedStudent.year}
                    </p>
                  </div>
                </div>
                <button
                onClick={() => setSelectedStudent(null)}
                className="text-white/60 hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center">

                  ×
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-2 bg-[#C8102E]/5 rounded-lg p-3">
                <TrophyIcon className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                <p className="font-semibold text-[#C8102E] text-sm">
                  {selectedStudent.achievement}
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                {selectedStudent.detail}
              </p>
              <blockquote className="border-l-4 border-[#002B5B] pl-4 italic text-gray-600 text-sm">
                "{selectedStudent.quote}"
              </blockquote>
              <div className="flex flex-wrap gap-1.5">
                {selectedStudent.badges.map((badge) =>
              <span
                key={badge}
                className="text-xs bg-[#002B5B]/10 text-[#002B5B] px-2.5 py-1 rounded-full font-medium">

                    {badge}
                  </span>
              )}
              </div>
            </div>
            <div className="px-6 pb-6">
              <button
              onClick={() => setSelectedStudent(null)}
              className="w-full py-2.5 border border-gray-200 text-gray-600 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors">

                Close
              </button>
            </div>
          </div>
        </div>
      }
    </div>);

}