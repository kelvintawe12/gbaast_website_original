import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#001A3A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Link to="/" className="flex items-center mb-6 md:mb-0">
            <span className="text-3xl font-bold tracking-tighter mr-2">
              GBAAST
            </span>
            <div className="flex flex-col leading-none text-[9px] font-semibold tracking-widest border-l border-white/30 pl-2">
              <span>GRACE BILINGUAL</span>
              <span>ACADEMY OF ARTS</span>
              <span>SCIENCE & TECH</span>
            </div>
          </Link>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Facebook">

              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Instagram">

              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Twitter">

              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="YouTube">

              <Youtube className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn">

              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">About GBAAST</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors">

                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors">

                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors">

                  Careers
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors">

                  Accreditation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Academics</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  to="/programs"
                  className="hover:text-white transition-colors">

                  Academic Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="hover:text-white transition-colors">

                  Bilingual Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors">

                  Teaching Model
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors">

                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-white transition-colors">

                  Academic Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Admissions</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  to="/admissions"
                  className="hover:text-white transition-colors">

                  How to Apply
                </Link>
              </li>
              <li>
                <Link
                  to="/apply"
                  className="hover:text-white transition-colors">

                  Application Form
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="hover:text-white transition-colors">

                  School Fees
                </Link>
              </li>
              <li>
                <Link
                  to="/scholarships"
                  className="hover:text-white transition-colors">

                  Scholarships
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors">

                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex flex-col">
                <span className="font-semibold text-white">GBAAST Campus</span>
                <span>Mbankom, Yaoundé</span>
                <span>Cameroon</span>
              </li>
              <li className="mt-4">
                <a
                  href="tel:+2376XXXXXXXX"
                  className="hover:text-white transition-colors">

                  +237 6XX XXX XXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@gbaast.cm"
                  className="hover:text-white transition-colors">

                  info@gbaast.cm
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Grace Bilingual Academy of Arts,
            Science and Technology. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link
              to="/admin/login"
              className="hover:text-white transition-colors">

              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}