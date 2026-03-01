import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  BookOpen,
  Heart,
  Briefcase,
  Music,
  Users,
  Leaf,
  Trophy,
  Monitor,
  Palette,
  Home,
  Building2,
  Utensils,
  Clock,
  Bed,
  Wifi,
  Shield,
  Camera,
  Star,
  Calendar,
  Coffee,
  Dumbbell,
  Globe,
  Award,
  Play,
  Video
} from 'lucide-react';
export function CampusLifePage() {
  const clubs = [
  {
    name: 'Debate Club',
    icon: Users
  },
  {
    name: 'Science Club',
    icon: Monitor
  },
  {
    name: 'Sports Club',
    icon: Trophy
  },
  {
    name: 'Arts & Drama',
    icon: Palette
  },
  {
    name: 'Music Club',
    icon: Music
  },
  {
    name: 'Community Service',
    icon: Heart
  },
  {
    name: 'Technology Club',
    icon: Briefcase
  },
  {
    name: 'Environmental Club',
    icon: Leaf
  }];

  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Campus Life at GBAAST
        </h1>
        <p className="text-white/70 font-medium">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span> Campus Life
        </p>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-12 text-center">
            Our Campus
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop"
                alt="GBAAST Main Campus"
                className="h-64 w-full object-cover"
              />
              <div className="p-8">
                <div className="flex items-center text-[#C8102E] mb-3 font-bold">
                  <MapPin className="h-5 w-5 mr-2" /> Mbankom, Yaoundé
                </div>
                <h3 className="text-2xl font-bold text-[#002B5B] mb-3">
                  GBAAST Main Campus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our beautiful campus in Mbankom, Yaoundé features modern
                  classrooms, well-equipped science and computer laboratories, a
                  comprehensive library, sports facilities including football
                  and basketball courts, and comfortable dormitory buildings for
                  our boarding students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4 text-center">
            Student Clubs & Activities
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Learning extends beyond the classroom. Join one of our many
            student-led clubs to pursue your passions and develop leadership
            skills.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clubs.map((club, i) => {
              const Icon = club.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 group cursor-pointer">

                  <div className="w-12 h-12 mx-auto bg-[#F5F7FA] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C8102E] transition-colors">
                    <Icon className="h-6 w-6 text-[#002B5B] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-bold text-[#002B5B]">{club.name}</h4>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* Video Section - A Day at GBAAST */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#002B5B] via-[#001A3A] to-[#002B5B]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-[#C8102E]/20 border border-[#C8102E]/30 px-4 py-2 rounded-full mb-4">
              <Video className="h-5 w-5 text-[#C8102E] mr-2" />
              <span className="text-white font-semibold text-sm">VIDEO TOUR</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience A Day at GBAAST
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Watch our students share their authentic experiences and take you through a typical day of learning, friendship, and growth at GBAAST.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
                {/* YouTube Video Embed - Replace VIDEO_ID with actual YouTube video ID */}
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                    title="A Day at GBAAST - Student Life Experience"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {/* Fallback thumbnail if you prefer to use a custom thumbnail with play button
                <div className="relative group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=675&fit=crop"
                    alt="Student day at GBAAST"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#C8102E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-10 w-10 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                */}
              </div>
              
              {/* Video Caption */}
              <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-bold text-xl mb-3 flex items-center">
                  <Play className="h-5 w-5 text-[#C8102E] mr-2" />
                  Video Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-[#C8102E] mr-2">▸</span>
                    <p className="text-white/80 text-sm">Morning assembly and devotion</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#C8102E] mr-2">▸</span>
                    <p className="text-white/80 text-sm">Interactive classroom sessions</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#C8102E] mr-2">▸</span>
                    <p className="text-white/80 text-sm">Science lab experiments</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#C8102E] mr-2">▸</span>
                    <p className="text-white/80 text-sm">Sports and recreation time</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#C8102E] mr-2">▸</span>
                    <p className="text-white/80 text-sm">Student clubs in action</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#C8102E] mr-2">▸</span>
                    <p className="text-white/80 text-sm">Boarding life experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Scripts/Stories Sidebar */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">6:00</span>
                  </div>
                  <h4 className="text-white font-bold">Morning Routine</h4>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  "The alarm goes off at 6 AM. After freshening up in our dorm, we head to the cafeteria for a nutritious breakfast that fuels our day ahead."
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">8:00</span>
                  </div>
                  <h4 className="text-white font-bold">Classes Begin</h4>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  "Our teachers make learning exciting! From French literature to mathematics, every lesson is engaging and prepares us for success."
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">4:00</span>
                  </div>
                  <h4 className="text-white font-bold">After School</h4>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  "This is my favorite part! I join the robotics club where we build amazing projects, while my friends play football or practice with the debate team."
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">7:00</span>
                  </div>
                  <h4 className="text-white font-bold">Evening Study</h4>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  "Supervised study time helps us stay focused. If I need help, seniors and teachers are always available to assist."
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#C8102E]/20 to-transparent border border-[#C8102E]/30 rounded-xl p-6">
                <p className="text-white/90 text-sm italic mb-3">
                  "GBAAST isn't just a school, it's a family. The friendships I've made here and the skills I've learned will stay with me forever."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-xs">MN</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Marie Ngono</p>
                    <p className="text-white/60 text-xs">Form 5 Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Video Links */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <h3 className="text-white font-bold text-xl mb-6 text-center">
              More Student Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Science Fair Winners',
                  duration: '5:30',
                  thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=225&fit=crop',
                  description: 'Watch our students showcase their innovative science projects'
                },
                {
                  title: 'Sports Day Highlights',
                  duration: '7:15',
                  thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=225&fit=crop',
                  description: 'Exciting moments from our annual inter-house competition'
                },
                {
                  title: 'Cultural Week Celebration',
                  duration: '6:45',
                  thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=225&fit=crop',
                  description: 'Students celebrating Cameroon\'s rich cultural diversity'
                }
              ].map((video, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-[#C8102E]/50 transition-all group cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#C8102E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-bold mb-2">{video.title}</h4>
                    <p className="text-white/70 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-12 text-center">
            Student Support Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              title: 'Academic Support',
              desc: 'Extra tutoring, study groups, and personalized academic guidance for all students.'
            },
            {
              title: 'Guidance & Counseling',
              desc: 'Professional counselors available for academic, career, and personal support.'
            },
            {
              title: 'Health Services',
              desc: 'On-campus clinic with qualified nurse and regular health check-ups.'
            },
            {
              title: 'Boarding Care',
              desc: 'Dedicated house parents ensuring safety, comfort, and well-being of boarders.'
            }].
            map((service, i) =>
            <div
              key={i}
              className="border border-gray-200 p-6 rounded-xl hover:border-[#002B5B] transition-colors">

                <h3 className="text-xl font-bold text-[#002B5B] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Residential Life Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#002B5B] to-[#001A3A]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Residential Life
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
            Experience a safe, comfortable, and nurturing home away from home in our modern boarding facilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-[#C8102E] rounded-full flex items-center justify-center mb-4">
                <Bed className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Modern Dormitories
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Spacious rooms with 4-6 students, comfortable beds, study desks, and adequate storage space. Separate facilities for boys and girls.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-[#C8102E] rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                24/7 Security
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Round-the-clock security personnel, CCTV surveillance, and strict visitor policies ensure student safety at all times.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-[#C8102E] rounded-full flex items-center justify-center mb-4">
                <Home className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Common Rooms
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Recreation areas with TV, games, and comfortable seating for students to relax and socialize during free time.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-[#C8102E] rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                House Parents
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Dedicated house parents live on campus to provide guidance, support, and supervision to boarding students.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-[#C8102E] rounded-full flex items-center justify-center mb-4">
                <Wifi className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Wi-Fi Access
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                High-speed internet access in dormitories and common areas for research, assignments, and staying connected with family.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-[#C8102E] rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Study Hours
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Structured evening study sessions with quiet hours enforced to ensure all students can focus on their academics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4 text-center">
            Dining Services
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Nutritious and delicious meals prepared daily to fuel students' minds and bodies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#C8102E] rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#002B5B]">
                  Meal Plans
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#C8102E] mr-2">•</span>
                  <span>Three daily meals: Breakfast, Lunch, and Dinner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8102E] mr-2">•</span>
                  <span>Healthy snacks available during break times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8102E] mr-2">•</span>
                  <span>Balanced menu with both local and international dishes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8102E] mr-2">•</span>
                  <span>Vegetarian and special dietary options available</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#002B5B] rounded-full flex items-center justify-center mr-4">
                  <Coffee className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#002B5B]">
                  Cafeteria Features
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#002B5B] mr-2">•</span>
                  <span>Clean, spacious dining hall with modern facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#002B5B] mr-2">•</span>
                  <span>Qualified kitchen staff and certified nutritionist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#002B5B] mr-2">•</span>
                  <span>Regular health and safety inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#002B5B] mr-2">•</span>
                  <span>Comfortable seating for all students</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-bold text-[#002B5B] mb-4 text-center text-lg">
              Sample Weekly Menu
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-[#002B5B] mb-2">Monday</p>
                <p className="text-gray-600">Rice & Beans, Plantains, Chicken</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-[#002B5B] mb-2">Tuesday</p>
                <p className="text-gray-600">Spaghetti, Salad, Fish</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-[#002B5B] mb-2">Wednesday</p>
                <p className="text-gray-600">Jollof Rice, Grilled Meat, Vegetables</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dormitory Meals Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-[#C8102E]/10 border border-[#C8102E]/20 px-4 py-2 rounded-full mb-4">
              <Utensils className="h-5 w-5 text-[#C8102E] mr-2" />
              <span className="text-[#002B5B] font-semibold text-sm">BOARDING MEALS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-4">
              Dormitory Dining Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our boarding students enjoy freshly prepared, nutritious meals in a warm communal dining environment that feels like home.
            </p>
          </div>

          {/* Meal Times Schedule */}
          <div className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#002B5B] to-[#001A3A] p-6">
              <h3 className="text-white font-bold text-2xl text-center flex items-center justify-center">
                <Clock className="h-6 w-6 mr-3" />
                Daily Meal Schedule
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-8 text-center group hover:bg-orange-50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#002B5B] mb-2">Breakfast</h4>
                <p className="text-[#C8102E] font-bold text-lg mb-3">6:30 AM - 7:30 AM</p>
                <p className="text-gray-600 text-sm">
                  Start your day with energy-boosting meals
                </p>
              </div>
              <div className="p-8 text-center group hover:bg-orange-50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#002B5B] mb-2">Lunch</h4>
                <p className="text-[#C8102E] font-bold text-lg mb-3">12:30 PM - 1:30 PM</p>
                <p className="text-gray-600 text-sm">
                  Hearty meals to fuel afternoon activities
                </p>
              </div>
              <div className="p-8 text-center group hover:bg-orange-50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#002B5B] mb-2">Dinner</h4>
                <p className="text-[#C8102E] font-bold text-lg mb-3">6:00 PM - 7:00 PM</p>
                <p className="text-gray-600 text-sm">
                  Nutritious evening meals for growing students
                </p>
              </div>
            </div>
          </div>

          {/* Featured Meals Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#002B5B] mb-8 text-center">
              Sample Meals from Our Kitchen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  meal: 'Breakfast Special',
                  name: 'Omelette & Toast',
                  description: 'Protein-rich eggs, whole wheat toast, fresh fruits, and hot beverage',
                  image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=400&fit=crop',
                  ingredients: ['Eggs', 'Bread', 'Fruits', 'Milk']
                },
                {
                  meal: 'Traditional Favorite',
                  name: 'Ndolé with Plantains',
                  description: 'Authentic Cameroonian dish with bitterleaf, groundnuts, and meat',
                  image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
                  ingredients: ['Ndolé', 'Plantains', 'Meat', 'Groundnuts']
                },
                {
                  meal: 'Lunch Special',
                  name: 'Jollof Rice & Chicken',
                  description: 'West African favorite with grilled chicken and mixed vegetables',
                  image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop',
                  ingredients: ['Rice', 'Chicken', 'Vegetables', 'Spices']
                },
                {
                  meal: 'Healthy Option',
                  name: 'Grilled Fish & Salad',
                  description: 'Fresh tilapia with colorful garden salad and lemon dressing',
                  image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop',
                  ingredients: ['Fish', 'Lettuce', 'Tomatoes', 'Cucumbers']
                },
                {
                  meal: 'Comfort Food',
                  name: 'Spaghetti Bolognese',
                  description: 'Italian-style pasta with rich meat sauce and vegetables',
                  image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop',
                  ingredients: ['Pasta', 'Beef', 'Tomato Sauce', 'Cheese']
                },
                {
                  meal: 'Weekend Treat',
                  name: 'Puff Puff & Beans',
                  description: 'Sweet fried dough balls with bean porridge - a student favorite',
                  image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=600&h=400&fit=crop',
                  ingredients: ['Flour', 'Beans', 'Sugar', 'Palm Oil']
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#C8102E] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {item.meal}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#002B5B] mb-2">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-orange-50 text-[#002B5B] px-2 py-1 rounded-full border border-orange-200"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dietary Accommodations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#002B5B] mb-2">
                    Special Dietary Needs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We cater to various dietary requirements and preferences
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Vegetarian and vegan meal options',
                  'Halal food preparation available',
                  'Allergy-friendly alternatives',
                  'Low-sugar and diabetic-friendly meals',
                  'Lactose-free and gluten-free options'
                ].map((option, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-sm">{option}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#002B5B] to-[#001A3A] rounded-xl p-8 shadow-lg text-white">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Nutritional Standards
                  </h3>
                  <p className="text-white/80 text-sm">
                    Every meal is planned with student health in mind
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Balanced portions of proteins, carbs, and fats',
                  'Fresh fruits and vegetables daily',
                  'Limited processed foods and sugars',
                  'Certified nutritionist menu planning',
                  'Regular calorie and nutrient tracking'
                ].map((standard, i) => (
                  <li key={i} className="flex items-start text-white/90">
                    <span className="text-[#C8102E] mr-2 mt-1">●</span>
                    <span className="text-sm">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Student Feedback */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#002B5B] mb-8 text-center">
              What Students Say About Our Meals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "The food here reminds me of home. The chefs know how to make authentic Cameroonian dishes that taste amazing!",
                  name: "Patrick Tabi",
                  dorm: "Boys' Dormitory A",
                  rating: 5
                },
                {
                  quote: "I'm vegetarian and I was worried about boarding school food, but GBAAST has so many delicious veggie options!",
                  name: "Sarah Ekane",
                  dorm: "Girls' Dormitory B",
                  rating: 5
                },
                {
                  quote: "The breakfast gives me energy for the whole morning. I especially love the weekend puff puff and beans!",
                  name: "Daniel Manga",
                  dorm: "Boys' Dormitory C",
                  rating: 5
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-[#002B5B] font-bold text-sm">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs">{testimonial.dorm}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sports & Recreation Section */}
      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4 text-center">
            Sports & Recreation
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Stay active and healthy with our comprehensive sports programs and state-of-the-art facilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop"
                alt="Sports facilities"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-bold text-2xl mb-2">
                    Modern Sports Facilities
                  </h3>
                  <p className="text-white/90">
                    Football field, basketball courts, volleyball court, and athletics track
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <Trophy className="h-6 w-6 text-[#C8102E] mr-3" />
                  <h4 className="font-bold text-[#002B5B]">Inter-House Competitions</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Annual sports day featuring athletics, football, basketball, and more. Houses compete for the overall trophy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <Dumbbell className="h-6 w-6 text-[#C8102E] mr-3" />
                  <h4 className="font-bold text-[#002B5B]">Physical Education</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Mandatory PE classes twice a week promoting fitness, teamwork, and healthy lifestyle habits.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-[#C8102E] mr-3" />
                  <h4 className="font-bold text-[#002B5B]">Regional Competitions</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Our teams regularly participate in regional and national school competitions, bringing home trophies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4 text-center">
            A Day in the Life at GBAAST
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our structured daily schedule ensures balance between academics, activities, and rest.
          </p>
          <div className="space-y-4">
            {[
              { time: '6:00 AM', activity: 'Wake Up & Morning Routine', icon: Clock },
              { time: '7:00 AM', activity: 'Breakfast in Cafeteria', icon: Utensils },
              { time: '7:45 AM', activity: 'Morning Assembly & Devotion', icon: Users },
              { time: '8:00 AM', activity: 'First Period Begins', icon: BookOpen },
              { time: '10:30 AM', activity: 'Mid-Morning Break', icon: Coffee },
              { time: '1:00 PM', activity: 'Lunch Break', icon: Utensils },
              { time: '2:00 PM', activity: 'Afternoon Classes Resume', icon: BookOpen },
              { time: '4:00 PM', activity: 'Sports & Club Activities', icon: Trophy },
              { time: '6:00 PM', activity: 'Dinner', icon: Utensils },
              { time: '7:00 PM', activity: 'Supervised Study Time', icon: BookOpen },
              { time: '9:30 PM', activity: 'Free Time & Preparation for Bed', icon: Home },
              { time: '10:30 PM', activity: 'Lights Out', icon: Bed }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border border-gray-100 hover:border-[#C8102E] transition-colors"
                >
                  <div className="w-24 flex-shrink-0">
                    <span className="font-bold text-[#C8102E]">{item.time}</span>
                  </div>
                  <div className="flex items-center flex-1">
                    <div className="w-10 h-10 bg-[#002B5B] rounded-full flex items-center justify-center mr-4">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">{item.activity}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#002B5B] to-[#001A3A]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            What Our Students Say
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
            Hear directly from GBAAST students about their campus life experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Amina Nkembe',
                class: 'Form 5, Science Stream',
                quote: 'GBAAST has been an incredible journey. The boarding experience taught me independence, and the bilingual environment prepared me for university abroad.',
                rating: 5
              },
              {
                name: 'Jean-Pierre Fotso',
                class: 'Form 4, Technology Stream',
                quote: 'The clubs and sports activities here are amazing! I\'ve made lifelong friends and discovered my passion for robotics through the Technology Club.',
                rating: 5
              },
              {
                name: 'Grace Mbah',
                class: 'Form 6, Business Stream',
                quote: 'The teachers genuinely care about our success. The study environment is excellent, and I feel fully prepared for my A-Level exams.',
                rating: 5
              }
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#C8102E] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.class}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekend Activities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4 text-center">
            Weekend Activities
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Weekends at GBAAST are filled with fun, educational, and recreational activities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Movie Nights',
                icon: Camera,
                desc: 'Educational and entertaining films every Saturday evening'
              },
              {
                title: 'Sports Tournaments',
                icon: Trophy,
                desc: 'Inter-house and friendly matches on Saturday afternoons'
              },
              {
                title: 'Cultural Events',
                icon: Globe,
                desc: 'Celebrations of Cameroonian culture and international diversity'
              },
              {
                title: 'Excursions',
                icon: Calendar,
                desc: 'Monthly educational trips to museums, universities, and landmarks'
              },
              {
                title: 'Music & Arts',
                icon: Music,
                desc: 'Talent shows, concerts, and art exhibitions'
              },
              {
                title: 'Reading Club',
                icon: BookOpen,
                desc: 'Book discussions and library activities'
              },
              {
                title: 'Community Service',
                icon: Heart,
                desc: 'Volunteering opportunities in local communities'
              },
              {
                title: 'Study Groups',
                icon: Users,
                desc: 'Peer tutoring and collaborative learning sessions'
              }
            ].map((activity, i) => {
              const Icon = activity.icon;
              return (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#C8102E] hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-[#002B5B] group-hover:bg-[#C8102E] rounded-lg flex items-center justify-center mb-4 transition-colors">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[#002B5B] mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {activity.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#001A3A]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Campus Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
            {
              image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
              alt: 'Students in classroom'
            },
            {
              image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop',
              alt: 'Sports activities'
            },
            {
              image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
              alt: 'Graduation ceremony'
            },
            {
              image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop',
              alt: 'Computer lab'
            },
            {
              image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop',
              alt: 'School assembly'
            },
            {
              image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
              alt: 'Campus building'
            }].
            map((item, i) =>
            <Link
              key={i}
              to="/gallery"
              className="h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            </Link>
            )}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-block bg-[#C8102E] text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
              View Full Gallery
            </Link>
          </div>
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