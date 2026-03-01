import React, { useEffect, useState, useRef } from 'react';
const stats = [
{
  value: 800,
  suffix: '+',
  label: 'Students'
},
{
  value: 2,
  suffix: '',
  label: 'Languages (EN/FR)'
},
{
  value: 1,
  suffix: '',
  label: 'Campus'
},
{
  value: 98,
  suffix: '%',
  label: 'Exam Success'
}];

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="bg-[#002B5B] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) =>
          <div key={index} className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2 flex items-center">
                {isVisible ?
              <Counter end={stat.value} duration={2000} /> :

              <span>0</span>
              }
                <span className="text-[#C8102E]">{stat.suffix}</span>
              </div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
function Counter({ end, duration }: {end: number;duration: number;}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeProgress =
      percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      setCount(Math.floor(end * easeProgress));
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  return <span>{count}</span>;
}