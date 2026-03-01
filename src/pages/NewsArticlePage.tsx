import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Eye,
  Heart,
  MessageCircle,
  Send,
  Share2,
  ThumbsUp
} from 'lucide-react';
import { newsData } from '../data/newsData';

interface CommentItem {
  id: string;
  name: string;
  message: string;
  createdAt: string;
  likes: number;
}

const defaultComments: Record<number, CommentItem[]> = {
  1: [
    {
      id: 'c1',
      name: 'Aline M.',
      message: 'Proud to see our students leading in innovation. Amazing achievement!',
      createdAt: '2026-02-25T09:30:00.000Z',
      likes: 4
    },
    {
      id: 'c2',
      name: 'Mr. Tabi',
      message: 'This result reflects the quality of practical learning at GBAAST.',
      createdAt: '2026-02-26T14:10:00.000Z',
      likes: 2
    }
  ]
};

const formatCommentDate = (value: string) => {
  return new Date(value).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export function NewsArticlePage() {
  const { id } = useParams();
  const articleId = Number(id);
  const [viewCount, setViewCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const article = useMemo(
    () => newsData.find((item) => item.id === articleId),
    [articleId]
  );

  const related = useMemo(() => {
    if (!article) {
      return [];
    }

    return newsData
      .filter((item) => item.id !== article.id && item.cat === article.cat)
      .slice(0, 3);
  }, [article]);

  useEffect(() => {
    if (!article) {
      return;
    }

    const viewsKey = `news:views:${article.id}`;
    const likesKey = `news:likes:${article.id}`;
    const likedKey = `news:liked:${article.id}`;
    const commentsKey = `news:comments:${article.id}`;

    const baseViews = 140 + article.id * 23;
    const baseLikes = 35 + article.id * 7;

    const storedViews = Number(localStorage.getItem(viewsKey));
    const nextViews = Number.isFinite(storedViews) && storedViews > 0 ? storedViews + 1 : baseViews;
    localStorage.setItem(viewsKey, String(nextViews));
    setViewCount(nextViews);

    const storedLikes = Number(localStorage.getItem(likesKey));
    const resolvedLikes = Number.isFinite(storedLikes) && storedLikes >= 0 ? storedLikes : baseLikes;
    if (!Number.isFinite(storedLikes)) {
      localStorage.setItem(likesKey, String(resolvedLikes));
    }
    setLikeCount(resolvedLikes);

    setLiked(localStorage.getItem(likedKey) === 'true');

    const storedComments = localStorage.getItem(commentsKey);
    if (storedComments) {
      try {
        const parsed = JSON.parse(storedComments) as CommentItem[];
        if (Array.isArray(parsed)) {
          setComments(parsed);
        } else {
          setComments(defaultComments[article.id] ?? []);
        }
      } catch {
        setComments(defaultComments[article.id] ?? []);
      }
      return;
    }

    const seededComments = defaultComments[article.id] ?? [];
    setComments(seededComments);
    localStorage.setItem(commentsKey, JSON.stringify(seededComments));
  }, [article]);

  const handleToggleLike = () => {
    if (!article) {
      return;
    }

    const likesKey = `news:likes:${article.id}`;
    const likedKey = `news:liked:${article.id}`;
    const nextLiked = !liked;
    const nextLikes = nextLiked ? likeCount + 1 : Math.max(0, likeCount - 1);

    setLiked(nextLiked);
    setLikeCount(nextLikes);
    localStorage.setItem(likedKey, String(nextLiked));
    localStorage.setItem(likesKey, String(nextLikes));
  };

  const handleSubmitComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!article || !name.trim() || !message.trim()) {
      return;
    }

    const newComment: CommentItem = {
      id: `${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
      likes: 0
    };

    const nextComments = [newComment, ...comments];
    setComments(nextComments);
    setMessage('');
    localStorage.setItem(`news:comments:${article.id}`, JSON.stringify(nextComments));
  };

  const handleCommentLike = (commentId: string) => {
    if (!article) {
      return;
    }

    const nextComments = comments.map((comment) => {
      if (comment.id !== commentId) {
        return comment;
      }

      return {
        ...comment,
        likes: comment.likes + 1
      };
    });

    setComments(nextComments);
    localStorage.setItem(`news:comments:${article.id}`, JSON.stringify(nextComments));
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  if (!article) {
    return (
      <div className="pt-24 min-h-screen bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-[#002B5B] mb-4">News Article Not Found</h1>
          <p className="text-gray-600 mb-8">
            The article you are trying to access does not exist or has been moved.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center bg-[#002B5B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C8102E] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-[#F8FAFC] min-h-screen">
      <div className="bg-gradient-to-br from-[#002B5B] via-[#001A3A] to-[#002B5B] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/news"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all news
          </Link>
          <span className="inline-block bg-white/15 text-white text-xs px-3 py-1 rounded-full font-semibold mb-4">
            {article.cat}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/80 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {article.readTime}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              {viewCount} views
            </div>
            <div className="flex items-center">
              <Heart className="h-4 w-4 mr-2" />
              {likeCount} likes
            </div>
            <div className="flex items-center">
              <MessageCircle className="h-4 w-4 mr-2" />
              {comments.length} comments
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-72 md:h-[26rem] object-cover"
          />
          <div className="p-6 md:p-10">
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={handleToggleLike}
                className={`inline-flex items-center px-4 py-2 rounded-lg border font-semibold text-sm transition-colors ${
                  liked
                    ? 'bg-[#C8102E] text-white border-[#C8102E]'
                    : 'bg-white text-[#002B5B] border-gray-300 hover:border-[#C8102E] hover:text-[#C8102E]'
                }`}
              >
                <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-current' : ''}`} />
                {liked ? 'Liked' : 'Like'} ({likeCount})
              </button>
              <button
                onClick={() => document.getElementById('news-comments')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-[#002B5B] font-semibold text-sm hover:border-[#C8102E] hover:text-[#C8102E] transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Comments ({comments.length})
              </button>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-[#002B5B] font-semibold text-sm hover:border-[#C8102E] hover:text-[#C8102E] transition-colors"
              >
                <Share2 className="h-4 w-4 mr-2" />
                {copied ? 'Link Copied' : 'Share'}
              </button>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {article.excerpt}
            </p>

            <div className="bg-[#F5F7FA] rounded-xl border border-gray-200 p-6 mb-8">
              <h2 className="text-xl font-bold text-[#002B5B] mb-4">Key Highlights</h2>
              <ul className="space-y-3 text-gray-700">
                {article.content.slice(0, 3).map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#C8102E] mr-3">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-10 border-l-4 border-[#C8102E] bg-[#FFF7F8] p-6 rounded-r-xl">
              <p className="text-[#002B5B] font-medium italic">
                “At GBAAST, every story is a reflection of student growth, discipline, and impact in the classroom and beyond.”
              </p>
            </blockquote>
          </div>
        </div>
      </article>

      <section id="news-comments" className="max-w-5xl mx-auto px-4 pb-10">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#002B5B] mb-2">Comments</h2>
          <p className="text-gray-600 mb-8">Join the discussion and share your thoughts.</p>

          <form onSubmit={handleSubmitComment} className="mb-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#C8102E] text-white font-semibold rounded-lg px-5 py-3 hover:bg-red-700 transition-colors"
              >
                <Send className="h-4 w-4 mr-2" />
                Post Comment
              </button>
            </div>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Write your comment here..."
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            />
          </form>

          <div className="space-y-5">
            {comments.length === 0 ? (
              <div className="text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-5">
                No comments yet. Be the first to comment on this story.
              </div>
            ) : (
              comments.map((comment) => (
                <article key={comment.id} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-[#002B5B]">{comment.name}</h3>
                    <span className="text-xs text-gray-500">{formatCommentDate(comment.createdAt)}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{comment.message}</p>
                  <button
                    onClick={() => handleCommentLike(comment.id)}
                    className="inline-flex items-center text-sm text-[#002B5B] hover:text-[#C8102E] font-semibold transition-colors"
                  >
                    <ThumbsUp className="h-4 w-4 mr-1.5" />
                    Like ({comment.likes})
                  </button>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#002B5B] mb-6">Related Stories</h2>
          {related.length === 0 ? (
            <p className="text-gray-600">No related stories available for this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs font-semibold text-[#C8102E] mb-1">{item.cat}</p>
                    <h3 className="font-bold text-[#002B5B] text-sm leading-snug mb-2 line-clamp-2 group-hover:text-[#C8102E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
