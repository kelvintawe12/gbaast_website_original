import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export function CampusLifeSection() {
  const gallery = [
  {
    title: 'Student Dormitories',
    desc: 'Modern, comfortable living spaces',
    color: 'from-blue-500 to-indigo-600',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    title: 'Science Laboratory',
    desc: 'Fully equipped for hands-on learning',
    color: 'from-emerald-400 to-teal-500',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Sports Field',
    desc: 'Football, basketball & athletics',
    color: 'from-orange-400 to-red-500',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Cultural Events',
    desc: 'Celebrating our rich heritage',
    color: 'from-purple-500 to-pink-500',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Library & Study Hall',
    desc: 'Quiet spaces for focused learning',
    color: 'from-cyan-400 to-blue-500',
    span: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    title: 'Graduation Day',
    desc: 'Celebrating student achievements',
    color: 'from-yellow-400 to-orange-500',
    span: 'col-span-1 row-span-2'
  }];

  return (
    <section className="bg-[#001A3A] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Life at GBAAST
            </h2>
            <div className="w-24 h-1 bg-[#C8102E]"></div>
          </div>
          <Link
            to="/campus-life"
            className="hidden md:flex items-center text-white font-bold hover:text-[#C8102E] transition-colors group">

            Explore Campus Life{' '}
            <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          {gallery.map((item, index) =>
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden group cursor-pointer ${item.span}`}>

              <div
              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:scale-105 transition-transform duration-500`}>
            </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white font-bold text-xl mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm font-medium">{item.desc}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            to="/campus-life"
            className="flex items-center justify-center w-full py-4 border border-white/20 text-white font-bold hover:bg-white/10 transition-colors rounded">

            Explore Campus Life <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>);

}