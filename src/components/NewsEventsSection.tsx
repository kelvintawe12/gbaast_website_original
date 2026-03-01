import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight, Calendar, TrendingUp, Award, Newspaper } from 'lucide-react';

export function NewsEventsSection() {
  const news = [
  {
    id: 1,
    date: 'Oct 15, 2024',
    category: 'Academic',
    title: 'GBAAST Students Excel in Regional Science Fair',
    excerpt: 'Our students won top prizes at the Central Region Science Competition with innovative projects in robotics, renewable energy, and biotechnology.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
    categoryColor: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    date: 'Sep 28, 2024',
    category: 'Campus',
    title: 'New Computer Lab Opens with 50 Workstations',
    excerpt: 'State-of-the-art technology center equipped with modern computers, high-speed internet, and specialized software now available for all students.',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop',
    categoryColor: 'from-emerald-500 to-teal-500'
  },
  {
    id: 3,
    date: 'Sep 10, 2024',
    category: 'Achievement',
    title: '98% Success Rate in GCE O-Level Results',
    excerpt: 'GBAAST students achieve outstanding results in the 2024 GCE examinations, with majority earning distinctions in core subjects.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
    categoryColor: 'from-orange-500 to-red-500'
  }];

  const events = [
  {
    id: 1,
    day: '15',
    month: 'NOV',
    title: 'Open Day 2024',
    location: 'Main Campus',
    time: '09:00 AM - 03:00 PM',
    description: 'Prospective students and parents tour our facilities',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 2,
    day: '22',
    month: 'NOV',
    title: 'Inter-House Sports Day',
    location: 'Sports Field',
    time: 'All Day Event',
    description: 'Annual athletics competition and team sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 3,
    day: '05',
    month: 'DEC',
    title: 'Annual Science Fair',
    location: 'Assembly Hall',
    time: '10:00 AM - 04:00 PM',
    description: 'Student innovation and research showcase',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 4,
    day: '15',
    month: 'DEC',
    title: 'End of Year Ceremony',
    location: 'Main Campus',
    time: '02:00 PM - 06:00 PM',
    description: 'Awards and prize giving celebration',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
    color: 'from-yellow-500 to-amber-500'
  }];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#C8102E]/10 border border-[#C8102E]/20 px-4 py-2 rounded-full mb-4">
            <Newspaper className="h-5 w-5 text-[#C8102E] mr-2" />
            <span className="text-[#002B5B] font-semibold text-sm">LATEST UPDATES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#002B5B] mb-4">
            News & Events
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at GBAAST
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section - 2/3 width */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#002B5B] flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-[#C8102E]" />
                Latest News
              </h3>
              <Link
                to="/news"
                className="text-[#002B5B] font-semibold text-sm hover:text-[#C8102E] transition-colors flex items-center">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="space-y-6">
              {news.map((item, index) =>
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="group block bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#C8102E]/30 hover:-translate-y-1">

                  <div className="flex flex-col sm:flex-row gap-0 sm:gap-6">
                    {/* Image */}
                    <div className="relative w-full sm:w-64 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute top-3 left-3 bg-gradient-to-r ${item.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                        {item.category}
                      </div>
                      {/* Reading time badge */}
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {index === 0 ? '3 min read' : index === 1 ? '2 min read' : '4 min read'}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-6 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-[#C8102E] flex items-center">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#002B5B] mb-3 group-hover:text-[#C8102E] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center text-[#002B5B] font-semibold text-sm group-hover:text-[#C8102E] transition-colors">
                        Read Full Story
                        <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* View All News Button */}
            <div className="mt-8 text-center">
              <Link
                to="/news"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#002B5B] text-white font-bold hover:bg-[#C8102E] transition-all rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View All News Articles
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Events Section - 1/3 width */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-[#002B5B] to-[#001A3A] rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-white/10 backdrop-blur-sm border-b border-white/10 p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <Calendar className="h-6 w-6 mr-2" />
                    Upcoming Events
                  </h3>
                  <p className="text-white/70 text-sm mt-2">Don't miss these exciting activities</p>
                </div>

                {/* Events List */}
                <div className="p-6 space-y-4">
                  {events.map((event) =>
                  <Link
                    key={event.id}
                    to="/events"
                    className="block group">

                      <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-xl overflow-hidden transition-all">
                        {/* Event Image */}
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-40`} />
                          
                          {/* Date Badge */}
                          <div className="absolute top-3 left-3 bg-white rounded-lg shadow-lg p-2 text-center min-w-[60px]">
                            <div className="text-2xl font-black text-[#002B5B] leading-none">
                              {event.day}
                            </div>
                            <div className="text-xs font-bold text-[#C8102E] uppercase mt-1">
                              {event.month}
                            </div>
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="p-4">
                          <h4 className="font-bold text-white mb-2 group-hover:text-[#C8102E] transition-colors line-clamp-1">
                            {event.title}
                          </h4>
                          <p className="text-white/60 text-xs mb-3 line-clamp-1">
                            {event.description}
                          </p>
                          <div className="space-y-1.5">
                            <div className="flex items-center text-sm text-white/80">
                              <MapPin className="h-3.5 w-3.5 mr-2 text-[#C8102E] flex-shrink-0" />
                              <span className="text-xs">{event.location}</span>
                            </div>
                            <div className="flex items-center text-sm text-white/80">
                              <Clock className="h-3.5 w-3.5 mr-2 text-[#C8102E] flex-shrink-0" />
                              <span className="text-xs">{event.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>

                {/* View All Events Button */}
                <div className="p-6 pt-0">
                  <Link
                    to="/events"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#C8102E] hover:bg-red-700 text-white font-bold transition-colors rounded-lg shadow-lg">
                    View All Events
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Featured Achievement Banner */}
              <div className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 shadow-xl">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Top Achiever 2024</h4>
                    <p className="text-white/90 text-sm">
                      98% success rate in GCE O-Level examinations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}