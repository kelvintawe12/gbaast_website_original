import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Shuffle, Pause, Play, RotateCcw } from 'lucide-react';

const baseGallery = [
  {
    title: 'Student Dormitories',
    desc: 'Modern, comfortable living spaces',
    image: 'https://picsum.photos/id/1043/1200/800',
    href: '/campus-life',
    color: 'from-blue-500 to-indigo-600',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    title: 'Science Laboratory',
    desc: 'Fully equipped for hands-on learning',
    image: 'https://picsum.photos/id/180/1200/800',
    href: '/programs#research',
    color: 'from-emerald-400 to-teal-500',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Sports Field',
    desc: 'Football, basketball & athletics',
    image: 'https://picsum.photos/id/292/1200/800',
    href: '/campus-life',
    color: 'from-orange-400 to-red-500',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Cultural Events',
    desc: 'Celebrating our rich heritage',
    image: 'https://picsum.photos/id/433/1200/800',
    href: '/events',
    color: 'from-purple-500 to-pink-500',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Library & Study Hall',
    desc: 'Quiet spaces for focused learning',
    image: 'https://picsum.photos/id/367/1200/800',
    href: '/programs#academic',
    color: 'from-cyan-400 to-blue-500',
    span: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    title: 'Graduation Day',
    desc: 'Celebrating student achievements',
    image: 'https://picsum.photos/id/342/1200/800',
    href: '/student-spotlight',
    color: 'from-yellow-400 to-orange-500',
    span: 'col-span-1 row-span-2'
  }
];

function shuffleGallery<T>(items: T[]): T[] {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

export function CampusLifeSection() {
  const navigate = useNavigate();
  const [gallery, setGallery] = useState(() => shuffleGallery(baseGallery));
  const [isShuffling, setIsShuffling] = useState(false);
  const [isAutoShuffle, setIsAutoShuffle] = useState(true);

  const triggerShuffle = () => {
    setIsShuffling(true);
    window.setTimeout(() => {
      setGallery((prev) => shuffleGallery(prev));
      setIsShuffling(false);
    }, 180);
  };

  const resetLayout = () => {
    setIsShuffling(true);
    window.setTimeout(() => {
      setGallery(baseGallery);
      setIsShuffling(false);
    }, 180);
  };

  useEffect(() => {
    if (!isAutoShuffle) {
      return undefined;
    }

    let timeoutId: number | undefined;

    const intervalId = window.setInterval(() => {
      setIsShuffling(true);
      timeoutId = window.setTimeout(() => {
        setGallery((prev) => shuffleGallery(prev));
        setIsShuffling(false);
      }, 180);
    }, 7000);

    return () => {
      window.clearInterval(intervalId);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [isAutoShuffle]);

  return (
    <section className="bg-[#001A3A] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Life at GBAAST
            </h2>
            <div className="w-24 h-1 bg-[#C8102E]"></div>
          </div>
          <Link
            to="/campus-life"
            className="hidden md:flex items-center text-white font-bold hover:text-[#C8102E] transition-colors group">

            Explore Campus Life{' '}
            <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 w-fit">
            <span className={`h-2 w-2 rounded-full ${isAutoShuffle ? 'bg-green-400' : 'bg-amber-400'}`}></span>
            {isAutoShuffle ? 'Auto Shuffle Active (every 7s)' : 'Auto Shuffle Paused'}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={triggerShuffle}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C8102E] text-white font-semibold hover:bg-red-700 transition-colors"
            >
              <Shuffle className="h-4 w-4" />
              Shuffle Now
            </button>

            <button
              type="button"
              onClick={() => setIsAutoShuffle((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              {isAutoShuffle ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isAutoShuffle ? 'Pause Auto' : 'Resume Auto'}
            </button>

            <button
              type="button"
              onClick={resetLayout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Reset Layout
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 transition-opacity duration-300 ${isShuffling ? 'opacity-75' : 'opacity-100'}`}>
          {gallery.map((item) =>
            <div
              key={item.title}
              role="button"
              tabIndex={0}
              aria-label={`Open ${item.title}`}
              className={`block relative rounded-xl overflow-hidden group cursor-pointer ${item.span}`}
              onClick={() => navigate(item.href)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  navigate(item.href);
                }
              }}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Fallback gradient if image fails */}
              <div className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/50 transition-colors duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
                <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                <p className="text-white/90 text-sm font-medium">{item.desc}</p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          )}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            to="/campus-life"
            className="flex items-center justify-center w-full py-4 border border-white/20 text-white font-bold hover:bg-white/10 transition-colors rounded">

            Explore Campus Life <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>);

}