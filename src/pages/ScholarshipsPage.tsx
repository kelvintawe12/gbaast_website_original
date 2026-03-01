import React from 'react';
import { Link } from 'react-router-dom';
import { Award } from 'lucide-react';
export function ScholarshipsPage() {
  const scholarships = [
  {
    name: 'Academic Excellence Scholarship',
    coverage: 'Up to 50% School Fees',
    eligibility:
    'Students with outstanding academic performance (average 16/20 or above).',
    deadline: 'August 15, 2025'
  },
  {
    name: 'Need-Based Financial Aid',
    coverage: 'Variable (up to 70%)',
    eligibility:
    'Families demonstrating financial need with supporting documentation.',
    deadline: 'Rolling'
  },
  {
    name: 'Sports Excellence Award',
    coverage: 'Up to 30% School Fees',
    eligibility:
    'Students excelling in sports with regional or national achievements.',
    deadline: 'August 15, 2025'
  },
  {
    name: 'Sibling Discount',
    coverage: '10% for 2nd child, 15% for 3rd+',
    eligibility: 'Families with multiple children enrolled at GBAAST.',
    deadline: 'Automatic'
  }];

  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Scholarships & Financial Aid
        </h1>
        <p className="text-white/70 font-medium">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span> Scholarships
        </p>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-6">
            Committed to Accessibility
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At GBAAST, we believe that financial constraints should never
            prevent a deserving student from receiving quality education. We
            offer various scholarships and financial aid options to support
            families in need.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarships.map((schol, i) =>
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">

                <div className="absolute top-0 right-0 p-4 opacity-10 text-[#C8102E]">
                  <Award className="h-24 w-24" />
                </div>
                <h3 className="text-2xl font-bold text-[#002B5B] mb-2 relative z-10">
                  {schol.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 font-semibold text-sm rounded-full mb-6 relative z-10">
                  {schol.coverage}
                </div>
                <div className="space-y-4 mb-8 relative z-10">
                  <div>
                    <span className="block text-sm font-bold text-gray-500 mb-1">
                      Eligibility:
                    </span>
                    <p className="text-gray-700">{schol.eligibility}</p>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-gray-500 mb-1">
                      Deadline:
                    </span>
                    <p className="text-[#C8102E] font-bold">{schol.deadline}</p>
                  </div>
                </div>
                <Link
                to="/apply"
                className="w-full py-3 border-2 border-[#002B5B] text-[#002B5B] font-bold rounded hover:bg-[#002B5B] hover:text-white transition-colors relative z-10 block text-center">

                  Apply Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-12 text-center">
            How to Apply for Financial Aid
          </h2>
          <div className="space-y-8">
            {[
            {
              step: 1,
              title: 'Submit Admission Application',
              desc: 'Complete the standard admission application for GBAAST.'
            },
            {
              step: 2,
              title: 'Indicate Financial Need',
              desc: 'Check the financial aid box and provide supporting documents.'
            },
            {
              step: 3,
              title: 'Interview & Assessment',
              desc: "Attend a financial aid interview with the Bursar's office."
            }].
            map((item, i) =>
            <div key={i} className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#C8102E] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#002B5B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

}