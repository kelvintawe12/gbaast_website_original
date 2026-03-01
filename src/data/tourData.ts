export interface TourGuide {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
  languages: string[];
  experience: string;
}

export interface TourPackage {
  id: string;
  name: string;
  type: 'Standard' | 'Premium' | 'VIP' | 'Family' | 'Student';
  duration: string;
  maxGroupSize: number;
  price: string;
  description: string;
  includes: string[];
  highlights: string[];
  itinerary: {
    time: string;
    location: string;
    activity: string;
    duration: string;
  }[];
  bestFor: string[];
  availability: string[];
}

export interface TourRoute {
  id: string;
  name: string;
  description: string;
  difficulty: 'Easy' | 'Moderate' | 'Comprehensive';
  duration: string;
  distance: string;
  stops: {
    order: number;
    location: string;
    description: string;
    estimatedTime: string;
    highlights: string[];
  }[];
  mapUrl?: string;
}

export const tourGuides: TourGuide[] = [
  {
    id: 'guide-001',
    name: 'Mr. Emmanuel Tanko',
    title: 'Chief Tour Coordinator',
    bio: 'With over 10 years of experience in educational tourism, Emmanuel brings enthusiasm and deep knowledge of GBAAST to every tour.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    specialties: ['Academic Programs', 'Student Life', 'Admissions Process'],
    languages: ['English', 'French', 'Pidgin'],
    experience: '10+ years'
  },
  {
    id: 'guide-002',
    name: 'Mrs. Grace Fon',
    title: 'Student Services Coordinator',
    bio: 'Grace specializes in sharing insights about student support services, campus life, and the boarding experience at GBAAST.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    specialties: ['Boarding Life', 'Student Support', 'Extracurricular Activities'],
    languages: ['English', 'French'],
    experience: '7+ years'
  },
  {
    id: 'guide-003',
    name: 'Mr. Peter Nkeng',
    title: 'Academic Facilities Manager',
    bio: 'Peter provides technical insights into our state-of-the-art facilities, laboratories, and innovation centers.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    specialties: ['Science Labs', 'Technology Centers', 'Research Facilities'],
    languages: ['English'],
    experience: '5+ years'
  },
  {
    id: 'guide-004',
    name: 'Miss Sarah Ayuk',
    title: 'Alumni Relations Officer',
    bio: 'As a GBAAST alumna herself, Sarah shares authentic experiences and connects prospective students with success stories.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    specialties: ['Alumni Network', 'Career Pathways', 'Student Success Stories'],
    languages: ['English', 'French', 'Pidgin'],
    experience: '4+ years'
  }
];

export const tourPackages: TourPackage[] = [
  {
    id: 'package-001',
    name: 'Standard Campus Tour',
    type: 'Standard',
    duration: '90 minutes',
    maxGroupSize: 20,
    price: 'Free',
    description: 'A comprehensive introduction to GBAAST covering all major facilities and campus highlights.',
    includes: [
      'Guided tour of main academic buildings',
      'Visit to science laboratories',
      'Dormitory preview',
      'Student center and dining hall',
      'Sports facilities overview',
      'Q&A session with tour guide',
      'Information packet and brochures'
    ],
    highlights: [
      'Perfect for first-time visitors',
      'Covers all essential areas',
      'Meet current students',
      'Learn about programs and admissions'
    ],
    itinerary: [
      {
        time: '9:00 AM',
        location: 'Visitor Center',
        activity: 'Welcome and Introduction',
        duration: '15 minutes'
      },
      {
        time: '9:15 AM',
        location: 'Main Academic Block',
        activity: 'Classroom and Learning Spaces Tour',
        duration: '20 minutes'
      },
      {
        time: '9:35 AM',
        location: 'Science Complex',
        activity: 'Laboratory Facilities Demonstration',
        duration: '20 minutes'
      },
      {
        time: '9:55 AM',
        location: 'Student Dormitories',
        activity: 'Residential Life Overview',
        duration: '15 minutes'
      },
      {
        time: '10:10 AM',
        location: 'Sports Complex',
        activity: 'Athletic Facilities Tour',
        duration: '15 minutes'
      },
      {
        time: '10:25 AM',
        location: 'Visitor Center',
        activity: 'Q&A and Closing Remarks',
        duration: '5 minutes'
      }
    ],
    bestFor: [
      'Prospective students and parents',
      'First-time visitors',
      'General school overview seekers',
      'Groups from partner schools'
    ],
    availability: ['Monday - Friday', '9:00 AM, 2:00 PM']
  },
  {
    id: 'package-002',
    name: 'Premium Academic Experience',
    type: 'Premium',
    duration: '2.5 hours',
    maxGroupSize: 10,
    price: '5,000 XAF per person',
    description: 'In-depth exploration of academic programs with classroom observations and faculty interactions.',
    includes: [
      'All Standard Tour features',
      'Classroom observation session',
      'Meet department heads',
      'Science lab hands-on demonstration',
      'ICT center workshop preview',
      'Library and resource center tour',
      'Academic counseling session',
      'Light refreshments',
      'GBAAST merchandise gift'
    ],
    highlights: [
      'Direct interaction with teachers',
      'Observe actual classes in session',
      'Personalized academic counseling',
      'Hands-on science experiments'
    ],
    itinerary: [
      {
        time: '9:00 AM',
        location: 'Visitor Center',
        activity: 'VIP Welcome and Campus Overview',
        duration: '20 minutes'
      },
      {
        time: '9:20 AM',
        location: 'Main Academic Block',
        activity: 'Classroom Observation (Math/Science)',
        duration: '30 minutes'
      },
      {
        time: '9:50 AM',
        location: 'Science Complex',
        activity: 'Hands-on Lab Experiment',
        duration: '30 minutes'
      },
      {
        time: '10:20 AM',
        location: 'ICT Hub',
        activity: 'Technology Workshop Preview',
        duration: '25 minutes'
      },
      {
        time: '10:45 AM',
        location: 'Library',
        activity: 'Research Resources and Digital Library Tour',
        duration: '20 minutes'
      },
      {
        time: '11:05 AM',
        location: 'Counseling Center',
        activity: 'One-on-One Academic Counseling',
        duration: '20 minutes'
      },
      {
        time: '11:25 AM',
        location: 'Visitor Center',
        activity: 'Refreshments and Q&A',
        duration: '5 minutes'
      }
    ],
    bestFor: [
      'Seriously considering enrollment',
      'Students interested in specific programs',
      'Parents wanting detailed academic information',
      'Transfer students'
    ],
    availability: ['Tuesday - Thursday', '9:00 AM only (by appointment)']
  },
  {
    id: 'package-003',
    name: 'VIP Executive Tour',
    type: 'VIP',
    duration: '3 hours',
    maxGroupSize: 5,
    price: '15,000 XAF per person',
    description: 'Exclusive comprehensive tour with school leadership, customized to your interests and schedule.',
    includes: [
      'All Premium Tour features',
      'Meet with Principal or Vice Principal',
      'Private session with Admissions Director',
      'Lunch in executive dining area',
      'Customized itinerary based on interests',
      'Full campus access including restricted areas',
      'Priority application processing',
      'Photo session with school leadership',
      'Premium GBAAST merchandise package',
      'Personalized follow-up consultation'
    ],
    highlights: [
      'Meet school leadership personally',
      'Fully customizable experience',
      'Priority admissions consideration',
      'Exclusive access to all facilities'
    ],
    itinerary: [
      {
        time: 'Flexible',
        location: 'Principal\'s Office',
        activity: 'Welcome Meeting with School Leadership',
        duration: '30 minutes'
      },
      {
        time: 'Flexible',
        location: 'Customized',
        activity: 'Personalized Campus Tour Based on Interests',
        duration: '90 minutes'
      },
      {
        time: 'Flexible',
        location: 'Executive Dining',
        activity: 'Lunch with Faculty Members',
        duration: '45 minutes'
      },
      {
        time: 'Flexible',
        location: 'Admissions Office',
        activity: 'Private Admissions Consultation',
        duration: '30 minutes'
      }
    ],
    bestFor: [
      'VIP visitors and dignitaries',
      'International students and families',
      'Major donors and sponsors',
      'High-profile prospective students'
    ],
    availability: ['Any day (by special appointment only)']
  },
  {
    id: 'package-004',
    name: 'Family Discovery Tour',
    type: 'Family',
    duration: '2 hours',
    maxGroupSize: 15,
    price: '2,000 XAF per family',
    description: 'Family-friendly tour designed for parents and students to explore campus together with engaging activities.',
    includes: [
      'Interactive campus tour',
      'Student life demonstration',
      'Sports facilities with mini-activities',
      'Art and music showcase',
      'Family Q&A session',
      'Snacks and refreshments for kids',
      'GBAAST stickers and goodies for children',
      'Family photo opportunity'
    ],
    highlights: [
      'Kid-friendly pace and activities',
      'Interactive demonstrations',
      'Meet student ambassadors',
      'Perfect for young siblings to attend'
    ],
    itinerary: [
      {
        time: '10:00 AM',
        location: 'Visitor Center',
        activity: 'Family Welcome and Icebreaker',
        duration: '15 minutes'
      },
      {
        time: '10:15 AM',
        location: 'Campus Grounds',
        activity: 'Interactive Campus Walk',
        duration: '30 minutes'
      },
      {
        time: '10:45 AM',
        location: 'Sports Complex',
        activity: 'Mini Sports Activities',
        duration: '25 minutes'
      },
      {
        time: '11:10 AM',
        location: 'Arts & Music Center',
        activity: 'Creative Showcase',
        duration: '20 minutes'
      },
      {
        time: '11:30 AM',
        location: 'Student Center',
        activity: 'Refreshments and Family Q&A',
        duration: '30 minutes'
      }
    ],
    bestFor: [
      'Families with younger children',
      'Weekend visitors',
      'Local community members',
      'Group family bookings'
    ],
    availability: ['Saturdays only', '10:00 AM, 2:00 PM']
  },
  {
    id: 'package-005',
    name: 'Student Ambassador Experience',
    type: 'Student',
    duration: '3 hours',
    maxGroupSize: 8,
    price: 'Free',
    description: 'Shadow a current GBAAST student for an authentic day-in-the-life experience.',
    includes: [
      'Assigned student ambassador',
      'Attend 2-3 actual classes',
      'Lunch in student dining hall',
      'Participate in club activities',
      'Dorm room visit',
      'Evening study session',
      'Student social time',
      'Certificate of participation'
    ],
    highlights: [
      'Most authentic campus experience',
      'Real classroom participation',
      'Make friends with current students',
      'Experience actual school day'
    ],
    itinerary: [
      {
        time: '8:00 AM',
        location: 'Main Gate',
        activity: 'Meet Your Student Ambassador',
        duration: '15 minutes'
      },
      {
        time: '8:15 AM',
        location: 'Classrooms',
        activity: 'Attend Morning Classes',
        duration: '90 minutes'
      },
      {
        time: '9:45 AM',
        location: 'Break Area',
        activity: 'Mid-Morning Break with Students',
        duration: '15 minutes'
      },
      {
        time: '10:00 AM',
        location: 'Classrooms',
        activity: 'Attend Another Class Session',
        duration: '45 minutes'
      },
      {
        time: '10:45 AM',
        location: 'Dining Hall',
        activity: 'Lunch with Student Body',
        duration: '45 minutes'
      },
      {
        time: '11:30 AM',
        location: 'Various',
        activity: 'Club/Activity Participation',
        duration: '30 minutes'
      }
    ],
    bestFor: [
      'Students seriously considering enrollment',
      'Grade 8-12 prospective students',
      'Those wanting authentic experience',
      'Students from partner schools'
    ],
    availability: ['Monday - Friday during term', 'Must book 1 week in advance']
  }
];

export const tourRoutes: TourRoute[] = [
  {
    id: 'route-001',
    name: 'Academic Excellence Path',
    description: 'Focus on GBAAST\'s academic facilities, laboratories, and learning spaces.',
    difficulty: 'Easy',
    duration: '45 minutes',
    distance: '0.8 km',
    stops: [
      {
        order: 1,
        location: 'Main Academic Block',
        description: 'Modern classrooms with smart boards and collaborative learning spaces',
        estimatedTime: '10 minutes',
        highlights: [
          '32 fully equipped classrooms',
          'Interactive learning technology',
          'Student lounges'
        ]
      },
      {
        order: 2,
        location: 'Science & Technology Complex',
        description: 'State-of-the-art laboratories for Physics, Chemistry, and Biology',
        estimatedTime: '15 minutes',
        highlights: [
          'Advanced lab equipment',
          'Safety-compliant facilities',
          'Research areas'
        ]
      },
      {
        order: 3,
        location: 'ICT Hub',
        description: 'Computer labs, coding spaces, and innovation center',
        estimatedTime: '12 minutes',
        highlights: [
          '120 modern computers',
          'Robotics lab',
          '3D printing facility'
        ]
      },
      {
        order: 4,
        location: 'Central Library',
        description: 'Comprehensive library with digital resources and quiet study areas',
        estimatedTime: '8 minutes',
        highlights: [
          '15,000+ books',
          'Digital database access',
          'Individual study pods'
        ]
      }
    ]
  },
  {
    id: 'route-002',
    name: 'Student Life Circuit',
    description: 'Experience where students live, eat, play, and relax on campus.',
    difficulty: 'Easy',
    duration: '60 minutes',
    distance: '1.2 km',
    stops: [
      {
        order: 1,
        location: 'Student Dormitories',
        description: 'Comfortable boarding facilities with modern amenities',
        estimatedTime: '15 minutes',
        highlights: [
          'Boys and girls dormitories',
          'Modern bathroom facilities',
          'Study rooms'
        ]
      },
      {
        order: 2,
        location: 'Dining Hall',
        description: 'Spacious cafeteria serving nutritious meals',
        estimatedTime: '10 minutes',
        highlights: [
          'Capacity for 600 students',
          'Balanced meal plans',
          'Modern kitchen'
        ]
      },
      {
        order: 3,
        location: 'Sports Complex',
        description: 'Multiple sports facilities and athletic grounds',
        estimatedTime: '15 minutes',
        highlights: [
          'Football field',
          'Basketball courts',
          'Indoor gymnasium'
        ]
      },
      {
        order: 4,
        location: 'Student Recreation Center',
        description: 'Entertainment and relaxation spaces for students',
        estimatedTime: '12 minutes',
        highlights: [
          'Game rooms',
          'Music practice rooms',
          'Social lounges'
        ]
      },
      {
        order: 5,
        location: 'Medical Center',
        description: '24/7 healthcare facility with qualified nurses',
        estimatedTime: '8 minutes',
        highlights: [
          'Full-time nursing staff',
          'Basic medical equipment',
          'Emergency protocols'
        ]
      }
    ]
  },
  {
    id: 'route-003',
    name: 'Complete Campus Experience',
    description: 'Comprehensive tour covering all major areas of the GBAAST campus.',
    difficulty: 'Comprehensive',
    duration: '2 hours',
    distance: '2.5 km',
    stops: [
      {
        order: 1,
        location: 'Visitor Center & Main Gate',
        description: 'Welcome to GBAAST - History and overview',
        estimatedTime: '10 minutes',
        highlights: [
          'School history display',
          'Information desk',
          'Campus map'
        ]
      },
      {
        order: 2,
        location: 'Administrative Block',
        description: 'School leadership offices and admissions',
        estimatedTime: '8 minutes',
        highlights: [
          'Principal\'s office',
          'Admissions department',
          'Records office'
        ]
      },
      {
        order: 3,
        location: 'Main Academic Block',
        description: 'Primary teaching and learning facilities',
        estimatedTime: '15 minutes',
        highlights: [
          'Classrooms tour',
          'Faculty offices',
          'Resource centers'
        ]
      },
      {
        order: 4,
        location: 'Science Complex',
        description: 'Advanced science laboratories',
        estimatedTime: '15 minutes',
        highlights: [
          'Physics lab',
          'Chemistry lab',
          'Biology lab'
        ]
      },
      {
        order: 5,
        location: 'ICT & Innovation Hub',
        description: 'Technology and digital learning center',
        estimatedTime: '12 minutes',
        highlights: [
          'Computer labs',
          'Coding classrooms',
          'Maker space'
        ]
      },
      {
        order: 6,
        location: 'Library',
        description: 'Central library and learning commons',
        estimatedTime: '10 minutes',
        highlights: [
          'Book collections',
          'Study areas',
          'Digital resources'
        ]
      },
      {
        order: 7,
        location: 'Student Dormitories',
        description: 'Residential accommodations',
        estimatedTime: '12 minutes',
        highlights: [
          'Room layouts',
          'Common areas',
          'Security features'
        ]
      },
      {
        order: 8,
        location: 'Dining Facilities',
        description: 'Cafeteria and meal service',
        estimatedTime: '8 minutes',
        highlights: [
          'Dining hall',
          'Menu options',
          'Meal schedules'
        ]
      },
      {
        order: 9,
        location: 'Sports Complex',
        description: 'Athletic facilities and fields',
        estimatedTime: '15 minutes',
        highlights: [
          'Sports fields',
          'Gymnasium',
          'Changing rooms'
        ]
      },
      {
        order: 10,
        location: 'Arts & Music Center',
        description: 'Creative arts facilities',
        estimatedTime: '10 minutes',
        highlights: [
          'Art studio',
          'Music practice rooms',
          'Performance space'
        ]
      },
      {
        order: 11,
        location: 'Medical Center',
        description: 'Healthcare and wellness facility',
        estimatedTime: '5 minutes',
        highlights: [
          'Clinic',
          'Nursing staff',
          'Health services'
        ]
      }
    ]
  }
];

// Helper functions
export const getTourPackageById = (id: string) => {
  return tourPackages.find(pkg => pkg.id === id);
};

export const getTourPackagesByType = (type: TourPackage['type']) => {
  return tourPackages.filter(pkg => pkg.type === type);
};

export const getTourGuideById = (id: string) => {
  return tourGuides.find(guide => guide.id === id);
};

export const getTourRouteById = (id: string) => {
  return tourRoutes.find(route => route.id === id);
};

export const getAvailableTourTimes = (packageId: string, date: Date) => {
  const tourPackage = getTourPackageById(packageId);
  if (!tourPackage) return [];
  
  // This is a simplified version - in production, this would check actual availability
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  
  // Check if the package is available on this day
  const isAvailable = tourPackage.availability.some(av => 
    av.toLowerCase().includes(dayOfWeek.toLowerCase())
  );
  
  if (!isAvailable) return [];
  
  // Return the available times
  const times = tourPackage.availability
    .find(av => av.includes('AM') || av.includes('PM'))
    ?.split(',')
    .map(time => time.trim()) || [];
    
  return times;
};
