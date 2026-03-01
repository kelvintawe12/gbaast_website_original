import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Award,
  BookOpen,
  Calendar,
  Eye,
  GraduationCap,
  Heart,
  MessageSquare,
  MapPin,
  Sparkles,
  Star,
  ChevronRight,
  Quote,
  Zap,
  Target,
  TrendingUp,
  Users,
  User
} from 'lucide-react';
import { studentSpotlightsData } from '../data/studentSpotlightsData';

export function StudentSpotlightDetailPage() {
  const { id } = useParams();
  const spotlightId = Number(id);

  const student = useMemo(
    () => studentSpotlightsData.find((item) => item.id === spotlightId),
    [spotlightId]
  );

  const related = useMemo(() => {
    if (!student) return [];

    return studentSpotlightsData
      .filter((item) => item.id !== student.id && item.category === student.category)
      .slice(0, 3);
  }, [student]);

  const engagementStats = [
    { label: 'Views', value: student?.views ?? 0, icon: Eye },
    { label: 'Likes', value: student?.likes ?? 0, icon: Heart },
    { label: 'Comments', value: student?.comments ?? 0, icon: MessageSquare }
  ];

  if (!student) {
    return (
      <div className="pt-24 min-h-screen bg-[#F5F7FA]">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-[#002B5B] mb-4">Spotlight Story Not Found</h1>
          <p className="text-gray-600 mb-8">
            The student spotlight you’re looking for does not exist.
          </p>
          <Link
            to="/student-spotlight"
            className="inline-flex items-center bg-[#002B5B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C8102E] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Student Spotlight
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-[#F5F7FA] min-h-screen">
      <section className="relative px-4 pt-6 pb-12">
        <div className="max-w-6xl mx-auto mb-4">
          <Link
            to="/student-spotlight"
            className="inline-flex items-center text-[#002B5B] hover:text-[#C8102E] font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all spotlights
          </Link>
        </div>

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
          <div className="relative">
            <img src={student.image} alt={student.name} className="w-full h-[22rem] md:h-[28rem] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001A3A] via-[#001A3A]/65 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-semibold border border-white/30">
                  {student.category}
                </span>
                {student.featured && (
                  <span className="text-xs bg-[#C8102E] px-3 py-1 rounded-full font-semibold inline-flex items-center">
                    <Star className="h-3.5 w-3.5 mr-1" /> Featured Story
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2">{student.name}</h1>
              <p className="text-white/85 text-base md:text-lg mb-4 inline-flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center">
                  <GraduationCap className="h-4 w-4 mr-1.5" />
                  {student.program}
                </span>
                <span className="hidden md:inline">•</span>
                <span className="inline-flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  {student.year}
                </span>
              </p>

              <div className="inline-flex items-start gap-2 bg-white/15 rounded-xl p-3 border border-white/20 max-w-2xl">
                <Award className="h-4 w-4 mt-0.5 shrink-0" />
                <p className="font-semibold text-sm md:text-base">{student.achievement}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-gray-200">
            {engagementStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="px-6 py-4 bg-white flex items-center gap-3 border-b sm:border-b-0 sm:border-r last:border-r-0 border-gray-200"
                >
                  <div className="h-10 w-10 rounded-full bg-[#002B5B]/10 text-[#002B5B] flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">{stat.label}</p>
                    <p className="font-bold text-[#002B5B] text-lg">{stat.value.toLocaleString()}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <article className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-[#002B5B]">
                <BookOpen className="h-5 w-5" />
                <h2 className="text-2xl font-bold">Student Story</h2>
              </div>

              <blockquote className="relative bg-[#F8FAFC] border border-gray-200 rounded-xl p-5 md:p-6 text-gray-700 italic text-base md:text-lg mb-6">
                <Quote className="h-5 w-5 text-[#C8102E] mb-2" />
                “{student.quote}”
              </blockquote>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>{student.detail}</p>
                <p>
                  At GBAAST, student development combines academic excellence, personalized
                  mentorship, and practical opportunities that help each learner discover and
                  maximize their potential.
                </p>
                <p>
                  This spotlight reflects the school’s commitment to resilience, innovation,
                  and values-driven leadership across every pathway.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-[#002B5B]">
                <Sparkles className="h-5 w-5" />
                <h3 className="text-xl font-bold">Recognition Highlights</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {student.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs md:text-sm bg-[#002B5B]/10 text-[#002B5B] px-3 py-1.5 rounded-full font-semibold"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-[#002B5B]">
                <TrendingUp className="h-5 w-5" />
                <h3 className="text-xl font-bold">Journey to Success</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{student.journey}</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-[#002B5B]">
                <Zap className="h-5 w-5" />
                <h3 className="text-xl font-bold">Key Skills & Competencies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {student.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-gradient-to-r from-[#002B5B]/10 to-[#C8102E]/10 text-[#002B5B] px-3 py-1.5 rounded-lg font-medium border border-[#002B5B]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-[#002B5B]">
                <Users className="h-5 w-5" />
                <h3 className="text-xl font-bold">Impact & Contributions</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{student.impact}</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-[#002B5B]">
                <Target className="h-5 w-5" />
                <h3 className="text-xl font-bold">Future Aspirations</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{student.futureGoals}</p>
            </div>

            <div className="bg-gradient-to-r from-[#002B5B]/5 to-[#C8102E]/5 border border-[#002B5B]/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#002B5B] text-white flex items-center justify-center shrink-0 mt-1">
                  <User className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#002B5B] mb-3">Mentor's Insight</h3>
                  <p className="text-gray-700 italic leading-relaxed">{student.mentorNote}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-[#002B5B]">
                <Award className="h-5 w-5" />
                <h3 className="text-xl font-bold">Achievement Timeline</h3>
              </div>
              <div className="space-y-4">
                {student.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="relative flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#C8102E] border-2 border-white shadow-md" />
                      {idx < student.achievements.length - 1 && (
                        <div className="w-0.5 h-12 bg-gray-200 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-[#002B5B]">{achievement.title}</p>
                          <span className="text-sm text-gray-500 inline-flex items-center mt-1">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            {achievement.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#002B5B] mb-4">Student Profile</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start justify-between gap-3 border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Location</span>
                  <span className="font-semibold text-gray-800 inline-flex items-center text-right">
                    <MapPin className="h-4 w-4 mr-1 text-[#C8102E]" />
                    {student.location}
                  </span>
                </li>
                <li className="flex items-start justify-between gap-3 border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Program</span>
                  <span className="font-semibold text-gray-800 text-right">{student.program}</span>
                </li>
                <li className="flex items-start justify-between gap-3">
                  <span className="text-gray-500">Academic Level</span>
                  <span className="font-semibold text-gray-800 text-right">{student.year}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#002B5B] mb-3">Nominate a Student</h3>
              <p className="text-sm text-gray-600 mb-4">
                Know another learner making a meaningful impact in academics, sports,
                innovation, leadership, or service?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full bg-[#C8102E] text-white py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Submit Nomination
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#002B5B] mb-6">Related Spotlights</h2>
          {related.length === 0 ? (
            <p className="text-gray-600">No related stories available in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/student-spotlight/${item.id}`}
                  className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-full h-44 object-cover" />
                    <div className="absolute top-3 left-3 text-[11px] font-semibold px-2 py-1 rounded-full bg-white/90 text-[#002B5B]">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#002B5B] mb-2 group-hover:text-[#C8102E] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.achievement}</p>
                    <span className="text-sm font-semibold text-[#002B5B] inline-flex items-center">
                      Read Story <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-[#002B5B] to-[#001A3A] rounded-2xl p-8 md:p-10 text-white">
            <Quote className="h-8 w-8 mx-auto mb-4 text-[#C8102E]" />
            <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto mb-6">
              Every student has a story worth telling. At GBAAST, we celebrate
              achievement, resilience, creativity, and growth in every pathway.
            </p>
            <Link
              to="/student-spotlight"
              className="inline-flex items-center bg-[#C8102E] px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Explore More Spotlights
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
