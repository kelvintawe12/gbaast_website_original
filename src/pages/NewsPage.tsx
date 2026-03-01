import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export function NewsPage() {
  const categories = ['All', 'Academic', 'Campus', 'Events', 'Sports'];
  const news = [
  {
    title: 'GBAAST Students Excel in Regional Science Fair',
    cat: 'Academic',
    date: 'Oct 15, 2024',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'New Computer Lab Opens with 50 Workstations',
    cat: 'Campus',
    date: 'Sep 28, 2024',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: '98% Success Rate in GCE O-Level Results',
    cat: 'Academic',
    date: 'Sep 10, 2024',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Inter-House Sports Competition Results',
    cat: 'Sports',
    date: 'Aug 22, 2024',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Cultural Week Celebrates Cameroon Heritage',
    cat: 'Events',
    date: 'Aug 05, 2024',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Form 5 Students Visit University of Yaoundé',
    cat: 'Academic',
    date: 'Jul 18, 2024',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'New Library Books Donated by British Council',
    cat: 'Campus',
    date: 'Jul 02, 2024',
    color: 'from-red-500 to-rose-500'
  },
  {
    title: 'GBAAST Debate Team Wins Regional Championship',
    cat: 'Academic',
    date: 'Jun 15, 2024',
    color: 'from-teal-400 to-emerald-500'
  },
  {
    title: 'End of Year Awards Ceremony Highlights',
    cat: 'Events',
    date: 'Jun 01, 2024',
    color: 'from-cyan-500 to-blue-500'
  }];

  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          News & Updates
        </h1>
        <p className="text-white/70 font-medium">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span> News
        </p>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat, i) =>
            <button
              key={i}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${i === 0 ? 'bg-[#C8102E] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>

                {cat}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {news.map((item, i) =>
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col">

                <div
                className={`h-48 bg-gradient-to-br ${item.color} relative`}>

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#002B5B] text-xs font-bold px-3 py-1 rounded-full">
                    {item.cat}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-sm text-gray-500 mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-[#002B5B] mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt.
                  </p>
                  <a
                  href="#"
                  className="inline-flex items-center text-[#C8102E] font-bold text-sm hover:text-red-800 transition-colors">

                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center items-center space-x-2">
            <button
              className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50 disabled:opacity-50"
              disabled>

              Previous
            </button>
            <button className="w-10 h-10 bg-[#002B5B] text-white rounded font-bold">
              1
            </button>
            <button className="w-10 h-10 border border-gray-300 text-gray-600 rounded hover:bg-gray-50 font-bold">
              2
            </button>
            <button className="w-10 h-10 border border-gray-300 text-gray-600 rounded hover:bg-gray-50 font-bold">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>);

}