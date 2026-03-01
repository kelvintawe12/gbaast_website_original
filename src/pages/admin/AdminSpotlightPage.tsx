import React, { useState } from 'react';
import {
  PlusIcon,
  EditIcon,
  TrashIcon,
  SearchIcon,
  XIcon,
  StarIcon,
  UserIcon,
  BookOpenIcon,
  CalendarIcon } from
'lucide-react';
interface SpotlightItem {
  id: string;
  name: string;
  program: string;
  year: string;
  achievement: string;
  quote: string;
  image: string;
  date: string;
  featured: boolean;
}
const initialSpotlights: SpotlightItem[] = [
{
  id: 'SPT-001',
  name: 'Amara Osei',
  program: 'Computer Science',
  year: '4th Year',
  achievement: 'Won National AI Competition 2025',
  quote: 'University gave me the tools to turn my passion into impact.',
  image:
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
  date: 'Feb 28, 2026',
  featured: true
},
{
  id: 'SPT-002',
  name: 'James Ferreira',
  program: 'Medicine',
  year: '3rd Year',
  achievement: 'Published research in Nature Medicine',
  quote: 'The research opportunities here are unparalleled.',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  date: 'Feb 20, 2026',
  featured: false
},
{
  id: 'SPT-003',
  name: 'Yuki Tanaka',
  program: 'Engineering',
  year: 'Graduate',
  achievement: 'Founded startup valued at $2M',
  quote: 'My professors believed in me before I believed in myself.',
  image:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  date: 'Feb 10, 2026',
  featured: true
}];

export function AdminSpotlightPage() {
  const [spotlights, setSpotlights] =
  useState<SpotlightItem[]>(initialSpotlights);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<SpotlightItem | null>(null);
  const [form, setForm] = useState({
    name: '',
    program: '',
    year: '',
    achievement: '',
    quote: '',
    image: '',
    featured: false
  });
  const filtered = spotlights.filter(
    (s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.program.toLowerCase().includes(search.toLowerCase()) ||
    s.achievement.toLowerCase().includes(search.toLowerCase())
  );
  const openAdd = () => {
    setEditItem(null);
    setForm({
      name: '',
      program: '',
      year: '',
      achievement: '',
      quote: '',
      image: '',
      featured: false
    });
    setShowModal(true);
  };
  const openEdit = (item: SpotlightItem) => {
    setEditItem(item);
    setForm({
      name: item.name,
      program: item.program,
      year: item.year,
      achievement: item.achievement,
      quote: item.quote,
      image: item.image,
      featured: item.featured
    });
    setShowModal(true);
  };
  const handleSave = () => {
    if (!form.name || !form.program || !form.achievement) return;
    if (editItem) {
      setSpotlights((prev) =>
      prev.map((s) =>
      s.id === editItem.id ?
      {
        ...s,
        ...form
      } :
      s
      )
      );
    } else {
      setSpotlights((prev) => [
      {
        id: `SPT-${String(prev.length + 1).padStart(3, '0')}`,
        ...form,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      },
      ...prev]
      );
    }
    setShowModal(false);
  };
  const handleDelete = (id: string) => {
    if (confirm('Remove this spotlight?'))
    setSpotlights((prev) => prev.filter((s) => s.id !== id));
  };
  const toggleFeatured = (id: string) => {
    setSpotlights((prev) =>
    prev.map((s) =>
    s.id === id ?
    {
      ...s,
      featured: !s.featured
    } :
    s
    )
    );
  };
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Student Spotlight
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            {spotlights.length} spotlights,{' '}
            {spotlights.filter((s) => s.featured).length} featured
          </p>
        </div>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm">

          <PlusIcon size={16} />
          Add Spotlight
        </button>
      </div>

      <div className="relative max-w-sm">
        <SearchIcon
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={15} />

        <input
          type="text"
          placeholder="Search spotlights..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((item) =>
        <div
          key={item.id}
          className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-200">

            <div className="relative h-40 bg-slate-100">
              <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                'https://via.placeholder.com/400x160';
              }} />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {item.featured &&
            <div className="absolute top-3 left-3 flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-semibold px-2 py-1 rounded-full">
                  <StarIcon size={10} />
                  Featured
                </div>
            }
              <div className="absolute top-3 right-3 flex items-center gap-1">
                <button
                onClick={() => openEdit(item)}
                className="p-1.5 bg-white/90 rounded-lg text-slate-600 hover:text-indigo-600 transition-colors shadow-sm">

                  <EditIcon size={13} />
                </button>
                <button
                onClick={() => handleDelete(item.id)}
                className="p-1.5 bg-white/90 rounded-lg text-slate-600 hover:text-red-600 transition-colors shadow-sm">

                  <TrashIcon size={13} />
                </button>
              </div>
              <div className="absolute bottom-3 left-3">
                <p className="text-white font-semibold text-sm">{item.name}</p>
                <p className="text-white/80 text-xs">
                  {item.program} · {item.year}
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold text-indigo-600 mb-1">
                {item.achievement}
              </p>
              <p className="text-xs text-slate-500 italic line-clamp-2">
                "{item.quote}"
              </p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-400">{item.date}</span>
                <button
                onClick={() => toggleFeatured(item.id)}
                className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border transition-colors ${item.featured ? 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>

                  <StarIcon size={10} />
                  {item.featured ? 'Featured' : 'Feature'}
                </button>
              </div>
            </div>
          </div>
        )}
        {filtered.length === 0 &&
        <div className="col-span-full text-center py-12 text-slate-400 text-sm">
            No spotlights found
          </div>
        }
      </div>

      {/* Modal */}
      {showModal &&
      <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 sticky top-0 bg-white">
              <h3 className="text-base font-semibold text-slate-900">
                {editItem ? 'Edit Spotlight' : 'Add Spotlight'}
              </h3>
              <button
              onClick={() => setShowModal(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">

                <XIcon size={16} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {[
            {
              label: 'Student Name',
              key: 'name',
              type: 'text',
              placeholder: 'e.g. Jane Smith'
            },
            {
              label: 'Program',
              key: 'program',
              type: 'text',
              placeholder: 'e.g. Computer Science'
            },
            {
              label: 'Year',
              key: 'year',
              type: 'text',
              placeholder: 'e.g. 3rd Year'
            },
            {
              label: 'Achievement',
              key: 'achievement',
              type: 'text',
              placeholder: 'e.g. Won National Competition'
            },
            {
              label: 'Image URL',
              key: 'image',
              type: 'url',
              placeholder: 'https://...'
            }].
            map((field) =>
            <div key={field.key}>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    {field.label}
                  </label>
                  <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.key as keyof typeof form] as string}
                onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  [field.key]: e.target.value
                }))
                }
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

                </div>
            )}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Quote
                </label>
                <textarea
                rows={2}
                placeholder="Student's inspiring quote..."
                value={form.quote}
                onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  quote: e.target.value
                }))
                }
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none" />

              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  featured: e.target.checked
                }))
                }
                className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />

                <span className="text-sm text-slate-700">
                  Feature this spotlight
                </span>
              </label>
            </div>
            <div className="flex justify-end gap-2 px-6 py-4 border-t border-slate-100">
              <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">

                Cancel
              </button>
              <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">

                {editItem ? 'Save Changes' : 'Add Spotlight'}
              </button>
            </div>
          </div>
        </div>
      }
    </div>);

}