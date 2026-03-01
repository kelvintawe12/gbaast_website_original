import React, { useState } from 'react';
import {
  PlusIcon,
  EditIcon,
  TrashIcon,
  SearchIcon,
  XIcon,
  TagIcon,
  CalendarIcon,
  UserIcon,
  BookOpenIcon } from
'lucide-react';
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  date: string;
  status: 'published' | 'draft';
  readTime: string;
  image: string;
}
const initialPosts: BlogPost[] = [
{
  id: 'BLOG-001',
  title: 'The Future of Higher Education in the Digital Age',
  excerpt:
  'How technology is reshaping the way we learn and teach in universities worldwide...',
  author: 'Dr. Sarah Mitchell',
  category: 'Education',
  date: 'Feb 28, 2026',
  status: 'published',
  readTime: '5 min',
  image:
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&q=80'
},
{
  id: 'BLOG-002',
  title: 'Student Mental Health: Building Resilience on Campus',
  excerpt:
  'Strategies and resources available to help students navigate academic pressures...',
  author: 'Prof. James Okafor',
  category: 'Wellness',
  date: 'Feb 25, 2026',
  status: 'published',
  readTime: '7 min',
  image:
  'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&q=80'
},
{
  id: 'BLOG-003',
  title: 'Research Spotlight: Breakthrough in Renewable Energy',
  excerpt:
  'Our engineering department has made a significant discovery in solar panel efficiency...',
  author: 'Dr. Amara Osei',
  category: 'Research',
  date: 'Feb 22, 2026',
  status: 'draft',
  readTime: '4 min',
  image:
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80'
},
{
  id: 'BLOG-004',
  title: 'Alumni Success Stories: Where Are They Now?',
  excerpt:
  'We catch up with some of our most successful graduates and their journeys...',
  author: 'Admin',
  category: 'Alumni',
  date: 'Feb 20, 2026',
  status: 'published',
  readTime: '6 min',
  image:
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80'
}];

const categories = [
'Education',
'Research',
'Wellness',
'Alumni',
'Campus Life',
'Technology',
'Events'];

export function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState<BlogPost | null>(null);
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    author: '',
    category: 'Education',
    status: 'draft' as 'published' | 'draft',
    readTime: '5 min',
    image: ''
  });
  const filtered = posts.filter(
    (p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.author.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );
  const openAdd = () => {
    setEditPost(null);
    setForm({
      title: '',
      excerpt: '',
      author: '',
      category: 'Education',
      status: 'draft',
      readTime: '5 min',
      image: ''
    });
    setShowModal(true);
  };
  const openEdit = (post: BlogPost) => {
    setEditPost(post);
    setForm({
      title: post.title,
      excerpt: post.excerpt,
      author: post.author,
      category: post.category,
      status: post.status,
      readTime: post.readTime,
      image: post.image
    });
    setShowModal(true);
  };
  const handleSave = () => {
    if (!form.title || !form.excerpt || !form.author) return;
    if (editPost) {
      setPosts((prev) =>
      prev.map((p) =>
      p.id === editPost.id ?
      {
        ...p,
        ...form
      } :
      p
      )
      );
    } else {
      setPosts((prev) => [
      {
        id: `BLOG-${String(prev.length + 1).padStart(3, '0')}`,
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
    if (confirm('Delete this blog post?'))
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };
  const toggleStatus = (id: string) => {
    setPosts((prev) =>
    prev.map((p) =>
    p.id === id ?
    {
      ...p,
      status: p.status === 'published' ? 'draft' : 'published'
    } :
    p
    )
    );
  };
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Blog</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            {posts.filter((p) => p.status === 'published').length} published,{' '}
            {posts.filter((p) => p.status === 'draft').length} drafts
          </p>
        </div>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm">

          <PlusIcon size={16} />
          New Post
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
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

          </div>
        </div>

        <div className="divide-y divide-slate-50">
          {filtered.map((post) =>
          <div
            key={post.id}
            className="flex items-start gap-4 px-5 py-4 hover:bg-slate-50/50 transition-colors">

              <img
              src={post.image}
              alt={post.title}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0 bg-slate-100"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                'https://via.placeholder.com/64';
              }} />

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">
                      {post.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                    onClick={() => openEdit(post)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">

                      <EditIcon size={14} />
                    </button>
                    <button
                    onClick={() => handleDelete(post.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors">

                      <TrashIcon size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <UserIcon size={10} />
                    {post.author}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <TagIcon size={10} />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <CalendarIcon size={10} />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <BookOpenIcon size={10} />
                    {post.readTime} read
                  </span>
                  <button
                  onClick={() => toggleStatus(post.id)}
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${post.status === 'published' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'}`}>

                    {post.status === 'published' ? 'Published' : 'Draft'}
                  </button>
                </div>
              </div>
            </div>
          )}
          {filtered.length === 0 &&
          <div className="text-center py-12 text-slate-400 text-sm">
              No posts found
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
                {editPost ? 'Edit Post' : 'New Blog Post'}
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
                placeholder="Post title..."
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
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Author
                </label>
                <input
                type="text"
                placeholder="Author name..."
                value={form.author}
                onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  author: e.target.value
                }))
                }
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

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

                {editPost ? 'Save Changes' : 'Publish'}
              </button>
            </div>
          </div>
        </div>
      }
    </div>);

}