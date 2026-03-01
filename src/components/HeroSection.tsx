import React, { useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Globe,
  FlaskConical,
  Trophy,
  Sparkles
} from 'lucide-react';

const slides = [
{
  image:
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80',
  heading: ["Shaping Tomorrow's", 'Leaders Through', 'Bilingual Excellence'],
  subtitle:
  'A premier bilingual dormitory school offering quality secondary education in Arts, Sciences, and Technology.',
  icon: Globe
},
{
  image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80',
  heading: ['Excellence in Arts,', 'Sciences &', 'Technology'],
  subtitle:
  'Hands-on learning in modern laboratories and classrooms, preparing students for a bright future.',
  icon: FlaskConical
},
{
  image:
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80',
  heading: ['98% Exam', 'Success Rate —', 'Proven Results'],
  subtitle:
  'Our students consistently achieve outstanding results in GCE examinations.',
  icon: Award
},
{
  image:
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80',
  heading: ['A Vibrant', 'Campus', 'Community'],
  subtitle:
  'Sports, culture, friendships, and memories that last a lifetime at GBAAST.',
  icon: Users
}];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center pt-20 overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) =>
      <div
        key={index}
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${slide.image})`
        }} />

      )}

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#001A3A]/95 via-[#001A3A]/80 to-transparent" />

      {/* Floating decorative icons */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 right-20 h-8 w-8 text-[#C8102E]/20 animate-pulse" />
        <BookOpen className="absolute top-40 right-40 h-12 w-12 text-white/10 animate-float" />
        <Trophy className="absolute bottom-32 right-32 h-10 w-10 text-[#C8102E]/20 animate-float-delayed" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-8 w-8 text-[#C8102E] mr-3" />
            <span className="text-white/80 text-base font-medium">
              Welcome to GBAAST
            </span>
          </div>

          <div className="relative h-[220px] md:h-[260px] lg:h-[280px] xl:h-[300px] mb-6">
            {slides.map((slide, index) => {
              const SlideIcon = slide.icon;
              return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

                {/* Slide Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#C8102E]/20 backdrop-blur-sm flex items-center justify-center border border-[#C8102E]/30 mb-6">
                  <SlideIcon className="h-7 w-7 text-[#C8102E]" />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  {slide.heading[0]}
                  <br />
                  {slide.heading[1]}
                  <br />
                  <span className="text-[#C8102E]">{slide.heading[2]}</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium max-w-2xl lg:max-w-3xl">
                  {slide.subtitle}
                </p>
              </div>
              );
            })}
          </div>

          <div className="flex items-center text-white mb-10">
            <MapPin className="h-5 w-5 mr-2 text-[#C8102E]" />
            <span className="font-medium">Mbankom, Yaoundé, Cameroon</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/apply"
              className="bg-[#C8102E] hover:bg-red-700 text-white px-8 py-4 font-bold flex items-center justify-center transition-all group rounded">

              <ArrowRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
              ENROLL NOW
            </Link>
            <Link
              to="/about"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 font-bold flex items-center justify-center transition-all rounded">

              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-2"
        aria-label="Previous slide">

        <ChevronLeft className="h-12 w-12" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-2"
        aria-label="Next slide">

        <ChevronRight className="h-12 w-12" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) =>
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-[#C8102E]' : 'bg-white/30 hover:bg-white/50'}`}
          aria-label={`Go to slide ${index + 1}`} />

        )}
      </div>
    </section>);

}