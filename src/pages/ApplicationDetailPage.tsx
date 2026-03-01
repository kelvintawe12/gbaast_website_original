import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, AlertCircle, CheckCircle2, Clock, FileText, DollarSign } from 'lucide-react';
import { applicationData } from '../data/applicationData';

export function ApplicationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const guide = applicationData.find((app) => app.id === id);

  if (!guide) {
    return (
      <div className="pt-20 min-h-screen bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-[#002B5B] mb-4">Guide Not Found</h1>
          <p className="text-gray-600 mb-6">The application guide you are looking for does not exist.</p>
          <Link
            to="/apply-process"
            className="text-[#C8102E] font-semibold hover:underline inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to Application Process
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-[#F5F7FA] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#002B5B] to-[#001A3A] py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Link
            to="/apply-process"
            className="text-white/70 hover:text-white mb-6 inline-flex items-center transition-colors"
          >
            <ChevronRight className="h-4 w-4 mr-2 rotate-180" />
            Back to Application Process
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{guide.title}</h1>
          <p className="text-white/85 text-lg">{guide.subtitle}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#002B5B] mb-4">Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{guide.overview}</p>
          </div>
        </section>

        {/* Fees */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#002B5B] to-[#001A3A] rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <DollarSign className="h-6 w-6 mr-3 text-[#C8102E]" />
              Annual Tuition Fees
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-white/70 text-sm font-medium mb-2">Central African CFA Franc</div>
                <div className="text-4xl font-bold text-white mb-1">
                  {guide.fees.annualTuitionXAF.toLocaleString()} <span className="text-2xl">XAF</span>
                </div>
                <div className="text-white/60 text-sm">Per academic year</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-white/70 text-sm font-medium mb-2">US Dollar Equivalent</div>
                <div className="text-4xl font-bold text-white mb-1">
                  ${guide.fees.annualTuitionUSD.toLocaleString()} <span className="text-2xl">USD</span>
                </div>
                <div className="text-white/60 text-sm">Approximate conversion</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/80 text-sm flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                <span>Scholarship opportunities available for qualified students. Full tuition coverage possible for exceptional candidates.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#002B5B] mb-6 flex items-center">
              <CheckCircle2 className="h-6 w-6 mr-3 text-[#C8102E]" />
              {guide.eligibility.title}
            </h2>
            <ul className="space-y-3">
              {guide.eligibility.requirements.map((req, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#002B5B] mb-6 flex items-center">
              <Clock className="h-6 w-6 mr-3 text-[#C8102E]" />
              {guide.timeline.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F5F7FA] rounded-lg p-4 border-l-4 border-[#002B5B]">
                <p className="text-sm text-gray-600 mb-1">Applications Open</p>
                <p className="font-bold text-[#002B5B] text-lg">{guide.timeline.applicationsOpen}</p>
              </div>
              {guide.timeline.earlyDeadline && (
                <div className="bg-[#F5F7FA] rounded-lg p-4 border-l-4 border-[#C8102E]">
                  <p className="text-sm text-gray-600 mb-1">Early Deadline (Priority)</p>
                  <p className="font-bold text-[#C8102E] text-lg">{guide.timeline.earlyDeadline}</p>
                </div>
              )}
              <div className="bg-[#F5F7FA] rounded-lg p-4 border-l-4 border-[#C8102E]">
                <p className="text-sm text-gray-600 mb-1">Final Deadline</p>
                <p className="font-bold text-[#C8102E] text-lg">{guide.timeline.finalDeadline}</p>
              </div>
              <div className="bg-[#F5F7FA] rounded-lg p-4 border-l-4 border-[#002B5B]">
                <p className="text-sm text-gray-600 mb-1">Interviews Scheduled</p>
                <p className="font-bold text-[#002B5B] text-lg">{guide.timeline.interviews}</p>
              </div>
              <div className="bg-[#F5F7FA] rounded-lg p-4 border-l-4 border-[#002B5B]">
                <p className="text-sm text-gray-600 mb-1">Awards Announced</p>
                <p className="font-bold text-[#002B5B] text-lg">{guide.timeline.awards}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#002B5B] mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3 text-[#C8102E]" />
              Required Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guide.documents.map((doc, i) => (
                <div key={i} className="bg-[#F5F7FA] rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-[#002B5B] mb-4 text-lg">{doc.category}</h3>
                  <ul className="space-y-3">
                    {doc.items.map((item, j) => (
                      <li key={j} className="flex gap-2 items-start">
                        <CheckCircle2 className="h-4 w-4 text-[#C8102E] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#002B5B] mb-8">Step-by-Step Process</h2>
            <div className="space-y-6">
              {guide.process.map((step) => (
                <div key={step.step} className="bg-[#F5F7FA] rounded-xl p-6 border-l-4 border-[#C8102E]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#002B5B] to-[#001A3A] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#002B5B] mb-1">{step.title}</h3>
                      <p className="text-sm text-[#C8102E] font-semibold mb-3">{step.dateRange}</p>
                      <p className="text-gray-700 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="text-sm text-gray-600 flex gap-2 items-start">
                            <ChevronRight className="h-4 w-4 text-[#C8102E] flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#002B5B] to-[#001A3A] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 text-[#C8102E] mr-3" />
              Application Tips
            </h2>
            <ul className="space-y-4">
              {guide.tips.map((tip, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Success Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#002B5B] mb-6">Keys to Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guide.successTips.map((tip, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="font-bold text-[#002B5B] mb-3">{tip.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#002B5B] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {guide.faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-4 last:border-0">
                  <h3 className="font-bold text-[#002B5B] mb-2">{faq.question}</h3>
                  <p className="text-gray-700 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#C8102E] to-[#A00E26] rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              You now have all the details you need. Gather your documents and submit your application before the deadline.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <a
                href="/contact"
                className="bg-white text-[#002B5B] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Start Application
                <ChevronRight className="h-5 w-5 ml-2" />
              </a>
              <Link
                to="/scholarships"
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors border border-white"
              >
                View Scholarships
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
