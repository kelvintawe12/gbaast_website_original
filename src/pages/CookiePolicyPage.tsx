import React from 'react';
import { Link } from 'react-router-dom';
export function CookiePolicyPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Cookie Policy
        </h1>
        <p className="text-white/70 font-medium">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span> Cookie Policy
        </p>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8 font-medium">
              Last Updated: October 1, 2024
            </p>

            <p className="mb-8">
              This Cookie Policy explains how Grace Bilingual Academy of Arts,
              Science and Technology ("GBAAST", "we", "us", or "our") uses
              cookies and similar technologies to recognize you when you visit
              our website.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              1. What Are Cookies?
            </h2>
            <p className="mb-6">
              Cookies are small data files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners in order to make their websites work, or to work
              more efficiently, as well as to provide reporting information.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              2. How We Use Cookies
            </h2>
            <p className="mb-4">
              We use cookies for several reasons. Some cookies are required for
              technical reasons in order for our website to operate, and we
              refer to these as "essential" or "strictly necessary" cookies.
              Other cookies enable us to track and target the interests of our
              users to enhance the experience on our website.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              3. Types of Cookies We Use
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li>
                <strong>Essential Cookies:</strong> These cookies are strictly
                necessary to provide you with services available through our
                website and to use some of its features, such as access to
                secure areas.
              </li>
              <li>
                <strong>Performance and Functionality Cookies:</strong> These
                cookies are used to enhance the performance and functionality of
                our website but are non-essential to their use. However, without
                these cookies, certain functionality may become unavailable.
              </li>
              <li>
                <strong>Analytics and Customization Cookies:</strong> These
                cookies collect information that is used either in aggregate
                form to help us understand how our website is being used or how
                effective our marketing campaigns are, or to help us customize
                our website for you.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              4. Managing Cookies
            </h2>
            <p className="mb-6">
              You have the right to decide whether to accept or reject cookies.
              You can set or amend your web browser controls to accept or refuse
              cookies. If you choose to reject cookies, you may still use our
              website though your access to some functionality and areas of our
              website may be restricted. As the means by which you can refuse
              cookies through your web browser controls vary from
              browser-to-browser, you should visit your browser's help menu for
              more information.
            </p>

            <h2 className="text-2xl font-bold text-[#002B5B] mt-10 mb-4">
              5. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or other
              technologies, please email us at:
            </p>
            <div className="bg-[#F5F7FA] p-6 rounded-lg border border-gray-200">
              <p>Email: info@gbaast.cm</p>
            </div>
          </div>
        </div>
      </section>
    </div>);

}