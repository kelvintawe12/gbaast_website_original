import React from 'react';
import { Link } from 'react-router-dom';
import { Info, ArrowRight } from 'lucide-react';
export function AdmissionsSection() {
  return (
    <section
      id="admissions"
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#002B5B] via-[#1a2b5b] to-[#4a154b]">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 relative w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-md h-[500px] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="GBAAST Students"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] rounded-full z-0"></div>
          </div>

          <div className="flex-1 z-10 w-full">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Begin your journey
              <br />
              to GBAAST
            </h2>
            <p className="text-white/90 text-lg mb-8 font-medium">
              Start your application to GBAAST for the upcoming academic year.
            </p>

            <div className="bg-white rounded-xl p-8 mb-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#002B5B] mb-1">
                September
              </h3>
              <p className="text-[#002B5B] font-medium mb-4">2025 Intake</p>
              <p className="text-gray-600 mb-6">
                Applications open and ongoing for all class levels.
              </p>
              <div className="text-[#C8102E] font-bold text-sm">
                <p>Applications close</p>
                <p>31st July 2025</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 mb-8 flex items-start shadow-lg">
              <div className="bg-[#002B5B] rounded-full p-1 mr-4 flex-shrink-0 mt-1">
                <Info className="h-4 w-4 text-white" />
              </div>
              <p className="text-sm text-[#002B5B]">
                <strong>IMPORTANT:</strong> GBAAST does not work with agents or
                intermediaries. Apply directly through our official channels
                only.
              </p>
            </div>

            <Link
              to="/apply"
              className="text-white font-bold flex items-center hover:text-[#C8102E] transition-colors group text-lg tracking-wider">

              <ArrowRight className="h-5 w-5 mr-3 group-hover:translate-x-2 transition-transform" />
              APPLY NOW
            </Link>
          </div>
        </div>
      </div>
    </section>);

}