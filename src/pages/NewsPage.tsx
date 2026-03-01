import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  TrendingUp,
  Star,
  Newspaper,
  Bell,
  Camera,
  PlayCircle,
  Home,
  Building2
} from 'lucide-react';
import { newsData } from '../data/newsData';

export function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const news = newsData;

  const categories = useMemo(() => {
    const unique = Array.from(new Set(news.map((item) => item.cat)));
    return ['All', ...unique];
  }, [news]);

  const sortedNews = useMemo(() => {
    return [...news].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [news]);

  const filteredNews = useMemo(() => {
    if (activeCategory === 'All') return sortedNews;
    return sortedNews.filter((item) => item.cat === activeCategory);
  }, [activeCategory, sortedNews]);

  const featuredStory = useMemo(() => {
    const featured = sortedNews.filter((item) => item.featured);
    if (featured.length > 0) {
      return featured[0];
    }
    return sortedNews[0];
  }, [sortedNews]);

  const spotlightStories = useMemo(() => {
    return sortedNews
      .filter((item) => item.id !== featuredStory.id)
      .slice(0, 3);
  }, [featuredStory.id, sortedNews]);

  return (
    <div className="pt-20 bg-[#F8FAFC]">
      <div className="bg-gradient-to-br from-[#002B5B] via-[#001A3A] to-[#002B5B] py-20 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
            <Bell className="h-4 w-4 text-[#C8102E] mr-2" />
            <span className="text-white/90 text-xs font-semibold tracking-wide">LIVE NEWSROOM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            News & Spotlight Stories
          </h1>
          <p className="text-white/75 max-w-3xl text-lg mb-6">
            Explore academic achievements, campus improvements, student milestones, and community events shaping life at GBAAST.
          </p>
          <p className="text-white/70 font-medium">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{' '}
            <span className="mx-2">/</span> News
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-5 w-5 text-[#C8102E]" />
            <h2 className="text-xl font-bold text-[#002B5B]">Trending Now</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">Science fair innovations ranked top in region</div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">New computer lab active for coding sessions</div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">Inter-house championship concludes with record turnout</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
            <img
              src={featuredStory.image}
              alt={featuredStory.title}
              className="w-full h-72 md:h-[24rem] object-cover"
            />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#002B5B] text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Featured Story
                </span>
                <span className="text-gray-500 text-sm">{featuredStory.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#002B5B] mb-4">
                {featuredStory.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                {featuredStory.excerpt}
              </p>
              <Link
                to={`/news/${featuredStory.id}`}
                className="inline-flex items-center bg-[#C8102E] text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Read Spotlight Story
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#002B5B] mb-5 flex items-center">
              <Star className="h-5 w-5 text-[#C8102E] mr-2" />
              News Spotlight
            </h3>
            <div className="space-y-5">
              {spotlightStories.map((item) => (
                <Link key={item.id} to={`/news/${item.id}`} className="flex gap-4 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg border border-gray-100"
                  />
                  <div>
                    <p className="text-xs text-[#C8102E] font-semibold mb-1">{item.cat}</p>
                    <h4 className="font-bold text-[#002B5B] text-sm leading-snug mb-2 line-clamp-2 group-hover:text-[#C8102E] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500">{item.date} • {item.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              to="/news"
              className="mt-6 inline-flex items-center text-[#002B5B] font-semibold hover:text-[#C8102E] transition-colors"
            >
              Explore all spotlight posts
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#C8102E] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#002B5B]">Latest Articles</h2>
            <p className="text-sm text-gray-500">Showing {filteredNews.length} stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-52 w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#002B5B] text-xs font-bold px-3 py-1 rounded-full">
                    {item.cat}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-sm text-gray-500 mb-2 flex items-center">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-[#002B5B] mb-3 leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 flex-1 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link
                    to={`/news/${item.id}`}
                    className="inline-flex items-center text-[#C8102E] font-bold text-sm hover:text-red-800 transition-colors"
                  >
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="h-6 w-6 text-[#C8102E]" />
            <h2 className="text-2xl font-bold text-[#002B5B]">Spotlight Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Inside the New Computer Lab',
                subtitle: 'Campus Tour',
                image:
                  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=700&h=450&fit=crop',
                icon: PlayCircle,
                newsId: 2
              },
              {
                title: 'Student Leaders Making Impact',
                subtitle: 'Community Story',
                image:
                  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=450&fit=crop',
                icon: Star,
                newsId: 8
              },
              {
                title: 'A Day in Science Club',
                subtitle: 'Academic Spotlight',
                image:
                  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&h=450&fit=crop',
                icon: Newspaper,
                newsId: 1
              }
            ].map((spotlight, index) => {
              const Icon = spotlight.icon;
              return (
                <article
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <img
                    src={spotlight.image}
                    alt={spotlight.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <p className="text-xs font-semibold text-[#C8102E] mb-2 uppercase tracking-wide">
                      {spotlight.subtitle}
                    </p>
                    <h3 className="text-lg font-bold text-[#002B5B] mb-3">{spotlight.title}</h3>
                    <Link
                      to={`/news/${spotlight.newsId}`}
                      className="inline-flex items-center text-sm font-semibold text-[#002B5B] hover:text-[#C8102E]"
                    >
                      <Icon className="h-4 w-4 mr-1.5" />
                      Open Feature
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#002B5B] to-[#001A3A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss a GBAAST Update</h2>
          <p className="text-white/80 mb-8">
            Get important announcements, event reminders, and student achievement stories delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            />
            <button className="px-6 py-3 bg-[#C8102E] text-white font-bold rounded-lg hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Floating Campus Tour Button */}
      <Link
        to="/campus-tours"
        className="fixed bottom-24 right-8 z-50 bg-gradient-to-r from-[#002B5B] to-[#001A3A] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-2 group"
        title="Go to Campus Tours"
      >
        <Building2 className="h-6 w-6 group-hover:animate-bounce" />
      </Link>

      {/* Floating Home Button */}
      <Link
        to="/"
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#C8102E] to-[#A00E26] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-2 group"
        title="Go to Home"
      >
        <Home className="h-6 w-6 group-hover:animate-bounce" />
      </Link>
    </div>
  );

}