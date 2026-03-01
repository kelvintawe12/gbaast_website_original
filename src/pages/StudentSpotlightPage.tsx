import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StarIcon,
  TrophyIcon,
  ChevronRightIcon,
  AwardIcon,
  UsersIcon,
  ArrowRightIcon,
  FilterIcon,
  SearchIcon,
  HeartIcon,
  EyeIcon,
  MessageSquareIcon
} from 'lucide-react';
import { studentSpotlightsData } from '../data/studentSpotlightsData';

const categories = ['All', 'Academic', 'Innovation', 'Arts', 'Sports', 'Business'];

export function StudentSpotlightPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'name' | 'featured'>('popular');

  const featured = useMemo(
    () => studentSpotlightsData.filter((student) => student.featured),
    []
  );

  const filtered = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    let result =
      activeCategory === 'All'
        ? studentSpotlightsData
        : studentSpotlightsData.filter((student) => student.category === activeCategory);

    if (normalizedSearch) {
      result = result.filter(
        (student) =>
          student.name.toLowerCase().includes(normalizedSearch) ||
          student.program.toLowerCase().includes(normalizedSearch) ||
          student.achievement.toLowerCase().includes(normalizedSearch) ||
          student.badges.some((badge) => badge.toLowerCase().includes(normalizedSearch))
      );
    }

    if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'featured') {
      result = [...result].sort((a, b) => Number(b.featured) - Number(a.featured));
    } else {
      result = [...result].sort((a, b) => b.views - a.views);
    }

    return result;
  }, [activeCategory, searchTerm, sortBy]);

  const totalLikes = studentSpotlightsData.reduce((total, student) => total + student.likes, 0);
  const totalViews = studentSpotlightsData.reduce((total, student) => total + student.views, 0);
  const totalComments = studentSpotlightsData.reduce(
    (total, student) => total + student.comments,
    0
  );

  return (
    <div className="pt-20 bg-[#F5F7FA] min-h-screen">
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
            Meet the remarkable students who are achieving extraordinary things at GBAAST — in academics, sports, arts, and innovation.
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

      <section className="-mt-8 relative z-10 pb-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="text-xs text-gray-500">Spotlight Students</p>
              <p className="text-2xl font-bold text-[#002B5B]">{studentSpotlightsData.length}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="text-xs text-gray-500">Total Views</p>
              <p className="text-2xl font-bold text-[#002B5B]">{totalViews.toLocaleString()}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="text-xs text-gray-500">Total Likes</p>
              <p className="text-2xl font-bold text-[#002B5B]">{totalLikes.toLocaleString()}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="text-xs text-gray-500">Comments</p>
              <p className="text-2xl font-bold text-[#002B5B]">{totalComments.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <TrophyIcon className="h-6 w-6 text-[#C8102E]" />
            <h2 className="text-2xl font-bold text-[#002B5B]">Featured This Month</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {featured.map((student) => (
              <article
                key={student.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className={`sm:w-48 h-48 sm:h-auto bg-gradient-to-br ${student.gradient} flex items-center justify-center flex-shrink-0 relative overflow-hidden`}>
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#C8102E] text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <StarIcon className="h-3 w-3" /> Featured
                    </div>
                  </div>

                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {student.badges.map((badge) => (
                        <span
                          key={badge}
                          className="text-xs bg-[#002B5B]/10 text-[#002B5B] px-2 py-0.5 rounded-full font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-[#002B5B] mb-0.5">{student.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {student.program} · {student.year}
                    </p>

                    <div className="flex items-start gap-2 mb-4 bg-[#C8102E]/5 rounded-lg p-3">
                      <TrophyIcon className="h-4 w-4 text-[#C8102E] flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold text-[#C8102E]">{student.achievement}</p>
                    </div>

                    <blockquote className="text-sm text-gray-600 italic leading-relaxed mb-4 border-l-2 border-[#002B5B]/20 pl-3">
                      "{student.quote}"
                    </blockquote>

                    <Link
                      to={`/student-spotlight/${student.id}`}
                      className="text-sm font-semibold text-[#002B5B] hover:text-[#C8102E] transition-colors inline-flex items-center gap-1"
                    >
                      Read full story <ArrowRightIcon className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <h2 className="text-2xl font-bold text-[#002B5B]">All Spotlights</h2>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <div className="relative w-full sm:w-72">
                  <SearchIcon className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search by name, program or badge"
                    className="w-full border border-gray-200 rounded-lg py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#002B5B]/30"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as 'popular' | 'name' | 'featured')}
                  className="border border-gray-200 rounded-lg py-2.5 px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#002B5B]/30"
                >
                  <option value="popular">Sort: Most Viewed</option>
                  <option value="name">Sort: Name A-Z</option>
                  <option value="featured">Sort: Featured First</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap mt-4">
              <FilterIcon className="h-4 w-4 text-gray-400" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#002B5B] text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-[#002B5B] hover:text-[#002B5B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((student) => (
              <article
                key={student.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${student.gradient} opacity-45`} />
                  <div className="absolute top-3 left-3 text-xs bg-white/90 text-[#002B5B] px-2.5 py-1 rounded-full font-semibold">
                    {student.category}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="font-bold text-white">{student.name}</h3>
                    <p className="text-white/80 text-xs">
                      {student.program} · {student.year}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-2 mb-3 bg-amber-50 rounded-lg p-2.5">
                    <AwardIcon className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-amber-700 leading-snug">{student.achievement}</p>
                  </div>
                  <p className="text-xs text-gray-600 italic leading-relaxed mb-4">"{student.quote}"</p>
                  <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                    <span className="inline-flex items-center">
                      <EyeIcon className="h-3.5 w-3.5 mr-1" />
                      {student.views}
                    </span>
                    <span className="inline-flex items-center">
                      <HeartIcon className="h-3.5 w-3.5 mr-1" />
                      {student.likes}
                    </span>
                    <span className="inline-flex items-center">
                      <MessageSquareIcon className="h-3.5 w-3.5 mr-1" />
                      {student.comments}
                    </span>
                  </div>
                  <Link
                    to={`/student-spotlight/${student.id}`}
                    className="w-full flex items-center justify-center gap-1.5 py-2 border border-[#002B5B] text-[#002B5B] text-sm font-semibold rounded-lg hover:bg-[#002B5B] hover:text-white transition-colors"
                  >
                    Read Story <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-14 h-14 bg-[#002B5B]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <UsersIcon className="h-7 w-7 text-[#002B5B]" />
          </div>
          <h2 className="text-3xl font-bold text-[#002B5B] mb-3">Nominate a Student</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Know a GBAAST student who deserves recognition? Teachers, parents, and students can nominate someone for the monthly spotlight.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C8102E] text-white font-bold px-8 py-4 rounded hover:bg-red-700 transition-colors"
          >
            Submit a Nomination <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
