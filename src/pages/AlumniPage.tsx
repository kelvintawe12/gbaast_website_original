import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCapIcon,
  BriefcaseIcon,
  MapPinIcon,
  LinkedinIcon,
  ArrowRightIcon,
  UsersIcon,
  GlobeIcon,
  TrophyIcon,
  HeartIcon,
  ChevronRightIcon,
  StarIcon,
  CalendarIcon,
  BookOpenIcon } from
'lucide-react';
const alumniStats = [
{
  value: '2,000+',
  label: 'Alumni Worldwide',
  icon: UsersIcon
},
{
  value: '45+',
  label: 'Countries Represented',
  icon: GlobeIcon
},
{
  value: '98%',
  label: 'Employment Rate',
  icon: BriefcaseIcon
},
{
  value: '6 Yrs',
  label: 'Oldest Graduating Class',
  icon: GraduationCapIcon
}];

const featuredAlumni = [
{
  name: 'Dr. Amara Nkeng',
  class: 'Class of 2020',
  role: 'Medical Doctor',
  org: 'Yaoundé Central Hospital',
  location: 'Yaoundé, Cameroon',
  program: 'Sciences',
  quote:
  'GBAAST gave me the discipline and bilingual foundation to excel in medical school and beyond.',
  initials: 'AN',
  gradient: 'from-blue-600 to-indigo-800'
},
{
  name: 'Jean-Paul Mbarga',
  class: 'Class of 2021',
  role: 'Software Engineer',
  org: 'Orange Cameroun',
  location: 'Douala, Cameroon',
  program: 'Technology',
  quote:
  'The technology program at GBAAST sparked my passion for coding. I now lead a team of 12 engineers.',
  initials: 'JM',
  gradient: 'from-emerald-600 to-teal-800'
},
{
  name: 'Fatima Al-Hassan',
  class: 'Class of 2019',
  role: 'Entrepreneur & CEO',
  org: 'AgriTech Cameroon',
  location: 'Bafoussam, Cameroon',
  program: 'Business Studies',
  quote:
  'The entrepreneurship mindset I developed at GBAAST helped me build a company that employs 50 people.',
  initials: 'FA',
  gradient: 'from-amber-500 to-orange-700'
},
{
  name: 'Pierre Atangana Jr.',
  class: 'Class of 2022',
  role: 'Journalist & Broadcaster',
  org: 'CRTV',
  location: 'Yaoundé, Cameroon',
  program: 'Arts & Humanities',
  quote:
  'My bilingual education at GBAAST opened doors in both English and French media landscapes.',
  initials: 'PA',
  gradient: 'from-purple-600 to-indigo-800'
},
{
  name: 'Esther Ngono',
  class: 'Class of 2020',
  role: 'Lawyer',
  org: 'Cameroon Bar Association',
  location: 'Yaoundé, Cameroon',
  program: 'Arts & Humanities',
  quote:
  'The critical thinking and communication skills from GBAAST are the foundation of my legal career.',
  initials: 'EN',
  gradient: 'from-red-600 to-rose-800'
},
{
  name: 'Samuel Tabi',
  class: 'Class of 2021',
  role: 'Professional Footballer',
  org: 'Coton Sport FC',
  location: 'Garoua, Cameroon',
  program: 'Sports & PE',
  quote:
  'GBAAST taught me that academic excellence and athletic achievement go hand in hand.',
  initials: 'ST',
  gradient: 'from-cyan-600 to-blue-800'
}];

const events = [
{
  title: 'Annual Alumni Reunion 2025',
  date: 'December 20, 2025',
  location: 'GBAAST Campus, Yaoundé',
  type: 'Reunion'
},
{
  title: 'Career Mentorship Day',
  date: 'October 15, 2025',
  location: 'GBAAST Auditorium',
  type: 'Mentorship'
},
{
  title: 'Alumni Networking Dinner',
  date: 'November 5, 2025',
  location: 'Hilton Yaoundé',
  type: 'Networking'
}];

const benefits = [
{
  icon: UsersIcon,
  title: 'Global Network',
  desc: 'Connect with 2,000+ alumni across 45 countries in our exclusive network.'
},
{
  icon: BriefcaseIcon,
  title: 'Career Support',
  desc: 'Access job boards, referrals, and career coaching from fellow alumni.'
},
{
  icon: HeartIcon,
  title: 'Give Back',
  desc: 'Mentor current students and contribute to scholarships for future generations.'
},
{
  icon: CalendarIcon,
  title: 'Exclusive Events',
  desc: 'Invitations to reunions, networking dinners, and professional development events.'
}];

export function AlumniPage() {
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
            <GraduationCapIcon className="h-4 w-4 text-[#C8102E]" />
            GBAAST Alumni Network
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Our Alumni Family
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
            Thousands of GBAAST graduates are making their mark across Cameroon
            and the world. Join a community that lasts a lifetime.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="text-white">Alumni</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {alumniStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-[#002B5B]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-[#002B5B]" />
                  </div>
                  <p className="text-3xl font-bold text-[#002B5B]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>);

            })}
          </div>
        </div>
      </div>

      {/* Featured Alumni */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-3">
              Alumni Spotlight
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet some of the remarkable individuals who have gone on to
              achieve great things after GBAAST.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAlumni.map((alumni) =>
            <div
              key={alumni.name}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">

                {/* Card header */}
                <div
                className={`bg-gradient-to-br ${alumni.gradient} p-6 relative`}>

                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">
                        {alumni.initials}
                      </span>
                    </div>
                    <span className="text-xs font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full">
                      {alumni.class}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-white">
                      {alumni.name}
                    </h3>
                    <p className="text-white/80 text-sm">{alumni.role}</p>
                    <p className="text-white/60 text-xs mt-0.5">{alumni.org}</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                      <BookOpenIcon className="h-3 w-3" /> {alumni.program}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                      <MapPinIcon className="h-3 w-3" /> {alumni.location}
                    </span>
                  </div>
                  <blockquote className="text-sm text-gray-600 italic leading-relaxed border-l-2 border-[#C8102E] pl-3">
                    "{alumni.quote}"
                  </blockquote>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Alumni Benefits */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-3">
              Alumni Network Benefits
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Being a GBAAST alumnus means lifelong access to a powerful
              community and exclusive resources.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-[#F5F7FA] rounded-xl p-6 border border-gray-200">

                  <div className="w-12 h-12 bg-[#002B5B] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[#002B5B] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#002B5B] mb-3">
                Upcoming Alumni Events
              </h2>
              <div className="w-16 h-1 bg-[#C8102E] mb-6" />
              <div className="space-y-4">
                {events.map((event) =>
                <div
                  key={event.title}
                  className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4 shadow-sm hover:shadow-md transition-shadow">

                    <div className="w-12 h-12 bg-[#002B5B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CalendarIcon className="h-5 w-5 text-[#002B5B]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-[#002B5B] text-sm">
                          {event.title}
                        </h4>
                        <span className="text-xs bg-[#C8102E]/10 text-[#C8102E] px-2 py-0.5 rounded-full font-medium">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" /> {event.date}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <MapPinIcon className="h-3 w-3" /> {event.location}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Join CTA */}
            <div className="bg-[#002B5B] rounded-2xl p-8 text-white">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <GraduationCapIcon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Join the Alumni Network
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Are you a GBAAST graduate? Register to access our alumni portal,
                connect with classmates, and stay connected with your alma
                mater.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                'Free lifetime membership',
                'Access to alumni directory',
                'Mentorship opportunities',
                'Exclusive event invitations'].
                map((item) =>
                <li
                  key={item}
                  className="flex items-center gap-2 text-white/80 text-sm">

                    <StarIcon className="h-4 w-4 text-[#C8102E] flex-shrink-0" />
                    {item}
                  </li>
                )}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#C8102E] text-white font-bold py-3 rounded hover:bg-red-700 transition-colors text-sm">

                  Register Now <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold py-3 rounded hover:bg-white/20 transition-colors text-sm">

                  Contact Alumni Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Give Back */}
      <section className="py-16 bg-[#002B5B] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <HeartIcon className="h-10 w-10 text-[#C8102E] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Give Back to GBAAST
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Help fund scholarships, improve facilities, and mentor the next
            generation of GBAAST students.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C8102E] text-white font-bold px-8 py-4 rounded hover:bg-red-700 transition-colors">

            Support a Student <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>);

}