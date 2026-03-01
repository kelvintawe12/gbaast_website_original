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
  Sparkles,
  Move,
  ArrowDown
} from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80',
    heading: ["Shaping Tomorrow's", 'Leaders Through', 'Bilingual Excellence'],
    subtitle: 'A premier bilingual dormitory school offering quality secondary education in Arts, Sciences, and Technology.',
    icon: Globe,
    color: 'from-blue-600'
  },
  {
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80',
    heading: ['Excellence in Arts,', 'Sciences &', 'Technology'],
    subtitle: 'Hands-on learning in modern laboratories and classrooms, preparing students for a bright future.',
    icon: FlaskConical,
    color: 'from-purple-600'
  },
  {
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80',
    heading: ['98% Exam', 'Success Rate —', 'Proven Results'],
    subtitle: 'Our students consistently achieve outstanding results in GCE examinations.',
    icon: Award,
    color: 'from-amber-600'
  },
  {
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80',
    heading: ['A Vibrant', 'Campus', 'Community'],
    subtitle: 'Sports, culture, friendships, and memories that last a lifetime at GBAAST.',
    icon: Users,
    color: 'from-green-600'
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Images with smooth transitions */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`
          }}
        />
      ))}

      {/* Enhanced gradient overlay with multiple layers */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001A3A]/96 via-[#001A3A]/75 to-[#001A3A]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      {/* Animated floating decorative elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 right-20 h-8 w-8 text-[#C8102E]/20 animate-pulse" />
        <BookOpen className="absolute top-40 right-40 h-12 w-12 text-white/5 animate-float" />
        <Trophy className="absolute bottom-32 right-32 h-10 w-10 text-[#C8102E]/20 animate-float-delayed" />
      </div>

      {/* Main content */}
      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Welcome badge with enhanced styling */}
            <div className="mb-8 inline-block animate-fade-in-down">
              <div className="flex items-center gap-2 bg-[#C8102E]/20 backdrop-blur-md border border-[#C8102E]/40 rounded-full px-4 py-2 w-fit hover:border-[#C8102E]/60 transition-all duration-300">
                <GraduationCap className="h-5 w-5 text-[#C8102E]" />
                <span className="text-white/90 text-sm font-semibold">Welcome to GBAAST</span>
              </div>
            </div>

            {/* Animated slide content container */}
            <div className="relative h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px] mb-8">
              {slides.map((slide, index) => {
                const SlideIcon = slide.icon;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentSlide
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : index < currentSlide
                        ? 'opacity-0 -translate-y-10 pointer-events-none'
                        : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                  >
                    {/* Slide Icon with enhanced styling */}
                    <div className="mb-8 inline-block">
                      <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${slide.color} to-[#C8102E]/50 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg shadow-[#C8102E]/30 group-hover:scale-110 transition-transform duration-300 animate-fade-in-up`}>
                        <SlideIcon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Heading with gradient text and shadow */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                      {slide.heading[0]}
                      <br />
                      {slide.heading[1]}
                      <br />
                      <span className="inline-block bg-gradient-to-r from-[#C8102E] to-red-500 bg-clip-text text-transparent">
                        {slide.heading[2]}
                      </span>
                    </h1>

                    {/* Subtitle with improved readability */}
                    <p className="text-lg md:text-xl lg:text-2xl text-white/95 font-light max-w-2xl lg:max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
                      {slide.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Location badge with icon */}
            <div className="flex items-center text-white/90 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <MapPin className="h-5 w-5 mr-3 text-[#C8102E]" />
              <span className="font-semibold">Mbankom, Yaoundé, Cameroon</span>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/apply"
                className="group relative overflow-hidden bg-gradient-to-r from-[#C8102E] to-red-700 hover:from-red-700 hover:to-[#C8102E] text-white px-8 py-4 font-bold flex items-center justify-center rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#C8102E]/50 transform hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                <span className="relative">ENROLL NOW</span>
              </Link>

              <Link
                to="/about"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-white/20"
              >
                <span className="relative">LEARN MORE</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced navigation arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 group text-white/40 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-white/10 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8 group-hover:scale-125 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 group text-white/40 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-white/10 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8 group-hover:scale-125 transition-transform" />
      </button>

      {/* Enhanced slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full backdrop-blur-sm ${
              index === currentSlide
                ? 'bg-[#C8102E] w-8 h-3 shadow-lg shadow-[#C8102E]/50'
                : 'bg-white/30 h-3 w-3 hover:bg-white/50 hover:w-6'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-white/40 animate-bounce hidden md:block">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
}