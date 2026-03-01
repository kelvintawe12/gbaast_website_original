import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  FlaskConicalIcon,
  MonitorIcon,
  BriefcaseIcon,
  LanguagesIcon,
  TrophyIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  UsersIcon,
  ClockIcon,
  AwardIcon,
  ChevronRightIcon,
  Home,
  Building2 } from
'lucide-react';
const programs = [
{
  id: 'arts',
  title: 'Arts & Humanities',
  icon: BookOpenIcon,
  accentColor: 'bg-purple-100 text-purple-700',
  borderColor: 'border-purple-200',
  badgeColor: 'bg-purple-50 text-purple-700',
  tagline: 'Critical Thinking · Communication · Culture',
  desc: 'A comprehensive program covering literature, history, geography, philosophy, and creative arts. Students develop critical thinking, communication, and analytical skills that prepare them for a wide range of careers and further study.',
  highlights: [
  'Literature & Language Studies',
  'History & Geography',
  'Philosophy & Citizenship',
  'Creative Arts & Expression'],

  duration: '5 Years',
  students: '180+',
  exams: 'GCE O/A Level · BEPC'
},
{
  id: 'sciences',
  title: 'Sciences',
  icon: FlaskConicalIcon,
  accentColor: 'bg-emerald-100 text-emerald-700',
  borderColor: 'border-emerald-200',
  badgeColor: 'bg-emerald-50 text-emerald-700',
  tagline: 'Inquiry · Experimentation · Discovery',
  desc: 'Rigorous science education with hands-on laboratory experience in physics, chemistry, biology, and mathematics. Prepares students for science-based careers in medicine, engineering, research, and technology.',
  highlights: [
  'Modern Laboratory Facilities',
  'Practical Experiments & Research',
  'Mathematics Excellence',
  'Environmental Science'],

  duration: '5 Years',
  students: '220+',
  exams: 'GCE O/A Level · Baccalauréat'
},
{
  id: 'technology',
  title: 'Technology',
  icon: MonitorIcon,
  accentColor: 'bg-blue-100 text-blue-700',
  borderColor: 'border-blue-200',
  badgeColor: 'bg-blue-50 text-blue-700',
  tagline: 'Code · Design · Build',
  desc: 'Introduction to computer science, programming, digital literacy, and engineering fundamentals. Students gain practical tech skills for the modern world, from software development to digital design.',
  highlights: [
  'Computer Programming (Python, JS)',
  'Digital Skills & Literacy',
  'Engineering Fundamentals',
  'Robotics & Innovation Lab'],

  duration: '5 Years',
  students: '160+',
  exams: 'GCE O/A Level · Technical Cert'
},
{
  id: 'business',
  title: 'Business Studies',
  icon: BriefcaseIcon,
  accentColor: 'bg-amber-100 text-amber-700',
  borderColor: 'border-amber-200',
  badgeColor: 'bg-amber-50 text-amber-700',
  tagline: 'Entrepreneurship · Finance · Leadership',
  desc: 'Foundation in accounting, economics, commerce, and management. Develops entrepreneurial thinking and business acumen, equipping students to lead organizations and create economic value.',
  highlights: [
  'Accounting & Finance',
  'Economics & Commerce',
  'Entrepreneurship Projects',
  'Business Communication'],

  duration: '5 Years',
  students: '140+',
  exams: 'GCE O/A Level · BEPC'
},
{
  id: 'bilingual',
  title: 'Bilingual Studies',
  icon: LanguagesIcon,
  accentColor: 'bg-red-100 text-red-700',
  borderColor: 'border-red-200',
  badgeColor: 'bg-red-50 text-red-700',
  tagline: 'English · French · Fluency',
  desc: 'Intensive language program ensuring complete fluency in both English and French. Students graduate truly bilingual, opening doors to opportunities across Cameroon, Africa, and the global stage.',
  highlights: [
  'Advanced English Proficiency',
  'Advanced French Proficiency',
  'Translation & Interpretation',
  'Cross-Cultural Communication'],

  duration: '5 Years',
  students: '200+',
  exams: 'GCE O/A Level · BEPC · Baccalauréat'
},
{
  id: 'sports',
  title: 'Sports & Physical Education',
  icon: TrophyIcon,
  accentColor: 'bg-cyan-100 text-cyan-700',
  borderColor: 'border-cyan-200',
  badgeColor: 'bg-cyan-50 text-cyan-700',
  tagline: 'Fitness · Teamwork · Competition',
  desc: 'Comprehensive athletics program promoting physical fitness, teamwork, and healthy competition. Various sports and activities available, with pathways to national and international competition.',
  highlights: [
  'Football & Track Athletics',
  'Basketball & Volleyball',
  'Health & Fitness Science',
  'Sports Leadership & Coaching'],

  duration: '5 Years',
  students: '120+',
  exams: 'GCE O/A Level · Physical Ed Cert'
}];

const stats = [
{
  value: '98%',
  label: 'Exam Pass Rate',
  icon: AwardIcon
},
{
  value: '6',
  label: 'Specialized Programs',
  icon: BookOpenIcon
},
{
  value: '1,000+',
  label: 'Enrolled Students',
  icon: UsersIcon
},
{
  value: '5 Yrs',
  label: 'Program Duration',
  icon: ClockIcon
}];

export function ProgramsPage() {
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
            <AwardIcon className="h-4 w-4 text-[#C8102E]" />
            Accredited by MINESEC Cameroon
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Academic Programs
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
            Six specialized tracks designed to develop well-rounded, bilingual
            graduates ready for GCE, BEPC, and Baccalauréat examinations.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="text-white">Programs</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#002B5B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-[#002B5B]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#002B5B]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-3">
              Choose Your Track
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our curriculum prepares students for both GCE (Ordinary and
              Advanced Level) and BEPC examinations, with specialized tracks to
              match each student's interests and career goals.
            </p>
          </div>

          <div className="space-y-6">
            {programs.map((prog, i) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.id}
                  className={`bg-white rounded-2xl border ${prog.borderColor} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>

                  <div className="flex flex-col lg:flex-row">
                    {/* Left accent panel */}
                    <div
                      className={`lg:w-56 p-8 flex flex-col items-center justify-center ${prog.accentColor} bg-opacity-30 flex-shrink-0`}>

                      <div
                        className={`w-16 h-16 rounded-2xl ${prog.accentColor} flex items-center justify-center mb-4`}>

                        <Icon className="h-8 w-8" />
                      </div>
                      <p className="text-xs font-semibold text-center opacity-70 tracking-wide">
                        {prog.tagline}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-[#002B5B] mb-1">
                            {prog.title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <span
                              className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${prog.badgeColor}`}>

                              <ClockIcon className="h-3 w-3" /> {prog.duration}
                            </span>
                            <span
                              className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${prog.badgeColor}`}>

                              <UsersIcon className="h-3 w-3" /> {prog.students}{' '}
                              Students
                            </span>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xs text-gray-400 font-medium mb-1">
                            Examinations
                          </p>
                          <p className="text-xs font-semibold text-gray-600">
                            {prog.exams}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {prog.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                        {prog.highlights.map((hl) =>
                        <div key={hl} className="flex items-center gap-2">
                            <CheckCircle2Icon className="h-4 w-4 text-[#C8102E] flex-shrink-0" />
                            <span className="text-sm text-gray-700">{hl}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                        <Link
                          to="/apply"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8102E] text-white font-bold text-sm rounded hover:bg-red-700 transition-colors">

                          Apply for This Program
                          <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#002B5B] text-[#002B5B] font-bold text-sm rounded hover:bg-[#002B5B] hover:text-white transition-colors">

                          Ask an Advisor
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* Exam Prep Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
                Examination Preparation
              </h2>
              <div className="w-16 h-1 bg-[#C8102E] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-6">
                GBAAST is an official examination center for both Anglophone and
                Francophone subsystems. Our students consistently achieve
                above-average pass rates thanks to dedicated exam preparation
                programs.
              </p>
              <div className="space-y-3">
                {[
                {
                  exam: 'GCE Ordinary Level (O/L)',
                  rate: '97%',
                  color: 'bg-blue-500'
                },
                {
                  exam: 'GCE Advanced Level (A/L)',
                  rate: '95%',
                  color: 'bg-emerald-500'
                },
                {
                  exam: 'BEPC',
                  rate: '98%',
                  color: 'bg-purple-500'
                },
                {
                  exam: 'Baccalauréat',
                  rate: '96%',
                  color: 'bg-amber-500'
                }].
                map((item) =>
                <div key={item.exam} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          {item.exam}
                        </span>
                        <span className="text-sm font-bold text-[#002B5B]">
                          {item.rate}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                        className={`h-full ${item.color} rounded-full`}
                        style={{
                          width: item.rate
                        }} />

                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-[#002B5B] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Not sure which program?
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Our academic advisors will help you choose the best track based
                on your child's strengths, interests, and future career goals.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                'Free 30-minute consultation',
                'Personalized program recommendation',
                'Meet our department heads',
                'Campus tour included'].
                map((item) =>
                <li
                  key={item}
                  className="flex items-center gap-2 text-white/90 text-sm">

                    <CheckCircle2Icon className="h-4 w-4 text-[#C8102E] flex-shrink-0" />
                    {item}
                  </li>
                )}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors">

                Book a Consultation
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#002B5B] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Applications for the 2025–2026 academic year are now open. Secure
            your place today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8102E] text-white font-bold rounded hover:bg-red-700 transition-colors">

              Apply Now <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded hover:bg-white/20 transition-colors">

              View Admissions Info
            </Link>
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
    </div>);

}