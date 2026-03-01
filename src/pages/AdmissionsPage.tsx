import React from 'react';
import { Link } from 'react-router-dom';
import {
  Info,
  CheckCircle,
  FileText,
  Users,
  GraduationCap,
  ArrowRight } from
'lucide-react';
export function AdmissionsPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Admissions
        </h1>
        <p className="text-white/70 font-medium">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span> Admissions
        </p>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-12 text-center">
            Admission Process
          </h2>
          <div className="flex flex-col md:flex-row justify-between relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            {[
            {
              step: 1,
              title: 'Submit Application',
              icon: FileText
            },
            {
              step: 2,
              title: 'Entrance Assessment',
              icon: Users
            },
            {
              step: 3,
              title: 'Admission Decision',
              icon: CheckCircle
            },
            {
              step: 4,
              title: 'Enrollment & Fees',
              icon: GraduationCap
            }].
            map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center mb-8 md:mb-0 bg-white px-4">

                  <div className="w-16 h-16 rounded-full bg-[#002B5B] text-white flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-[#002B5B] text-center">
                    Step {item.step}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {item.title}
                  </p>
                </div>);

            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#002B5B] mb-6 border-b pb-4">
              Admission Requirements
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C8102E] mr-3 mt-0.5 shrink-0" />{' '}
                <span className="text-gray-700">
                  Completed primary education (for Form 1) or previous secondary
                  level
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C8102E] mr-3 mt-0.5 shrink-0" />{' '}
                <span className="text-gray-700">
                  Good academic record from previous school
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C8102E] mr-3 mt-0.5 shrink-0" />{' '}
                <span className="text-gray-700">
                  Pass entrance assessment in English, French, and Mathematics
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C8102E] mr-3 mt-0.5 shrink-0" />{' '}
                <span className="text-gray-700">
                  Good character and discipline record
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C8102E] mr-3 mt-0.5 shrink-0" />{' '}
                <span className="text-gray-700">
                  Medical fitness certificate
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#002B5B] mb-6 border-b pb-4">
              Required Documents
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C8102E] mr-3 mt-0.5 shrink-0" />{' '}
                <span className="text-gray-700">
                  Birth certificate (original and copy)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C8102E] mr-3 mt-0.5 shrink-0" />{' '}
                <span className="text-gray-700">
                  School report cards (last 2 years)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C8102E] mr-3 mt-0.5 shrink-0" />{' '}
                <span className="text-gray-700">
                  Transfer certificate from previous school
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C8102E] mr-3 mt-0.5 shrink-0" />{' '}
                <span className="text-gray-700">
                  4 passport-size photographs
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C8102E] mr-3 mt-0.5 shrink-0" />{' '}
                <span className="text-gray-700">
                  Parent/Guardian national ID copy
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#002B5B] to-[#1a2b5b] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Upcoming Intakes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl p-8 shadow-lg text-left">
              <h3 className="text-2xl font-bold text-[#002B5B] mb-1">
                September
              </h3>
              <p className="text-[#002B5B] font-medium mb-4">
                2025 Academic Year
              </p>
              <p className="text-gray-600 mb-6">
                Main intake for all class levels.
              </p>
              <div className="text-[#C8102E] font-bold text-sm">
                <p>Applications close</p>
                <p>31st July 2025</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-left opacity-90">
              <h3 className="text-2xl font-bold text-[#002B5B] mb-1">
                January
              </h3>
              <p className="text-[#002B5B] font-medium mb-4">
                2026 Mid-Year Intake
              </p>
              <p className="text-gray-600 mb-6">
                Limited spaces for transfer students.
              </p>
              <div className="text-[#C8102E] font-bold text-sm">
                <p>Applications close</p>
                <p>15th December 2025</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 flex items-start border border-white/20">
            <div className="bg-white rounded-full p-1 mr-4 flex-shrink-0 mt-1">
              <Info className="h-4 w-4 text-[#002B5B]" />
            </div>
            <p className="text-sm text-white/90">
              <strong>IMPORTANT:</strong> GBAAST does not work with agents or
              intermediaries. Apply directly through our official channels only.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-8 text-center">
            School Fees Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F5F7FA] text-[#002B5B]">
                  <th className="p-4 font-bold border-b-2 border-gray-200">
                    Fee Type
                  </th>
                  <th className="p-4 font-bold border-b-2 border-gray-200">
                    Full Boarder (CFA)
                  </th>
                  <th className="p-4 font-bold border-b-2 border-gray-200">
                    Day Student (CFA)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">
                    Tuition (Annual)
                  </td>
                  <td className="p-4 text-gray-600">350,000</td>
                  <td className="p-4 text-gray-600">350,000</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">
                    Boarding & Meals (Annual)
                  </td>
                  <td className="p-4 text-gray-600">300,000</td>
                  <td className="p-4 text-gray-600">—</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">
                    Registration Fee (One-time)
                  </td>
                  <td className="p-4 text-gray-600">25,000</td>
                  <td className="p-4 text-gray-600">25,000</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 font-bold">
                  <td className="p-4 text-[#002B5B]">Total Annual</td>
                  <td className="p-4 text-[#C8102E]">675,000</td>
                  <td className="p-4 text-[#C8102E]">375,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Fees are subject to change. Payment plans available. Visit
            Scholarships page for financial aid options.
          </p>
          <div className="mt-12 text-center">
            <Link
              to="/apply"
              className="inline-flex items-center px-10 py-4 bg-[#C8102E] text-white font-bold rounded shadow-lg hover:bg-red-700 transition-colors text-lg">

              Apply Now <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>);

}