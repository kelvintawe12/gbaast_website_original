import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  BookOpen,
  Heart,
  Briefcase,
  Music,
  Users,
  Leaf,
  Trophy,
  Monitor,
  Palette } from
'lucide-react';
export function CampusLifePage() {
  const clubs = [
  {
    name: 'Debate Club',
    icon: Users
  },
  {
    name: 'Science Club',
    icon: Monitor
  },
  {
    name: 'Sports Club',
    icon: Trophy
  },
  {
    name: 'Arts & Drama',
    icon: Palette
  },
  {
    name: 'Music Club',
    icon: Music
  },
  {
    name: 'Community Service',
    icon: Heart
  },
  {
    name: 'Technology Club',
    icon: Briefcase
  },
  {
    name: 'Environmental Club',
    icon: Leaf
  }];

  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Campus Life at GBAAST
        </h1>
        <p className="text-white/70 font-medium">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span> Campus Life
        </p>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-12 text-center">
            Our Campus
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-indigo-600 relative">
                <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xl font-bold">
                  Campus Image
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-[#C8102E] mb-3 font-bold">
                  <MapPin className="h-5 w-5 mr-2" /> Mbankom, Yaoundé
                </div>
                <h3 className="text-2xl font-bold text-[#002B5B] mb-3">
                  GBAAST Main Campus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our beautiful campus in Mbankom, Yaoundé features modern
                  classrooms, well-equipped science and computer laboratories, a
                  comprehensive library, sports facilities including football
                  and basketball courts, and comfortable dormitory buildings for
                  our boarding students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4 text-center">
            Student Clubs & Activities
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Learning extends beyond the classroom. Join one of our many
            student-led clubs to pursue your passions and develop leadership
            skills.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clubs.map((club, i) => {
              const Icon = club.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 group cursor-pointer">

                  <div className="w-12 h-12 mx-auto bg-[#F5F7FA] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C8102E] transition-colors">
                    <Icon className="h-6 w-6 text-[#002B5B] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-bold text-[#002B5B]">{club.name}</h4>
                </div>);

            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-12 text-center">
            Student Support Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              title: 'Academic Support',
              desc: 'Extra tutoring, study groups, and personalized academic guidance for all students.'
            },
            {
              title: 'Guidance & Counseling',
              desc: 'Professional counselors available for academic, career, and personal support.'
            },
            {
              title: 'Health Services',
              desc: 'On-campus clinic with qualified nurse and regular health check-ups.'
            },
            {
              title: 'Boarding Care',
              desc: 'Dedicated house parents ensuring safety, comfort, and well-being of boarders.'
            }].
            map((service, i) =>
            <div
              key={i}
              className="border border-gray-200 p-6 rounded-xl hover:border-[#002B5B] transition-colors">

                <h3 className="text-xl font-bold text-[#002B5B] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#001A3A]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Campus Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
            'from-purple-500 to-indigo-500',
            'from-red-500 to-orange-500',
            'from-teal-500 to-emerald-500',
            'from-blue-500 to-cyan-500',
            'from-pink-500 to-rose-500',
            'from-yellow-400 to-orange-500'].
            map((bg, i) =>
            <div
              key={i}
              className={`h-48 md:h-64 rounded-lg bg-gradient-to-br ${bg} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}>
            </div>
            )}
          </div>
        </div>
      </section>
    </div>);

}