import { Link } from 'react-router-dom';
import { ChevronRight, FileText, AlertCircle } from 'lucide-react';

export function ApplyProcessPage() {
  return (
    <div className="pt-20 bg-[#F5F7FA] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#002B5B] to-[#001A3A] py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Link
            to="/scholarships"
            className="text-white/70 hover:text-white mb-6 inline-flex items-center transition-colors"
          >
            <ChevronRight className="h-4 w-4 mr-2 rotate-180" />
            Back to Scholarships
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Detailed Application Process
          </h1>
          <p className="text-white/85 text-lg max-w-3xl mb-8">
            Select your academic level below to view detailed application requirements, timelines, document checklists, and step-by-step guidance specific to your class.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/apply-process/form-1-2"
              className="bg-[#C8102E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
            >
              Form 1 & 2
            </Link>
            <Link
              to="/apply-process/form-3-4"
              className="bg-white/20 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors text-sm border border-white/30"
            >
              Form 3 & 4
            </Link>
            <Link
              to="/apply-process/form-5"
              className="bg-white/20 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors text-sm border border-white/30"
            >
              Form 5
            </Link>
            <Link
              to="/apply-process/sixth-form"
              className="bg-white/20 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors text-sm border border-white/30"
            >
              Sixth Form
            </Link>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#002B5B] mb-3 flex items-center">
              <FileText className="h-5 w-5 text-[#C8102E] mr-2" />
              Class-Specific Guides
            </h3>
            <p className="text-gray-600 text-sm">Each class level has unique requirements, timelines, and document checklists. Click above to view the complete guide for your academic level.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#002B5B] mb-3 flex items-center">
              <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
              Important Information
            </h3>
            <p className="text-gray-600 text-sm">Read the complete guide for your class before applying. Submit ALL required documentsâ€”applications missing any documents will be rejected automatically.</p>
          </div>
        </div>
      </section>

      {/* Feature Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-12 bg-[#F5F7FA] -mx-4 px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#002B5B] text-center mb-12">In Each Guide You Will Find</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold text-[#002B5B] mb-2">Eligibility Criteria</h3>
              <p className="text-sm text-gray-600">Exact GPA requirements and qualifications</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-bold text-[#002B5B] mb-2">Document Checklists</h3>
              <p className="text-sm text-gray-600">Complete list of required documents</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-bold text-[#002B5B] mb-2">Step-by-Step Process</h3>
              <p className="text-sm text-gray-600">Timeline and instructions for each step</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="font-bold text-[#002B5B] mb-2">FAQs & Tips</h3>
              <p className="text-sm text-gray-600">Success tips and frequently asked questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="bg-gradient-to-r from-[#002B5B] to-[#001A3A] rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Your Application Guide?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Select your class above to access the complete application guide with all requirements, documents, and step-by-step instructions.
          </p>
          <Link
            to="/scholarships"
            className="inline-flex items-center bg-[#C8102E] text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
          >
            View All Scholarships
            <ChevronRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
