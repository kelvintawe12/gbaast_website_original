import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#C8102E] py-16 md:py-24 relative overflow-hidden">

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-white relative">
            <div className="absolute -left-8 -top-8 text-[200px] font-serif text-black/10 leading-none select-none">
              G
            </div>
            <div className="relative z-10 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                About GBAAST
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-medium">
                Grace Bilingual Academy of Arts, Science and Technology is a premier bilingual boarding school in Mbankom, Yaoundé, Cameroon.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white/90">
                We provide exceptional secondary education in both English and French, combining rigorous academics with character development for GCE and BEPC success.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[400px] flex-shrink-0">
            <div className="bg-[#002B5B] p-6 rounded-lg shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-full h-64 mb-6 rounded shadow-lg overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/videos/school-tour.mp4" type="video/mp4" />
                  <source src="/videos/school-tour.webm" type="video/webm" />
                  {/* Fallback for browsers that don't support video */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                    <span className="text-white/50 text-xl font-bold">
                      School Prospectus
                    </span>
                  </div>
                </video>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                2024-2025 Prospectus
              </h3>
              <p className="text-white/80 mb-6">
                Discover our programs, facilities, and what makes GBAAST the
                right choice for your child's education.
              </p>
              <Link
                to="/about"
                className="bg-[#C8102E] hover:bg-red-700 text-white w-full py-3 font-bold flex items-center justify-center transition-colors group rounded">

                <ArrowRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Download Prospectus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}