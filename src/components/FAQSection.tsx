import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
const faqs = [
{
  question: 'What programs does GBAAST offer?',
  answer:
  'GBAAST offers comprehensive secondary education with tracks in Arts & Humanities, Sciences, Technology, Business Studies, and Bilingual Studies. We prepare students for both GCE (Ordinary and Advanced Level) and BEPC examinations.'
},
{
  question: 'What are the admission requirements?',
  answer:
  'Students need to provide their previous school reports, birth certificate, and complete our entrance assessment. We accept students from Form 1 to Form 5 (Anglophone) and Classe de 6ème to Terminale (Francophone). Strong academic performance and good character references are required.'
},
{
  question: 'How much are the school fees?',
  answer:
  'School fees vary by class level and boarding status. Full boarders pay approximately 500,000-700,000 CFA per year, which includes tuition, accommodation, meals, and basic supplies. Day students pay reduced fees. Scholarships and payment plans are available.'
},
{
  question: 'Is GBAAST a boarding school?',
  answer:
  'Yes, GBAAST is primarily a boarding school with modern dormitory facilities. We also accept day students from the Yaoundé area. Our boarding program includes supervised study hours, meals, and extracurricular activities.'
},
{
  question: 'Where is GBAAST located?',
  answer:
  'GBAAST is located in Mbankom, a peaceful area in Yaoundé, Cameroon. Our campus features modern classrooms, science laboratories, computer labs, sports facilities, and comfortable dormitories.'
},
{
  question: 'What makes GBAAST different from other schools?',
  answer:
  'GBAAST stands out for its truly bilingual education (English and French), small class sizes, dedicated teachers, modern facilities, and holistic approach to education. Our 98% exam success rate and strong alumni network demonstrate our commitment to excellence.'
}];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#C8102E] mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#002B5B]/30">

              <button
              className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}>

                <span className="font-bold text-[#002B5B] text-lg pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                className={`h-5 w-5 text-[#C8102E] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />

              </button>

              <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>

                <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}