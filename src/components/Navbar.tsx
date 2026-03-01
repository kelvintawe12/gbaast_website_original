import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDownIcon,
  MenuIcon,
  XIcon,
  ShieldCheckIcon,
  SearchIcon } from
'lucide-react';
interface NavDropdownItem {
  label: string;
  href: string;
}
interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}
const navItems: NavItem[] = [
{
  label: 'Home',
  href: '/'
},
{
  label: 'About',
  dropdown: [
  {
    label: 'About Us',
    href: '/about'
  },
  {
    label: 'Our Mission',
    href: '/about#mission'
  },
  {
    label: 'Partners',
    href: '/about#partners'
  }]

},
{
  label: 'Academics',
  dropdown: [
  {
    label: 'All Programs',
    href: '/programs'
  },
  {
    label: 'Academic Programs',
    href: '/programs#academic'
  },
  {
    label: 'Research',
    href: '/programs#research'
  },
  {
    label: 'Campus Life',
    href: '/campus-life'
  }]

},
{
  label: 'Admissions',
  dropdown: [
  {
    label: 'How to Apply',
    href: '/admissions'
  },
  {
    label: 'Apply Now',
    href: '/apply'
  },
  {
    label: 'Scholarships',
    href: '/scholarships'
  },
  {
    label: 'FAQ',
    href: '/admissions#faq'
  }]

},
{
  label: 'Community',
  dropdown: [
  {
    label: 'Alumni',
    href: '/alumni'
  },
  {
    label: 'News & Events',
    href: '/news'
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Gallery',
    href: '/gallery'
  },
  {
    label: 'Student Spotlight',
    href: '/student-spotlight'
  }]

},
{
  label: 'Contact',
  href: '/contact'
}];

function DropdownMenu({
  items,
  isOpen



}: {items: NavDropdownItem[];isOpen: boolean;}) {
  return (
    <div
      className={`absolute top-full left-0 mt-1 w-52 bg-[#001A3A] border border-white/10 rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-150 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>

      <div className="py-1">
        {items.map((item) =>
        <Link
          key={item.href}
          to={item.href}
          className="block px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors font-medium">

            {item.label}
          </Link>
        )}
      </div>
    </div>);

}
function NavDropdownButton({
  item,
  isActive



}: {item: NavItem;isActive: boolean;}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center text-white text-xs font-semibold hover:text-[#C8102E] transition-colors tracking-wide ${isActive ? 'text-[#C8102E]' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}>

        {item.label}
        <ChevronDownIcon
          className={`ml-1 h-3 w-3 opacity-70 transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />

      </button>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}>

        <DropdownMenu items={item.dropdown!} isOpen={open} />
      </div>
    </div>);

}
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);
  const isActiveGroup = (item: NavItem): boolean => {
    if (item.href) return location.pathname === item.href;
    if (item.dropdown) {
      return item.dropdown.some(
        (d) => location.pathname === d.href.split('#')[0]
      );
    }
    return false;
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-[#002B5B] shadow-lg py-4' : 'bg-[#002B5B] py-5'}`}>

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* GBAAST Logo */}
        <Link to="/" className="flex items-center text-white cursor-pointer group">
          <span className="text-xl font-bold tracking-tighter mr-2 flex relative overflow-visible">
            {['G', 'B', 'A', 'A', 'S', 'T'].map((letter, i) => (
              <span
                key={i}
                className="inline-block animate-playful-jump bg-gradient-to-br from-white via-[#C8102E] to-white bg-clip-text text-transparent animate-color-shift group-hover:animate-dangle-swing"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  backgroundSize: '200% 200%',
                  transformOrigin: 'top center'
                }}
              >
                {letter}
              </span>
            ))}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-fast pointer-events-none" />
          </span>
          <div className="flex flex-col leading-none text-[7px] font-semibold tracking-widest border-l border-white/30 pl-2 group-hover:border-[#C8102E]/50 transition-colors duration-300 animate-subtle-sway">
            <span className="group-hover:text-[#C8102E]/80 transition-colors duration-300 animate-fade-wave" style={{animationDelay: '0.1s'}}>GRACE BILINGUAL</span>
            <span className="group-hover:text-[#C8102E]/80 transition-colors duration-300 animate-fade-wave" style={{animationDelay: '0.2s'}}>ACADEMY OF ARTS</span>
            <span className="group-hover:text-[#C8102E]/80 transition-colors duration-300 animate-fade-wave" style={{animationDelay: '0.3s'}}>SCIENCE & TECH</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-5">
          {navItems.map((item) => {
            const active = isActiveGroup(item);
            if (item.href) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-white text-xs font-semibold hover:text-[#C8102E] transition-colors tracking-wide ${active ? 'text-[#C8102E]' : ''}`}>

                  {item.label}
                </Link>);

            }
            return (
              <NavDropdownButton
                key={item.label}
                item={item}
                isActive={active} />);


          })}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            to="/search"
            className="text-white hover:text-[#C8102E] transition-colors p-1.5 bg-white/10 rounded-full hover:bg-white/20"
            aria-label="Search">
            <SearchIcon className="h-4 w-4" />
          </Link>
          <Link
            to="/apply"
            className="bg-[#C8102E] text-white px-4 py-2 font-bold text-xs hover:bg-red-700 transition-colors rounded">

            APPLY NOW
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu">

          {mobileOpen ?
          <XIcon className="h-5 w-5" /> :

          <MenuIcon className="h-5 w-5" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen &&
      <div className="lg:hidden absolute top-full left-0 right-0 bg-[#002B5B] shadow-xl border-t border-white/10">
          <div className="flex flex-col px-4 py-6 space-y-1">
            {navItems.map((item) => {
            if (item.href) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center justify-between text-white text-sm font-semibold py-3 border-b border-white/10"
                  onClick={() => setMobileOpen(false)}>

                    {item.label}
                  </Link>);

            }
            const isExpanded = mobileExpanded === item.label;
            return (
              <div key={item.label}>
                  <button
                  className="w-full flex items-center justify-between text-white text-sm font-semibold py-3 border-b border-white/10"
                  onClick={() =>
                  setMobileExpanded(isExpanded ? null : item.label)
                  }>

                    {item.label}
                    <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-150 ${isExpanded ? 'rotate-180' : ''}`} />

                  </button>
                  {isExpanded &&
                <div className="ml-4 mt-1 mb-2 space-y-1 border-l border-white/20 pl-3">
                      {item.dropdown!.map((sub) =>
                  <Link
                    key={sub.href}
                    to={sub.href}
                    className="block py-2 text-sm text-white/70 hover:text-white transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileExpanded(null);
                    }}>

                          {sub.label}
                        </Link>
                  )}
                    </div>
                }
                </div>);

          })}
            <div className="pt-4 flex flex-col space-y-3">
              <Link
                to="/search"
                className="flex items-center justify-center text-white border border-white/20 py-3 rounded hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(false)}>
                <SearchIcon className="h-5 w-5 mr-2" />
                Search
              </Link>
              <Link
              to="/apply"
              className="bg-[#C8102E] text-white py-3 font-bold text-sm rounded text-center"
              onClick={() => setMobileOpen(false)}>

                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      }
    </nav>);

}