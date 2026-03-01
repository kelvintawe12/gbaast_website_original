export interface SpotlightItem {
  id: number;
  name: string;
  program: string;
  year: string;
  achievement: string;
  quote: string;
  detail: string;
  image: string;
  initials: string;
  gradient: string;
  featured: boolean;
  category: string;
  badges: string[];
  views: number;
  likes: number;
  comments: number;
  location: string;
  journey: string;
  skills: string[];
  impact: string;
  futureGoals: string;
  mentorNote: string;
  achievements: { title: string; year: string }[];
}

export const studentSpotlightsData: SpotlightItem[] = [
  {
    id: 1,
    name: 'Amara Osei',
    program: 'Sciences',
    year: 'Form 5 (A-Level)',
    achievement: 'National Science Olympiad Champion 2024',
    quote:
      'GBAAST taught me that curiosity and hard work are the only tools you need to solve any problem.',
    detail:
      'Amara won first place at the National Science Olympiad, representing Cameroon at the African Science Fair in Nairobi. She plans to study Medicine at the University of Yaoundé I.',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80',
    initials: 'AO',
    gradient: 'from-blue-600 to-indigo-800',
    featured: true,
    category: 'Academic',
    badges: ['Science', 'National Champion', 'Form 5'],
    views: 1260,
    likes: 238,
    comments: 42,
    location: 'Yaoundé, Cameroon',
    journey: 'Amara discovered her passion for science in Form 2 when she built a working model of the human circulatory system. By Form 3, she was leading science club experiments and mentoring younger students. In Form 4, she entered her first regional science competition and placed second. Her determination to improve led to intense study and practice, ultimately earning her first place at nationals.',
    skills: ['Research', 'Laboratory Analysis', 'Scientific Writing', 'Problem Solving', 'Leadership', 'Mentorship'],
    impact: 'Founded the GBAAST Science Olympiad Club, which now has 45 active members. Organized three science fairs that attracted 400+ students from neighboring schools. Mentored 12 junior students who advanced to regional competitions.',
    futureGoals: 'Study Medicine at University of Yaoundé I and eventually conduct medical research in infectious diseases. Aims to make healthcare innovations accessible to rural communities in Cameroon.',
    mentorNote: '\"Amara is exceptional. Her curiosity is matched only by her work ethic. She asks the right questions, persists through failures, and inspires those around her. She has the makings of a remarkable scientist.\" — Dr. Marie Fotso, Biology Teacher',
    achievements: [
      { title: 'National Science Olympiad Champion', year: '2024' },
      { title: 'Regional Science Fair First Place', year: '2023' },
      { title: 'GBAAST Academic Excellence Award', year: '2023' },
      { title: 'African Science Fair Participant', year: '2024' }
    ]
  },
  {
    id: 2,
    name: 'Jean-Paul Mbarga',
    program: 'Technology',
    year: 'Form 4',
    achievement: 'Built a school attendance app used by 3 schools',
    quote:
      'The coding skills I learned here let me build real solutions for real problems in my community.',
    detail:
      'Jean-Paul developed a mobile attendance tracking app during his free periods. The app is now used by GBAAST and two neighboring schools, tracking over 1,500 students daily.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    initials: 'JM',
    gradient: 'from-emerald-600 to-teal-800',
    featured: true,
    category: 'Innovation',
    badges: ['Technology', 'Innovation', 'Form 4'],
    views: 1820,
    likes: 305,
    comments: 61,
    location: 'Mbankom, Yaoundé',
    journey: 'Jean-Paul started coding in Form 1 with simple HTML projects. By Form 2, he was teaching TechClub members Python basics. In Form 3, he tackled a real school problem—manual attendance tracking. He spent 3 months learning mobile development frameworks, then built and deployed the first version of his app.',
    skills: ['Mobile App Development', 'Full-Stack Programming', 'UI/UX Design', 'Database Management', 'Problem Solving', 'Team Leadership'],
    impact: 'Created an app that automated attendance tracking for 1,500+ students across 3 schools, saving teachers 5+ hours weekly. Trained 20 students in coding fundamentals. Attracted tech mentorship from industry professionals.',
    futureGoals: 'Build more educational technology solutions that bridge the digital divide in Cameroon. Plans to start a tech startup focused on school management systems while studying Computer Science at a top university.',
    mentorNote: '\"Jean-Paul doesn\'t just learn technology—he applies it to real problems. His app has genuine impact. He has entrepreneurial spirit and the technical chops to back it up.\" — Mr. Kevins Tafih, IT Teacher',
    achievements: [
      { title: 'School Attendance App Developer', year: '2024' },
      { title: 'TechClub Vice President', year: '2023-2024' },
      { title: 'Cameroon Youth Innovation Award Nominee', year: '2024' },
      { title: 'Google Developer Student Club Mentor', year: '2024' }
    ]
  },
  {
    id: 3,
    name: 'Fatima Al-Hassan',
    program: 'Arts & Humanities',
    year: 'Form 5 (A-Level)',
    achievement: 'Published debut novel at age 17',
    quote:
      'My literature teacher at GBAAST saw a writer in me before I saw one in myself.',
    detail:
      'Fatima published her debut novel "Voices of the Savanna" — a bilingual story set in Northern Cameroon. The book has been adopted by several schools as supplementary reading material.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
    initials: 'FA',
    gradient: 'from-purple-600 to-indigo-800',
    featured: false,
    category: 'Arts',
    badges: ['Arts', 'Published Author', 'Form 5'],
    views: 940,
    likes: 167,
    comments: 25,
    location: 'Garoua, Cameroon',
    journey: 'Fatima was always a storyteller. In Form 1, her essays earned praise from teachers. By Form 3, she was writing short stories in both English and French for the school magazine. Her teacher encouraged her to develop one story into a full novel. She drafted "Voices of the Savanna" over 18 months, submitted to publishers, and was accepted at age 17.',
    skills: ['Creative Writing', 'Bilingual Storytelling', 'Research', 'Character Development', 'Cultural Heritage Documentation', 'Publishing'],
    impact: 'Published a novel that preserves Northern Cameroon cultural narratives and is used in schools as supplementary reading. Inspired 30+ students to pursue creative writing. Established the Literary Arts Club which now has 50 active writers.',
    futureGoals: 'Publish at least one book every two years while studying at a top African university. Become an advocate for African literature and mentor young writers from underrepresented communities.',
    mentorNote: '\"Fatima has a voice that deserves to be heard. Her novel is not just a debut—it\'s a contribution to our literary heritage. She writes with maturity, empathy, and a deep understanding of her culture.\" — Mrs. Aminata Sow, Literature Teacher',
    achievements: [
      { title: 'Published Author - Voices of the Savanna', year: '2024' },
      { title: 'Literary Arts Club President', year: '2023-2024' },
      { title: 'National Young Writers Award', year: '2023' },
      { title: 'School Magazine Editor', year: '2022-2024' }
    ]
  },
  {
    id: 4,
    name: 'Samuel Tabi',
    program: 'Sports & PE',
    year: 'Form 3',
    achievement: 'Selected for Cameroon U-17 Football Team',
    quote:
      'GBAAST proves every day that you can be a top student AND a top athlete.',
    detail:
      'Samuel was scouted and selected for the Cameroon Under-17 national football team while maintaining a GPA of 3.7. He balances training sessions with academic excellence.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
    initials: 'ST',
    gradient: 'from-amber-500 to-orange-700',
    featured: false,
    category: 'Sports',
    badges: ['Sports', 'National Team', 'Form 3'],
    views: 2140,
    likes: 410,
    comments: 74,
    location: 'Douala, Cameroon',
    journey: 'Samuel played football since childhood but became serious in Form 1 at GBAAST. He joined the school team and quickly became a standout midfielder. In Form 2, he led the school to the regional championship. His combination of technical skill and game intelligence caught the attention of national scouts. By mid-Form 3, he earned his U-17 selection while maintaining excellent grades.',
    skills: ['Football/Soccer', 'Tactical Awareness', 'Leadership', 'Discipline', 'Physical Conditioning', 'Team Coordination'],
    impact: 'Led GBAAST football team to regional championship. Mentored 15 younger players on technique and mental toughness. Proved that academic and athletic excellence are compatible, inspiring other student-athletes.',
    futureGoals: 'Progress to the senior national team and play professionally while completing university education. Become a youth coach and establish a football academy in Douala to develop talent in underserved communities.',
    mentorNote: '\"Samuel is extraordinary—not just as an athlete, but as a person. His dedication to both football and academics shows maturity beyond his years. He\'s destined for great things.\" — Coach Michel Dzanfo, Sports Director',
    achievements: [
      { title: 'Cameroon U-17 National Team Selection', year: '2024' },
      { title: 'Regional Football Championship Winner', year: '2023' },
      { title: 'School Football Team Captain', year: '2023-2024' },
      { title: 'Academic Excellence Award for Athletes', year: '2023' }
    ]
  },
  {
    id: 5,
    name: 'Esther Ngono',
    program: 'Business Studies',
    year: 'Form 5 (A-Level)',
    achievement: 'Won Regional Young Entrepreneur Award',
    quote:
      'The entrepreneurship projects at GBAAST gave me real business experience before I even graduated.',
    detail:
      'Esther launched a school supplies cooperative that serves 200+ students. Her business model won the Regional Young Entrepreneur Award and a grant of 500,000 CFA francs.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
    initials: 'EN',
    gradient: 'from-rose-600 to-red-800',
    featured: false,
    category: 'Business',
    badges: ['Business', 'Entrepreneur', 'Form 5'],
    views: 1110,
    likes: 198,
    comments: 39,
    location: 'Bamenda, Cameroon',
    journey: 'Esther recognized a gap in the market during Form 2—students were paying inflated prices for school supplies. She conducted a market survey and developed a business plan in her entrepreneurship class. With support from GBAAST, she assembled a team of 8 students and launched the cooperative in Form 3. Within a year, she had 200+ regular customers and generated 2M CFA in revenue.',
    skills: ['Business Planning', 'Financial Management', 'Sales & Marketing', 'Team Building', 'Negotiation', 'Customer Service'],
    impact: 'Created a sustainable business that generates income for 8 student-employees while offering school supplies at 30% below market rates. Won regional recognition and secured a government grant. Mentored 15 students in basic entrepreneurship.',
    futureGoals: 'Scale the cooperative to other schools across Cameroon. Study business administration at a top university and eventually launch multiple social enterprises that create youth employment.',
    mentorNote: '\"Esther combines vision with execution. She saw an opportunity, created a plan, and got others to believe in it. She\'s not just an A-student—she\'s an entrepreneur with integrity and ambition.\" — Mr. Fabrice Kamga, Business Studies Teacher',
    achievements: [
      { title: 'Regional Young Entrepreneur Award', year: '2024' },
      { title: 'School Supply Cooperative Founder', year: '2023' },
      { title: 'Government Youth Grant Recipient', year: '2024' },
      { title: 'Young Business Leaders Forum Speaker', year: '2024' }
    ]
  },
  {
    id: 6,
    name: 'Pierre Atangana',
    program: 'Bilingual Studies',
    year: 'Form 4',
    achievement: 'Bilingual Debate Champion — West Africa 2024',
    quote: 'Being truly bilingual is a superpower. GBAAST gave me that power.',
    detail:
      'Pierre represented Cameroon at the West African Bilingual Debate Championship, competing in both English and French. He won the Best Speaker award in both languages.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
    initials: 'PA',
    gradient: 'from-cyan-600 to-blue-800',
    featured: false,
    category: 'Academic',
    badges: ['Bilingual', 'Debate', 'Form 4'],
    views: 1335,
    likes: 242,
    comments: 46,
    location: 'Buea, Cameroon',
    journey: 'Pierre grew up exposed to both English and French through his family. At GBAAST, he joined the Debate Club in Form 1 and discovered he could articulate complex ideas fluently in both languages. He competed in regional debates, honed his argumentation skills, and was selected for the West African championship where he competed against speakers from 8 countries.',
    skills: ['Public Speaking', 'Bilingual Communication', 'Critical Analysis', 'Argumentation', 'Research', 'Persuasion'],
    impact: 'Won Best Speaker awards in both English and French at West African Championship. Led the GBAAST Debate Club to regional victory. Mentored 20+ junior debaters and established bilingual debate workshops.',
    futureGoals: 'Study international relations or law while maintaining bilingual fluency. Become a diplomat or human rights advocate, using communication skills to bridge cultures and resolve conflicts.',
    mentorNote: '\"Pierre\'s command of both languages is remarkable, but what impresses me most is his substance. He doesn\'t just speak well—he thinks deeply about important issues and articulates them with grace and precision.\" — Mrs. Beatrice Ako, Debate Coach',
    achievements: [
      { title: 'West African Bilingual Debate Champion', year: '2024' },
      { title: 'Best Speaker - English & French', year: '2024' },
      { title: 'GBAAST Debate Club President', year: '2023-2024' },
      { title: 'National Debate Championship Semi-Finalist', year: '2023' }
    ]
  }
];
