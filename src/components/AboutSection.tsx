import React from 'react';
import { ArrowRight, Play, BookOpen, Calendar, PhoneCall, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#C8102E] py-16 md:py-24 relative overflow-hidden">

      {/* Animated background pattern */}
      <div
        className="absolute inset-0 opacity-10 animate-pulse"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          animation: 'pulse 4s ease-in-out infinite'
        }}>
      </div>

      {/* Floating circles animation */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content - Left Side with slide-in animation */}
          <div className="flex-1 text-white relative animate-slide-in-left">
            <div className="absolute -left-8 -top-8 text-[200px] font-serif text-black/10 leading-none select-none animate-fade-in">
              G
            </div>
            <div className="relative z-10 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                About GBAAST
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-medium animate-fade-in-up animation-delay-200">
                Grace Bilingual Academy of Arts, Science and Technology is a premier bilingual boarding school in Mbankom, Yaoundé, Cameroon.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white/90 animate-fade-in-up animation-delay-400">
                We provide exceptional secondary education in both English and French, combining rigorous academics with character development for GCE and BEPC success.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up animation-delay-600">
                <Link
                  to="/about"
                  className="group bg-white hover:bg-gray-100 text-[#C8102E] px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <BookOpen className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/admissions"
                  className="group bg-[#002B5B] hover:bg-[#003875] text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Award className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Apply Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/campus-tours"
                  className="group bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105">
                  <Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Book a Tour
                </Link>
                
                <Link
                  to="/contact"
                  className="group bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105">
                  <PhoneCall className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Video Card - Right Side with slide-in animation */}
          <div className="w-full md:w-[400px] flex-shrink-0 animate-slide-in-right">
            <div className="bg-[#002B5B] p-6 rounded-lg shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="w-full h-64 mb-6 rounded shadow-lg overflow-hidden relative group">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&rel=0&modestbranding=1"
                  title="GBAAST School Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 animate-fade-in-up animation-delay-600">
                2024-2025 Prospectus
              </h3>
              <p className="text-white/80 mb-6 animate-fade-in-up animation-delay-800">
                Discover our programs, facilities, and what makes GBAAST the
                right choice for your child's education.
              </p>
              
              <div className="space-y-3">
                <Link
                  to="/about"
                  className="bg-[#C8102E] hover:bg-red-700 text-white w-full py-3 px-4 font-bold flex items-center justify-center transition-all duration-300 group rounded-lg hover:shadow-lg animate-fade-in-up animation-delay-1000">
                  <BookOpen className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Download Prospectus
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/programs"
                  className="bg-white/10 hover:bg-white/20 text-white w-full py-3 px-4 font-semibold flex items-center justify-center transition-all duration-300 group rounded-lg backdrop-blur-sm border border-white/30 hover:border-white/50">
                  <Award className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.1);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 10s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}