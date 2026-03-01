import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, List, X, ChevronLeft, ChevronRight } from 'lucide-react';
const galleryItems = [
{
  title: 'Main School Building',
  category: 'Campus',
  description: 'The iconic entrance of GBAAST',
  color: 'from-blue-500 to-indigo-600'
},
{
  title: 'Science Laboratory',
  category: 'Academics',
  description: 'State-of-the-art science lab',
  color: 'from-emerald-400 to-teal-500'
},
{
  title: 'Football Match',
  category: 'Sports',
  description: 'Inter-house football competition',
  color: 'from-orange-400 to-red-500'
},
{
  title: 'Cultural Day',
  category: 'Events',
  description: 'Students celebrating Cultural Week',
  color: 'from-purple-500 to-pink-500'
},
{
  title: 'Student Dormitory',
  category: 'Dormitory',
  description: 'Modern boarding facilities',
  color: 'from-cyan-400 to-blue-500'
},
{
  title: 'Graduation Ceremony',
  category: 'Graduation',
  description: 'Class of 2024 graduates',
  color: 'from-yellow-400 to-orange-500'
},
{
  title: 'Computer Lab',
  category: 'Academics',
  description: '50 modern workstations',
  color: 'from-indigo-500 to-blue-600'
},
{
  title: 'Basketball Court',
  category: 'Sports',
  description: 'Students during PE class',
  color: 'from-red-500 to-rose-500'
},
{
  title: 'Library Reading Room',
  category: 'Academics',
  description: 'Quiet study environment',
  color: 'from-teal-400 to-emerald-500'
},
{
  title: 'School Assembly',
  category: 'Events',
  description: 'Morning assembly on the field',
  color: 'from-blue-400 to-cyan-500'
},
{
  title: 'Dormitory Common Room',
  category: 'Dormitory',
  description: 'Recreation area for boarders',
  color: 'from-pink-500 to-rose-500'
},
{
  title: 'Prize Giving Day',
  category: 'Graduation',
  description: 'Awarding top performers',
  color: 'from-amber-400 to-orange-500'
},
{
  title: 'School Garden',
  category: 'Campus',
  description: 'Environmental club project',
  color: 'from-green-400 to-emerald-500'
},
{
  title: 'Debate Competition',
  category: 'Events',
  description: 'Regional debate championship',
  color: 'from-violet-500 to-purple-600'
},
{
  title: 'Sports Day',
  category: 'Sports',
  description: 'Annual athletics competition',
  color: 'from-orange-500 to-amber-500'
},
{
  title: 'Chapel Service',
  category: 'Campus',
  description: 'Weekly spiritual gathering',
  color: 'from-slate-500 to-gray-600'
}];

const categories = [
'All',
'Campus',
'Academics',
'Sports',
'Events',
'Dormitory',
'Graduation'];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const filteredItems =
  activeCategory === 'All' ?
  galleryItems :
  galleryItems.filter((item) => item.category === activeCategory);
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem !== null) {
      setSelectedItem(
        (selectedItem - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem !== null) {
      setSelectedItem((selectedItem + 1) % filteredItems.length);
    }
  };
  return (
    <div className="pt-20">
      <div className="bg-[#002B5B] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Campus Gallery
        </h1>
        <p className="text-white/70 font-medium">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{' '}
          <span className="mx-2">/</span> Gallery
        </p>
      </div>

      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Explore our beautiful campus, academic facilities, and vibrant
            student life through our photo gallery.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {categories.map((cat) =>
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-colors ${activeCategory === cat ? 'bg-[#C8102E] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>

                  {cat}
                </button>
              )}
            </div>

            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#002B5B]' : 'text-gray-500 hover:text-gray-700'}`}
                aria-label="Grid view">

                <LayoutGrid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-[#002B5B]' : 'text-gray-500 hover:text-gray-700'}`}
                aria-label="List view">

                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {viewMode === 'grid' ?
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) =>
            <div
              key={index}
              onClick={() => setSelectedItem(index)}
              className="rounded-xl overflow-hidden relative group cursor-pointer hover:shadow-xl transition-all duration-300">

                  <div
                className={`h-56 bg-gradient-to-br ${item.color} w-full`}>
              </div>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#002B5B] text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
            )}
            </div> :

          <div className="flex flex-col gap-6">
              {filteredItems.map((item, index) =>
            <div
              key={index}
              onClick={() => setSelectedItem(index)}
              className="flex flex-col sm:flex-row bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden cursor-pointer group">

                  <div
                className={`w-full sm:w-48 h-48 sm:h-36 bg-gradient-to-br ${item.color} flex-shrink-0`}>
              </div>
                  <div className="p-6 flex flex-col justify-center flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gray-100 text-[#002B5B] text-xs font-bold px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#002B5B] mb-2 group-hover:text-[#C8102E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center px-6 border-l border-gray-100">
                    <span className="text-[#C8102E] font-medium text-sm group-hover:underline">
                      View Details
                    </span>
                  </div>
                </div>
            )}
            </div>
          }

          {filteredItems.length === 0 &&
          <div className="text-center py-20 text-gray-500">
              No images found for this category.
            </div>
          }
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem !== null &&
      <div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={() => setSelectedItem(null)}>

          <button
          className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
          onClick={() => setSelectedItem(null)}>

            <X className="h-8 w-8" />
          </button>

          <div
          className="relative w-full max-w-5xl flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}>

            <div
            className={`w-full h-[50vh] md:h-[70vh] rounded-lg bg-gradient-to-br ${filteredItems[selectedItem].color} shadow-2xl mb-6`}>
          </div>

            <div className="text-center w-full max-w-2xl">
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                {filteredItems[selectedItem].category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {filteredItems[selectedItem].title}
              </h3>
              <p className="text-white/70 text-lg">
                {filteredItems[selectedItem].description}
              </p>
            </div>

            <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4">

              <ChevronLeft className="h-12 w-12" />
            </button>
            <button
            onClick={handleNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4">

              <ChevronRight className="h-12 w-12" />
            </button>
          </div>
        </div>
      }
    </div>);

}