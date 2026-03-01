export interface ApplicationGuide {
  id: string;
  classLevel: string;
  title: string;
  subtitle: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  
  overview: string;
  
  eligibility: {
    title: string;
    requirements: string[];
  };
  
  timeline: {
    title: string;
    applicationsOpen: string;
    earlyDeadline?: string;
    finalDeadline: string;
    interviews: string;
    awards: string;
  };
  
  fees: {
    annualTuitionXAF: number;
    annualTuitionUSD: number;
  };
  
  documents: {
    category: string;
    items: string[];
  }[];
  
  process: {
    step: number;
    title: string;
    dateRange: string;
    description: string;
    details: string[];
  }[];
  
  tips: string[];
  
  successTips: {
    title: string;
    content: string;
  }[];
  
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const applicationData: ApplicationGuide[] = [
  {
    id: 'form-1-2',
    classLevel: 'Form 1 & 2',
    title: 'Form 1 & Form 2 Application Guide',
    subtitle: 'Building Foundation & Early Achievement',
    color: 'text-blue-600',
    bgGradient: 'from-blue-600 to-blue-800',
    borderColor: 'border-blue-200',
    
    overview: 'Form 1 and Form 2 students are our pipeline for developing strong academic foundations. We seek students who show promise, good discipline, and commitment to learning. These early years are crucial for character formation and academic excellence.',
    
    eligibility: {
      title: 'Who Can Apply?',
      requirements: [
        'Minimum GPA: 13/20 (Form 1), 13.5/20 (Form 2)',
        'Good conduct and discipline record from current school',
        'Active participation in at least one school activity (sports, clubs, community service)',
        'Form 1 students: Entrance exam scores 70%+ OR outstanding FSLC results',
        'Strong recommendation from current teachers',
        'Commitment to bilingual (English-French) education'
      ]
    },
    
    timeline: {
      title: 'Application Timeline',
      applicationsOpen: 'June 1, 2025',
      finalDeadline: 'August 15, 2025',
      interviews: 'Late August 2025',
      awards: 'September 1, 2025'
    },
    
    fees: {
      annualTuitionXAF: 350000,
      annualTuitionUSD: 583
    },
    
    documents: [
      {
        category: 'Academic Documents',
        items: [
          'Last two term report cards',
          'Entrance exam results (Form 1)',
          'FSLC certificate (Form 2)',
          'Official transcript from previous school',
          'Teacher recommendation letter (academic)',
          'School attendance certificate'
        ]
      },
      {
        category: 'Personal & Financial',
        items: [
          'Personal statement (500 words) - Why GBAAST?',
          'Parent/Guardian income statement (if need-based)',
          'Family financial documents (if applying for aid)',
          'Birth certificate copy',
          '4 passport-size photographs',
          'Parent/Guardian national ID copy'
        ]
      },
      {
        category: 'Additional (if applicable)',
        items: [
          'Sports/arts certificates or achievement letters',
          'Community service letters or volunteer documentation',
          'Club leadership or participation records',
          'Any other relevant achievement certificates'
        ]
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Self-Assessment & Preparation',
        dateRange: 'June 1-15, 2025',
        description: 'Review your eligibility and begin preparation',
        details: [
          'Check your current GPA against minimum requirements',
          'Review your school records and achievements',
          'Identify which scholarships you may qualify for',
          'Start writing your personal statement draft',
          'Gather contact information for recommenders'
        ]
      },
      {
        step: 2,
        title: 'Document Collection',
        dateRange: 'June 15 - July 31, 2025',
        description: 'Gather all required documents and recommendations',
        details: [
          'Request official transcripts from current school',
          'Ask teacher for academic recommendation letter',
          'Collect entrance exam results or FSLC documents',
          'Prepare family financial documents if needed',
          'Get passport photos taken',
          'Prepare birth certificate copy'
        ]
      },
      {
        step: 3,
        title: 'Application Submission',
        dateRange: 'Before August 15, 2025',
        description: 'Submit complete application online',
        details: [
          'Visit GBAAST admissions portal',
          'Complete application form with accurate information',
          'Upload scanned copies of all required documents',
          'Attach personal statement in PDF format',
          'Confirm submission receipt via email',
          'Keep confirmation number for reference'
        ]
      },
      {
        step: 4,
        title: 'Interview Preparation',
        dateRange: 'August 20-31, 2025 (if selected)',
        description: 'Prepare for your interview with the committee',
        details: [
          'Receive interview invitation via email',
          'Choose interview time (in-person or virtual)',
          'Prepare responses about your goals and family',
          'Practice discussing your achievements',
          'Plan questions to ask about GBAAST',
          'Arrange transportation/setup for interview'
        ]
      },
      {
        step: 5,
        title: 'Decision & Enrollment',
        dateRange: 'September 1, 2025 onwards',
        description: 'Receive decision and complete enrollment',
        details: [
          'Check admissions portal for decision',
          'Review scholarship award letter if applicable',
          'Sign scholarship agreement (if awarded)',
          'Complete enrollment registration',
          'Pay deposit or arrange payment plan',
          'Receive orientation schedule'
        ]
      }
    ],
    
    tips: [
      'Start early - do not wait until the last week',
      'Be honest in your personal statement - authenticity matters',
      'Secure strong recommendations from teachers who know you well',
      'Keep copies of everything you submit',
      'Check email regularly for updates and interview invitations',
      'Practice interview questions with a parent or teacher'
    ],
    
    successTips: [
      {
        title: 'Strong Personal Statements',
        content: 'Share specific examples of your achievements and growth. Explain why GBAAST is important to you. Show self-awareness and genuine interest in bilingual education.'
      },
      {
        title: 'Interview Success',
        content: 'Be confident and honest. Discuss your goals, family values, and commitment to learning. Ask thoughtful questions about GBAAST to show genuine interest.'
      },
      {
        title: 'Complete Applications',
        content: 'Incomplete applications are automatically rejected. Double-check all documents are included before submitting. Verify file names and formats are correct.'
      }
    ],
    
    faqs: [
      {
        question: 'Can I apply if my GPA is below 13/20?',
        answer: 'Generally no, but exceptional cases may be reviewed. Email admissions@gbaast.edu.cm with your circumstances.'
      },
      {
        question: 'Is the interview in English or French?',
        answer: 'The interview will test both languages to assess bilingual capability. Be prepared to speak in both.'
      },
      {
        question: 'When will I know if I got an interview?',
        answer: 'Interview invitations are sent via email by August 20. Contact admissions if you do not receive one by then.'
      },
      {
        question: 'Can I apply for multiple scholarships?',
        answer: 'You can apply for multiple, but you can only receive one. Choose your top choice in the application.'
      },
      {
        question: 'What if I missed the deadline?',
        answer: 'Late applications may be accepted on a rolling basis if spots remain. Contact admissions immediately to inquire.'
      }
    ]
  },

  {
    id: 'form-3-4',
    classLevel: 'Form 3 & 4',
    title: 'Form 3 & Form 4 Application Guide',
    subtitle: 'Core Academic & Competition Years',
    color: 'text-green-600',
    bgGradient: 'from-green-600 to-green-800',
    borderColor: 'border-green-200',
    
    overview: 'Form 3 and 4 are critical years of serious academic competition and achievement demonstration. We seek students who have proven their abilities through FSLC results, leadership, and tangible accomplishments. These are the years scholarships become more competitive.',
    
    eligibility: {
      title: 'Who Can Apply?',
      requirements: [
        'Minimum GPA: 14/20 (Form 3), 14.5/20 (Form 4)',
        'Strong FSLC passes in key subjects (Form 3) OR A-Level mock exam results',
        'Demonstrated leadership or significant achievements (sports awards, competition wins, club leadership)',
        'Form 4 students eligible for advanced scholarships including Full Merit & Sports Excellence',
        'Regional or national achievement certificates welcome (science fairs, sports, arts, business)',
        'Evidence of consistent academic improvement over 2+ years'
      ]
    },
    
    timeline: {
      title: 'Application Timeline',
      applicationsOpen: 'June 1, 2025',
      earlyDeadline: 'July 31, 2025 (Priority)',
      finalDeadline: 'August 15, 2025',
      interviews: 'August 20-31, 2025',
      awards: 'September 5, 2025'
    },
    
    fees: {
      annualTuitionXAF: 400000,
      annualTuitionUSD: 667
    },
    
    documents: [
      {
        category: 'Academic Excellence Documents',
        items: [
          'FSLC results and official transcripts',
          'Form 4 mock examination scores',
          'School progress report (last 2 terms)',
          '2 teacher recommendation letters (at least one from Form Tutor)',
          'Class rank or position if available',
          'Subject-specific teacher comments'
        ]
      },
      {
        category: 'Achievement & Personal',
        items: [
          'All competition certificates (science fairs, quizzes, debates)',
          'Sports achievement letters or medals documentation',
          'Club leadership letters or certifications',
          'Portfolio of work (for arts/design applicants)',
          'Personal statement (750 words) - detailed goals and achievements',
          'Parent/Guardian financial documents (if need-based)'
        ]
      },
      {
        category: 'Supporting Documents',
        items: [
          'Letters from mentors or coaches',
          'Community service certificates',
          'Leadership role documentation',
          'International competition participation (if applicable)',
          'Published articles or creative works (if applicable)',
          'Birth certificate and ID copies'
        ]
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Eligibility Verification',
        dateRange: 'June 1-10, 2025',
        description: 'Confirm you meet minimum requirements and identify best scholarships',
        details: [
          'Verify your GPA meets minimum (14/20 Form 3, 14.5/20 Form 4)',
          'Review FSLC results against scholarship requirements',
          'List all achievements and competitions you have participated in',
          'Identify 2-3 scholarships that best fit your profile',
          'Document all certificates and achievement letters you possess',
          'Plan which teachers to approach for recommendations'
        ]
      },
      {
        step: 2,
        title: 'Achievement Portfolio Preparation',
        dateRange: 'June 10 - July 20, 2025',
        description: 'Compile comprehensive documentation of all achievements',
        details: [
          'Gather and photocopy all competition certificates',
          'Organize sports/arts achievements with dates',
          'Prepare portfolio for design/arts applicants',
          'Request detailed recommendation letters from teachers',
          'Get letters of support from coaches or club advisors',
          'Compile evidence of leadership roles with dates and responsibilities'
        ]
      },
      {
        step: 3,
        title: 'Application Completion (Priority Deadline)',
        dateRange: 'July 20 - July 31, 2025',
        description: 'Submit application for priority consideration',
        details: [
          'Complete application form online ',
          'Write focused 750-word personal statement',
          'Upload all 6+ documents in correct formats',
          'Attach certificate photocopies',
          'Attach portfolio for arts/design applicants',
          'Submit by July 31 for priority review'
        ]
      },
      {
        step: 4,
        title: 'Interview Participation',
        dateRange: 'August 20-31, 2025',
        description: 'Attend interview to discuss achievements and goals',
        details: [
          'Prepare 2-minute introduction about yourself and achievements',
          'Review why GBAAST fits your academic goals',
          'Practice discussing leadership experiences',
          'Prepare questions about scholarship terms and conditions',
          'Dress professionally for interview',
          'Bring copy of application and documents'
        ]
      },
      {
        step: 5,
        title: 'Award Decision',
        dateRange: 'September 5, 2025+',
        description: 'Receive scholarship decision and complete enrollment',
        details: [
          'Check admissions portal for results by September 5',
          'Review scholarship award letter and coverage amount',
          'Review renewal conditions and academic requirements',
          'Sign scholarship agreement within 5 days',
          'Complete enrollment registration',
          'Arrange payment plan if needed'
        ]
      }
    ],
    
    tips: [
      'Apply by July 31 for priority consideration - limited spots after this',
      'Document EVERYTHING - keep copies of all certificates and letters',
      'Get strong recommendations from teachers who can speak to your specific achievements',
      'Write a detailed personal statement - this is your chance to stand out',
      'Be authentic about your achievements - do not exaggerate',
      'Prepare to discuss both academic and extracurricular achievements in interview'
    ],
    
    successTips: [
      {
        title: 'Competitive Edge',
        content: 'Form 4 has stronger competition. Stand out with specific, documented achievements. Show consistent improvement over 2+ years, not just one good year.'
      },
      {
        title: 'Achievement Documentation',
        content: 'Provide official certificates from competitions, letters from coaches/advisors, and proof of leadership roles. Vague claims without evidence are not considered.'
      },
      {
        title: 'Scholarship Fit',
        content: 'Apply for scholarships that match your profile. If you are a science student, apply for academic/research scholarships, not sports scholarships.'
      }
    ],
    
    faqs: [
      {
        question: 'What is the priority deadline advantage?',
        answer: 'Form 3 applicants: Top scholarships with early deadline get priority. Form 4: Many scholarships fill by July 31, so early submission increases approval chance.'
      },
      {
        question: 'Can I submit after August 15?',
        answer: 'Only if spaces remain. Competitive scholarships are typically filled by final deadline. Late applications get lower priority.'
      },
      {
        question: 'How are Form 3 vs Form 4 judged differently?',
        answer: 'Form 4 held to higher standards. More competition. Form 4 eligible for Full Merit scholarships requiring exceptional performance (17+/20).'
      },
      {
        question: 'What if I have no competition certificates?',
        answer: 'You can still apply, but achievement through academics and school activities is essential. Strong GPA and leadership letters help compensate.'
      },
      {
        question: 'Is a portfolio required for all applicants?',
        answer: 'Portfolio only required for arts/design/innovation scholarships. Recommend for Form 4 academic applicants if you have published work or projects.'
      }
    ]
  },

  {
    id: 'form-5',
    classLevel: 'Form 5 (A-Level)',
    title: 'Form 5 A-Level Application Guide',
    subtitle: 'Final Year Scholars & Leaders',
    color: 'text-purple-600',
    bgGradient: 'from-purple-600 to-purple-800',
    borderColor: 'border-purple-200',
    
    overview: 'Form 5 is the pinnacle year. We seek final-year scholars who have demonstrated exceptional academic performance, significant leadership, and readiness for university. This is the most competitive year with the largest scholarships available, especially for Full Merit awards.',
    
    eligibility: {
      title: 'Who Can Apply?',
      requirements: [
        'Minimum GPA: 15/20 (or exceptional circumstances reviewed)',
        'Full Merit Scholarships require: 17+/20 AND national/regional achievement',
        'Strong A-Level subject performance in at least 3 subjects',
        'Significant contribution to school/community (club president, tournament winner, published works, innovation)',
        'Leadership demonstrated across multiple years at GBAAST',
        'Evidence of maturity, responsibility, and mentorship abilities',
        'Regional or national competition achievements highly valued'
      ]
    },
    
    timeline: {
      title: 'Application Timeline',
      applicationsOpen: 'June 1, 2025',
      earlyDeadline: 'July 15, 2025 (URGENT)',
      finalDeadline: 'August 1, 2025',
      interviews: 'August 5-20, 2025',
      awards: 'August 25, 2025'
    },
    
    fees: {
      annualTuitionXAF: 450000,
      annualTuitionUSD: 750
    },
    
    documents: [
      {
        category: 'Academic Credentials',
        items: [
          'A-Level mock examination results and scores',
          'Official GPA letter (last 3 terms minimum)',
          '3 teacher recommendation letters (minimum)',
          'Academic principal or head of studies letter',
          'Full academic transcript (Form 3 to present)',
          'Subject-specific teacher evaluations'
        ]
      },
      {
        category: 'Leadership & Achievements',
        items: [
          'Documentation of all leadership positions (dates, responsibilities)',
          'ALL competition certificates (academic, sports, arts)',
          'Published research, articles, or creative works',
          'University acceptance letters (if already received)',
          'Comprehensive personal statement (1000+ words)',
          'Vision statement for future aspirations'
        ]
      },
      {
        category: 'Supporting Documentation',
        items: [
          'Letters of recommendation from mentors',
          'International competition participation documentation',
          'Community service records and impact letters',
          'Innovation/project proposal or completion evidence',
          'Parent/Guardian financial documents (if need-based)',
          'Passport/ID copies'
        ]
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Strategic Planning & Assessment',
        dateRange: 'June 1-5, 2025',
        description: 'Determine scholarship strategy and eligibility',
        details: [
          'Review your exact GPA (below 15/20 = likely rejection)',
          'For 17+/20: Determine if pursuing Full Merit (most competitive)',
          'For 15-16.9/20: Focus on merit/specialized scholarships',
          'List all regional/national achievements',
          'Document leadership roles held (president, secretary, etc)',
          'Identify 2-3 scholarships that match your profile'
        ]
      },
      {
        step: 2,
        title: 'Comprehensive Documentation',
        dateRange: 'June 5 - July 10, 2025',
        description: 'Compile premium documentation package',
        details: [
          'Request 3+ detailed recommendation letters from teachers',
          'Contact academic principal or head of studies for letter',
          'Compile complete portfolio of all certificates and achievements',
          'Write detailed personal statement (1000+ words)',
          'Prepare vision statement for next 5-10 years',
          'Organize documentation chronologically'
        ]
      },
      {
        step: 3,
        title: 'Premium Application Submission',
        dateRange: 'June 5 - July 15, 2025',
        description: 'Submit complete, excellent application for early consideration',
        details: [
          'Complete application form with detailed responses',
          'Attach all 6+ recommendation letters',
          'Include personal statement and vision statement',
          'Upload all achievement certificates',
          'Include evidence of leadership and community impact',
          'Submit well before July 15 deadline'
        ]
      },
      {
        step: 4,
        title: 'Executive Interview Process',
        dateRange: 'August 5-20, 2025',
        description: 'Participate in rigorous interview with senior committee',
        details: [
          'Prepare 3-minute biographical introduction',
          'Prepare detailed answers about 3-4 major achievements',
          'Review your vision statement and be prepared to discuss',
          'Prepare thoughtful questions about GBAAST leadership opportunities',
          'Discuss how you will mentor junior students if awarded',
          'Demonstrate maturity and readiness for leadership'
        ]
      },
      {
        step: 5,
        title: 'Final Award Decision',
        dateRange: 'August 25, 2025+',
        description: 'Receive decision including conditions and expectations',
        details: [
          'Results announced by August 25',
          'Award letter includes scholarship terms and renewal conditions',
          'Leadership expectations clearly outlined',
          'Payment schedule provided',
          'Sign scholarship agreement within 3 days',
          'Complete enrollment immediately'
        ]
      }
    ],
    
    tips: [
      'Apply by July 15 - this is URGENT for Form 5',
      'Full Merit (100%) requires BOTH high GPA (17+) AND major achievements',
      'Write professionally - these statements are read by senior leaders',
      'Get recommendations from teachers who know you very well',
      'Document everything with official certificates, not just claims',
      'Prepare to discuss your leadership impact on the school community',
      'Show long-term vision and commitment to education beyond secondary level'
    ],
    
    successTips: [
      {
        title: 'Full Merit Eligibility',
        content: 'This is extremely competitive. You need BOTH 17+/20 GPA AND significant national/regional achievement. Do not apply for Full Merit unless you truly qualify.'
      },
      {
        title: 'Leadership Documentation',
        content: 'Whether club president, sports captain, or community organizer - provide official documentation of your role, duration, and specific accomplishments.'
      },
      {
        title: 'Vision & Maturity',
        content: 'Show you are ready for university and beyond. Discuss how your achievements have shaped your goals. Demonstrate maturity in how you speak about your accomplishments.'
      }
    ],
    
    faqs: [
      {
        question: 'What makes a competitive Full Merit application?',
        answer: 'GPA 17+/20, national/regional competition win, published work or innovation, substantial leadership, and 3+ months of documentation.'
      },
      {
        question: 'I have 16.5/20 - can I apply for Full Merit?',
        answer: 'No. Full Merit requires 17+/20 minimum. You qualify for standard merit scholarships instead.'
      },
      {
        question: 'How much does leadership matter?',
        answer: 'Heavily. For Form 5, we want students who can mentor others. Leadership positions (president, captain) are expected, not optional.'
      },
      {
        question: 'Is attending international competitions necessary?',
        answer: 'No, but regional/national achievement is essential. International is bonus but local/national results are equally valued.'
      },
      {
        question: 'What if I was not a club president?',
        answer: 'You still need documented leadership - treasurer, secretary, or project lead roles count. Document your specific contributions and impact.'
      }
    ]
  },

  {
    id: 'sixth-form',
    classLevel: 'Lower & Upper Sixth',
    title: 'Sixth Form (A2 Level) Application Guide',
    subtitle: 'University Preparation & Advanced Studies',
    color: 'text-red-600',
    bgGradient: 'from-red-600 to-red-800',
    borderColor: 'border-red-200',
    
    overview: 'Sixth Form scholarships are VERY LIMITED - most are reserved for Form 5 transitions. However, high-achieving sixth form students may be considered. These awards require exceptional academic excellence, university acceptance, and demonstrated leadership.',
    
    eligibility: {
      title: 'Who Can Apply?',
      requirements: [
        'Minimum GPA: 15/20 (Lower Sixth), 15.5/20 (Upper Sixth)',
        'Consistent academic excellence throughout Form 3 to Sixth Form',
        'University acceptance letter (prestigious institutions preferred)',
        'OR strong A2/A-Level predicted grades (A or B)',
        'Proven leadership and mentorship of junior students',
        'International competition participation or publications',
        'Upper Sixth: Very few additional scholarships - most are for Form 5 entrants',
        'Must demonstrate how you will contribute to school leadership'
      ]
    },
    
    timeline: {
      title: 'Application Timeline (Sixth Form Start)',
      applicationsOpen: 'May 1, 2025',
      earlyDeadline: 'June 30, 2025 (Priority)',
      finalDeadline: 'July 15, 2025',
      interviews: 'July 20 - August 5, 2025',
      awards: 'August 10, 2025'
    },
    
    fees: {
      annualTuitionXAF: 480000,
      annualTuitionUSD: 800
    },
    
    documents: [
      {
        category: 'Academic Excellence',
        items: [
          'A-Level mock examination results',
          'Full academic transcript (Form 3 to present)',
          '3 teacher recommendation letters (including A-Level teachers)',
          'Headmaster/Principal endorsement letter',
          'University acceptance letters (MUST be included)',
          'A2/A-Level predicted grade letter from school'
        ]
      },
      {
        category: 'Leadership & Vision',
        items: [
          'Documentation of all leadership positions and impact',
          'Letters of reference from mentees or junior students you mentored',
          'International participation certificates (if applicable)',
          'Published research, articles, or academic works',
          'Comprehensive personal essay (1500+ words)',
          'Vision statement: What will you contribute to GBAAST leadership?'
        ]
      },
      {
        category: 'Supporting Documents',
        items: [
          'Community service and social impact documentation',
          'Advanced research projects or academic innovations',
          'Professional certifications or advanced coursework',
          'Parent/Guardian financial documents (if need-based)',
          'Passport and ID copies',
          'Curriculum vitae or academic CV'
        ]
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Eligibility Assessment',
        dateRange: 'May 1-10, 2025',
        description: 'Confirm eligibility and realistic scholarship chances',
        details: [
          'Verify your GPA: 15/20 (Lower) or 15.5/20 (Upper)',
          'CRITICAL: Do you have university acceptance? (Required)',
          'List leadership roles and mentorship activities',
          'Document 3+ international or national achievements',
          'Honestly assess competitiveness against Form 5 applicants',
          'Understand: Most scholarships go to Form 5. Sixth form spots are 1-2 per year.'
        ]
      },
      {
        step: 2,
        title: 'Premium Portfolio Development',
        dateRange: 'May 10 - June 20, 2025',
        description: 'Build comprehensive, executive-level documentation',
        details: [
          'Request detailed letters from each A-Level teacher',
          'Get Headmaster/Principal endorsement and letter',
          'Compile full academic transcript with explanations',
          'Gather university acceptance letters',
          'Write 1500+ word personal essay on your leadership vision',
          'Document mentorship: with what students and what impact?'
        ]
      },
      {
        step: 3,
        title: 'Executive Application Submission',
        dateRange: 'June 5 - June 30, 2025',
        description: 'Submit professional-standard application',
        details: [
          'Complete application with detailed, thoughtful responses',
          'Attach ALL university acceptance letters',
          'Include 5+ recommendation letters (not just 3)',
          'Submit polished personal essay and vision statement',
          'Include CV-style document of all accomplishments',
          'Submit EARLY - June 30 deadline for priority'
        ]
      },
      {
        step: 4,
        title: 'Formal Executive Interview',
        dateRange: 'July 20 - August 5, 2025',
        description: 'Meet with senior leadership committee',
        details: [
          'Prepare 5-minute presentation about you and university goals',
          'Discuss how you will lead and mentor at sixth form level',
          'Review your acceptance university - why that choice?',
          'Discuss specific leadership legacy you want to build',
          'Ask intelligent questions about GBAAST future direction',
          'Demonstrate executive-level maturity and vision'
        ]
      },
      {
        step: 5,
        title: 'Award Decision & Transition',
        dateRange: 'August 10, 2025+',
        description: 'Receive decision and plan leadership transition',
        details: [
          'Results announced by August 10',
          'Award letter includes mentorship expectations',
          'Schedule transition meeting with senior leadership',
          'Plan mentorship program for junior students',
          'Define your role in sixth form leadership council',
          'Sign agreement with community commitment expectations'
        ]
      }
    ],
    
    tips: [
      'CRITICAL: Have a university acceptance letter - without it, application is weak',
      'Apply early (by June 30) - sixth form scholarships are very limited and fill quickly',
      'Show you will MENTOR junior students - this is a key expectation',
      'Write professional, executive-level essays - you are competing against Form 5',
      'Get very strong letters of reference from A-Level teachers',
      'Document specific, measurable leadership impact - not generic claims',
      'Understand realistically: You are competing against Form 5 for same scholarships'
    ],
    
    successTips: [
      {
        title: 'University Acceptance is Essential',
        content: 'Have your acceptance letter ready. Universities like Oxford, Cambridge, medical schools, and top African universities strengthen your application significantly.'
      },
      {
        title: 'Mentorship Commitment',
        content: 'If awarded, you will mentor Form 1-4 students. Show specific ideas for mentorship programs. Prove you have capacity to balance university prep with mentoring.'
      },
      {
        title: 'Realistic Expectations',
        content: 'Sixth form scholarships are 1-2 per year maximum. GBAAST prioritizes Form 5 entry scholarships. Your chances are lower unless VERY exceptional.'
      }
    ],
    
    faqs: [
      {
        question: 'Do I need university acceptance to apply?',
        answer: 'Yes. Without it, application is incomplete. Even "acceptance pending" is weak - confirmed acceptance letter is needed.'
      },
      {
        question: 'What universities count as "prestigious"?',
        answer: 'Oxford, Cambridge, US Ivy League schools, top medical schools, African flagship universities (University of Ghana, Witwatersrand, etc.)'
      },
      {
        question: 'How many sixth form scholarships are available?',
        answer: 'Typically 1-2 per year. Most scholarships go to Form 5. Do not expect a sixth form scholarship unless you have exceptional credentials.'
      },
      {
        question: 'What if I do not have university acceptance yet?',
        answer: 'You can apply with "predicted grades" letter, but acceptance letter strengthens application significantly. Apply with offers pending if deadline approaching.'
      },
      {
        question: 'How does sixth form scholarship differ from Form 5?',
        answer: 'Form 5: Helps with secondary completion. Sixth Form: Helps with A-Levels + university prep. Different timelines and stricter requirements.'
      }
    ]
  }
];
