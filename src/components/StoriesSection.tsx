import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Youtube, Play } from 'lucide-react';
export function StoriesSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full">
      <div className="flex-1 bg-[#001A3A] relative overflow-hidden min-h-[500px] flex items-center">
        <div
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage:
            'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800)'
          }} />


        <div className="relative z-10 p-8 md:p-16 w-full max-w-2xl ml-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-none">
            GBAAST
            <br />
            STORIES
          </h2>

          <div className="space-y-6 mb-12">
            <Link
              to="/news"
              className="flex items-center text-white font-bold hover:text-[#C8102E] transition-colors group">

              <ArrowRight className="h-5 w-5 mr-3 text-[#C8102E] group-hover:translate-x-1 transition-transform" />
              View all Stories
            </Link>

            <a
              href="#"
              className="flex items-center text-white font-bold hover:text-red-500 transition-colors">

              <Youtube className="h-6 w-6 mr-3 text-white" />
              Subscribe on YouTube
            </a>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 hidden md:block w-[400px] shadow-2xl group cursor-pointer">
            <div className="w-full h-64 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg border-4 border-white/10 group-hover:border-white/30 transition-colors flex items-center justify-center">
              <span className="text-white/50 font-bold">Video Thumbnail</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#C8102E]/80 transition-colors">
                <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#002B5B] p-8 md:p-16 flex items-center justify-center relative overflow-hidden">
        <div className="max-w-md relative z-10">
          <div className="flex items-start mb-8">
            <span className="text-8xl font-serif text-white mr-4 leading-none">
              ?
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mt-2">
              Do you have questions about GBAAST?
            </h2>
          </div>

          <Link
            to="/contact"
            className="bg-[#C8102E] hover:bg-red-700 text-white px-8 py-4 font-bold flex items-center transition-colors group w-full sm:w-auto justify-center rounded">

            <ArrowRight className="h-5 w-5 mr-3 group-hover:translate-x-1 transition-transform" />
            Frequently Asked Questions
          </Link>
        </div>
      </div>
    </section>);

}