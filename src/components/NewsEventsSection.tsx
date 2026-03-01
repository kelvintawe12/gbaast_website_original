import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
export function NewsEventsSection() {
  const news = [
  {
    id: 1,
    date: 'Oct 15, 2024',
    title: 'GBAAST Students Excel in Regional Science Fair',
    excerpt:
    'Our students won top prizes at the Central Region Science Competition with innovative projects.'
  },
  {
    id: 2,
    date: 'Sep 28, 2024',
    title: 'New Computer Lab Opens with 50 Workstations',
    excerpt:
    'State-of-the-art technology center now available for all students.'
  },
  {
    id: 3,
    date: 'Sep 10, 2024',
    title: '98% Success Rate in GCE O-Level Results',
    excerpt:
    'GBAAST students achieve outstanding results in the 2024 GCE examinations.'
  }];

  const events = [
  {
    id: 1,
    day: '15',
    month: 'NOV',
    title: 'Open Day 2024',
    location: 'Main Campus',
    time: '09:00 AM - 03:00 PM'
  },
  {
    id: 2,
    day: '22',
    month: 'NOV',
    title: 'Inter-House Sports Day',
    location: 'Sports Field',
    time: 'All Day Event'
  },
  {
    id: 3,
    day: '05',
    month: 'DEC',
    title: 'Annual Science Fair',
    location: 'Assembly Hall',
    time: '10:00 AM - 04:00 PM'
  },
  {
    id: 4,
    day: '15',
    month: 'DEC',
    title: 'End of Year Ceremony',
    location: 'Main Campus',
    time: '02:00 PM - 06:00 PM'
  }];

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
            Latest News & Events
          </h2>
          <div className="w-24 h-1 bg-[#C8102E]"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="space-y-8">
              {news.map((item) =>
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 group cursor-pointer">

                  <div className="w-full sm:w-48 h-32 bg-gradient-to-br from-[#002B5B] to-[#001A3A] rounded-lg flex-shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-sm font-bold text-[#C8102E] mb-2">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-[#002B5B] mb-2 group-hover:text-[#C8102E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <Link
                    to="/news"
                    className="text-[#002B5B] font-semibold text-sm flex items-center group-hover:text-[#C8102E] transition-colors">

                      Read More{' '}
                      <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-10">
              <Link
                to="/news"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#002B5B] text-[#002B5B] font-bold hover:bg-[#002B5B] hover:text-white transition-colors rounded">

                View All News
              </Link>
            </div>
          </div>

          <div className="flex-1 lg:max-w-md">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#002B5B] mb-6">
                Upcoming Events
              </h3>
              <div className="space-y-6">
                {events.map((event) =>
                <div
                  key={event.id}
                  className="flex gap-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0">

                    <div className="flex flex-col items-center justify-center bg-[#F5F7FA] border border-gray-200 rounded-lg w-16 h-16 flex-shrink-0">
                      <span className="text-xl font-bold text-[#002B5B] leading-none">
                        {event.day}
                      </span>
                      <span className="text-xs font-bold text-[#C8102E] mt-1">
                        {event.month}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002B5B] mb-2 hover:text-[#C8102E] transition-colors cursor-pointer">
                        {event.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <MapPin className="h-3.5 w-3.5 mr-1.5" />{' '}
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-3.5 w-3.5 mr-1.5" /> {event.time}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-8">
                <Link
                  to="/events"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#F5F7FA] text-[#002B5B] font-bold hover:bg-gray-200 transition-colors rounded">

                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}