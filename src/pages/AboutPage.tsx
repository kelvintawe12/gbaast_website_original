import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Lightbulb,
  Shield,
  Users,
  Eye,
  CheckCircle2,
  Award,
  BookOpen,
  Globe2,
  GraduationCap,
  Sparkles,
  School,
  Microscope,
  Music,
  Dumbbell,
  Quote,
  ChevronRight,
  X,
  Mail,
  Clock3,
  Users2,
  Trophy } from
'lucide-react';

export function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState<null | {
    name: string;
    title: string;
    bio: string;
    image: string;
    years: string;
    specialty: string;
    email: string;
  }>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.dataset.delay;
            if (delay) {
              target.style.transitionDelay = `${delay}ms`;
            }
            target.classList.add('is-visible');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedLeader) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedLeader(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedLeader]);

  const values = [
  {
    icon: Target,
    title: 'Excellence',
    desc: 'Striving for the highest academic and moral standards in everything we do.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Embracing modern teaching methods and technology to enhance learning.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Building character through honesty, discipline, and strong moral principles.'
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'Fostering a supportive bilingual family environment for all students.'
  }];

  const leaders = [
  {
    name: 'Mr. Tawe Ettiene',
    title: 'Proprietor',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&h=900&fit=crop',
    years: '25+ Years',
    specialty: 'Educational Leadership & Policy',
    email: 'tawe.ettiene@gbaast.edu.cm',
    bio: 'With over 25 years in education, Mr. Tawe Ettiene leads GBAAST with a strong vision of bilingual excellence and student-centered development. He provides strategic direction across academics, values, and institutional growth.'
  },
  {
    name: 'Mr. Pierre Atangana',
    title: 'Vice Principal',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&h=900&fit=crop',
    years: '18+ Years',
    specialty: 'School Operations & Discipline',
    email: 'pierre.atangana@gbaast.edu.cm',
    bio: 'A seasoned administrator with 18 years of experience in secondary education. Mr. Atangana oversees daily school operations, discipline systems, and quality assurance across departments.'
  },
  {
    name: 'Mrs. Beatrice Fon',
    title: 'Head of Academics',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&h=900&fit=crop',
    years: '15+ Years',
    specialty: 'Curriculum Design & Assessment',
    email: 'beatrice.fon@gbaast.edu.cm',
    bio: "Mrs. Fon leads curriculum development and ensures academic standards. She holds a Master's in Curriculum Design and coordinates teacher mentoring, exam readiness, and bilingual classroom excellence."
  },
  {
    name: 'Mr. Jean Mbarga',
    title: 'Dean of Students',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&h=900&fit=crop',
    years: '12+ Years',
    specialty: 'Student Welfare & Activities',
    email: 'jean.mbarga@gbaast.edu.cm',
    bio: 'Dedicated to student welfare and extracurricular development. Mr. Mbarga coordinates clubs, counseling services, and behavior support to ensure students feel seen, safe, and empowered.'
  },
  {
    name: 'Mrs. Esther Ngono',
    title: 'Head of Boarding',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&h=900&fit=crop',
    years: '14+ Years',
    specialty: 'Boarding Care & Student Safety',
    email: 'esther.ngono@gbaast.edu.cm',
    bio: 'Mrs. Ngono manages the boarding facilities and ensures a safe, nurturing environment for resident students through structured routines, pastoral care, and strong safeguarding standards.'
  },
  {
    name: 'Mr. Nfor Emile',
    title: 'Bursar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=900&fit=crop',
    years: '10+ Years',
    specialty: 'Finance & Scholarship Administration',
    email: 'nfor.emile@gbaast.edu.cm',
    bio: "Mr. Nfor Emile manages the school's finances with transparency and efficiency. He oversees fee systems, annual budgeting, and financial aid support for eligible families."
  }];

  const reasons = [
  'Bilingual Excellence (EN/FR)',
  '98% Exam Success Rate',
  'Modern Boarding Facilities',
  'Small Class Sizes (max 30)',
  'Qualified Teachers',
  'Safe & Nurturing Environment'];

  const stats = [
  {
    label: 'Students Enrolled',
    value: '800+'
  },
  {
    label: 'Exam Success Rate',
    value: '98%'
  },
  {
    label: 'Certified Teachers',
    value: '65+'
  },
  {
    label: 'Student Clubs',
    value: '20+'
  }];

  const campusExperience = [
  {
    icon: Microscope,
    title: 'Advanced Science Labs',
    desc: 'Modern labs for biology, chemistry, and physics with practical-focused lessons.'
  },
  {
    icon: Music,
    title: 'Creative Arts & Choir',
    desc: 'Students grow through choir, drama, fine arts, and cultural expression programs.'
  },
  {
    icon: Dumbbell,
    title: 'Sports & Wellness',
    desc: 'Structured physical education, inter-house sports, and competitive team programs.'
  },
  {
    icon: Globe2,
    title: 'Global Readiness',
    desc: 'Bilingual training and leadership development for success in a global environment.'
  }];

  const clubs = [
  {
    name: 'Science & Innovation Club',
    icon: Microscope,
    members: '65 Members',
    time: 'Tues & Thu • 4:00 PM',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&h=600&fit=crop',
    desc: 'Hands-on experiments, project building, and science fair preparation.'
  },
  {
    name: 'GBAAST Choir',
    icon: Music,
    members: '48 Members',
    time: 'Mon & Fri • 5:00 PM',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900&h=600&fit=crop',
    desc: 'Vocal training, harmony practice, and performances at school and community events.'
  },
  {
    name: 'Debate & Public Speaking',
    icon: Users2,
    members: '40 Members',
    time: 'Wed • 4:30 PM',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&h=600&fit=crop',
    desc: 'Bilingual debate, argument structure, leadership communication, and competition prep.'
  },
  {
    name: 'Sports Excellence Club',
    icon: Trophy,
    members: '90 Members',
    time: 'Daily • 4:00 PM',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&h=600&fit=crop',
    desc: 'Football, basketball, athletics, and conditioning for inter-house and regional events.'
  }];

  return (
    <div className="pt-20 bg-[#F8FAFC]">
      <section data-reveal data-delay="0" className="reveal-up bg-gradient-to-br from-[#002B5B] via-[#001A3A] to-[#002B5B] py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-[#C8102E] mr-2" />
              <span className="text-white/90 text-xs font-semibold tracking-wide">WHO WE ARE</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              About Grace Bilingual Academy
            </h1>
            <p className="text-white/80 text-lg mb-7 max-w-xl">
              We are shaping confident, bilingual, and purpose-driven learners through academic excellence, character formation, and practical innovation.
            </p>
            <p className="text-white/70 font-medium mb-8">
              <Link to="/" className="hover:text-white">
                Home
              </Link>{' '}
              <span className="mx-2">/</span> About
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((item, index) =>
              <div key={index} className="bg-white/10 border border-white/20 rounded-xl p-3 text-center transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-white font-bold text-xl">{item.value}</p>
                  <p className="text-white/70 text-xs">{item.label}</p>
                </div>
              )}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=900&fit=crop"
              alt="GBAAST campus"
              className="w-full h-[22rem] sm:h-[24rem] md:h-[30rem] object-cover rounded-2xl shadow-2xl float-slow"
            />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 bg-white rounded-xl shadow-xl px-5 py-4 border border-gray-100">
              <div className="flex items-center text-[#002B5B] font-bold">
                <School className="h-5 w-5 text-[#C8102E] mr-2" />
                Founded in 2018
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal data-delay="60" className="reveal-up py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-5">
              A Legacy of Excellence in Bilingual Education
            </h2>
            <div className="w-20 h-1 bg-[#C8102E] mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Grace Bilingual Academy of Arts, Science and Technology (GBAAST)
              is a premier dormitory school in Mbankom, Yaoundé, dedicated to
              transforming learners through rigorous academics and character-centered formation.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our educational model blends English and French excellence,
              practical learning, and leadership development so students can
              thrive in university, careers, and service to society.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['GCE & BEPC focused curriculum', 'Career and university readiness', 'Holistic boarding support', 'Strong ethics and discipline'].map((item, index) =>
              <div key={index} className="flex items-center bg-[#F5F7FA] rounded-lg px-4 py-3 border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-[#C8102E] mr-2 flex-shrink-0" />
                  <span className="text-[#002B5B] font-semibold text-sm">{item}</span>
                </div>
              )}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=900&fit=crop"
              alt="Students learning"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section data-reveal data-delay="90" className="reveal-up py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-[#C8102E] hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-[#C8102E]" />
            </div>
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide quality bilingual secondary education that develops
              well-rounded, disciplined, and academically excellent students
              prepared for success in higher education and life.
            </p>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-[#002B5B] hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-[#002B5B]" />
            </div>
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the leading bilingual secondary school in Cameroon,
              recognized for academic excellence, character development, and
              producing graduates who make positive contributions to society.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Experience */}
      <section data-reveal data-delay="120" className="reveal-up py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">The GBAAST Experience</h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond classroom instruction, students grow through practical labs, arts, sports, and leadership opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {campusExperience.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-[#F8FAFC] p-6 rounded-xl border border-gray-200 hover:border-[#C8102E]/40 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 border border-gray-100">
                    <Icon className="h-6 w-6 text-[#C8102E]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#002B5B] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=900&h=600&fit=crop" alt="Science lab" className="w-full h-52 object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&h=600&fit=crop" alt="Classroom" className="w-full h-52 object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?w=900&h=600&fit=crop" alt="Student activities" className="w-full h-52 object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section data-reveal data-delay="140" className="reveal-up py-16 md:py-24 bg-[#001A3A] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto"></div>
          </div>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {[
            {
              year: '2018',
              text: 'GBAAST founded with a vision to provide quality bilingual education in Cameroon.'
            },
            {
              year: '2019',
              text: 'First intake of 150 students across Forms 1-3.'
            },
            {
              year: '2020',
              text: 'Modern dormitory facilities opened, becoming a full boarding school.'
            },
            {
              year: '2022',
              text: 'New science and computer laboratories commissioned for practical learning.'
            },
            {
              year: '2024',
              text: 'Grown to 800+ students with 98% exam success rate and stronger national recognition.'
            },
            {
              year: '2026',
              text: 'Expanded innovation, arts, and leadership programs for global student readiness.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#001A3A] bg-[#C8102E] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="font-bold text-3xl text-[#C8102E] mb-2">
                    {item.year}
                  </div>
                  <div className="text-white/90 text-lg">{item.text}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section data-reveal data-delay="160" className="reveal-up py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Our Impact in Numbers</h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
              icon: GraduationCap,
              title: 'Graduates',
              value: '1,500+'
            },
            {
              icon: BookOpen,
              title: 'Annual Pass Rate',
              value: '98%'
            },
            {
              icon: Users,
              title: 'Active Alumni',
              value: '900+'
            },
            {
              icon: Globe2,
              title: 'University Placements',
              value: '85%'
            }].
            map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-[#F5F7FA] rounded-xl p-7 text-center border border-gray-200">
                  <div className="w-14 h-14 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border border-gray-100">
                    <Icon className="h-7 w-7 text-[#C8102E]" />
                  </div>
                  <p className="text-3xl font-bold text-[#002B5B] mb-2">{item.value}</p>
                  <p className="text-gray-600 font-semibold">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section data-reveal data-delay="180" className="reveal-up py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="bg-[#F5F7FA] p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">

                  <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-[#C8102E] shadow-sm">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002B5B] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* Voices Section */}
      <section data-reveal data-delay="200" className="reveal-up py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Voices from Our Community</h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
            {
              quote: 'GBAAST transformed my confidence in both English and French communication.',
              name: 'Alumni - Clarisse N.',
              role: 'Medical Student'
            },
            {
              quote: 'The teachers are deeply committed and the boarding environment feels like family.',
              name: 'Parent - Mr. Atogho',
              role: 'Parent Representative'
            },
            {
              quote: 'Our son grew academically and socially because of the school’s balanced structure.',
              name: 'Parent - Mrs. Mbah',
              role: 'PTA Member'
            }].
            map((item, index) =>
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <Quote className="h-7 w-7 text-[#C8102E] mb-4" />
                <p className="text-gray-700 mb-5 leading-relaxed">{item.quote}</p>
                <p className="font-bold text-[#002B5B]">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose GBAAST */}
      <section data-reveal data-delay="220" className="reveal-up py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
              Why Choose GBAAST?
            </h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) =>
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center border border-gray-100">

                <CheckCircle2 className="h-6 w-6 text-[#C8102E] mr-4 flex-shrink-0" />
                <span className="text-base md:text-lg font-bold text-[#002B5B]">
                  {reason}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section data-reveal data-delay="240" className="reveal-up py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
              Leadership Team
            </h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our dedicated team of experienced educators and administrators are
              committed to providing the best environment for your child's
              success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, i) =>
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001A3A]/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 bg-white/90 text-[#002B5B] text-xs font-semibold px-3 py-1 rounded-full">
                    {leader.years}
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-[#002B5B] mb-1">
                  {leader.name}
                </h3>
                <p className="text-[#C8102E] font-bold mb-4">{leader.title}</p>
                <div className="w-12 h-0.5 bg-gray-200 mb-4"></div>
                <p className="text-gray-600 leading-relaxed text-sm mb-5 line-clamp-3">
                  {leader.bio}
                </p>
                <button
                  onClick={() => setSelectedLeader(leader)}
                  className="inline-flex items-center justify-center w-full bg-[#002B5B] text-white py-2.5 rounded-lg font-semibold hover:bg-[#C8102E] transition-colors"
                >
                  View Profile
                </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Clubs Showcase */}
      <section data-reveal data-delay="250" className="reveal-up py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Student Clubs at GBAAST</h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our clubs help students discover talents, build confidence, and lead with purpose beyond the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {clubs.map((club, index) => {
              const Icon = club.icon;
              return (
                <article key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                    <div className="absolute top-3 left-3 bg-white/90 rounded-full p-2">
                      <Icon className="h-4 w-4 text-[#C8102E]" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#002B5B] mb-2">{club.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{club.desc}</p>
                    <div className="space-y-2 text-xs text-gray-500">
                      <p className="flex items-center">
                        <Users2 className="h-3.5 w-3.5 mr-2 text-[#C8102E]" />
                        {club.members}
                      </p>
                      <p className="flex items-center">
                        <Clock3 className="h-3.5 w-3.5 mr-2 text-[#C8102E]" />
                        {club.time}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section data-reveal data-delay="260" className="reveal-up py-16 md:py-20 bg-gradient-to-r from-[#002B5B] to-[#001A3A] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the GBAAST Family?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Take the next step toward quality bilingual education, strong values, and future-ready opportunities for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="inline-flex items-center justify-center bg-[#C8102E] px-7 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
              Apply Now
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center bg-white/10 border border-white/30 px-7 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>

      {selectedLeader &&
      <div
        className="fixed inset-0 z-[70] bg-black/65 backdrop-blur-sm p-4 flex items-center justify-center"
        onClick={() => setSelectedLeader(null)}>
          <div
          className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
          onClick={(event) => event.stopPropagation()}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-72 md:h-full">
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                  aria-label="Close profile modal">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-xs font-semibold text-[#C8102E] uppercase tracking-wide mb-2">
                  Leadership Profile
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#002B5B] mb-1">{selectedLeader.name}</h3>
                <p className="text-[#C8102E] font-bold mb-4">{selectedLeader.title}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  <div className="bg-[#F5F7FA] rounded-lg p-3 border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Experience</p>
                    <p className="font-semibold text-[#002B5B]">{selectedLeader.years}</p>
                  </div>
                  <div className="bg-[#F5F7FA] rounded-lg p-3 border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Specialty</p>
                    <p className="font-semibold text-[#002B5B] text-sm">{selectedLeader.specialty}</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-5">{selectedLeader.bio}</p>
                <p className="inline-flex items-center text-sm text-[#002B5B] bg-[#F5F7FA] border border-gray-200 px-3 py-2 rounded-lg">
                  <Mail className="h-4 w-4 mr-2 text-[#C8102E]" />
                  {selectedLeader.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      }

      {/* Accreditation */}
      <section data-reveal data-delay="280" className="reveal-up py-16 md:py-24 bg-[#002B5B] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Accreditation & Recognition
            </h2>
            <div className="w-20 h-1 bg-[#C8102E] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-xl border border-white/20 text-center backdrop-blur-sm">
              <Award className="h-12 w-12 text-[#C8102E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Ministry of Secondary Education
              </h3>
              <p className="text-white/80 text-sm">
                Fully accredited and recognized by MINESEC Cameroon for
                secondary education.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl border border-white/20 text-center backdrop-blur-sm">
              <BookOpen className="h-12 w-12 text-[#C8102E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">GCE Board Center</h3>
              <p className="text-white/80 text-sm">
                Official examination center for the Cameroon General Certificate
                of Education (O & A Levels).
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl border border-white/20 text-center backdrop-blur-sm">
              <Target className="h-12 w-12 text-[#C8102E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">
                BEPC & Baccalauréat Center
              </h3>
              <p className="text-white/80 text-sm">
                Official examination center for the Francophone subsystem
                examinations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>);

}