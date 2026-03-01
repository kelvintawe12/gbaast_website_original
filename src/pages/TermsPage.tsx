import React from 'react';
import { Link } from 'react-router-dom';
export function TermsPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-white/70 font-medium">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span> Terms of Service
        </p>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8 font-medium">
              Last Updated: October 1, 2024
            </p>

            <p className="mb-8">
              Welcome to the Grace Bilingual Academy of Arts, Science and
              Technology (GBAAST) website. By accessing our website or enrolling
              a student in our school, you agree to be bound by these Terms of
              Service and our School Policies.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-6">
              By accessing this website, submitting an application, or enrolling
              a student at GBAAST, parents, guardians, and students agree to
              abide by these terms and all applicable school regulations.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              2. School Policies and Student Code of Conduct
            </h2>
            <p className="mb-4">
              All enrolled students must adhere to the GBAAST Student Code of
              Conduct. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Maintaining academic integrity and honesty.</li>
              <li>Showing respect to teachers, staff, and fellow students.</li>
              <li>Adhering to the school uniform policy.</li>
              <li>Attending classes regularly and punctually.</li>
              <li>
                Strictly prohibiting bullying, violence, substance abuse, and
                vandalism.
              </li>
            </ul>
            <p className="mb-6">
              The school reserves the right to suspend or expel any student who
              violates the Code of Conduct, in accordance with our disciplinary
              procedures.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              3. Fee Payment Terms
            </h2>
            <p className="mb-4">
              By enrolling a student, parents/guardians agree to the following
              financial terms:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                School fees must be paid according to the schedule provided by
                the Bursar's office.
              </li>
              <li>Registration fees are non-refundable.</li>
              <li>
                Failure to pay fees may result in the student being excluded
                from classes or boarding facilities.
              </li>
              <li>
                Examination fees (GCE/BEPC) are separate from regular tuition
                and must be paid by the specified deadlines.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              4. Boarding Rules
            </h2>
            <p className="mb-6">
              Students residing in the school dormitories must strictly follow
              all boarding rules. This includes adhering to study times,
              lights-out schedules, meal times, and weekend leave policies.
              Unauthorized absence from the dormitory is a severe disciplinary
              offense.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              5. Liability and Medical Emergencies
            </h2>
            <p className="mb-6">
              While GBAAST takes all reasonable precautions to ensure student
              safety, the school is not liable for loss or damage to personal
              property. In the event of a medical emergency, parents authorize
              the school to seek necessary medical treatment for the student if
              the parents cannot be immediately reached.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              6. Intellectual Property
            </h2>
            <p className="mb-6">
              All content on this website, including text, graphics, logos, and
              images, is the property of GBAAST and is protected by copyright
              laws. You may not reproduce, distribute, or create derivative
              works without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              7. Amendments
            </h2>
            <p className="mb-6">
              GBAAST reserves the right to modify these Terms of Service and
              school policies at any time. Significant changes will be
              communicated to parents and guardians via official school
              channels.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              8. Governing Law
            </h2>
            <p className="mb-6">
              These terms shall be governed by and construed in accordance with
              the laws of the Republic of Cameroon.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              9. Contact Information
            </h2>
            <p className="mb-4">
              For any questions regarding these Terms, please contact the school
              administration:
            </p>
            <div className="bg-[#F5F7FA] p-6 rounded-lg border border-gray-200">
              <p>Email: info@gbaast.cm</p>
              <p>Phone: +237 6XX XXX XXX</p>
            </div>
          </div>
        </div>
      </section>
    </div>);

}