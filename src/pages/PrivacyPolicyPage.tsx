import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Database, 
  Users, 
  Lock, 
  Share2, 
  Baby, 
  UserCheck, 
  Mail, 
  Phone, 
  MapPin,
  FileText,
  Clock,
  ChevronRight,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

export function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'intro', title: 'Introduction', icon: Shield },
    { id: 'collection', title: 'Information We Collect', icon: Database },
    { id: 'usage', title: 'How We Use Your Information', icon: Users },
    { id: 'security', title: 'Data Protection & Security', icon: Lock },
    { id: 'sharing', title: 'Sharing Your Information', icon: Share2 },
    { id: 'children', title: "Children's Privacy", icon: Baby },
    { id: 'rights', title: 'Your Rights', icon: UserCheck },
    { id: 'contact', title: 'Contact Us', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#002B5B] to-[#001A3A] py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Shield className="h-16 w-16 text-[#C8102E] mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <p className="text-white/70 font-medium">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>{' '}
            <span className="mx-2">/</span> Privacy Policy
          </p>
        </div>
      </div>

      {/* Last Updated Banner */}
      <div className="bg-[#F5F7FA] border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-[#C8102E]" />
          <span className="text-gray-600">Last Updated:</span>
          <span className="font-semibold text-[#002B5B]">March 1, 2026</span>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sticky Table of Contents */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <div className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-[#002B5B] mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#C8102E]" />
                    Quick Navigation
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg transition-all flex items-center gap-2 text-sm ${
                            activeSection === section.id
                              ? 'bg-[#002B5B] text-white font-semibold'
                              : 'text-gray-700 hover:bg-white hover:shadow-sm'
                          }`}
                        >
                          <Icon className="h-4 w-4 flex-shrink-0" />
                          <span className="flex-1">{section.title}</span>
                          <ChevronRight className="h-4 w-4 opacity-50" />
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* Quick Contact */}
                <div className="mt-6 bg-gradient-to-br from-[#002B5B] to-[#001A3A] rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-[#C8102E]" />
                    Have Questions?
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    Contact our privacy team for any concerns about your data.
                  </p>
                  <a
                    href="mailto:privacy@gbaast.edu.cm"
                    className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A00E26] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Email Privacy Team
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Introduction */}
              <section id="intro" className="mb-16 scroll-mt-24">
                <div className="bg-gradient-to-r from-[#002B5B]/5 to-[#C8102E]/5 rounded-2xl p-8 border-l-4 border-[#002B5B]">
                  <div className="flex items-start gap-4 mb-4">
                    <Shield className="h-8 w-8 text-[#002B5B] flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
                        Our Commitment to Privacy
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Grace Bilingual Academy of Arts, Science and Technology <span className="font-semibold">("GBAAST", "we", "our", or "us")</span> is committed to protecting the privacy of our students, parents, staff, and website visitors.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, apply for admission, or interact with our school community. By using our services, you agree to the collection and use of information in accordance with this policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="collection" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="h-8 w-8 text-[#C8102E]" />
                  <h2 className="text-3xl font-bold text-[#002B5B]">
                    Information We Collect
                  </h2>
                </div>

                <p className="text-gray-700 mb-6 text-lg">
                  We collect personal information that you voluntarily provide to us when you interact with our services:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    'Submit admission applications or inquiry forms',
                    'Register for school events, open days, or tours',
                    'Subscribe to our newsletter or updates',
                    'Contact us via email, phone, or website forms',
                    'Make tuition or fee payments',
                    'Participate in school activities or programs'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-[#002B5B] transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-[#002B5B] mb-4">Types of Personal Information:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Student & Parent Data:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Full names and contact details</li>
                        <li>• Residential addresses</li>
                        <li>• Email addresses and phone numbers</li>
                        <li>• Date of birth and nationality</li>
                        <li>• Emergency contact information</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Academic & Administrative:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Academic records and transcripts</li>
                        <li>• Medical information (boarding students)</li>
                        <li>• Financial information for fee payments</li>
                        <li>• Photographs and student work</li>
                        <li>• Attendance and disciplinary records</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section id="usage" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-8 w-8 text-[#C8102E]" />
                  <h2 className="text-3xl font-bold text-[#002B5B]">
                    How We Use Your Information
                  </h2>
                </div>

                <p className="text-gray-700 mb-6 text-lg">
                  We use the information we collect primarily to provide, maintain, and improve our educational services:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Admissions & Enrollment',
                      description: 'Process admission applications, evaluate student eligibility, and manage enrollment procedures.'
                    },
                    {
                      title: 'Communication & Updates',
                      description: 'Communicate with parents/guardians regarding student progress, school events, emergencies, and important announcements.'
                    },
                    {
                      title: 'Student Services',
                      description: 'Manage boarding facilities, ensure student health and safety, and provide academic support services.'
                    },
                    {
                      title: 'Financial Administration',
                      description: 'Process tuition and fee payments, manage scholarship programs, and handle financial aid applications.'
                    },
                    {
                      title: 'Educational Excellence',
                      description: 'Track academic progress, prepare transcripts and certificates, and submit examination registrations.'
                    },
                    {
                      title: 'Legal Compliance',
                      description: 'Comply with requirements from the Ministry of Secondary Education, GCE Board, and other regulatory authorities.'
                    }
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                      <h3 className="font-bold text-[#002B5B] mb-2 flex items-center gap-2">
                        <ChevronRight className="h-5 w-5 text-[#C8102E]" />
                        {item.title}
                      </h3>
                      <p className="text-gray-700 pl-7">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Data Protection & Security */}
              <section id="security" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="h-8 w-8 text-[#C8102E]" />
                  <h2 className="text-3xl font-bold text-[#002B5B]">
                    Data Protection & Security
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-[#002B5B] to-[#001A3A] rounded-2xl p-8 text-white mb-6">
                  <div className="flex items-start gap-4">
                    <Lock className="h-12 w-12 text-[#C8102E] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-3">Our Security Commitment</h3>
                      <p className="text-white/90 leading-relaxed">
                        We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. Your data is stored securely and access is strictly limited to authorized school personnel who need it to perform their duties.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: Lock, title: 'Encrypted Storage', desc: 'Data encrypted at rest and in transit' },
                    { icon: UserCheck, title: 'Access Control', desc: 'Strict authorization protocols' },
                    { icon: Shield, title: 'Regular Audits', desc: 'Continuous security monitoring' }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="bg-[#F5F7FA] rounded-xl p-6 border border-gray-200 text-center">
                        <Icon className="h-10 w-10 text-[#C8102E] mx-auto mb-3" />
                        <h4 className="font-bold text-[#002B5B] mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-2">Important Notice</h4>
                      <p className="text-amber-800 text-sm">
                        While we take extensive measures to protect your data, please remember that no method of transmission over the internet or electronic storage is 100% secure. We continuously update our security practices to maintain the highest standards.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sharing Information */}
              <section id="sharing" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <Share2 className="h-8 w-8 text-[#C8102E]" />
                  <h2 className="text-3xl font-bold text-[#002B5B]">
                    Sharing Your Information
                  </h2>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <p className="font-bold text-green-900">
                      We do not sell or rent your personal information to third parties.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  We may share your information only in the following limited situations:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Government & Educational Authorities',
                      description: 'Ministry of Secondary Education, GCE Board, and other examination bodies as required by law.',
                      required: true
                    },
                    {
                      title: 'Medical Emergencies',
                      description: 'Healthcare professionals in case of student medical emergencies requiring immediate attention.',
                      required: true
                    },
                    {
                      title: 'Service Providers',
                      description: 'Third-party vendors who perform services on our behalf (e.g., payment processing, IT services), bound by strict confidentiality agreements.',
                      required: false
                    },
                    {
                      title: 'Legal Obligations',
                      description: 'When required by law, court order, or government regulation to protect our rights or others\' safety.',
                      required: true
                    }
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-bold text-[#002B5B]">{item.title}</h3>
                        {item.required && (
                          <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                            LEGAL REQUIREMENT
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Children's Privacy */}
              <section id="children" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <Baby className="h-8 w-8 text-[#C8102E]" />
                  <h2 className="text-3xl font-bold text-[#002B5B]">
                    Children's Privacy
                  </h2>
                </div>

                <div className="bg-[#F5F7FA] rounded-2xl p-8 border border-gray-200">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    As an educational institution, we collect and maintain information about children (our students aged 11-19 years). This information is collected directly from parents or legal guardians during the admission process and throughout the student's enrollment.
                  </p>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-[#C8102E]">
                    <h3 className="font-bold text-[#002B5B] mb-4">Our Commitment to Student Privacy:</h3>
                    <ul className="space-y-3">
                      {[
                        'Information is used solely for educational and administrative purposes',
                        'Parental consent obtained before collecting sensitive student data',
                        'Student records protected with the highest security standards',
                        'Information shared only as necessary for educational services',
                        'Regular privacy training for all staff members handling student data'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section id="rights" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <UserCheck className="h-8 w-8 text-[#C8102E]" />
                  <h2 className="text-3xl font-bold text-[#002B5B]">
                    Your Privacy Rights
                  </h2>
                </div>

                <p className="text-gray-700 mb-6 text-lg">
                  Parents, guardians, and students (where applicable) have the following rights regarding their personal information:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Right to Access',
                      description: 'Request copies of your child\'s educational records and personal data we hold.',
                      icon: FileText
                    },
                    {
                      title: 'Right to Correction',
                      description: 'Request corrections to inaccurate or incomplete information.',
                      icon: CheckCircle2
                    },
                    {
                      title: 'Right to Deletion',
                      description: 'Request deletion of certain data (subject to legal retention requirements).',
                      icon: AlertCircle
                    },
                    {
                      title: 'Right to Object',
                      description: 'Object to certain uses of your information, where applicable.',
                      icon: Shield
                    }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#002B5B] transition-all">
                        <Icon className="h-8 w-8 text-[#C8102E] mb-3" />
                        <h3 className="font-bold text-[#002B5B] mb-2">{item.title}</h3>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-3">How to Exercise Your Rights:</h4>
                  <p className="text-blue-800 mb-4">
                    To exercise any of these rights, please contact the school administration in writing. We will respond to your request within 30 days and may require verification of your identity to protect your privacy.
                  </p>
                  <a
                    href="mailto:privacy@gbaast.edu.cm"
                    className="inline-flex items-center gap-2 text-[#002B5B] font-semibold hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    Submit a Privacy Request
                  </a>
                </div>
              </section>

              {/* Contact Us */}
              <section id="contact" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="h-8 w-8 text-[#C8102E]" />
                  <h2 className="text-3xl font-bold text-[#002B5B]">
                    Contact Our Privacy Team
                  </h2>
                </div>

                <p className="text-gray-700 mb-6">
                  If you have questions, comments, or concerns about this Privacy Policy or our data practices, please contact us:
                </p>

                <div className="bg-gradient-to-br from-[#002B5B] to-[#001A3A] rounded-2xl p-8 text-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-xl mb-6 text-white">
                        Grace Bilingual Academy of Arts,<br />Science and Technology
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold mb-1">Campus Address:</p>
                            <p className="text-white/80">Mbankom, Yaoundé<br />Centre Region, Cameroon</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold mb-1">Email:</p>
                            <a href="mailto:privacy@gbaast.edu.cm" className="text-white/80 hover:text-white">
                              privacy@gbaast.edu.cm
                            </a>
                            <br />
                            <a href="mailto:info@gbaast.edu.cm" className="text-white/80 hover:text-white">
                              info@gbaast.edu.cm
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-[#C8102E] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold mb-1">Phone:</p>
                            <p className="text-white/80">+237 6XX XXX XXX</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h4 className="font-bold mb-4">Response Time</h4>
                      <p className="text-white/80 mb-4 text-sm">
                        We strive to respond to all privacy inquiries within 2-3 business days. For urgent matters, please call our main office.
                      </p>
                      <h4 className="font-bold mb-4 mt-6">Office Hours</h4>
                      <p className="text-white/80 text-sm">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Changes to Policy */}
                <div className="mt-8 bg-[#F5F7FA] rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-[#002B5B] mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-[#C8102E]" />
                    Changes to This Privacy Policy
                  </h3>
                  <p className="text-gray-700 text-sm">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}