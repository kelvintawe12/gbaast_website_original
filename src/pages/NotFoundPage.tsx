import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Search, ChevronRight, Sparkles, BookOpen, Trophy, Globe, AlertCircle, HelpCircle, Mail, Phone, Users, BookMarked, Pen, Link2, MapPin, Lock } from 'lucide-react';

export function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navSections = [
    {
      title: 'Academics',
      icon: BookOpen,
      links: [
        { label: 'All Programs', href: '/programs' },
        { label: 'Academic Programs', href: '/programs#academic' },
        { label: 'Research', href: '/programs#research' },
        { label: 'Admissions', href: '/admissions' }
      ]
    },
    {
      title: 'Student Life',
      icon: Trophy,
      links: [
        { label: 'Campus Life', href: '/campus-life' },
        { label: 'Campus Tours', href: '/campus-tours' },
        { label: 'Events', href: '/events' },
        { label: 'Gallery', href: '/gallery' }
      ]
    },
    {
      title: 'Admissions',
      icon: Pen,
      links: [
        { label: 'Apply Now', href: '/apply' },
        { label: 'Scholarships', href: '/scholarships' },
        { label: 'Application Process', href: '/apply-process' },
        { label: 'FAQ', href: '/admissions#faq' }
      ]
    },
    {
      title: 'Community',
      icon: Users,
      links: [
        { label: 'Alumni', href: '/alumni' },
        { label: 'News & Events', href: '/news' },
        { label: 'Blog', href: '/blog' },
        { label: 'Student Spotlight', href: '/student-spotlight' }
      ]
    }
  ];

  const troubleshootingTips = [
    {
      issue: 'URL Typo',
      solution: 'Check if you typed the URL correctly. URLs are case-sensitive.',
      icon: Search
    },
    {
      issue: 'Page Moved',
      solution: 'This page may have been moved to a new location. Use our search feature to find it.',
      icon: MapPin
    },
    {
      issue: 'Broken Link',
      solution: 'The link you followed might be broken. Report this to our support team.',
      icon: Link2
    },
    {
      issue: 'Access Restricted',
      solution: 'You may need special permissions to access this page. Contact administration.',
      icon: Lock
    }
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-[#001A3A] via-[#002B5B] to-[#003875] overflow-hidden relative"
      style={{
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
        transition: 'background-position 0.3s ease'
      }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, #C8102E 25%, #C8102E 26%, transparent 27%, transparent 74%, #C8102E 75%, #C8102E 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, #C8102E 25%, #C8102E 26%, transparent 27%, transparent 74%, #C8102E 75%, #C8102E 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-b from-[#C8102E]/20 to-transparent blur-3xl animate-pulse rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-[#C8102E]/10 to-transparent blur-3xl animate-float" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-20 h-12 w-12 text-[#C8102E]/10 animate-float" />
        <BookOpen className="absolute top-1/3 right-32 h-10 w-10 text-white/5 animate-float-delayed" />
        <Trophy className="absolute bottom-1/4 left-1/4 h-12 w-12 text-[#C8102E]/10 animate-float" />
        <Globe className="absolute bottom-32 right-1/4 h-10 w-10 text-white/5 animate-float-delayed" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header section */}
        <div className="bg-gradient-to-b from-[#C8102E]/10 to-transparent border-b border-white/10">
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="text-center mb-8 animate-fade-in-down">
              <div className="inline-flex items-center justify-center mb-6 gap-2">
                <div className="h-1 w-8 bg-gradient-to-r from-[#C8102E] to-transparent rounded-full" />
                <span className="text-sm font-bold text-[#C8102E] tracking-widest">GBAAST</span>
                <div className="h-1 w-8 bg-gradient-to-l from-[#C8102E] to-transparent rounded-full" />
              </div>
            </div>

            {/* 404 Display */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/20 to-transparent rounded-full blur-3xl animate-pulse w-80 h-80 -m-16" />
                <h1 className="text-9xl md:text-[180px] font-black leading-none relative">
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-[#C8102E] via-white to-[#C8102E] animate-pulse">
                    4
                  </span>
                  <span className="inline-block mx-2 md:mx-6 relative group">
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-t from-white to-[#C8102E] animate-bounce" style={{ animationDelay: '0.1s' }}>
                      0
                    </span>
                  </span>
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-white via-[#C8102E] to-white animate-pulse">
                    4
                  </span>
                </h1>
              </div>
            </div>

            {/* Headings */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                Page Not <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8102E] to-red-400">Found</span>
              </h2>
              <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
                We couldn't locate the page you're looking for. It may have been moved, deleted, or the URL might have a typo.
              </p>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Quick Actions */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#C8102E] via-red-600 to-[#A00E26] text-white font-bold px-8 py-4 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#C8102E]/50 transition-all duration-300 transform hover:scale-105"
              >
                <Home className="h-5 w-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                <span>Back to Home</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                to="/search"
                className="group relative inline-flex items-center justify-center bg-white/10 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 hover:border-[#C8102E]/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <Search className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Search Site
              </Link>
            </div>
          </div>

          {/* Detailed sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {/* What Happened Section */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#C8102E]/30 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-8 w-8 text-[#C8102E] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C8102E] transition-colors">What Happened?</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    The URL you entered doesn't match any page in our system. This could be due to:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2 text-white/60">
                      <span className="text-[#C8102E] font-bold mt-0.5">•</span>
                      <span>Incorrect URL or typo in the web address</span>
                    </li>
                    <li className="flex items-start gap-2 text-white/60">
                      <span className="text-[#C8102E] font-bold mt-0.5">•</span>
                      <span>The page has been moved to a new location</span>
                    </li>
                    <li className="flex items-start gap-2 text-white/60">
                      <span className="text-[#C8102E] font-bold mt-0.5">•</span>
                      <span>The page has been permanently removed</span>
                    </li>
                    <li className="flex items-start gap-2 text-white/60">
                      <span className="text-[#C8102E] font-bold mt-0.5">•</span>
                      <span>Access may be restricted or require authentication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Troubleshooting Section */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#C8102E]/30 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <HelpCircle className="h-8 w-8 text-[#C8102E] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C8102E] transition-colors">How to Fix It</h3>
                  <div className="space-y-3">
                    {troubleshootingTips.map((tip, idx) => {
                      const IconComponent = tip.icon;
                      return (
                      <div key={idx} className="text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <IconComponent className="h-4 w-4 text-[#C8102E]" />
                          <span className="font-semibold text-white/80">{tip.issue}</span>
                        </div>
                        <p className="text-white/60 text-xs ml-6">{tip.solution}</p>
                      </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation by Section */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-[#C8102E]" />
              Explore by Section
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {navSections.map((section, idx) => {
                const IconComponent = section.icon;
                return (
                <div
                  key={idx}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-[#C8102E]/50 transition-all duration-300 hover:bg-white/10 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="h-6 w-6 text-[#C8102E] group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-white group-hover:text-[#C8102E] transition-colors">
                      {section.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          to={link.href}
                          className="text-sm text-white/60 hover:text-[#C8102E] transition-colors flex items-center gap-2 group/link"
                        >
                          <ChevronRight className="h-3 w-3 text-[#C8102E]/50 group-hover/link:translate-x-1 transition-transform" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                );
              })}
            </div>
          </div>

          {/* Contact Support Section */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Phone className="h-6 w-6 text-[#C8102E]" />
              Still Need Help?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#C8102E]/20 to-transparent border border-[#C8102E]/30 rounded-xl p-8 hover:border-[#C8102E]/50 transition-all duration-300">
                <Mail className="h-8 w-8 text-[#C8102E] mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Email Us</h4>
                <p className="text-white/70 text-sm mb-4">
                  Can't find what you're looking for? Send us an email and we'll respond within 24 hours.
                </p>
                <a
                  href="mailto:support@gbaast.edu"
                  className="inline-block text-[#C8102E] font-semibold hover:text-red-400 transition-colors text-sm"
                >
                  support@gbaast.edu →
                </a>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <Phone className="h-8 w-8 text-blue-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Call Us</h4>
                <p className="text-white/70 text-sm mb-4">
                  Our admissions team is available Monday-Friday, 8:00 AM - 5:00 PM.
                </p>
                <a
                  href="tel:+237696123456"
                  className="inline-block text-blue-400 font-semibold hover:text-blue-300 transition-colors text-sm"
                >
                  +237 696 123 456 →
                </a>
              </div>
            </div>
          </div>

          {/* Popular Pages */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-[#C8102E]" />
              Most Visited Pages
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: 'Home', href: '/', visits: '45K' },
                { label: 'Programs', href: '/programs', visits: '32K' },
                { label: 'Admissions', href: '/admissions', visits: '28K' },
                { label: 'Apply Now', href: '/apply', visits: '21K' },
                { label: 'Campus Tours', href: '/campus-tours', visits: '18K' },
                { label: 'Contact', href: '/contact', visits: '15K' }
              ].map((page, idx) => (
                <Link
                  key={idx}
                  to={page.href}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C8102E]/50 rounded-lg p-4 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white group-hover:text-[#C8102E] transition-colors flex items-center gap-2">
                      {page.label}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                    </span>
                  </div>
                  <span className="text-xs text-white/50">{page.visits} monthly visits</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center border-t border-white/10 pt-8 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <p className="text-white/50 text-xs font-mono mb-4">
              ERROR CODE: 404 | REQUEST PATH NOT FOUND | {new Date().toLocaleString()}
            </p>
            <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
              <span>GBAAST</span>
              <span className="text-[#C8102E]">•</span>
              <span>Grace Bilingual Academy of Arts, Science & Technology</span>
            </div>
            <p className="text-white/30 text-xs mt-4">
              © {new Date().getFullYear()} GBAAST. All rights reserved. | 
              <Link to="/privacy" className="text-[#C8102E]/70 hover:text-[#C8102E] mx-1">Privacy Policy</Link>
              | 
              <Link to="/terms" className="text-[#C8102E]/70 hover:text-[#C8102E] mx-1">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
