import React, { Children } from 'react';
import { Link } from 'react-router-dom';
export function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-white/70 font-medium">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span> Privacy Policy
        </p>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8 font-medium">
              Last Updated: October 1, 2024
            </p>

            <p className="mb-8">
              Grace Bilingual Academy of Arts, Science and Technology ("GBAAST",
              "we", "our", or "us") is committed to protecting the privacy of
              our students, parents, staff, and website visitors. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or interact with our
              school.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Submit an admission application or inquiry form.</li>
              <li>Register for school events or open days.</li>
              <li>Subscribe to our newsletter.</li>
              <li>Contact us via email or phone.</li>
            </ul>
            <p className="mb-6">
              The personal information we collect may include names, addresses,
              email addresses, phone numbers, student academic records, medical
              information (for boarding purposes), and financial information
              (for fee payments).
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect primarily to provide, maintain,
              and improve our educational services. Specifically, we may use
              your information to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Process admission applications and enrollments.</li>
              <li>
                Communicate with parents/guardians regarding student progress,
                school events, and emergencies.
              </li>
              <li>
                Manage boarding facilities and ensure student health and safety.
              </li>
              <li>Process fee payments and manage financial aid.</li>
              <li>
                Send administrative information, newsletters, and updates.
              </li>
              <li>
                Comply with legal and regulatory requirements from the Ministry
                of Secondary Education.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              3. Data Protection and Security
            </h2>
            <p className="mb-6">
              We implement appropriate technical and organizational security
              measures designed to protect the security of any personal
              information we process. However, please also remember that we
              cannot guarantee that the internet itself is 100% secure. Access
              to student records is strictly limited to authorized school
              personnel.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              4. Sharing Your Information
            </h2>
            <p className="mb-4">
              We do not sell or rent your personal information to third parties.
              We may share your information only in the following situations:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                With the Ministry of Secondary Education and examination boards
                (GCE Board) as required by law.
              </li>
              <li>
                With medical professionals in case of a student emergency.
              </li>
              <li>
                With third-party service providers who perform services for us
                (e.g., payment processing), bound by confidentiality agreements.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              5. Children's Privacy
            </h2>
            <p className="mb-6">
              As an educational institution, we collect information about
              children (our students). This information is collected directly
              from parents or guardians during the admission process. We are
              committed to protecting the privacy of our students and only use
              their information for educational and administrative purposes.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              6. Your Rights
            </h2>
            <p className="mb-6">
              Parents and guardians have the right to review their child's
              educational records, request corrections to inaccurate
              information, and request the deletion of certain data (subject to
              legal retention requirements). To exercise these rights, please
              contact the school administration.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              7. Contact Us
            </h2>
            <p className="mb-4">
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <div className="bg-[#F5F7FA] p-6 rounded-lg border border-gray-200">
              <p className="font-bold text-[#002B5B]">
                Grace Bilingual Academy of Arts, Science and Technology
              </p>
              <p>Mbankom, Yaoundé, Cameroon</p>
              <p>Email: info@gbaast.cm</p>
              <p>Phone: +237 6XX XXX XXX</p>
            </div>
          </div>
        </div>
      </section>
    </div>);

}