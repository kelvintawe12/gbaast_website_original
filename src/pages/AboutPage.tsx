import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Lightbulb,
  Shield,
  Users,
  Eye,
  CheckCircle2,
  Award,
  BookOpen } from
'lucide-react';
export function AboutPage() {
  const values = [
  {
    icon: Target,
    title: 'Excellence',
    desc: 'Striving for the highest academic and moral standards in everything we do.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Embracing modern teaching methods and technology to enhance learning.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Building character through honesty, discipline, and strong moral principles.'
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'Fostering a supportive bilingual family environment for all students.'
  }];

  const leaders = [
  {
    name: 'Dr. Grace Nkeng',
    title: 'Principal',
    initials: 'GN',
    color: 'from-blue-600 to-indigo-800',
    bio: 'With over 25 years in education, Dr. Nkeng founded GBAAST with a vision of bilingual excellence. She holds a PhD in Education from the University of Yaoundé I.'
  },
  {
    name: 'Mr. Pierre Atangana',
    title: 'Vice Principal',
    initials: 'PA',
    color: 'from-red-600 to-red-800',
    bio: 'A seasoned administrator with 18 years of experience in secondary education. Mr. Atangana oversees daily school operations and student discipline.'
  },
  {
    name: 'Mrs. Beatrice Fon',
    title: 'Head of Academics',
    initials: 'BF',
    color: 'from-emerald-600 to-teal-800',
    bio: "Mrs. Fon leads curriculum development and ensures academic standards. She has a Master's in Curriculum Design and 15 years of teaching experience."
  },
  {
    name: 'Mr. Jean Mbarga',
    title: 'Dean of Students',
    initials: 'JM',
    color: 'from-orange-500 to-red-600',
    bio: 'Dedicated to student welfare and extracurricular development. Mr. Mbarga coordinates all student activities and counseling services.'
  },
  {
    name: 'Mrs. Esther Ngono',
    title: 'Head of Boarding',
    initials: 'EN',
    color: 'from-purple-600 to-indigo-800',
    bio: 'Mrs. Ngono manages the boarding facilities and ensures a safe, nurturing environment for all resident students.'
  },
  {
    name: 'Mr. Samuel Tabi',
    title: 'Bursar',
    initials: 'ST',
    color: 'from-cyan-600 to-blue-800',
    bio: "Mr. Tabi manages the school's finances with transparency and efficiency. He oversees fee collection, budgeting, and financial aid programs."
  }];

  const reasons = [
  'Bilingual Excellence (EN/FR)',
  '98% Exam Success Rate',
  'Modern Boarding Facilities',
  'Small Class Sizes (max 30)',
  'Qualified Teachers',
  'Safe & Nurturing Environment'];

  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About Grace Bilingual Academy
        </h1>
        <p className="text-white/70 font-medium">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span> About
        </p>
      </div>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-6 leading-tight">
              A Legacy of Excellence in Bilingual Education
            </h2>
            <div className="w-20 h-1 bg-[#C8102E] mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Grace Bilingual Academy of Arts, Science and Technology (GBAAST)
              is a premier dormitory school located in the serene environment of
              Mbankom, Yaoundé. We are dedicated to providing a transformative
              educational experience that bridges the linguistic divide in
              Cameroon.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our holistic approach combines rigorous academic preparation for
              GCE and BEPC examinations with strong character development. We
              believe in nurturing not just successful students, but responsible
              citizens and future leaders who are fully equipped to thrive in a
              bilingual and globalized world.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-gray-200 rounded-xl h-80 w-full flex items-center justify-center border-4 border-white shadow-xl">
              <span className="text-gray-400 font-bold text-xl">
                School Campus Image Placeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-[#C8102E] hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-[#C8102E]" />
            </div>
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide quality bilingual secondary education that develops
              well-rounded, disciplined, and academically excellent students
              prepared for success in higher education and life.
            </p>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-[#002B5B] hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-[#002B5B]" />
            </div>
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the leading bilingual secondary school in Cameroon,
              recognized for academic excellence, character development, and
              producing graduates who make positive contributions to society.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 md:py-24 bg-[#001A3A] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto"></div>
          </div>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {[
            {
              year: '2018',
              text: 'GBAAST founded with a vision to provide quality bilingual education in Cameroon.'
            },
            {
              year: '2019',
              text: 'First intake of 150 students across Forms 1-3.'
            },
            {
              year: '2020',
              text: 'Modern dormitory facilities opened, becoming a full boarding school.'
            },
            {
              year: '2024',
              text: 'Grown to 800+ students with 98% exam success rate.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#001A3A] bg-[#C8102E] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="font-bold text-3xl text-[#C8102E] mb-2">
                    {item.year}
                  </div>
                  <div className="text-white/90 text-lg">{item.text}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="bg-[#F5F7FA] p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">

                  <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-[#C8102E] shadow-sm">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002B5B] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* Why Choose GBAAST */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
              Why Choose GBAAST?
            </h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) =>
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center border border-gray-100">

                <CheckCircle2 className="h-6 w-6 text-[#C8102E] mr-4 flex-shrink-0" />
                <span className="text-lg font-bold text-[#002B5B]">
                  {reason}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
              Leadership Team
            </h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our dedicated team of experienced educators and administrators are
              committed to providing the best environment for your child's
              success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, i) =>
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group">

                <div
                className={`w-32 h-32 rounded-full bg-gradient-to-br ${leader.color} mb-6 shadow-md flex items-center justify-center transform group-hover:scale-105 transition-transform`}>

                  <span className="text-4xl font-bold text-white tracking-wider">
                    {leader.initials}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#002B5B] mb-1">
                  {leader.name}
                </h3>
                <p className="text-[#C8102E] font-bold mb-4">{leader.title}</p>
                <div className="w-12 h-0.5 bg-gray-200 mb-4"></div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {leader.bio}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 md:py-24 bg-[#002B5B] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Accreditation & Recognition
            </h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-xl border border-white/20 text-center backdrop-blur-sm">
              <Award className="h-12 w-12 text-[#C8102E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Ministry of Secondary Education
              </h3>
              <p className="text-white/80 text-sm">
                Fully accredited and recognized by MINESEC Cameroon for
                secondary education.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl border border-white/20 text-center backdrop-blur-sm">
              <BookOpen className="h-12 w-12 text-[#C8102E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">GCE Board Center</h3>
              <p className="text-white/80 text-sm">
                Official examination center for the Cameroon General Certificate
                of Education (O & A Levels).
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl border border-white/20 text-center backdrop-blur-sm">
              <Target className="h-12 w-12 text-[#C8102E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">
                BEPC & Baccalauréat Center
              </h3>
              <p className="text-white/80 text-sm">
                Official examination center for the Francophone subsystem
                examinations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>);

}