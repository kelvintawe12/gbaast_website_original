import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  BookOpen,
  Dumbbell,
  Users,
  Clock,
  MapPinned,
  Send,
  X,
  Globe,
  Building2,
  Monitor,
  Trophy,
  Utensils,
  Music,
  Heart,
  ChevronRight,
  Play,
  CalendarDays,
} from 'lucide-react';
import { campusFacilities, virtualTours, tourBookingSlots } from '../data/campusTourData';

export function CampusToursPage() {
  const [bookingModal, setBookingModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [selectedFacility, setSelectedFacility] = useState<typeof campusFacilities[0] | null>(null);

  const floatingIcons = [
    { Icon: Building2, label: 'Campus', delay: 0 },
    { Icon: BookOpen, label: 'Academic', delay: 0.1 },
    { Icon: Dumbbell, label: 'Sports', delay: 0.2 },
    { Icon: Users, label: 'Community', delay: 0.3 },
    { Icon: Heart, label: 'Health', delay: 0.4 },
  ];

  const categoryIcons = {
    'Academic': Monitor,
    'Residential': Building2,
    'Sports': Trophy,
    'Dining': Utensils,
    'Recreation': Music,
    'Support': Heart,
  };

  const handleBookTour = (slotId: number) => {
    setSelectedSlot(slotId);
    setBookingModal(true);
  };

  const handleSubmitBooking = () => {
    if (visitorName && visitorEmail) {
      alert(`Tour booked successfully for ${visitorName}!`);
      setBookingModal(false);
      setVisitorName('');
      setVisitorEmail('');
      setSelectedSlot(null);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section with Animated Background */}
      <div className="relative bg-gradient-to-r from-[#002B5B] to-[#001A3A] overflow-visible py-32 px-4" style={{ minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Background Circles */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse" />
        </div>

        {/* Animated Floating Icons Styles */}
        <style>{`
          @keyframes float-0 {
            0%, 100% { transform: translate(120px, 0px) scale(1); opacity: 0.6; }
            50% { transform: translate(144px, 0px) scale(1.1); opacity: 0.9; }
          }
          @keyframes float-1 {
            0%, 100% { transform: translate(36.96px, 113.76px) scale(1); opacity: 0.6; }
            50% { transform: translate(44.35px, 136.51px) scale(1.1); opacity: 0.9; }
          }
          @keyframes float-2 {
            0%, 100% { transform: translate(-96.96px, 70.6px) scale(1); opacity: 0.6; }
            50% { transform: translate(-116.35px, 84.72px) scale(1.1); opacity: 0.9; }
          }
          @keyframes float-3 {
            0%, 100% { transform: translate(-96.96px, -70.6px) scale(1); opacity: 0.6; }
            50% { transform: translate(-116.35px, -84.72px) scale(1.1); opacity: 0.9; }
          }
          @keyframes float-4 {
            0%, 100% { transform: translate(36.96px, -113.76px) scale(1); opacity: 0.6; }
            50% { transform: translate(44.35px, -136.51px) scale(1.1); opacity: 0.9; }
          }
          @keyframes rotate-center {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}</style>

        {/* Floating Icons Container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div style={{ position: 'relative', width: '400px', height: '400px' }}>
            {/* Floating Icons */}
            {floatingIcons.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div
                  key={`float-${index}`}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    animation: `float-${index} 4s ease-in-out infinite`,
                    animationDelay: `${item.delay}s`,
                    willChange: 'transform, opacity',
                    pointerEvents: 'auto',
                  }}
                >
                  <div className="bg-white/30 backdrop-blur-md border border-white/50 rounded-full p-4 hover:bg-white/40 transition-all cursor-pointer group shadow-lg hover:shadow-2xl">
                    <Icon className="h-8 w-8 text-white group-hover:text-yellow-200 transition-colors" />
                  </div>
                </div>
              );
            })}

            {/* Center Rotating Circle */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100px',
                height: '100px',
                animation: 'rotate-center 3s linear infinite',
                willChange: 'transform',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '3px solid transparent',
                  borderTopColor: 'white',
                  borderRightColor: '#C8102E',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Center Globe Icon */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                pointerEvents: 'auto',
              }}
            >
              <div className="bg-gradient-to-r from-[#C8102E] to-white text-[#002B5B] rounded-full p-4 shadow-xl">
                <Globe className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Explore Our <span className="text-[#C8102E]">Campus</span>
          </h1>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover world-class facilities, vibrant student life, and the perfect environment for academic excellence
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#virtual-tours" className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A00E26] text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
              <Play className="h-5 w-5" />
              Start Virtual Tour
            </a>
            <button onClick={() => setBookingModal(true)} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#002B5B] px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
              <CalendarDays className="h-5 w-5" />
              Book a Visit
            </button>
          </div>
        </div>
      </div>

      {/* Virtual Tours Section */}
      <section id="virtual-tours" className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">Virtual Campus Tours</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Take an immersive 3D tour of our campus from anywhere in the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {virtualTours.map((tour) => (
              <div
                key={tour.id}
                className={`group cursor-pointer rounded-2xl overflow-hidden transition-all transform hover:scale-105 ${
                  tour.featured ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden h-64 lg:h-96">
                  <img
                    src={tour.imageUrl}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B] via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-[#002B5B] mb-2 group-hover:text-[#C8102E] transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {tour.stops} stops
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Facilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">Our Facilities</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              State-of-the-art infrastructure supporting academic excellence and student wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusFacilities.map((facility) => {
              const CategoryIcon = categoryIcons[facility.category as keyof typeof categoryIcons] || MapPinned;

              return (
                <div key={facility.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#C8102E] hover:shadow-xl transition-all group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#002B5B] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {facility.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CategoryIcon className="h-6 w-6 text-[#C8102E]" />
                      <h3 className="text-xl font-bold text-[#002B5B]">{facility.name}</h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{facility.description}</p>

                    <div className="space-y-2 mb-4">
                      {facility.highlights.slice(0, 2).map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <ChevronRight className="h-4 w-4 text-[#C8102E] flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {facility.capacity && (
                      <p className="text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                        <span className="font-semibold">Capacity:</span> {facility.capacity}
                      </p>
                    )}

                    <button 
                      onClick={() => setSelectedFacility(facility)}
                      className="w-full bg-gradient-to-r from-[#002B5B] to-[#001A3A] hover:from-[#C8102E] hover:to-[#A00E26] text-white py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      View Details
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tour Booking Section */}
      <section className="py-24 bg-gradient-to-br from-[#002B5B] to-[#001A3A] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Schedule Your Campus Visit</h2>
            <p className="text-white/80 text-lg">
              Join us for a guided tour led by our knowledgeable student ambassadors
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {tourBookingSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => handleBookTour(slot.id)}
                  disabled={!slot.available}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    slot.available
                      ? 'border-white/30 hover:bg-white/10 hover:border-[#C8102E] cursor-pointer'
                      : 'border-gray-500/20 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="font-semibold">{slot.date}</div>
                  <div className="text-white/80">{slot.time}</div>
                  {!slot.available && <div className="text-sm text-red-400 mt-2">Fully Booked</div>}
                </button>
              ))}
            </div>

            <a href="#virtual-tours" className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A00E26] text-white px-6 py-3 rounded-lg font-bold transition-all">
              View More Slots
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Visit GBAAST */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#002B5B] text-center mb-16">Why Visit GBAAST?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Monitor,
                title: 'Academic Excellence',
                description: 'State-of-the-art facilities and innovative teaching methods'
              },
              {
                icon: Users,
                title: 'Vibrant Community',
                description: 'Diverse student body from across the region'
              },
              {
                icon: Dumbbell,
                title: 'Holistic Development',
                description: 'Sports, arts, and wellness programs alongside academics'
              },
              {
                icon: Building2,
                title: 'World-Class Infrastructure',
                description: 'Modern facilities meeting international standards'
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg hover:border-[#C8102E] border border-gray-200 transition-all">
                  <Icon className="h-12 w-12 text-[#C8102E] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#002B5B] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {bookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setBookingModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-2xl font-bold text-[#002B5B] mb-6">Book Your Campus Tour</h3>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002B5B] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  value={visitorEmail}
                  onChange={(e) => setVisitorEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002B5B] focus:border-transparent"
                />
              </div>

              {selectedSlot && (
                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-[#002B5B]">Selected Slot:</span>
                    {tourBookingSlots.find(s => s.id === selectedSlot) && (
                      <>{' ' + tourBookingSlots.find(s => s.id === selectedSlot)!.date} at {tourBookingSlots.find(s => s.id === selectedSlot)!.time}</>
                    )}
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setBookingModal(false)}
                className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitBooking}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-[#C8102E] to-[#A00E26] text-white rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F7FA] border-t-4 border-[#C8102E]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-6">Ready to Experience GBAAST?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Schedule your campus visit today or explore our virtual tours from anywhere in the world
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setBookingModal(true)}
              className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A00E26] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
            >
              <CalendarDays className="h-5 w-5" />
              Schedule a Visit
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#002B5B] px-8 py-4 rounded-xl font-bold transition-all border-2 border-[#002B5B]"
            >
              <Send className="h-5 w-5" />
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Facility Details Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#002B5B] to-[#001A3A] text-white p-6 rounded-t-2xl flex items-start justify-between z-10">
              <div className="flex-1">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-3">
                  {selectedFacility.category}
                </div>
                <h2 className="text-3xl font-bold mb-2">{selectedFacility.name}</h2>
                <p className="text-white/90">{selectedFacility.description}</p>
              </div>
              <button
                onClick={() => setSelectedFacility(null)}
                className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Quick Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {selectedFacility.capacity && (
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="h-5 w-5 text-blue-600" />
                      <h3 className="font-bold text-[#002B5B]">Capacity</h3>
                    </div>
                    <p className="text-gray-700 text-sm">{selectedFacility.capacity}</p>
                  </div>
                )}
                {selectedFacility.hours && (
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-5 w-5 text-green-600" />
                      <h3 className="font-bold text-[#002B5B]">Operating Hours</h3>
                    </div>
                    <p className="text-gray-700 text-sm">{selectedFacility.hours}</p>
                  </div>
                )}
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#002B5B] mb-4 flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-[#C8102E]" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedFacility.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 hover:bg-[#C8102E]/5 transition-colors">
                      <ChevronRight className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#002B5B] mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-[#C8102E]" />
                  Detailed Information
                </h3>
                <div className="space-y-3">
                  {selectedFacility.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-200 last:border-0">
                      <div className="bg-[#C8102E] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-0.5">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#002B5B] mb-4 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-[#C8102E]" />
                  Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedFacility.highlights.map((highlight, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#002B5B]/5 to-[#C8102E]/5 rounded-lg p-4 border-l-4 border-[#C8102E]">
                      <p className="text-gray-800">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setSelectedFacility(null);
                    setBookingModal(true);
                  }}
                  className="flex-1 bg-gradient-to-r from-[#C8102E] to-[#A00E26] hover:from-[#A00E26] hover:to-[#8B0C24] text-white py-3 px-6 rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <CalendarDays className="h-5 w-5" />
                  Book a Tour
                </button>
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#002B5B] py-3 px-6 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
