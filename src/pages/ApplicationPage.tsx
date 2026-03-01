import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, CheckCircle2, Info } from 'lucide-react';
export function ApplicationPage() {
  const [boardingStatus, setBoardingStatus] = useState('full-boarder');
  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Apply to GBAAST
        </h1>
        <p className="text-white/70 font-medium">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span>
          <Link to="/admissions" className="hover:text-white">
            Admissions
          </Link>{' '}
          <span className="mx-2">/</span> Apply
        </p>
      </div>

      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            {/* Section 1: Student Personal Information */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#002B5B] mb-6 pb-4 border-b">
                1. Student Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B] bg-white">

                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Place of Birth *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality *
                  </label>
                  <input
                    type="text"
                    defaultValue="Cameroonian"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  National ID / Birth Certificate Number *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Passport-size Photo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#002B5B] transition-colors cursor-pointer">
                  <Upload className="h-10 w-10 mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-600 text-sm">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    PNG, JPG up to 2MB
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Home Address *
                </label>
                <textarea
                  rows={3}
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
                  placeholder="Full home address">
                </textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
                    placeholder="+237 6XX XXX XXX" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Email (Optional)
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
              </div>
            </div>

            {/* Section 2: Parent/Guardian Information */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#002B5B] mb-6 pb-4 border-b">
                2. Parent / Guardian Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Father's Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Father's Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Father's Occupation
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mother's Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mother's Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mother's Occupation
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

              </div>
              <div className="bg-[#F5F7FA] p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 font-medium">
                  If guardian is different from parents:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guardian Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guardian Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guardian Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relationship to Student
                  </label>
                  <select className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B] bg-white">
                    <option value="">Select Relationship</option>
                    <option value="father">Father</option>
                    <option value="mother">Mother</option>
                    <option value="uncle">Uncle</option>
                    <option value="aunt">Aunt</option>
                    <option value="grandparent">Grandparent</option>
                    <option value="sibling">Sibling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guardian Address
                </label>
                <textarea
                  rows={2}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]">
                </textarea>
              </div>
            </div>

            {/* Section 3: Academic Background */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#002B5B] mb-6 pb-4 border-b">
                3. Academic Background
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous School Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous School Address
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class/Level Completed *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B] bg-white">

                    <option value="">Select Class</option>
                    <optgroup label="Anglophone System">
                      <option value="class-6">Class 6 (Primary)</option>
                      <option value="form-1">Form 1</option>
                      <option value="form-2">Form 2</option>
                      <option value="form-3">Form 3</option>
                      <option value="form-4">Form 4</option>
                      <option value="form-5">Form 5</option>
                    </optgroup>
                    <optgroup label="Francophone System">
                      <option value="cm2">CM2 (Primary)</option>
                      <option value="6eme">6ème</option>
                      <option value="5eme">5ème</option>
                      <option value="4eme">4ème</option>
                      <option value="3eme">3ème</option>
                      <option value="2nde">2nde</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year Completed *
                  </label>
                  <input
                    type="number"
                    min="2015"
                    max="2025"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
                    placeholder="2024" />

                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Grade / GPA
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
                    placeholder="e.g., 14/20 or B+" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language of Previous Instruction *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B] bg-white">

                    <option value="">Select Language</option>
                    <option value="english">English</option>
                    <option value="french">French</option>
                    <option value="bilingual">Bilingual</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Is this student repeating a class?
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="repeat"
                      value="no"
                      defaultChecked
                      className="mr-2" />
                    {' '}
                    No
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="repeat"
                      value="yes"
                      className="mr-2" />
                    {' '}
                    Yes
                  </label>
                </div>
              </div>
            </div>

            {/* Section 4: Program Selection */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#002B5B] mb-6 pb-4 border-b">
                4. Program Selection
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Class Level at GBAAST *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B] bg-white">

                    <option value="">Select Class</option>
                    <option value="form-1">Form 1 / 6ème</option>
                    <option value="form-2">Form 2 / 5ème</option>
                    <option value="form-3">Form 3 / 4ème</option>
                    <option value="form-4">Form 4 / 3ème</option>
                    <option value="form-5">Form 5 / 2nde</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Academic Track *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B] bg-white">

                    <option value="">Select Track</option>
                    <option value="arts">Arts & Humanities</option>
                    <option value="sciences">Sciences</option>
                    <option value="technology">Technology</option>
                    <option value="business">Business Studies</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language Section Preference *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B] bg-white">

                  <option value="">Select Section</option>
                  <option value="english">English Section</option>
                  <option value="french">French Section</option>
                  <option value="bilingual">Bilingual (Both)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Extracurricular Interests (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                  'Sports',
                  'Music',
                  'Drama',
                  'Debate',
                  'Technology Club',
                  'Art Club',
                  'Science Club',
                  'Community Service'].
                  map((interest, i) =>
                  <label key={i} className="flex items-center">
                      <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 text-[#002B5B]" />
                    {' '}
                      {interest}
                    </label>
                  )}
                </div>
              </div>
            </div>

            {/* Section 5: Boarding Information */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#002B5B] mb-6 pb-4 border-b">
                5. Boarding / Dormitory Information
              </h2>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Boarding Status *
                </label>
                <select
                  required
                  value={boardingStatus}
                  onChange={(e) => setBoardingStatus(e.target.value)}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B] bg-white">

                  <option value="full-boarder">
                    Full Boarder (Lives on campus)
                  </option>
                  <option value="day-student">
                    Day Student (Lives at home)
                  </option>
                </select>
              </div>
              {boardingStatus === 'full-boarder' &&
              <>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dietary Requirements (if any)
                    </label>
                    <input
                    type="text"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
                    placeholder="e.g., Vegetarian, No pork, Allergies" />

                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Roommate Preference (Optional)
                    </label>
                    <input
                    type="text"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
                    placeholder="Name of preferred roommate if any" />

                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Accommodation Needs
                    </label>
                    <textarea
                    rows={2}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
                    placeholder="Any special needs we should know about">
                  </textarea>
                  </div>
                </>
              }
            </div>

            {/* Section 6: Medical Information */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#002B5B] mb-6 pb-4 border-b">
                6. Medical Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group
                  </label>
                  <select className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B] bg-white">
                    <option value="">Select Blood Group</option>
                    <option value="a+">A+</option>
                    <option value="a-">A-</option>
                    <option value="b+">B+</option>
                    <option value="b-">B-</option>
                    <option value="ab+">AB+</option>
                    <option value="ab-">AB-</option>
                    <option value="o+">O+</option>
                    <option value="o-">O-</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Doctor's Name & Phone
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Known Allergies
                  </label>
                  <textarea
                    rows={2}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
                    placeholder="List any allergies">
                  </textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chronic Conditions
                  </label>
                  <textarea
                    rows={2}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
                    placeholder="e.g., Asthma, Diabetes">
                  </textarea>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Medications
                </label>
                <textarea
                  rows={2}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
                  placeholder="List any medications the student takes regularly">
                </textarea>
              </div>
              <div className="bg-[#F5F7FA] p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 font-medium">
                  Emergency Contact (other than parents/guardian)
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relationship
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
                    placeholder="e.g., Uncle, Neighbor" />

                </div>
              </div>
            </div>

            {/* Section 7: Required Documents */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#002B5B] mb-6 pb-4 border-b">
                7. Required Documents Checklist
              </h2>
              <p className="text-gray-600 mb-6">
                Please confirm you have the following documents ready for
                submission:
              </p>
              <div className="space-y-4 mb-6">
                {[
                'Birth Certificate (Original and Copy)',
                'Previous School Report Cards (Last 2 years)',
                'Transfer Certificate from Previous School',
                '4 Passport-size Photographs',
                'Medical Certificate',
                'Parent/Guardian National ID (Copy)',
                'Proof of Address'].
                map((doc, i) =>
                <label key={i} className="flex items-center">
                    <input
                    type="checkbox"
                    className="mr-3 h-5 w-5 text-[#002B5B] rounded" />

                    <span className="text-gray-700">{doc}</span>
                  </label>
                )}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                <Info className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Original documents must be presented
                  during enrollment. Incomplete documentation may delay the
                  admission process.
                </p>
              </div>
            </div>

            {/* Section 8: Declaration & Consent */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#002B5B] mb-6 pb-4 border-b">
                8. Declaration & Consent
              </h2>
              <div className="space-y-4 mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mr-3 h-5 w-5 text-[#002B5B] rounded mt-0.5" />

                  <span className="text-gray-700">
                    I certify that all information provided in this application
                    is true and accurate to the best of my knowledge. *
                  </span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mr-3 h-5 w-5 text-[#002B5B] rounded mt-0.5" />

                  <span className="text-gray-700">
                    I agree that my child will abide by the rules and
                    regulations of GBAAST. *
                  </span>
                </label>
                {boardingStatus === 'full-boarder' &&
                <label className="flex items-start">
                    <input
                    type="checkbox"
                    required
                    className="mr-3 h-5 w-5 text-[#002B5B] rounded mt-0.5" />

                    <span className="text-gray-700">
                      I consent to my child residing in the school dormitory and
                      understand the boarding policies. *
                    </span>
                  </label>
                }
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent/Guardian Signature (Type full name) *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
                    placeholder="Type your full name as signature" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5B]" />

                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="bg-[#002B5B] p-8 rounded-xl text-white text-center">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-[#C8102E] text-white font-bold text-lg rounded shadow-lg hover:bg-red-700 transition-colors mb-6">

                Submit Application
              </button>
              <div className="space-y-2 text-white/80 text-sm">
                <p>
                  <strong>Application Fee:</strong> 10,000 CFA. Payment details
                  will be sent to your email after submission.
                </p>
                <p>
                  For assistance, contact{' '}
                  <a href="mailto:admissions@gbaast.cm" className="underline">
                    admissions@gbaast.cm
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+2376XXXXXXXX" className="underline">
                    +237 6XX XXX XXX
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>);

}