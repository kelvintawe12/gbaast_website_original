import React, { useState } from 'react';
import {
  PlusIcon,
  EditIcon,
  TrashIcon,
  SearchIcon,
  XIcon,
  EyeIcon,
  CalendarIcon,
  TagIcon,
  ImageIcon } from
'lucide-react';
interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  status: 'published' | 'draft';
  author: string;
  image: string;
}
const initialNews: NewsItem[] = [
{
  id: 'NEWS-001',
  title: 'University Launches New AI Research Center',
  excerpt:
  'The university has opened a state-of-the-art artificial intelligence research facility...',
  category: 'Research',
  date: 'Feb 28, 2026',
  status: 'published',
  author: 'Admin',
  image:
  'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80'
},
{
  id: 'NEWS-002',
  title: 'Annual Scholarship Applications Now Open',
  excerpt:
  'Students can now apply for the annual merit-based scholarship program...',
  category: 'Admissions',
  date: 'Feb 25, 2026',
  status: 'published',
  author: 'Admin',
  image:
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80'
},
{
  id: 'NEWS-003',
  title: 'Campus Expansion Project Announced',
  excerpt:
  'The board of directors has approved a major campus expansion initiative...',
  category: 'Campus',
  date: 'Feb 22, 2026',
  status: 'draft',
  author: 'Admin',
  image:
  'https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80'
},
{
  id: 'NEWS-004',
  title: 'International Student Exchange Program',
  excerpt: 'New partnerships with 15 universities across Europe and Asia...',
  category: 'International',
  date: 'Feb 20, 2026',
  status: 'published',
  author: 'Admin',
  image:
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80'
}];

const categories = [
'Research',
'Admissions',
'Campus',
'International',
'Events',
'Academic',
'Sports'];

export function AdminNewsPage() {
  const [news, setNews] = useState<NewsItem[]>(initialNews);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<NewsItem | null>(null);
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    category: 'Research',
    status: 'draft' as 'published' | 'draft',
    image: ''
  });
  const filtered = news.filter(
    (n) =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.category.toLowerCase().includes(search.toLowerCase())
  );
  const openAdd = () => {
    setEditItem(null);
    setForm({
      title: '',
      excerpt: '',
      category: 'Research',
      status: 'draft',
      image: ''
    });
    setShowModal(true);
  };
  const openEdit = (item: NewsItem) => {
    setEditItem(item);
    setForm({
      title: item.title,
      excerpt: item.excerpt,
      category: item.category,
      status: item.status,
      image: item.image
    });
    setShowModal(true);
  };
  const handleSave = () => {
    if (!form.title || !form.excerpt) return;
    if (editItem) {
      setNews((prev) =>
      prev.map((n) =>
      n.id === editItem.id ?
      {
        ...n,
        ...form
      } :
      n
      )
      );
    } else {
      setNews((prev) => [
      {
        id: `NEWS-${String(prev.length + 1).padStart(3, '0')}`,
        ...form,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        author: 'Admin'
      },
      ...prev]
      );
    }
    setShowModal(false);
  };
  const handleDelete = (id: string) => {
    if (confirm('Delete this news article?'))
    setNews((prev) => prev.filter((n) => n.id !== id));
  };
  const toggleStatus = (id: string) => {
    setNews((prev) =>
    prev.map((n) =>
    n.id === id ?
    {
      ...n,
      status: n.status === 'published' ? 'draft' : 'published'
    } :
    n
    )
    );
  };
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">News</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            {news.filter((n) => n.status === 'published').length} published,{' '}
            {news.filter((n) => n.status === 'draft').length} drafts
          </p>
        </div>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm">

          <PlusIcon size={16} />
          New Article
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200">
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
          <div className="relative flex-1 max-w-sm">
            <SearchIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={15} />

            <input
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

          </div>
        </div>

        <div className="divide-y divide-slate-50">
          {filtered.map((item) =>
          <div
            key={item.id}
            className="flex items-start gap-4 px-5 py-4 hover:bg-slate-50/50 transition-colors">

              <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0 bg-slate-100"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                'https://via.placeholder.com/64';
              }} />

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                    onClick={() => openEdit(item)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">

                      <EditIcon size={14} />
                    </button>
                    <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors">

                      <TrashIcon size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <TagIcon size={10} />
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <CalendarIcon size={10} />
                    {item.date}
                  </span>
                  <button
                  onClick={() => toggleStatus(item.id)}
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${item.status === 'published' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'}`}>

                    {item.status === 'published' ? 'Published' : 'Draft'}
                  </button>
                </div>
              </div>
            </div>
          )}
          {filtered.length === 0 &&
          <div className="text-center py-12 text-slate-400 text-sm">
              No articles found
            </div>
          }
        </div>
      </div>

      {/* Modal */}
      {showModal &&
      <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 sticky top-0 bg-white">
              <h3 className="text-base font-semibold text-slate-900">
                {editItem ? 'Edit Article' : 'New Article'}
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
                placeholder="Article title..."
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
                  Excerpt
                </label>
                <textarea
                rows={3}
                placeholder="Brief description..."
                value={form.excerpt}
                onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  excerpt: e.target.value
                }))
                }
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none" />

              </div>
              <div className="grid grid-cols-2 gap-4">
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
                    Status
                  </label>
                  <select
                  value={form.status}
                  onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    status: e.target.value as 'published' | 'draft'
                  }))
                  }
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white">

                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Image URL
                </label>
                <input
                type="url"
                placeholder="https://..."
                value={form.image}
                onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  image: e.target.value
                }))
                }
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

              </div>
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

                {editItem ? 'Save Changes' : 'Publish'}
              </button>
            </div>
          </div>
        </div>
      }
    </div>);

}