import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  TrendingUp,
  AlertCircle,
  Clock,
  CheckCircle,
  Users,
  BookOpen,
  DollarSign,
  Zap,
  ChevronRight,
  FileText,
  Home,
  Building2
} from 'lucide-react';

export function ScholarshipsPage() {
  const scholarships = [
    {
      id: 1,
      name: 'Academic Excellence Scholarship',
      coverage: '50% School Fees',
      icon: TrendingUp,
      color: 'from-blue-600 to-blue-800',
      available: 8,
      total: 15,
      eligibility: [
        'Minimum GPA: 16/20 or above',
        'Consistent performance across all subjects',
        'Leadership qualities demonstrated',
        'Minimum 2 years at GBAAST or entrance exam results'
      ],
      benefits: ['50% tuition coverage', 'Priority class scheduling', 'Access to premium resources', 'Mentorship program'],
      deadline: 'August 15, 2025',
      requirements: 'Academic transcripts, letters of recommendation, personal statement',
      impact: '₵6,000 - ₵8,000 per academic year'
    },
    {
      id: 2,
      name: 'Full Merit Scholarship',
      coverage: '100% School Fees',
      icon: Award,
      color: 'from-red-600 to-red-800',
      available: 2,
      total: 5,
      eligibility: [
        'Exceptional academic performance (17+/20)',
        'National or regional competition winners',
        'Outstanding community impact demonstrated',
        'Excellent character and conduct'
      ],
      benefits: ['100% tuition coverage', 'Monthly stipend (₵500)', 'Laptop on graduation', 'University mentorship'],
      deadline: 'August 1, 2025',
      requirements: 'Academic records, achievement certificates, interview required',
      impact: '₵12,000 - ₵15,000 per academic year'
    },
    {
      id: 3,
      name: 'Need-Based Financial Aid',
      coverage: 'Up to 70% Fees',
      icon: Users,
      color: 'from-green-600 to-green-800',
      available: 20,
      total: 25,
      eligibility: [
        'Demonstrated financial hardship',
        'Family income documentation',
        'Academic performance minimum GPA 13/20',
        'Commitment to studies despite circumstances'
      ],
      benefits: ['Variable coverage up to 70%', 'Flexible payment plans', 'Work-study opportunities', 'Career counseling'],
      deadline: 'Rolling (Priority: June 30)',
      requirements: 'Financial documents, tax returns, family statement letter',
      impact: '₵4,200 - ₵10,500 per academic year'
    },
    {
      id: 4,
      name: 'Sports Excellence Award',
      coverage: '30-50% Fees',
      icon: Zap,
      color: 'from-amber-600 to-amber-800',
      available: 5,
      total: 10,
      eligibility: [
        'Regional or national sports achievements',
        'Active participation in school sports',
        'Minimum GPA 14/20 (academics + sports balance)',
        'Team player mentality and discipline'
      ],
      benefits: ['30-50% tuition coverage', 'Training support fund', 'International competition opportunities', 'Sports scholarship mentorship'],
      deadline: 'August 15, 2025',
      requirements: 'Sports certificates, coach recommendation, academic transcripts',
      impact: '₵3,600 - ₵7,500 per academic year'
    },
    {
      id: 5,
      name: 'Arts & Innovation Grant',
      coverage: '25-40% Fees',
      icon: BookOpen,
      color: 'from-purple-600 to-purple-800',
      available: 6,
      total: 12,
      eligibility: [
        'Demonstrated excellence in arts/innovation',
        'Portfolio or project submission',
        'Creative problem-solving abilities',
        'Minimum GPA 13/20'
      ],
      benefits: ['25-40% tuition coverage', 'Project funding (₵1,000/year)', 'Gallery/exhibition support', 'Industry mentorship'],
      deadline: 'August 10, 2025',
      requirements: 'Portfolio, project description, portfolio interview',
      impact: '₵3,000 - ₵6,000 per academic year'
    },
    {
      id: 6,
      name: 'Sibling & Family Discount',
      coverage: '10-15% Discount',
      icon: Users,
      color: 'from-cyan-600 to-cyan-800',
      available: 50,
      total: 999,
      eligibility: [
        'Multiple siblings enrolled at GBAAST',
        '2nd child: 10% discount',
        '3rd+ child: 15% discount',
        'Automatic upon enrollment'
      ],
      benefits: ['10-15% tuition reduction', 'Holds across all forms', 'Stackable with other aid', 'No application required'],
      deadline: 'Automatic',
      requirements: 'Proof of sibling enrollment',
      impact: '₵1,200 - ₵1,800 per academic year'
    }
  ];

  const successStories = [
    {
      name: 'Amara Osei',
      scholarship: 'Full Merit Scholarship',
      year: 'Form 5',
      story: 'Thanks to GBAAST\'s scholarship, I could focus entirely on my studies without financial stress. I\'ve become the National Science Olympiad Champion 2024.'
    },
    {
      name: 'Jean-Paul Mbarga',
      scholarship: 'Academic Excellence + Arts Grant',
      year: 'Form 4',
      story: 'The scholarship enabled me to build my attendance app without worrying about tuition. Now it\'s helping 3 schools efficiently manage 1,500+ students.'
    },
    {
      name: 'Samuel Tabi',
      scholarship: 'Sports Excellence Award',
      year: 'Form 3',
      story: 'Balancing academics and sports was hard, but this scholarship made it possible. I\'m now selected for Cameroon U-17 national football team.'
    }
  ];

  const totalAvailable = useMemo(() => scholarships.reduce((sum, s) => sum + s.available, 0), []);

  return (
    <div className="pt-20 bg-[#F5F7FA] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#002B5B] to-[#001A3A] py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-[#C8102E] animate-bounce" />
            <span className="text-[#C8102E] font-bold uppercase text-sm tracking-wide">⚠️ HIGHLY LIMITED - CLOSING SOON</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight">
            Scholarships & Financial Aid
          </h1>
          <p className="text-[#C8102E] font-bold text-lg mb-6">Only {totalAvailable} Total Spots Remaining Across All Programs</p>
          <p className="text-white/85 text-lg md:text-xl max-w-2xl mb-8">
            These are highly limited opportunities. With competition fierce and spots running out, applying immediately can make the difference between securing your future or losing this chance entirely.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-[#C8102E] text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors inline-flex items-center"
            >
              Apply Now <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
            <a href="#apply-process" className="bg-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors border border-white/30">
              Learn Process
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="max-w-6xl mx-auto px-4 py-12 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Scholarships Awarded', value: '₵2.5M+', icon: DollarSign },
            { label: 'Students Supported', value: '150+', icon: Users },
            { label: 'Current Recipients', value: totalAvailable, icon: Award }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Icon className="h-8 w-8 text-[#C8102E] mx-auto mb-3" />
                <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
                <p className="text-4xl font-bold text-[#002B5B]">{stat.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6 text-center">
          <p className="text-red-900 font-bold text-lg mb-2">⚠️ CRITICAL: Scholarships Are HIGHLY LIMITED</p>
          <p className="text-red-800 max-w-3xl mx-auto">
            Only {totalAvailable} scholarship spots remain across all programs combined. With thousands of qualified applicants competing for these rare opportunities, delays in submitting your application could result in all scholarships being filled. <span className="font-bold">Apply today—your opportunity may not wait.</span>
          </p>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-4">Highly Competitive Scholarship Programs</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each program offers rare, limited spots. Competition is intense. Submit your application immediately to avoid missing the deadline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {scholarships.map((schol) => {
            const Icon = schol.icon;
            const filledPercent = (schol.total - schol.available) / schol.total * 100;
            const statusColor = schol.available > schol.total * 0.3 ? 'text-green-600' : schol.available > 0 ? 'text-amber-600' : 'text-red-600';

            return (
              <div
                key={schol.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-200"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${schol.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-7 w-7" />
                      <div>
                        <h3 className="text-xl font-bold">{schol.name}</h3>
                        <p className="text-white/80 font-semibold text-lg">{schol.coverage}</p>
                      </div>
                    </div>
                  </div>

                  {/* Availability Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-bold ${statusColor}`}>
                        ⚡ {schol.available} of {schol.total} REMAINING
                      </span>
                      {schol.available <= 3 && (
                        <span className="text-xs bg-white/30 px-2 py-1 rounded font-bold animate-pulse">ALMOST FULL</span>
                      )}
                    </div>
                    <div className="w-full h-3 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          filledPercent > 80 ? 'bg-red-400' : filledPercent > 50 ? 'bg-yellow-400' : 'bg-white'
                        }`}
                        style={{ width: `${filledPercent}%` }}
                      />
                    </div>
                    <p className="text-xs text-white/70 mt-2 font-semibold">Only {schol.available} spots left before this scholarship is CLOSED</p>
                  </div>

                  {/* Annual Impact */}
                  <p className="text-xs text-white/80">
                    <span className="font-semibold">Annual Support:</span> {schol.impact}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 space-y-5">
                  {/* Eligibility */}
                  <div>
                    <h4 className="font-bold text-[#002B5B] mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Eligibility Requirements
                    </h4>
                    <ul className="space-y-2">
                      {schol.eligibility.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-[#C8102E] font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-bold text-[#002B5B] mb-3 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-amber-600" />
                      What You Get
                    </h4>
                    <ul className="space-y-2">
                      {schol.benefits.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Required Documents */}
                  <div className="bg-[#F5F7FA] rounded-lg p-4">
                    <h4 className="font-bold text-[#002B5B] text-sm mb-2 flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      Required Documents
                    </h4>
                    <p className="text-sm text-gray-700">{schol.requirements}</p>
                  </div>

                  {/* Deadline */}
                  <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent" />
                    <p className="text-sm text-gray-800 mb-1 relative z-10">
                      <span className="font-bold text-red-700 flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        ⏰ DEADLINE - ACT NOW
                      </span>
                    </p>
                    <p className="font-bold text-red-700 text-lg relative z-10">{schol.deadline}</p>
                    <p className="text-xs text-red-600 mt-1 relative z-10">After this date, NO MORE applications accepted</p>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="w-full py-3 bg-gradient-to-r from-[#C8102E] to-red-700 text-white font-bold rounded-lg hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 animate-pulse hover:animate-none"
                  >
                    ⚡ APPLY NOW BEFORE SPOTS FILL
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4 text-center">Scholarship Success Stories</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Meet students who transformed their futures through our scholarship programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <div key={i} className="bg-gradient-to-br from-[#002B5B]/10 to-[#C8102E]/10 border border-[#002B5B]/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-[#C8102E]" />
                  <span className="text-sm font-bold text-[#C8102E]">{story.scholarship}</span>
                </div>
                <h3 className="text-lg font-bold text-[#002B5B] mb-2">{story.name}</h3>
                <p className="text-sm text-gray-600 mb-4">Form {story.year.split(' ')[1]}</p>
                <p className="text-gray-700 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="apply-process" className="py-16 px-4 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">Detailed Application Process by Class Level</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The application process varies by academic level. Follow the guidelines for your class to ensure you submit all required documents and meet deadlines.
            </p>
          </div>

          {/* Form 1-2 */}
          <div className="mb-12 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
              <h3 className="text-2xl font-bold">Form 1 & Form 2 Students</h3>
              <p className="text-blue-100 text-sm mt-1">Building Foundation & Early Achievement</p>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-3">📋 Eligibility Requirements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> Minimum GPA: 13/20 (Form 1), 13.5/20 (Form 2)</li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> Good conduct and discipline record</li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> Active participation in at least one school activity (sports, clubs, community service)</li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> Form 1 students: Entrance exam scores 70%+ OR outstanding Form 3 FSLC results</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-3">📄 Required Documents Checklist</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="font-semibold text-[#002B5B] mb-2">Academic Documents</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ Last term report card</li>
                      <li>✓ Entrance exam results (Form 1)</li>
                      <li>✓ FSLC certificate (Form 2)</li>
                      <li>✓ Teacher recommendation letter</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="font-semibold text-[#002B5B] mb-2">Financial/Personal Documents</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ Parent income statement (if need-based)</li>
                      <li>✓ Family financial documents</li>
                      <li>✓ Personal statement (500 words)</li>
                      <li>✓ Birth certificate copy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
                <p className="font-bold text-yellow-900 mb-2">⏰ Timeline for Form 1 & 2:</p>
                <p className="text-sm text-gray-700">
                  Applications open: <span className="font-bold">June 1</span> | Deadline: <span className="font-bold">August 15</span> | Interviews: <span className="font-bold">Late August</span> | Awards announced: <span className="font-bold">September 1</span>
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-3">🎯 Step-by-Step Process</h4>
                <div className="space-y-3">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div><p className="font-bold text-gray-800">Self-Assessment (June 1-15)</p><p className="text-sm text-gray-600">Review your GPA and achievements. Determine which scholarships you qualify for.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div><p className="font-bold text-gray-800">Gather Documents (June 15 - July 31)</p><p className="text-sm text-gray-600">Request teacher recommendations, obtain family income statements, prepare your personal statement.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div><p className="font-bold text-gray-800">Submit Application (Before Aug 15)</p><p className="text-sm text-gray-600">Complete online form, upload all documents, and confirm receipt of complete application.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div><p className="font-bold text-gray-800">Interview Preparation (Late August)</p><p className="text-sm text-gray-600">If selected, prepare to discuss your goals, family situation, and aspirations with committee.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div><p className="font-bold text-gray-800">Decision & Acceptance (Sept 1+)</p><p className="text-sm text-gray-600">Awards announced. Sign scholarship agreement and receive payment details.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form 3-4 */}
          <div className="mb-12 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 text-white">
              <h3 className="text-2xl font-bold">Form 3 & Form 4 Students</h3>
              <p className="text-green-100 text-sm mt-1">Core Academic & Competition Years</p>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-3">📋 Eligibility Requirements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">•</span> Minimum GPA: 14/20 (Form 3), 14.5/20 (Form 4)</li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">•</span> FSLC passes in key subjects (Form 3) OR Advance Level mock scores</li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">•</span> Demonstrated leadership or significant achievements (sports awards, competition wins, club leadership)</li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">•</span> Form 4 students eligible for advanced scholarships including Full Merit & Sports Excellence</li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">•</span> Regional or national achievement certificates welcome (science fairs, sports, arts, business)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-3">📄 Required Documents Checklist</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="font-semibold text-[#002B5B] mb-2">Academic Documents</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ FSLC results & transcripts</li>
                      <li>✓ Form 4 mock exam scores</li>
                      <li>✓ School progress report</li>
                      <li>✓ 2 teacher recommendation letters</li>
                      <li>✓ Class rank/position (if applicable)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="font-semibold text-[#002B5B] mb-2">Achievement & Personal</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ Competition certificates (if any)</li>
                      <li>✓ Sports/arts achievement letters</li>
                      <li>✓ Portfolio (arts/innovation applicants)</li>
                      <li>✓ Personal statement (750 words)</li>
                      <li>✓ Financial documents (if need-based)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-300 rounded-lg p-4">
                <p className="font-bold text-green-900 mb-2">⏰ Timeline for Form 3 & 4:</p>
                <p className="text-sm text-gray-700">
                  Applications open: <span className="font-bold">June 1</span> | Early deadline (priority): <span className="font-bold">July 31</span> | Final deadline: <span className="font-bold">August 15</span> | Interviews: <span className="font-bold">August 20-31</span> | Awards: <span className="font-bold">September 5</span>
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-3">🎯 Step-by-Step Process</h4>
                <div className="space-y-3">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div><p className="font-bold text-gray-800">Eligibility Verification (June 1-10)</p><p className="text-sm text-gray-600">Check your FSLC results/mock scores and identify best-fit scholarships (Academic, Merit, Sports, Arts, etc.)</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div><p className="font-bold text-gray-800">Prepare Achievement Portfolio (June 10 - July 20)</p><p className="text-sm text-gray-600">Gather certificates, create portfolio (for arts/tech), request recommendations from teachers and coaches/mentors.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div><p className="font-bold text-gray-800">Complete Application (July 20 - Aug 15)</p><p className="text-sm text-gray-600">Submit online with all documents. Form 3: By July 31 for priority. Form 4: By August 15 (limited spots remain).</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div><p className="font-bold text-gray-800">Participate in Interview (Late August)</p><p className="text-sm text-gray-600">Attend in-person or virtual interview. Be prepared to discuss achievements and goals in detail.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div><p className="font-bold text-gray-800">Award Notification (Sept 5+)</p><p className="text-sm text-gray-600">Results announced. Award letter includes terms, payment schedule, and renewal conditions.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form 5 */}
          <div className="mb-12 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-white">
              <h3 className="text-2xl font-bold">Form 5 (A-Level) Students</h3>
              <p className="text-purple-100 text-sm mt-1">Final Year Scholars & Leaders</p>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-3">📋 Eligibility Requirements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3"><span className="text-purple-600 font-bold">•</span> Minimum GPA: 15/20 (competitions for Full Merit: 17+/20)</li>
                  <li className="flex gap-3"><span className="text-purple-600 font-bold">•</span> Strong A-Level subject performance or leadership demonstrated</li>
                  <li className="flex gap-3"><span className="text-purple-600 font-bold">•</span> Significant contribution to school/community (club president, tournament winner, published works, innovation)</li>
                  <li className="flex gap-3"><span className="text-purple-600 font-bold">•</span> Full Merit Scholarships (100% fees) require exceptional merit + national/regional achievement</li>
                  <li className="flex gap-3"><span className="text-purple-600 font-bold">•</span> Leadership roles and maturity demonstrated across multiple years at GBAAST</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-3">📄 Required Documents Checklist</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <p className="font-semibold text-[#002B5B] mb-2">Academic & Leadership</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ Mock exam results & transcripts</li>
                      <li>✓ GPA letter (last 3 terms)</li>
                      <li>✓ 3 teacher recommendation letters</li>
                      <li>✓ Academic principal's letter</li>
                      <li>✓ Leadership positions documentation</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <p className="font-semibold text-[#002B5B] mb-2">Achievements & Goals</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ All competition certificates</li>
                      <li>✓ Published works/projects (if applicable)</li>
                      <li>✓ University acceptance letters (if any)</li>
                      <li>✓ Comprehensive personal statement (1000+ words)</li>
                      <li>✓ Vision statement for future aspirations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-300 rounded-lg p-4">
                <p className="font-bold text-purple-900 mb-2">⏰ Timeline for Form 5:</p>
                <p className="text-sm text-gray-700">
                  Applications open: <span className="font-bold">June 1</span> | Early deadline (URGENT): <span className="font-bold">July 15</span> | Final deadline: <span className="font-bold">August 1</span> | Interviews: <span className="font-bold">August 5-20</span> | Awards: <span className="font-bold">August 25</span>
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-3">🎯 Step-by-Step Process</h4>
                <div className="space-y-3">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div><p className="font-bold text-gray-800">Strategic Planning (June 1-5)</p><p className="text-sm text-gray-600">Review all scholarship types. Decide if pursuing Full Merit (extremely competitive), standard Merit, or specialized (Sports/Arts).</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div><p className="font-bold text-gray-800">Comprehensive Documentation (June 5 - July 10)</p><p className="text-sm text-gray-600">Request all recommendation letters, compile complete achievement portfolio, prepare detailed vision statement and personal narrative.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div><p className="font-bold text-gray-800">Submit Premium Application (By July 15)</p><p className="text-sm text-gray-600">Submit complete application with all documents. Early submission increases likelihood of being considered for limited Full Merit spots.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div><p className="font-bold text-gray-800">Formal Interview Process (August 5-20)</p><p className="text-sm text-gray-600">Attend rigorous interview. Prepare to discuss academic goals, leadership philosophy, community contributions, and university/career plans.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div><p className="font-bold text-gray-800">Final Award Decision (August 25)</p><p className="text-sm text-gray-600">Award letters sent. Includes scholarship renewal conditions and expectations for leadership contribution.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Sixth & Upper Sixth */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-white">
              <h3 className="text-2xl font-bold">Lower Sixth & Upper Sixth Students</h3>
              <p className="text-red-100 text-sm mt-1">University Preparation & Advanced Studies</p>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-3">📋 Eligibility Requirements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3"><span className="text-red-600 font-bold">•</span> Minimum GPA: 15/20 (Lower Sixth), 15.5/20 (Upper Sixth)</li>
                  <li className="flex gap-3"><span className="text-red-600 font-bold">•</span> Consistent academic excellence throughout secondary and sixth form years</li>
                  <li className="flex gap-3"><span className="text-red-600 font-bold">•</span> Proven leadership and mentorship of junior students</li>
                  <li className="flex gap-3"><span className="text-red-600 font-bold">•</span> University acceptance letters (for some scholarships) OR strong predicted grades</li>
                  <li className="flex gap-3"><span className="text-red-600 font-bold">•</span> International competition participation or publications welcomed</li>
                  <li className="flex gap-3"><span className="text-red-600 font-bold">•</span> Upper Sixth: Limited additional scholarships (most for Form 5 transitions)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-3">📄 Required Documents Checklist</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <p className="font-semibold text-[#002B5B] mb-2">Academic Excellence</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ A-Level grades/mock results</li>
                      <li>✓ Full academic transcript (Form 3-present)</li>
                      <li>✓ 3 teacher recommendation letters</li>
                      <li>✓ Headmaster/Principal letter</li>
                      <li>✓ University offer/acceptance letters</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <p className="font-semibold text-[#002B5B] mb-2">Leadership & Beyond</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ Leadership roles (positions, dates)</li>
                      <li>✓ International participation certificates</li>
                      <li>✓ Published research/articles</li>
                      <li>✓ Detailed personal essay (1500 words)</li>
                      <li>✓ Financial documents (if need-based)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-300 rounded-lg p-4">
                <p className="font-bold text-red-900 mb-2">⏰ Timeline for Sixth Form:</p>
                <p className="text-sm text-gray-700">
                  Applications open: <span className="font-bold">May 1</span> | Priority deadline: <span className="font-bold">June 30</span> | Final deadline: <span className="font-bold">July 15</span> | Interviews: <span className="font-bold">July 20-August 5</span> | Awards: <span className="font-bold">August 10</span> | <span className="text-red-700 font-bold">Note: Very few scholarships for sixth form—most are for Form 5 transitions</span>
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-3">🎯 Step-by-Step Process</h4>
                <div className="space-y-3">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div><p className="font-bold text-gray-800">Early Assessment (May 1-10)</p><p className="text-sm text-gray-600">Determine scholarship eligibility. Note: Most scholarships favor Form 5 entry. Sixth form scholarships are very limited.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div><p className="font-bold text-gray-800">Premium Documentation (May 10 - June 20)</p><p className="text-sm text-gray-600">Prepare comprehensive portfolio: A-Level results, university letters, leadership documentation, and professional-level personal essay.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div><p className="font-bold text-gray-800">Submit Application (By June 30)</p><p className="text-sm text-gray-600">Submit immediately for best consideration. Limited spots mean early applicants get priority review.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div><p className="font-bold text-gray-800">Executive Interview (July 20 - Aug 5)</p><p className="text-sm text-gray-600">Meet with senior committee. Discuss university plans, career aspirations, and significant contributions to GBAAST community.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div><p className="font-bold text-gray-800">Award Announcement (August 10)</p><p className="text-sm text-gray-600">Results announced. Sixth form awards include transition planning and mentorship expectations.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Can I apply for multiple scholarships?',
                a: 'Yes, you can apply for multiple scholarships if you meet eligibility criteria. However, award amounts may be combined at discretion of the financial aid committee.'
              },
              {
                q: 'When should I apply?',
                a: 'Apply as early as possible. Most deadlines are in August, but need-based aid is rolling. Early applications receive priority consideration.'
              },
              {
                q: 'What if my circumstances change mid-year?',
                a: 'Contact the Bursar\'s office immediately. Scholarship terms can be reviewed if significant changes in family situation occur.'
              },
              {
                q: 'Do scholarships renew yearly?',
                a: 'Most scholarships renew annually provided terms are met (GPA, conduct). Requirements vary by scholarship type.'
              },
              {
                q: 'How much does each scholarship pay?',
                a: 'Each scholarship is detailed above with annual support amounts. Exact payment depends on your program and family circumstances.'
              }
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl p-6 cursor-pointer border border-gray-200 hover:border-[#C8102E] transition-colors">
                <summary className="flex items-start justify-between font-bold text-[#002B5B]">
                  <span>{item.q}</span>
                  <ChevronRight className="h-5 w-5 mt-1" />
                </summary>
                <p className="text-gray-700 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 py-16 px-4 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-5" />
        </div>
        <div className="max-w-2xl mx-auto relative z-10">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 text-white animate-bounce" />
          <h2 className="text-4xl font-bold mb-4">🚨 HIGHLY LIMITED SCHOLARSHIPS - CLOSING FAST</h2>
          <p className="text-white/90 mb-2 text-lg font-semibold">
            Only {totalAvailable} spots remaining across ALL programs
          </p>
          <p className="text-white/80 mb-8 text-lg">
            Thousands of qualified students are competing for these rare opportunities. Every day that passes, spots get filled. This is your moment—don't wait another day. Apply immediately to secure your scholarship before it's too late.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-red-700 px-12 py-4 rounded-lg font-bold hover:shadow-2xl transition-all text-lg hover:scale-105 transform"
          >
            🔥 APPLY IMMEDIATELY - LIMITED TIME
          </Link>
          <p className="text-white/70 mt-6 text-sm">Deadline approaching • Competition fierce • Spots filling up • Apply now!</p>
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
    </div>
  );
}