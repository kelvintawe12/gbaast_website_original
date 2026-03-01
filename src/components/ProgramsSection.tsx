import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProgramsSection() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCount(0); // Reset count when entering view
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count < 98) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + 1, 98));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [count, isVisible]);

  return (
    <section
      ref={sectionRef}
      id="why-gbaast"
      className="bg-white py-16 md:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#002B5B] mb-8 leading-tight">
              What makes
              <br />
              GBAAST Academic
              <br />
              Programs Unique?
            </h2>
            <p className="text-[#002B5B]/80 text-lg mb-8 leading-relaxed">
              At GBAAST, we follow the internationally recognized Cambridge GCE syllabus with 
              a unique holistic approach that develops the whole student. Our innovative blend 
              of Arts, Science, and Technology programs goes beyond academics - fostering 
              critical thinking, creativity, leadership, and character. With modern facilities, 
              expert mentorship, and personalized attention, we prepare students not just for 
              exams, but for life success.
            </p>
            <Link
              to="/programs"
              className="inline-flex items-center text-[#C8102E] font-bold hover:text-red-800 transition-colors group">

              <ArrowRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
              EXPLORE OUR PROGRAMS
            </Link>
          </div>

          <div className="flex-1 relative w-full min-h-[400px] flex items-center justify-center">
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[120%] bg-[#C8102E] rounded-tl-[200px] rounded-bl-lg z-0"></div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 p-8">
              <div className="text-white text-right sm:max-w-[250px]">
                <h3 className="text-xl font-bold mb-2">Holistic Education</h3>
                <p className="text-white/90 text-sm">
                  Arts, Science, and Technology combined with character development, 
                  leadership training, and life skills...
                </p>
              </div>

              <div className="w-48 h-48 rounded-full bg-[#9A0C23] flex flex-col items-center justify-center text-white p-6 text-center shadow-xl transform hover:scale-105 transition-transform">
                <span className="text-6xl font-serif italic mb-2">{count}%</span>
                <span className="text-sm leading-tight">
                  Exam success rate in GCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}