export interface CampusFacility {
  id: string;
  name: string;
  category: 'Academic' | 'Residential' | 'Sports' | 'Dining' | 'Recreation' | 'Support';
  description: string;
  details: string[];
  image: string;
  features: string[];
  capacity?: string;
  hours?: string;
  highlights: string[];
}

export interface VirtualTour {
  id: string;
  title: string;
  description: string;
  duration: string;
  stops: number;
  imageUrl: string;
  featured: boolean;
}

export const campusFacilities: CampusFacility[] = [
  {
    id: 'facility-001',
    name: 'Main Academic Block',
    category: 'Academic',
    description: 'Our flagship academic building featuring state-of-the-art classrooms equipped with modern technology and interactive learning spaces.',
    details: [
      'Features 32 fully equipped classrooms with smart boards',
      'Air-conditioned learning environment with excellent ventilation',
      'Wheelchair accessible throughout the building',
      'Open study areas on each floor with natural lighting',
      'Modern audiovisual equipment in every classroom'
    ],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    features: [
      'Smart Interactive Boards',
      'WiFi 6 connectivity',
      'Collaborative Learning Spaces',
      'Digital Resource Center',
      'Accessibility Compliance'
    ],
    capacity: 'Up to 800 students simultaneously',
    hours: '7:00 AM - 6:00 PM (School Days)',
    highlights: [
      'Recently renovated with modern amenities',
      'Energy-efficient LED lighting throughout',
      'Soundproofed for optimal learning',
      'Multi-storey design maximizing space'
    ]
  },
  {
    id: 'facility-002',
    name: 'Science & Technology Complex',
    category: 'Academic',
    description: 'Advanced laboratories for Physics, Chemistry, and Biology with equipment exceeding international standards.',
    details: [
      '6 specialized science laboratories',
      'Equipped with microscopes, spectrometers, and modern lab equipment',
      'Safety equipment and ventilation systems',
      'Preparation rooms for complex experiments',
      'Storage facilities for chemical and biological materials'
    ],
    image: 'https://images.unsplash.com/photo-1517486808906-f3fc6476c7a4?w=800',
    features: [
      'Advanced Microscopy Suite',
      'Digital Data Logging Systems',
      'Virtual Lab Simulations',
      'Chemical Safety Protocols',
      'Research-Grade Equipment'
    ],
    capacity: 'Up to 200 students per session',
    hours: '8:00 AM - 5:00 PM',
    highlights: [
      'Meet international lab standards',
      'Regular equipment maintenance and calibration',
      'Expert laboratory technicians on staff',
      'Supports advanced research projects'
    ]
  },
  {
    id: 'facility-003',
    name: 'ICT & Innovation Hub',
    category: 'Academic',
    description: 'Cutting-edge technology center with computer labs, coding spaces, and digital innovation suites.',
    details: [
      '120 modern computers with latest processors',
      'Mac and Windows systems for diverse software learning',
      '3 dedicated coding rooms with specialized setups',
      'Robotics and maker space workshop',
      'High-speed fiber optic internet connectivity'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06fe2acf814?w=800',
    features: [
      'Latest Programming Languages',
      '3D Printing & Prototyping',
      'Robotics Lab',
      'AI/ML Training Environment',
      'Cloud Computing Access'
    ],
    capacity: '500+ users daily',
    hours: '7:00 AM - 8:00 PM',
    highlights: [
      'Partner with leading tech companies',
      '24/7 support for research projects',
      'Regular software and security updates',
      'Tech certification programs available'
    ]
  },
  {
    id: 'facility-004',
    name: 'Library & Learning Commons',
    category: 'Academic',
    description: 'Vast collection of physical and digital resources spanning 5 floors with collaborative study zones.',
    details: [
      '50,000+ physical books and journals',
      '200,000+ digital resources and e-books',
      'Multiple reading zones with different atmospheres',
      'Silent study areas and group collaboration spaces',
      'Online research databases and academic journals'
    ],
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=800',
    features: [
      'Advanced Search Catalog System',
      'Digital Archive Access',
      'Research Consultation Services',
      'Comfortable Study Spaces',
      '24-Hour Study Areas'
    ],
    capacity: '600+ students simultaneously',
    hours: '6:30 AM - 10:00 PM daily',
    highlights: [
      'Expert librarians and research specialists',
      'Advanced peer-to-peer learning areas',
      'Author visits and literary events',
      'Academic writing workshops'
    ]
  },
  {
    id: 'facility-005',
    name: 'Boarding Dormitories',
    category: 'Residential',
    description: 'Comfortable, secure residential facilities with modern amenities ensuring student safety and well-being.',
    details: [
      '8 dormitory buildings (4 for boys, 4 for girls)',
      'Single, double, and triple occupancy rooms available',
      'En-suite bathrooms with hot water 24/7',
      'High-speed WiFi in all rooms',
      'Laundry services and housekeeping staff'
    ],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    features: [
      'Secure Access Control Systems',
      'CCTV Surveillance',
      'Common Lounges & Recreation Areas',
      'Study Rooms per Dormitory',
      'Emergency Response Systems'
    ],
    capacity: '800 boarding students',
    hours: '24/7 occupied',
    highlights: [
      'Strict gender separation and security',
      'Resident advisors available 24/7',
      'Regular maintenance and cleaning',
      'Welcoming community atmosphere'
    ]
  },
  {
    id: 'facility-006',
    name: 'Sports Complex',
    category: 'Sports',
    description: 'World-class athletic facilities supporting multiple sports programs and student wellness.',
    details: [
      'Olympic-standard athletic track (400m)',
      'Multi-court facility for basketball, volleyball, tennis',
      'Football/soccer fields with professional grass',
      'Swimming pool (Olympic size)',
      'Indoor gymnasium for volleyball and basketball'
    ],
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
    features: [
      'Professional Coaching Staff',
      'Sports Medicine Clinic',
      'Strength & Conditioning Lab',
      'Equipment Management System',
      'Performance Analytics Technology'
    ],
    capacity: '500+ athletes across programs',
    hours: '6:00 AM - 8:00 PM (Training Hours)',
    highlights: [
      'Produces inter-house and national champions',
      'Partnership with professional sports federations',
      'State-of-the-art training equipment',
      'Regular sports camps and clinics'
    ]
  },
  {
    id: 'facility-007',
    name: 'Dining Hall & Food Court',
    category: 'Dining',
    description: 'Modern facilities providing nutritious, diverse meals catering to all dietary preferences and requirements.',
    details: [
      'Seats 500+ diners simultaneously',
      'Multiple serving counters for faster service',
      'Kitchen operated by certified chefs',
      'Daily menu featuring local and international cuisine',
      'Dedicated vegetarian and special diet preparation areas'
    ],
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800',
    features: [
      'HACCP Certified Kitchen',
      'Dietary Accommodation Systems',
      'Food Allergy Protocols',
      'Student Feedback Integration',
      'Sustainable Sourcing Practices'
    ],
    capacity: '500+ per sitting (multiple seatings)',
    hours: '6:30 AM - 8:00 PM (Breakfast, Lunch, Dinner)',
    highlights: [
      'Nutritionist-approved menus',
      'Fresh locally-sourced ingredients',
      'Multiple cuisine options daily',
      'Hygiene and safety certifications'
    ]
  },
  {
    id: 'facility-008',
    name: 'Auditorium & Performance Hall',
    category: 'Recreation',
    description: 'State-of-the-art venue for school events, concerts, plays, and presentations.',
    details: [
      'Seating capacity for 1,200 guests',
      'Professional stage with theatrical lighting',
      'Surround sound system and projection equipment',
      'Green rooms for performers with amenities',
      'Accessible seating for persons with disabilities'
    ],
    image: 'https://images.unsplash.com/photo-1519671482677-2fde54dfb075?w=800',
    features: [
      'Professional Sound & Lighting Tech',
      'High-Definition Projection System',
      'Recording & Broadcasting Capability',
      'Tiered Seating for Optimal Viewing',
      'Commercial-Grade Equipment'
    ],
    capacity: '1,200 spectators',
    hours: 'Scheduled events and rehearsals',
    highlights: [
      'Hosts national-level competitions',
      'Professional broadcast capabilities',
      'Supports cultural and academic events',
      'Available for community partnerships'
    ]
  },
  {
    id: 'facility-009',
    name: 'Student Recreation Center',
    category: 'Recreation',
    description: 'Leisure and entertainment facilities promoting student wellness and community building.',
    details: [
      'Gaming lounge with consoles and computers',
      'Billiards and table tennis area',
      'Comfortable lounge seating areas',
      'Television and movie screening room',
      'Board games and reading nooks'
    ],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    features: [
      'Modern Gaming Consoles',
      'Streaming Entertainment Systems',
      'Recreational Software Library',
      'Social Event Hosting',
      'Wellness Activity Programs'
    ],
    capacity: '200+ students simultaneously',
    hours: '3:00 PM - 10:00 PM (School Days), All day weekends',
    highlights: [
      'Student-led activity planning',
      'Monthly gaming tournaments',
      'Community event hosting',
      'Free entertainment access'
    ]
  },
  {
    id: 'facility-010',
    name: 'Medical Center & Health Services',
    category: 'Support',
    description: 'Comprehensive healthcare facility ensuring student health and emergency medical response.',
    details: [
      'On-site medical clinic with qualified doctors',
      '10-bed infirmary for student recovery',
      'Nursing staff available 24/7',
      'Pharmacy with essential medications',
      'Telemedicine access for specialist consultations'
    ],
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800',
    features: [
      '24/7 Medical Coverage',
      'Emergency Response Team',
      'Mental Health Counseling',
      'Vaccination Programs',
      'Health Education Workshops'
    ],
    capacity: '10-bed infirmary plus clinic capacity',
    hours: '24/7 Emergency Services',
    highlights: [
      'Partnership with local hospitals',
      'Preventive health programs',
      'Mental wellness initiatives',
      'Regular health screenings'
    ]
  },
  {
    id: 'facility-011',
    name: 'Arts & Design Studio',
    category: 'Academic',
    description: 'Creative spaces for visual arts, music, and design programs with professional-grade equipment.',
    details: [
      '5 art studios with natural lighting',
      'Music practice rooms with soundproofing',
      'Digital design lab with professional software',
      'Pottery and sculpture workshop',
      'Photography dark room and editing suite'
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    features: [
      'Professional Art Supply Storage',
      'Digital Design Workstations',
      'Music Production Equipment',
      'Exhibition Spaces',
      'Collaborative Creation Areas'
    ],
    capacity: '150+ students daily',
    hours: '8:00 AM - 6:00 PM',
    highlights: [
      'Featured in regional art exhibitions',
      'Professional artist mentorships',
      'Annual art festival hosting',
      'Portfolio development support'
    ]
  },
  {
    id: 'facility-012',
    name: 'Counseling & Support Services',
    category: 'Support',
    description: 'Dedicated team providing academic, personal, and mental health guidance for student success.',
    details: [
      '8 counseling offices for private consultations',
      'Academic guidance and college preparation',
      'Mental health support and crisis intervention',
      'Student mentorship programs',
      'Career guidance and placement support'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    features: [
      'Licensed Counselors & Psychologists',
      'Confidential Support Environment',
      'Peer Support Programs',
      'Crisis Response Team',
      'Family Consultation Services'
    ],
    capacity: 'Individual & group sessions',
    hours: '8:00 AM - 5:00 PM (Hours flexible for emergencies)',
    highlights: [
      'Trained in trauma-informed care',
      'Specialized youth mental health expertise',
      'Family involvement in counseling',
      'Career pathway development'
    ]
  }
];

export const virtualTours: VirtualTour[] = [
  {
    id: 'tour-001',
    title: 'Full Campus Virtual Tour',
    description: 'Comprehensive 3D walkthrough of the entire campus including all major facilities.',
    duration: '25 minutes',
    stops: 12,
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
    featured: true
  },
  {
    id: 'tour-002',
    title: 'Academic Excellence Tour',
    description: 'Explore our state-of-the-art classrooms, labs, and learning centers.',
    duration: '12 minutes',
    stops: 5,
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-f3fc6476c7a4?w=400',
    featured: true
  },
  {
    id: 'tour-003',
    title: 'Residential Life Experience',
    description: 'See dormitory life and student community spaces.',
    duration: '8 minutes',
    stops: 4,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
    featured: false
  },
  {
    id: 'tour-004',
    title: 'Sports & Wellness Center',
    description: 'Tour our athletic facilities and training centers.',
    duration: '10 minutes',
    stops: 3,
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
    featured: false
  },
  {
    id: 'tour-005',
    title: 'Student Life & Recreation',
    description: 'Discover the vibrant social and recreational spaces on campus.',
    duration: '9 minutes',
    stops: 4,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
    featured: false
  }
];

export const tourBookingSlots = [
  { id: 1, date: '2026-03-10', time: '10:00 AM', available: true },
  { id: 2, date: '2026-03-10', time: '2:00 PM', available: true },
  { id: 3, date: '2026-03-11', time: '10:00 AM', available: false },
  { id: 4, date: '2026-03-11', time: '2:00 PM', available: true },
  { id: 5, date: '2026-03-12', time: '10:00 AM', available: true },
  { id: 6, date: '2026-03-12', time: '2:00 PM', available: true },
  { id: 7, date: '2026-03-13', time: '10:00 AM', available: true },
  { id: 8, date: '2026-03-13', time: '2:00 PM', available: false },
  { id: 9, date: '2026-03-15', time: '10:00 AM', available: true },
  { id: 10, date: '2026-03-15', time: '2:00 PM', available: true },
];
