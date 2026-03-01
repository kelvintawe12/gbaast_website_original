import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar as CalendarIcon, Search, Filter, Users, Mail, Tag, Home, Building2 } from 'lucide-react';
import { NewsletterSection } from '../components/NewsletterSection';
import { getUpcomingEvents, getPastEvents, type CalendarEvent } from '../data/eventsData';

type ViewMode = 'upcoming' | 'past';
type CategoryFilter = 'All' | CalendarEvent['category'];

export function EventsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('upcoming');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState<string>('All');

  // Get filtered events based on view mode
  const baseEvents = viewMode === 'upcoming' ? getUpcomingEvents() : getPastEvents();

  // Filter events by category, search, and month
  const filteredEvents = useMemo(() => {
    let events = baseEvents;

    // Category filter
    if (selectedCategory !== 'All') {
      events = events.filter(event => event.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      events = events.filter(event =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Month filter
    if (selectedMonth !== 'All') {
      events = events.filter(event => {
        const eventDate = new Date(event.date);
        const monthYear = `${eventDate.getFullYear()}-${String(eventDate.getMonth() + 1).padStart(2, '0')}`;
        return monthYear === selectedMonth;
      });
    }

    return events;
  }, [baseEvents, selectedCategory, searchQuery, selectedMonth]);

  // Get unique months from events
  const availableMonths = useMemo(() => {
    const months = new Set<string>();
    baseEvents.forEach(event => {
      const eventDate = new Date(event.date);
      const monthYear = `${eventDate.getFullYear()}-${String(eventDate.getMonth() + 1).padStart(2, '0')}`;
      months.add(monthYear);
    });
    return Array.from(months).sort();
  }, [baseEvents]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      fullDate: date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    };
  };

  const formatMonthYear = (monthYear: string) => {
    const [year, month] = monthYear.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const getCategoryColor = (category: CalendarEvent['category']) => {
    const colors = {
      'Academic': 'bg-blue-100 text-blue-700 border-blue-200',
      'Sports': 'bg-green-100 text-green-700 border-green-200',
      'Cultural': 'bg-purple-100 text-purple-700 border-purple-200',
      'Administrative': 'bg-gray-100 text-gray-700 border-gray-200',
      'Community': 'bg-orange-100 text-orange-700 border-orange-200',
    };
    return colors[category];
  };

  const categories: CategoryFilter[] = ['All', 'Academic', 'Sports', 'Cultural', 'Administrative', 'Community'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#002B5B] to-[#001A3A] py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <CalendarIcon className="h-16 w-16 text-[#C8102E] mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Events Calendar
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Stay connected with our vibrant school community through academic, sports, cultural, and social events throughout the year.
          </p>
          <p className="text-white/70 font-medium">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>{' '}
            <span className="mx-2">/</span> Events
          </p>
        </div>
      </div>

      {/* Filters and Controls */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          {/* View Mode Toggle */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-6">
            <div className="bg-[#F5F7FA] rounded-full p-1 shadow-sm inline-flex">
              <button
                onClick={() => setViewMode('upcoming')}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                  viewMode === 'upcoming'
                    ? 'bg-[#002B5B] text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Upcoming Events ({getUpcomingEvents().length})
              </button>
              <button
                onClick={() => setViewMode('past')}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                  viewMode === 'past'
                    ? 'bg-[#002B5B] text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Past Events ({getPastEvents().length})
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002B5B] focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-semibold text-gray-700">Filter by:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#002B5B] text-white shadow-md'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-[#002B5B]'
                }`}
              >
                {category}
              </button>
            ))}

            {/* Month Filter */}
            {availableMonths.length > 0 && (
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-[#002B5B] focus:ring-2 focus:ring-[#002B5B] focus:border-transparent"
              >
                <option value="All">All Months</option>
                {availableMonths.map((month) => (
                  <option key={month} value={month}>
                    {formatMonthYear(month)}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <CalendarIcon className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Events Found</h3>
              <p className="text-gray-600">
                {searchQuery
                  ? 'Try adjusting your search or filters.'
                  : viewMode === 'upcoming'
                  ? 'No upcoming events scheduled at the moment.'
                  : 'No past events to display.'}
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#002B5B] mb-3">
                  {viewMode === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
                </h2>
                <p className="text-gray-600">
                  Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                </p>
              </div>

              <div className="space-y-6">
                {filteredEvents.map((event) => {
                  const dateInfo = formatDate(event.date);
                  const endDateInfo = event.endDate ? formatDate(event.endDate) : null;

                  return (
                    <div
                      key={event.id}
                      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                      <div className="flex flex-col lg:flex-row">
                        {/* Date Badge */}
                        <div className="lg:w-32 bg-gradient-to-br from-[#002B5B] to-[#001A3A] text-white p-6 flex lg:flex-col items-center justify-center gap-4 lg:gap-2">
                          <div className="text-center">
                            <div className="text-4xl font-bold leading-none mb-2">
                              {dateInfo.day}
                            </div>
                            <div className="text-sm font-bold text-[#C8102E] bg-white/20 px-3 py-1 rounded">
                              {dateInfo.month}
                            </div>
                            {endDateInfo && (
                              <>
                                <div className="text-xs my-1 opacity-70">to</div>
                                <div className="text-2xl font-bold leading-none mb-1">
                                  {endDateInfo.day}
                                </div>
                                <div className="text-xs font-bold text-[#C8102E] bg-white/20 px-2 py-0.5 rounded">
                                  {endDateInfo.month}
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Event Image (if available) */}
                        {event.imageUrl && (
                          <div className="lg:w-64 h-48 lg:h-auto">
                            <img
                              src={event.imageUrl}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Event Details */}
                        <div className="flex-1 p-6 lg:p-8">
                          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getCategoryColor(event.category)}`}>
                                  {event.category}
                                </span>
                                {event.registrationRequired && (
                                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C8102E]/10 text-[#C8102E] border border-[#C8102E]/20">
                                    Registration Required
                                  </span>
                                )}
                              </div>
                              <h3 className="text-2xl lg:text-3xl font-bold text-[#002B5B] mb-2">
                                {event.title}
                              </h3>
                              <p className="text-sm text-gray-500 mb-3">{dateInfo.fullDate}</p>
                            </div>
                          </div>

                          <p className="text-gray-700 mb-6 leading-relaxed">
                            {event.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-start gap-3">
                              <Clock className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-semibold text-gray-900">
                                  {event.time}
                                  {event.endTime && ` - ${event.endTime}`}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-semibold text-gray-900">
                                  {event.location}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <Users className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm text-gray-700">
                                  {event.targetAudience.join(', ')}
                                </div>
                              </div>
                            </div>

                            {event.contactEmail && (
                              <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                                <a
                                  href={`mailto:${event.contactEmail}`}
                                  className="text-sm text-[#002B5B] hover:underline font-medium"
                                >
                                  {event.contactEmail}
                                </a>
                              </div>
                            )}
                          </div>

                          {/* Additional Info */}
                          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
                            <div>
                              <span className="font-semibold text-gray-900">Organizer:</span> {event.organizer}
                            </div>
                            {event.maxParticipants && (
                              <div>
                                <span className="font-semibold text-gray-900">Capacity:</span> {event.maxParticipants} participants
                              </div>
                            )}
                            {event.registrationDeadline && (
                              <div>
                                <span className="font-semibold text-gray-900">Register by:</span>{' '}
                                {formatDate(event.registrationDeadline).fullDate}
                              </div>
                            )}
                          </div>

                          {/* Tags */}
                          {event.tags.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 mb-6">
                              <Tag className="h-4 w-4 text-gray-400" />
                              {event.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-3">
                            {event.registrationRequired && viewMode === 'upcoming' && (
                              <button className="px-6 py-3 bg-gradient-to-r from-[#C8102E] to-[#A00E26] text-white font-bold rounded-lg hover:shadow-lg transition-all">
                                Register Now
                              </button>
                            )}
                            <button className="px-6 py-3 bg-white border-2 border-[#002B5B] text-[#002B5B] font-bold rounded-lg hover:bg-[#002B5B] hover:text-white transition-all">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

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