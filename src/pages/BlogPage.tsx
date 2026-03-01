import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Calendar, Clock, User } from 'lucide-react';
const categories = [
'All',
'School News',
'Academic Life',
'Student Stories',
'Events',
'Tips & Advice'];

const blogPosts = [
{
  title: 'Tips for New Boarding Students',
  category: 'Tips & Advice',
  date: 'Oct 28, 2024',
  author: 'Mrs. Esther Ngono',
  readTime: '5 min',
  color: 'from-blue-500 to-indigo-600',
  initials: 'EN'
},
{
  title: 'GCE Results: A Year of Excellence',
  category: 'School News',
  date: 'Oct 15, 2024',
  author: 'Mr. Pierre Atangana',
  readTime: '4 min',
  color: 'from-emerald-400 to-teal-500',
  initials: 'PA'
},
{
  title: 'The Importance of Bilingual Education',
  category: 'Academic Life',
  date: 'Oct 1, 2024',
  author: 'Mrs. Beatrice Fon',
  readTime: '7 min',
  color: 'from-orange-400 to-red-500',
  initials: 'BF'
},
{
  title: 'Cultural Week 2024 Highlights',
  category: 'Events',
  date: 'Sep 20, 2024',
  author: 'Mr. Jean Mbarga',
  readTime: '6 min',
  color: 'from-purple-500 to-pink-500',
  initials: 'JM'
},
{
  title: 'Student Council Elections Results',
  category: 'Student Stories',
  date: 'Sep 10, 2024',
  author: 'Admin',
  readTime: '3 min',
  color: 'from-cyan-400 to-blue-500',
  initials: 'AD'
},
{
  title: 'Science Fair Winners Announced',
  category: 'Academic Life',
  date: 'Aug 25, 2024',
  author: 'Mrs. Beatrice Fon',
  readTime: '5 min',
  color: 'from-yellow-400 to-orange-500',
  initials: 'BF'
},
{
  title: 'How to Balance Studies and Sports',
  category: 'Tips & Advice',
  date: 'Aug 10, 2024',
  author: 'Mr. Jean Mbarga',
  readTime: '6 min',
  color: 'from-red-500 to-rose-500',
  initials: 'JM'
},
{
  title: 'GBAAST Partners with British Council',
  category: 'School News',
  date: 'Jul 28, 2024',
  author: 'Dr. Grace Nkeng',
  readTime: '4 min',
  color: 'from-indigo-500 to-blue-600',
  initials: 'GN'
},
{
  title: 'End of Year Awards: Top Performers',
  category: 'Events',
  date: 'Jul 15, 2024',
  author: 'Admin',
  readTime: '5 min',
  color: 'from-teal-400 to-emerald-500',
  initials: 'AD'
}];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4 relative">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          GBAAST Blog
        </h1>
        <p className="text-white/70 font-medium mb-8">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span> Blog
        </p>
      </div>

      <div className="max-w-xl mx-auto px-4 relative z-10 -mt-8">
        <div className="bg-white rounded-full shadow-lg p-2 flex items-center border border-gray-100">
          <Search className="h-5 w-5 text-gray-400 ml-3 mr-2" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full py-2 px-2 outline-none text-gray-700 bg-transparent" />

          <button className="bg-[#C8102E] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-red-700 transition-colors">
            Search
          </button>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-colors ${activeCategory === cat ? 'bg-[#C8102E] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>

                {cat}
              </button>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              {/* Featured Post */}
              {activeCategory === 'All' &&
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden mb-12 flex flex-col md:flex-row">
                  <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-blue-600 to-indigo-800"></div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                        Academic Life
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" /> Nov 15, 2024
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#002B5B] mb-4 leading-tight">
                      How GBAAST Prepares Students for University Success
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      Discover the comprehensive approach we take to ensure our
                      students are not just ready for their final exams, but
                      fully prepared for the challenges of higher education and
                      beyond.
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#002B5B] font-bold mr-3">
                          GN
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#002B5B]">
                            Dr. Grace Nkeng
                          </p>
                          <p className="text-xs text-gray-500 flex items-center">
                            <Clock className="h-3 w-3 mr-1" /> 8 min read
                          </p>
                        </div>
                      </div>
                      <Link
                      to="#"
                      className="bg-[#002B5B] text-white px-4 py-2 rounded text-sm font-bold hover:bg-[#001A3A] transition-colors">

                        Read Article
                      </Link>
                    </div>
                  </div>
                </div>
              }

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {blogPosts.
                filter(
                  (post) =>
                  activeCategory === 'All' ||
                  post.category === activeCategory
                ).
                map((post, i) =>
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col group">

                      <div
                    className={`h-48 bg-gradient-to-br ${post.color} relative`}>

                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#002B5B] text-xs font-bold px-3 py-1 rounded-full">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" /> {post.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" /> {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-[#002B5B] mb-3 leading-tight group-hover:text-[#C8102E] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs mr-2">
                              {post.initials}
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                              {post.author}
                            </span>
                          </div>
                          <Link
                        to="#"
                        className="text-[#C8102E] hover:text-red-800 transition-colors">

                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                )}
              </div>

              {/* Pagination */}
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

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-[#F5F7FA] rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#002B5B] mb-4">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                  'Education',
                  'Boarding',
                  'Exams',
                  'Sports',
                  'Culture',
                  'Science',
                  'Arts',
                  'Success'].
                  map((tag) =>
                  <span
                    key={tag}
                    className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full hover:border-[#C8102E] hover:text-[#C8102E] cursor-pointer transition-colors">

                      {tag}
                    </span>
                  )}
                </div>
              </div>

              <div className="bg-[#002B5B] rounded-xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-2">
                  Subscribe to Newsletter
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  Get the latest news and updates delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50" />

                  <button
                    type="button"
                    className="w-full bg-[#C8102E] text-white font-bold py-3 rounded hover:bg-red-700 transition-colors">

                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}