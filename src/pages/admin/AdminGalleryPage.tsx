import React, { useState } from 'react';
import {
  PlusIcon,
  TrashIcon,
  SearchIcon,
  XIcon,
  ImageIcon,
  TagIcon,
  UploadIcon } from
'lucide-react';
interface GalleryItem {
  id: string;
  title: string;
  category: string;
  url: string;
  date: string;
}
const initialGallery: GalleryItem[] = [
{
  id: 'IMG-001',
  title: 'Campus Main Building',
  category: 'Campus',
  url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
  date: 'Feb 28, 2026'
},
{
  id: 'IMG-002',
  title: 'Graduation Ceremony 2025',
  category: 'Events',
  url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  date: 'Feb 25, 2026'
},
{
  id: 'IMG-003',
  title: 'Science Laboratory',
  category: 'Academic',
  url: 'https://images.unsplash.com/photo-1532094349884-543559c5f185?w=600&q=80',
  date: 'Feb 22, 2026'
},
{
  id: 'IMG-004',
  title: 'Sports Day 2025',
  category: 'Sports',
  url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
  date: 'Feb 20, 2026'
},
{
  id: 'IMG-005',
  title: 'Library Reading Room',
  category: 'Campus',
  url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
  date: 'Feb 18, 2026'
},
{
  id: 'IMG-006',
  title: 'Student Union Building',
  category: 'Campus',
  url: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80',
  date: 'Feb 15, 2026'
}];

const categories = [
'Campus',
'Events',
'Academic',
'Sports',
'Research',
'Student Life'];

export function AdminGalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>(initialGallery);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: '',
    category: 'Campus',
    url: ''
  });
  const [preview, setPreview] = useState<GalleryItem | null>(null);
  const filtered = gallery.filter((img) => {
    const matchSearch = img.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = categoryFilter === 'all' || img.category === categoryFilter;
    return matchSearch && matchCat;
  });
  const handleAdd = () => {
    if (!form.title || !form.url) return;
    setGallery((prev) => [
    {
      id: `IMG-${String(prev.length + 1).padStart(3, '0')}`,
      ...form,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    },
    ...prev]
    );
    setForm({
      title: '',
      category: 'Campus',
      url: ''
    });
    setShowModal(false);
  };
  const handleDelete = (id: string) => {
    if (confirm('Remove this image?'))
    setGallery((prev) => prev.filter((img) => img.id !== id));
  };
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Gallery</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            {gallery.length} images
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm">

          <UploadIcon size={16} />
          Add Image
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <SearchIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={15} />

          <input
            type="text"
            placeholder="Search images..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

        </div>
        <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1 flex-wrap">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${categoryFilter === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}>

            All
          </button>
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${categoryFilter === cat ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}>

              {cat}
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((img) =>
        <div
          key={img.id}
          className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-200">

            <div className="aspect-square relative overflow-hidden bg-slate-100">
              <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setPreview(img)}
              onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                'https://via.placeholder.com/300';
              }} />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              <button
              onClick={() => handleDelete(img.id)}
              className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-lg text-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm">

                <TrashIcon size={13} />
              </button>
            </div>
            <div className="p-3">
              <p className="text-xs font-semibold text-slate-800 truncate">
                {img.title}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <TagIcon size={9} className="text-slate-400" />
                <span className="text-xs text-slate-400">{img.category}</span>
              </div>
            </div>
          </div>
        )}
        {filtered.length === 0 &&
        <div className="col-span-full flex flex-col items-center justify-center py-16 text-slate-400">
            <ImageIcon size={40} className="mb-3 opacity-30" />
            <p className="text-sm">No images found</p>
          </div>
        }
      </div>

      {/* Add Modal */}
      {showModal &&
      <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="text-base font-semibold text-slate-900">
                Add Image
              </h3>
              <button
              onClick={() => setShowModal(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">

                <XIcon size={16} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Title
                </label>
                <input
                type="text"
                placeholder="Image title..."
                value={form.title}
                onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  title: e.target.value
                }))
                }
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Category
                </label>
                <select
                value={form.category}
                onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  category: e.target.value
                }))
                }
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white">

                  {categories.map((c) =>
                <option key={c}>{c}</option>
                )}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Image URL
                </label>
                <input
                type="url"
                placeholder="https://..."
                value={form.url}
                onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  url: e.target.value
                }))
                }
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

              </div>
              {form.url &&
            <div className="rounded-lg overflow-hidden border border-slate-200 aspect-video bg-slate-100">
                  <img
                src={form.url}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.display = 'none';
                }} />

                </div>
            }
            </div>
            <div className="flex justify-end gap-2 px-6 py-4 border-t border-slate-100">
              <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">

                Cancel
              </button>
              <button
              onClick={handleAdd}
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">

                Add Image
              </button>
            </div>
          </div>
        </div>
      }

      {/* Preview Modal */}
      {preview &&
      <div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={() => setPreview(null)}>

          <div
          className="relative max-w-3xl w-full"
          onClick={(e) => e.stopPropagation()}>

            <button
            onClick={() => setPreview(null)}
            className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors">

              <XIcon size={24} />
            </button>
            <img
            src={preview.url}
            alt={preview.title}
            className="w-full rounded-xl shadow-2xl" />

            <div className="mt-3 text-center">
              <p className="text-white font-medium">{preview.title}</p>
              <p className="text-white/60 text-sm">
                {preview.category} · {preview.date}
              </p>
            </div>
          </div>
        </div>
      }
    </div>);

}