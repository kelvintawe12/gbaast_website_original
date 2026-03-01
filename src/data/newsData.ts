export interface NewsItem {
  id: number;
  title: string;
  cat: string;
  date: string;
  image: string;
  excerpt: string;
  readTime: string;
  featured?: boolean;
  author: string;
  content: string[];
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'GBAAST Students Excel in Regional Science Fair',
    cat: 'Academic',
    date: 'Oct 15, 2024',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&h=600&fit=crop',
    excerpt:
      'Our students won top prizes at the Central Region Science Competition with innovative projects in robotics, renewable energy, and biotech.',
    readTime: '4 min read',
    featured: true,
    author: 'GBAAST Academic Desk',
    content: [
      'GBAAST made a strong impression at this year’s Central Region Science Competition, with students presenting practical projects designed to address real community challenges.',
      'The school’s teams showcased prototypes in robotics, renewable energy, and biotechnology, earning praise from judges for creativity, technical depth, and presentation quality.',
      'According to the science faculty, this result reflects the school’s hands-on approach to STEM learning, where students are encouraged to combine research, experimentation, and teamwork.',
      'The administration congratulated the winners and announced plans to expand laboratory resources and mentorship opportunities for future competitions.'
    ]
  },
  {
    id: 2,
    title: 'New Computer Lab Opens with 50 Workstations',
    cat: 'Campus',
    date: 'Sep 28, 2024',
    image:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=900&h=600&fit=crop',
    excerpt:
      'State-of-the-art technology center now available for all students, complete with coding stations, AI tools, and internet-enabled classrooms.',
    readTime: '3 min read',
    author: 'Campus Infrastructure Team',
    content: [
      'GBAAST has officially opened a new computer laboratory equipped with 50 modern workstations to support digital literacy and advanced technical training.',
      'The facility is designed for coding, design, robotics simulation, and online research, with stable internet access and upgraded classroom projection systems.',
      'Teachers have already integrated the new space into ICT and science classes, and students now have additional practical periods focused on project-based learning.',
      'School leadership described the lab as a major step toward preparing learners for university pathways and careers in technology.'
    ]
  },
  {
    id: 3,
    title: '98% Success Rate in GCE O-Level Results',
    cat: 'Academic',
    date: 'Sep 10, 2024',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&h=600&fit=crop',
    excerpt:
      'GBAAST students achieve outstanding results in the 2024 GCE examinations, with record distinctions in science and mathematics.',
    readTime: '5 min read',
    author: 'Examinations Office',
    content: [
      'The 2024 GCE O-Level results have confirmed another year of strong academic performance at GBAAST, with an overall success rate of 98%.',
      'Students recorded excellent scores across key subjects, especially in mathematics, chemistry, and physics, highlighting the effectiveness of targeted revision support.',
      'Parents and teachers credited the achievement to consistent classroom engagement, evening study structures, and personalized academic mentoring.',
      'The school has pledged to build on this momentum by strengthening exam preparation programs and expanding student counseling services.'
    ]
  },
  {
    id: 4,
    title: 'Inter-House Sports Competition Results',
    cat: 'Sports',
    date: 'Aug 22, 2024',
    image:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&h=600&fit=crop',
    excerpt:
      'Exciting finals and remarkable performances crowned Blue House as overall champions in this year’s inter-house sporting event.',
    readTime: '3 min read',
    author: 'Sports Department',
    content: [
      'The annual inter-house sports competition delivered high energy and strong school spirit, with students competing in athletics, football, basketball, and relays.',
      'Blue House secured the championship title after consistent top finishes across multiple events, while Red House and Green House followed closely.',
      'Teachers praised students for discipline, teamwork, and fair play throughout the competition week.',
      'The sports office plans to use top performers to prepare teams for upcoming regional competitions.'
    ]
  },
  {
    id: 5,
    title: 'Cultural Week Celebrates Cameroon Heritage',
    cat: 'Events',
    date: 'Aug 05, 2024',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&h=600&fit=crop',
    excerpt:
      'Students showcased traditional music, dance, food, and art in a vibrant celebration of Cameroon’s cultural richness and diversity.',
    readTime: '4 min read',
    author: 'Student Affairs Office',
    content: [
      'GBAAST Cultural Week brought together students, staff, and families for a colorful celebration of identity, creativity, and national pride.',
      'Activities included dance performances, poetry recitals, culinary displays, and traditional attire exhibitions from different regions.',
      'The event also featured student-led presentations on local languages, customs, and shared values that promote social unity.',
      'Organizers called the week a major success and emphasized its role in building confidence, leadership, and cultural understanding among learners.'
    ]
  },
  {
    id: 6,
    title: 'Form 5 Students Visit University of Yaoundé',
    cat: 'Academic',
    date: 'Jul 18, 2024',
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&h=600&fit=crop',
    excerpt:
      'A career-focused educational tour introduced students to university life, admission pathways, and research opportunities.',
    readTime: '3 min read',
    author: 'Guidance & Counseling Unit',
    content: [
      'Form 5 students participated in an educational trip to the University of Yaoundé to gain direct exposure to higher education environments.',
      'During the visit, students toured lecture halls, laboratories, and faculty offices while engaging with university staff and current undergraduates.',
      'Sessions covered admission criteria, scholarship pathways, and recommended subject choices for different professional fields.',
      'Students described the experience as motivating and useful for setting clearer long-term academic goals.'
    ]
  },
  {
    id: 7,
    title: 'New Library Books Donated by British Council',
    cat: 'Campus',
    date: 'Jul 02, 2024',
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900&h=600&fit=crop',
    excerpt:
      'Our library received hundreds of new books across STEM, humanities, and literature to strengthen bilingual learning resources.',
    readTime: '2 min read',
    author: 'Library Services',
    content: [
      'The GBAAST library has expanded its collection following a significant donation from the British Council.',
      'New titles include science references, language resources, global literature, and revision materials aligned with the current curriculum.',
      'The update supports both English and French learning tracks and improves access to independent reading tools for students.',
      'Library staff confirmed that all materials have been cataloged and are now available for student borrowing.'
    ]
  },
  {
    id: 8,
    title: 'GBAAST Debate Team Wins Regional Championship',
    cat: 'Academic',
    date: 'Jun 15, 2024',
    image:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&h=600&fit=crop',
    excerpt:
      'The GBAAST debate team brought home the regional title after a strong series of bilingual debates and public speaking rounds.',
    readTime: '4 min read',
    author: 'Language Department',
    content: [
      'The GBAAST debate team has been crowned regional champions after an impressive run of performances in this year’s bilingual debate tournament.',
      'Team members demonstrated strong argument structure, evidence-based reasoning, and confident public speaking in both English and French rounds.',
      'Coaches noted that intensive practice sessions and peer review systems played a key role in the team’s preparation.',
      'The victory reinforces GBAAST’s commitment to communication excellence, critical thinking, and leadership development.'
    ]
  },
  {
    id: 9,
    title: 'End of Year Awards Ceremony Highlights',
    cat: 'Events',
    date: 'Jun 01, 2024',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=600&fit=crop',
    excerpt:
      'Academic stars, leadership role models, and sports champions were honored in a memorable end-of-year recognition ceremony.',
    readTime: '5 min read',
    author: 'School Administration',
    content: [
      'The end-of-year ceremony celebrated student achievement across academics, leadership, community service, and sports.',
      'Families and staff attended as top-performing students received medals, certificates, and special commendations from the principal.',
      'Speakers encouraged learners to remain disciplined, resilient, and purpose-driven as they prepare for the next academic stage.',
      'The event closed with cultural performances and a message of gratitude to teachers, parents, and partners.'
    ]
  },
  {
    id: 10,
    title: 'Science Lab Upgrade Expands Practical Learning',
    cat: 'Academic',
    date: 'Nov 08, 2024',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&h=600&fit=crop',
    excerpt:
      'GBAAST has upgraded its science laboratories with new equipment to strengthen hands-on experiments in physics, chemistry, and biology.',
    readTime: '4 min read',
    author: 'STEM Coordination Unit',
    content: [
      'GBAAST has completed a major science lab enhancement project aimed at giving students more practical exposure across the sciences.',
      'The upgraded labs now include modern microscopes, digital measuring instruments, improved chemistry safety kits, and better experiment benches for group activities.',
      'Teachers report that students are more engaged during practical sessions, especially in experimental design, data collection, and lab report writing.',
      'The administration noted that the new setup aligns with its goal of preparing learners for science-based careers through application-focused classroom experiences.'
    ]
  },
  {
    id: 11,
    title: 'GBAAST Choir Inspires Audience at Community Concert',
    cat: 'Events',
    date: 'Nov 18, 2024',
    image:
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=900&h=600&fit=crop',
    excerpt:
      'The school choir delivered a moving performance featuring gospel, classical, and cultural pieces at the annual community music evening.',
    readTime: '3 min read',
    featured: true,
    author: 'Arts & Culture Office',
    content: [
      'The GBAAST choir received a standing ovation at the annual community concert after delivering a powerful set of bilingual and cultural songs.',
      'The performance showcased vocal harmony, stage confidence, and disciplined rehearsal efforts led by the school’s music instructors.',
      'Parents and guests praised the students for their energy, musical expression, and meaningful interpretation of both traditional and modern compositions.',
      'Following the event, the choir announced preparations for an inter-school choral festival to be hosted later this academic year.'
    ]
  }
];
