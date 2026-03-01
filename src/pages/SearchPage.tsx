import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  SearchIcon,
  XIcon,
  BookOpenIcon,
  NewspaperIcon,
  CalendarIcon,
  GraduationCapIcon,
  AwardIcon,
  UsersIcon,
  ClockIcon,
  FilterIcon,
  TrendingUpIcon
} from 'lucide-react';

// Search data - all searchable content from the website
const searchData = [
  // Programs
  {
    id: 1,
    title: 'Computer Science & Technology',
    category: 'Programs',
    description: 'Comprehensive program covering programming, software development, AI, and data science.',
    url: '/programs#degrees',
    icon: GraduationCapIcon,
    tags: ['technology', 'computer', 'programming', 'software', 'AI', 'data science'],
    date: '2024-01-01'
  },
  {
    id: 2,
    title: 'Business Administration',
    category: 'Programs',
    description: 'Learn management, accounting, finance, and entrepreneurship in our bilingual business program.',
    url: '/programs#degrees',
    icon: GraduationCapIcon,
    tags: ['business', 'management', 'accounting', 'finance', 'entrepreneurship'],
    date: '2024-01-01'
  },
  {
    id: 3,
    title: 'Engineering & Applied Sciences',
    category: 'Programs',
    description: 'Study electrical, mechanical, and civil engineering with hands-on lab experience.',
    url: '/programs#degrees',
    icon: GraduationCapIcon,
    tags: ['engineering', 'electrical', 'mechanical', 'civil', 'science', 'lab'],
    date: '2024-01-01'
  },
  {
    id: 4,
    title: 'Medical Sciences',
    category: 'Programs',
    description: 'Pre-medical and nursing programs preparing students for careers in healthcare.',
    url: '/programs#degrees',
    icon: GraduationCapIcon,
    tags: ['medical', 'healthcare', 'nursing', 'medicine', 'health'],
    date: '2024-01-01'
  },
  {
    id: 5,
    title: 'Arts & Humanities',
    category: 'Programs',
    description: 'Explore literature, languages, history, and creative arts in French and English.',
    url: '/programs#degrees',
    icon: GraduationCapIcon,
    tags: ['arts', 'humanities', 'literature', 'languages', 'history', 'creative'],
    date: '2024-01-01'
  },
  
  // News
  {
    id: 6,
    title: 'GBAAST Students Excel in Regional Science Fair',
    category: 'News',
    description: 'Our students won multiple awards at the Central African Regional Science Competition.',
    url: '/news',
    icon: NewspaperIcon,
    tags: ['academic', 'achievement', 'science', 'competition', 'award'],
    date: '2024-10-15'
  },
  {
    id: 7,
    title: 'New Computer Lab Opens with 50 Workstations',
    category: 'News',
    description: 'State-of-the-art computer laboratory facility now available for all students.',
    url: '/news',
    icon: NewspaperIcon,
    tags: ['campus', 'technology', 'computer', 'facility', 'lab'],
    date: '2024-09-28'
  },
  {
    id: 8,
    title: '98% Success Rate in GCE O-Level Results',
    category: 'News',
    description: 'Record-breaking examination results demonstrate academic excellence.',
    url: '/news',
    icon: NewspaperIcon,
    tags: ['academic', 'exam', 'GCE', 'results', 'achievement'],
    date: '2024-09-10'
  },
  
  // Events
  {
    id: 9,
    title: 'Inter-House Sports Competition',
    category: 'Events',
    description: 'Annual sports day featuring athletics, football, basketball, and more.',
    url: '/events',
    icon: CalendarIcon,
    tags: ['sports', 'competition', 'athletics', 'football', 'basketball'],
    date: '2024-11-20'
  },
  {
    id: 10,
    title: 'Cultural Week 2025',
    category: 'Events',
    description: 'Celebrating Cameroon heritage with traditional music, dance, and cuisine.',
    url: '/events',
    icon: CalendarIcon,
    tags: ['culture', 'heritage', 'music', 'dance', 'tradition'],
    date: '2025-03-15'
  },
  {
    id: 11,
    title: 'Annual Science & Technology Exhibition',
    category: 'Events',
    description: 'Student-led projects showcasing innovation in science and technology.',
    url: '/events',
    icon: CalendarIcon,
    tags: ['science', 'technology', 'exhibition', 'innovation', 'projects'],
    date: '2025-04-10'
  },
  
  // Scholarships
  {
    id: 12,
    title: 'Academic Excellence Scholarship',
    category: 'Scholarships',
    description: 'Full tuition scholarship for students with outstanding academic performance.',
    url: '/scholarships',
    icon: AwardIcon,
    tags: ['scholarship', 'academic', 'excellence', 'tuition', 'financial aid'],
    date: '2024-01-01'
  },
  {
    id: 13,
    title: 'STEM Merit Award',
    category: 'Scholarships',
    description: 'Special scholarship for students pursuing science, technology, engineering, and mathematics.',
    url: '/scholarships',
    icon: AwardIcon,
    tags: ['scholarship', 'STEM', 'science', 'technology', 'engineering', 'mathematics'],
    date: '2024-01-01'
  },
  {
    id: 14,
    title: 'Community Leadership Grant',
    category: 'Scholarships',
    description: 'Supporting students who demonstrate exceptional community service and leadership.',
    url: '/scholarships',
    icon: AwardIcon,
    tags: ['scholarship', 'leadership', 'community', 'service', 'grant'],
    date: '2024-01-01'
  },
  
  // Blog
  {
    id: 15,
    title: 'Tips for Success in Bilingual Education',
    category: 'Blog',
    description: 'Strategies for mastering both French and English in academic settings.',
    url: '/blog',
    icon: BookOpenIcon,
    tags: ['education', 'bilingual', 'French', 'English', 'language', 'tips'],
    date: '2024-10-01'
  },
  {
    id: 16,
    title: 'Preparing for University Entrance Exams',
    category: 'Blog',
    description: 'Expert advice on studying for GCE A-Level and university entrance tests.',
    url: '/blog',
    icon: BookOpenIcon,
    tags: ['education', 'exam', 'university', 'GCE', 'study', 'preparation'],
    date: '2024-09-15'
  },
  {
    id: 17,
    title: 'Career Paths in Technology',
    category: 'Blog',
    description: 'Exploring opportunities in software development, cybersecurity, and data science.',
    url: '/blog',
    icon: BookOpenIcon,
    tags: ['career', 'technology', 'software', 'cybersecurity', 'data science'],
    date: '2024-08-20'
  },
  
  // Pages
  {
    id: 18,
    title: 'About GBAAST',
    category: 'Pages',
    description: 'Learn about our mission, vision, and commitment to bilingual education excellence.',
    url: '/about',
    icon: UsersIcon,
    tags: ['about', 'mission', 'vision', 'history', 'bilingual'],
    date: '2024-01-01'
  },
  {
    id: 19,
    title: 'Admissions Process',
    category: 'Pages',
    description: 'Step-by-step guide to applying to GBAAST including requirements and deadlines.',
    url: '/admissions',
    icon: UsersIcon,
    tags: ['admissions', 'apply', 'requirements', 'enrollment', 'registration'],
    date: '2024-01-01'
  },
  {
    id: 20,
    title: 'Campus Life',
    category: 'Pages',
    description: 'Discover student clubs, sports, activities, and residential facilities.',
    url: '/campus-life',
    icon: UsersIcon,
    tags: ['campus', 'student life', 'clubs', 'sports', 'activities', 'residential'],
    date: '2024-01-01'
  },
  {
    id: 21,
    title: 'Alumni Network',
    category: 'Pages',
    description: 'Connect with GBAAST graduates making an impact around the world.',
    url: '/alumni',
    icon: UsersIcon,
    tags: ['alumni', 'graduates', 'network', 'community'],
    date: '2024-01-01'
  },
  {
    id: 22,
    title: 'Research & Innovation',
    category: 'Pages',
    description: 'Explore cutting-edge research projects and innovation initiatives at GBAAST.',
    url: '/programs#research',
    icon: UsersIcon,
    tags: ['research', 'innovation', 'projects', 'academic', 'science'],
    date: '2024-01-01'
  },
];

const categories = ['All', 'Programs', 'News', 'Events', 'Scholarships', 'Blog', 'Pages'];

const popularSearches = [
  'Computer Science',
  'Scholarships',
  'Admissions',
  'Campus Life',
  'GCE Results',
  'Engineering',
  'Business',
  'Medical Sciences'
];

export function SearchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [results, setResults] = useState(searchData);
  const [showFilters, setShowFilters] = useState(false);

  // Get initial search query from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (query) {
      setSearchQuery(query);
    }
  }, [location.search]);

  // Perform search when query or category changes
  useEffect(() => {
    const filtered = searchData.filter(item => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() === '') {
        return true;
      }

      const query = searchQuery.toLowerCase();
      const matchesTitle = item.title.toLowerCase().includes(query);
      const matchesDescription = item.description.toLowerCase().includes(query);
      const matchesCategory = item.category.toLowerCase().includes(query);
      const matchesTags = item.tags.some(tag => tag.toLowerCase().includes(query));

      return matchesTitle || matchesDescription || matchesCategory || matchesTags;
    });

    setResults(filtered);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Update URL with search query
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    } else {
      navigate('/search');
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    navigate('/search');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programs':
        return GraduationCapIcon;
      case 'News':
        return NewspaperIcon;
      case 'Events':
        return CalendarIcon;
      case 'Scholarships':
        return AwardIcon;
      case 'Blog':
        return BookOpenIcon;
      default:
        return UsersIcon;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Programs':
        return 'from-blue-500 to-cyan-500';
      case 'News':
        return 'from-emerald-500 to-teal-500';
      case 'Events':
        return 'from-purple-500 to-pink-500';
      case 'Scholarships':
        return 'from-orange-500 to-red-500';
      case 'Blog':
        return 'from-indigo-500 to-blue-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getResultsCountText = () => {
    if (searchQuery.trim() === '' && selectedCategory === 'All') {
      return `Showing all ${results.length} items`;
    } else if (searchQuery.trim() !== '' && selectedCategory !== 'All') {
      return `Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${searchQuery}" in ${selectedCategory}`;
    } else if (searchQuery.trim() !== '') {
      return `Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${searchQuery}"`;
    } else {
      return `Showing ${results.length} item${results.length !== 1 ? 's' : ''} in ${selectedCategory}`;
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-br from-[#002B5B] to-[#001A3A] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Search GBAAST
            </h1>
            <p className="text-white/80 text-lg">
              Find programs, news, events, scholarships, and more
            </p>
          </div>

          {/* Search Input */}
          <div className="relative">
            <div className="relative">
              <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for programs, news, events, scholarships..."
                className="w-full pl-16 pr-16 py-5 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:border-[#C8102E] focus:bg-white/20 transition-all text-lg"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  <XIcon className="h-6 w-6" />
                </button>
              )}
            </div>
          </div>

          {/* Popular Searches */}
          {searchQuery === '' && (
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm mb-3">Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => handleSearch(search)}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full transition-colors border border-white/20"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filters and Results */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filter Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <FilterIcon className="h-5 w-5 text-gray-600" />
              <h2 className="text-xl font-bold text-gray-800">Filter by Category</h2>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden px-4 py-2 bg-[#002B5B] text-white rounded-lg text-sm font-semibold"
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-[#C8102E] text-white shadow-lg shadow-red-500/30'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <TrendingUpIcon className="h-5 w-5" />
            <p className="font-medium">{getResultsCountText()}</p>
          </div>
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.url}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#C8102E]/30 hover:-translate-y-1"
                >
                  {/* Category Badge */}
                  <div className={`h-2 bg-gradient-to-r ${getCategoryColor(item.category)}`} />
                  
                  <div className="p-6">
                    {/* Icon and Category */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${getCategoryColor(item.category)} bg-opacity-10`}>
                        <Icon className="h-5 w-5 text-[#002B5B]" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#C8102E] transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <ClockIcon className="h-4 w-4" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <span className="text-[#C8102E] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                        View
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          // No Results
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-gray-100 rounded-full mb-6">
              <SearchIcon className="h-16 w-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              No results found
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We couldn't find any results for "{searchQuery}". Try different keywords or browse by category.
            </p>
            <button
              onClick={() => {
                clearSearch();
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-[#C8102E] text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Clear Search & Show All
            </button>
          </div>
        )}
      </div>

      {/* Quick Links Footer */}
      <div className="bg-white border-t border-gray-200 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Can't find what you're looking for?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/admissions"
              className="p-4 bg-gray-50 hover:bg-[#002B5B] hover:text-white rounded-lg text-center transition-colors group"
            >
              <GraduationCapIcon className="h-8 w-8 mx-auto mb-2 text-[#C8102E] group-hover:text-white" />
              <p className="font-semibold">Admissions</p>
            </Link>
            <Link
              to="/programs"
              className="p-4 bg-gray-50 hover:bg-[#002B5B] hover:text-white rounded-lg text-center transition-colors group"
            >
              <BookOpenIcon className="h-8 w-8 mx-auto mb-2 text-[#C8102E] group-hover:text-white" />
              <p className="font-semibold">Programs</p>
            </Link>
            <Link
              to="/scholarships"
              className="p-4 bg-gray-50 hover:bg-[#002B5B] hover:text-white rounded-lg text-center transition-colors group"
            >
              <AwardIcon className="h-8 w-8 mx-auto mb-2 text-[#C8102E] group-hover:text-white" />
              <p className="font-semibold">Scholarships</p>
            </Link>
            <Link
              to="/contact"
              className="p-4 bg-gray-50 hover:bg-[#002B5B] hover:text-white rounded-lg text-center transition-colors group"
            >
              <UsersIcon className="h-8 w-8 mx-auto mb-2 text-[#C8102E] group-hover:text-white" />
              <p className="font-semibold">Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
