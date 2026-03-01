import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SendIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  MessageSquareIcon,
  Home,
  Building2 } from
'lucide-react';
const contactInfo = [
{
  icon: MapPinIcon,
  title: 'Our Location',
  lines: ['Mbankom, Yaoundé', 'Centre Region, Cameroon'],
  color: 'text-[#C8102E]',
  bg: 'bg-red-50'
},
{
  icon: PhoneIcon,
  title: 'Phone Numbers',
  lines: ['+237 6XX XXX XXX', '+237 2XX XXX XXX'],
  color: 'text-blue-600',
  bg: 'bg-blue-50'
},
{
  icon: MailIcon,
  title: 'Email Address',
  lines: ['info@gbaast.edu.cm', 'admissions@gbaast.edu.cm'],
  color: 'text-emerald-600',
  bg: 'bg-emerald-50'
},
{
  icon: ClockIcon,
  title: 'Office Hours',
  lines: ['Mon – Fri: 7:30am – 5:00pm', 'Sat: 8:00am – 1:00pm'],
  color: 'text-purple-600',
  bg: 'bg-purple-50'
}];

const departments = [
{
  name: 'Admissions Office',
  email: 'admissions@gbaast.edu.cm',
  phone: '+237 6XX XXX XXX'
},
{
  name: 'Academic Affairs',
  email: 'academics@gbaast.edu.cm',
  phone: '+237 6XX XXX XXX'
},
{
  name: 'Boarding & Welfare',
  email: 'boarding@gbaast.edu.cm',
  phone: '+237 6XX XXX XXX'
},
{
  name: 'Finance / Bursary',
  email: 'finance@gbaast.edu.cm',
  phone: '+237 6XX XXX XXX'
}];

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };
  return (
    <div className="pt-20 bg-[#F5F7FA] min-h-screen">
      {/* Hero */}
      <div className="bg-[#002B5B] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-sm font-medium mb-6">
            <MessageSquareIcon className="h-4 w-4 text-[#C8102E]" />
            We're here to help
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
            Have questions about admissions, programs, or campus life? Our team
            is ready to assist you.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="text-white">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.title}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">

                <div
                  className={`w-10 h-10 ${info.bg} rounded-lg flex items-center justify-center mb-4`}>

                  <Icon className={`h-5 w-5 ${info.color}`} />
                </div>
                <h3 className="font-bold text-[#002B5B] mb-2 text-sm">
                  {info.title}
                </h3>
                {info.lines.map((line) =>
                <p key={line} className="text-gray-600 text-sm">
                    {line}
                  </p>
                )}
              </div>);

          })}
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-[#002B5B] px-8 py-6">
                  <h2 className="text-xl font-bold text-white">
                    Send Us a Message
                  </h2>
                  <p className="text-white/70 text-sm mt-1">
                    We'll respond within 24 hours on business days.
                  </p>
                </div>

                {submitted ?
                <div className="p-12 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#002B5B] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiry',
                        message: ''
                      });
                    }}
                    className="text-sm font-semibold text-[#C8102E] hover:underline">

                      Send another message
                    </button>
                  </div> :

                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Full Name <span className="text-[#C8102E]">*</span>
                        </label>
                        <input
                        type="text"
                        required
                        placeholder="e.g. Jean Mbarga"
                        value={form.name}
                        onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          name: e.target.value
                        }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:border-transparent transition-colors" />

                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address{' '}
                          <span className="text-[#C8102E]">*</span>
                        </label>
                        <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          email: e.target.value
                        }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:border-transparent transition-colors" />

                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                        type="tel"
                        placeholder="+237 6XX XXX XXX"
                        value={form.phone}
                        onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          phone: e.target.value
                        }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:border-transparent transition-colors" />

                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Subject <span className="text-[#C8102E]">*</span>
                        </label>
                        <select
                        required
                        value={form.subject}
                        onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          subject: e.target.value
                        }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:border-transparent bg-white transition-colors">

                          <option>General Inquiry</option>
                          <option>Admissions</option>
                          <option>Academic Programs</option>
                          <option>Fees & Scholarships</option>
                          <option>Boarding & Welfare</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Message <span className="text-[#C8102E]">*</span>
                      </label>
                      <textarea
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        message: e.target.value
                      }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:border-transparent resize-none transition-colors" />

                    </div>

                    <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#C8102E] text-white font-bold py-3.5 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">

                      {loading ?
                    <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </> :

                    <>
                          <SendIcon className="h-4 w-4" />
                          Send Message
                        </>
                    }
                    </button>
                  </form>
                }
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="h-52 bg-gradient-to-br from-[#002B5B]/10 to-[#002B5B]/5 flex flex-col items-center justify-center border-b border-gray-200">
                  <MapPinIcon className="h-10 w-10 text-[#C8102E] mb-2" />
                  <p className="text-sm font-semibold text-[#002B5B]">
                    Mbankom, Yaoundé
                  </p>
                  <p className="text-xs text-gray-500">
                    Centre Region, Cameroon
                  </p>
                </div>
                <div className="p-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 border border-[#002B5B] text-[#002B5B] text-sm font-semibold rounded-lg hover:bg-[#002B5B] hover:text-white transition-colors">

                    <MapPinIcon className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-[#002B5B]">
                    Department Contacts
                  </h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {departments.map((dept) =>
                  <div key={dept.name} className="px-6 py-4">
                      <p className="text-sm font-semibold text-[#002B5B] mb-1">
                        {dept.name}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MailIcon className="h-3 w-3" /> {dept.email}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <PhoneIcon className="h-3 w-3" /> {dept.phone}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Social */}
              <div className="bg-[#002B5B] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">Follow GBAAST</h3>
                <p className="text-white/70 text-sm mb-4">
                  Stay updated with school news and events.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">

                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">

                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">

                    <TwitterIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#002B5B] mb-3">
            Looking for quick answers?
          </h2>
          <p className="text-gray-600 mb-6">
            Check our frequently asked questions before reaching out.
          </p>
          <Link
            to="/admissions#faq"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#002B5B] text-[#002B5B] font-bold rounded hover:bg-[#002B5B] hover:text-white transition-colors">

            View FAQ <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Floating Campus Tour Button */}
      <Link
        to="/campus-tours"
        className="fixed bottom-24 right-8 z-50 bg-gradient-to-r from-[#002B5B] to-[#001A3A] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-2 group"
        title="Go to Campus Tours"
      >
        <Building2 className="h-6 w-6 group-hover:animate-bounce" />
      </Link>

      {/* Floating Home Button */}
      <Link
        to="/"
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#C8102E] to-[#A00E26] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-2 group"
        title="Go to Home"
      >
        <Home className="h-6 w-6 group-hover:animate-bounce" />
      </Link>
    </div>);

}