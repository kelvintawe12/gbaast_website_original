import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { NewsletterSection } from '../components/NewsletterSection';
export function EventsPage() {
  const events = [
  {
    day: '15',
    month: 'NOV',
    title: 'Open Day 2024',
    desc: 'Visit our campus, meet teachers, and learn about our programs.',
    loc: 'Main Campus',
    time: '09:00 AM - 03:00 PM'
  },
  {
    day: '22',
    month: 'NOV',
    title: 'Inter-House Sports Day',
    desc: 'Annual athletics competition between the four school houses.',
    loc: 'Sports Field',
    time: 'All Day Event'
  },
  {
    day: '05',
    month: 'DEC',
    title: 'Annual Science Fair',
    desc: 'Students showcase their science projects and innovations.',
    loc: 'Assembly Hall',
    time: '10:00 AM - 04:00 PM'
  },
  {
    day: '12',
    month: 'DEC',
    title: 'Cultural Week Celebration',
    desc: "Celebrating Cameroon's rich cultural heritage through performances.",
    loc: 'Main Campus',
    time: 'All Week'
  },
  {
    day: '15',
    month: 'DEC',
    title: 'End of Year Ceremony',
    desc: 'Prize giving and graduation ceremony for Form 5 students.',
    loc: 'Assembly Hall',
    time: '02:00 PM - 06:00 PM'
  },
  {
    day: '06',
    month: 'JAN',
    title: 'New Term Begins',
    desc: 'Welcome back students for the second term of the academic year.',
    loc: 'Main Campus',
    time: '08:00 AM'
  }];

  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Events Calendar
        </h1>
        <p className="text-white/70 font-medium">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span> Events
        </p>
      </div>

      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-sm inline-flex">
              <button className="px-8 py-2 rounded-full bg-[#002B5B] text-white font-bold text-sm">
                Upcoming
              </button>
              <button className="px-8 py-2 rounded-full text-gray-600 hover:bg-gray-100 font-bold text-sm transition-colors">
                Past Events
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {events.map((ev, i) =>
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-gray-100">

                <div className="w-24 h-24 bg-[#F5F7FA] border border-gray-200 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-[#002B5B] leading-none">
                    {ev.day}
                  </span>
                  <span className="text-sm font-bold text-[#C8102E] mt-1">
                    {ev.month}
                  </span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[#002B5B] mb-2">
                    {ev.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{ev.desc}</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 justify-center md:justify-start">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1.5 text-[#C8102E]" />{' '}
                      {ev.loc}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1.5 text-[#C8102E]" />{' '}
                      {ev.time}
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-auto mt-4 md:mt-0">
                  <button className="w-full md:w-auto px-8 py-3 bg-white border-2 border-[#002B5B] text-[#002B5B] font-bold rounded hover:bg-[#002B5B] hover:text-white transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>);

}