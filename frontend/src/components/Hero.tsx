import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import shreyaImg from "../assets/photo.png";

const TITLES = [
  'Aspiring ML Engineer',
  'Deep Learning Enthusiast',
  'AI Innovator',
  'Data Science Explorer',
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c + 1);
      }, speed);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIndex(i => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

function StatCounter({
  end,
  label,
  suffix = '',
}: {
  end: number;
  label: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 1500;
          const step = 16;
          const increment = end / (duration / step);

          const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center animate-count-up">
      <div className="text-3xl md:text-4xl font-bold gradient-text-blue">
        {count}
        {suffix}
      </div>

      <div className="text-gray-400 text-sm mt-1">
        {label}
      </div>
    </div>
  );
}

/* Floating particles */
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 4 + 2}px`,
    delay: `${Math.random() * 8}s`,
    duration: `${Math.random() * 10 + 10}s`,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particle-float ${p.duration} ${p.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  );
}

export const Hero = () => {
  const scrollY = useScrollAnimation();
  const [isMobile, setIsMobile] = useState(false);

  const title = useTypewriter(TITLES);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth < 768);

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () =>
      window.removeEventListener('resize', checkMobile);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');

    link.href = '/shreya_resume.pdf';
    link.download = 'shreya_resume.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden isolate pt-20 pb-12 md:pb-0"
      style={{
        background:
          'radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(6,182,212,0.1) 0%, transparent 50%), linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e1b4b 70%, #0c1a2e 100%)',
      }}
    >
      {/* Animated mesh blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-mesh-move pointer-events-none" />

      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-float-slow pointer-events-none"
        style={{ animationDelay: '3s' }}
      />

      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-float-slow pointer-events-none"
        style={{ animationDelay: '6s' }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: isMobile
            ? 'none'
            : `translateY(${scrollY * 0.3}px)`,
        }}
      />

      <Particles />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 pointer-events-none" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">

        {/* ONLY HERO CONTENT MOVES */}
        <div
          style={{
            transform: isMobile
              ? 'none'
              : `translateY(${scrollY * 0.25}px)`,

            opacity: isMobile
              ? 1
              : Math.max(0.3, 1 - scrollY / 500),
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">

              <div className="mb-8 animate-fade-in">
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight leading-[1.02]">
                  SHREYA
                  <br />
                  <span className="animate-shimmer-bg">
                    SONPAVANE
                  </span>
                </h1>

                <div
                  className="h-1 w-28 mx-auto lg:mx-0 mb-5 animate-expand rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
                  }}
                />

                {/* Typewriter */}
                <p
                  className="text-lg md:text-xl lg:text-2xl font-light tracking-wide h-8"
                  style={{ color: '#7dd3fc' }}
                >
                  <span className="font-mono-code text-blue-500 mr-1 text-base opacity-70">
                    &gt;
                  </span>

                  {title}

                  <span className="animate-cursor-blink text-blue-400 ml-0.5">
                    |
                  </span>
                </p>
              </div>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in-delay leading-relaxed">
                Transforming data into intelligence, one algorithm at a time
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-10 animate-fade-in-delay-2">

                <a
                  href="#contact"
                  className="shimmer relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-7 md:px-9 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 text-sm md:text-base"
                >
                  Get in Touch
                </a>

                <a
                  href="#projects"
                  className="border-2 border-slate-600 text-white px-7 md:px-9 py-3.5 rounded-full font-semibold transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10 hover:scale-105 text-sm md:text-base"
                >
                  View Work
                </a>

                <button
                  onClick={handleResumeDownload}
                  className="shimmer flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-7 md:px-9 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 text-sm md:text-base"
                >
                  <Download size={18} />
                  Resume
                </button>
              </div>

              {/* Socials */}
              <div className="flex justify-center lg:justify-start gap-4 md:gap-5 animate-fade-in-delay-3">
                {[
                  {
                    href: 'https://github.com/Shreya-1831',
                    icon: Github,
                    label: 'GitHub',
                  },
                  {
                    href: 'https://www.linkedin.com/in/shreya-sonpavane-2b2b152a1/',
                    icon: Linkedin,
                    label: 'LinkedIn',
                  },
                  {
                    href: 'mailto:shreyasonpavane.18@gmail.com',
                    icon: Mail,
                    label: 'Email',
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={
                      href.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex items-center justify-center w-11 h-11 rounded-xl glass border border-slate-700 hover:border-blue-500/50 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex justify-center items-center animate-fade-in-delay-2 mt-8 lg:mt-0 mb-8 lg:mb-0">

              <div className="relative">

                {/* Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-rotate-slow scale-110" />

                <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-rotate-reverse scale-125" />

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-glow-pulse" />

                {/* Ping */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-ping-slow scale-105" />

                {/* Image */}
                <div
                  className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden shadow-2xl"
                  style={{
                    border: '3px solid transparent',
                    background:
                      'linear-gradient(#020617, #020617) padding-box, linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4) border-box',
                  }}
                >
                  <img
                    src={shreyaImg}
                    alt="Shreya Sonpavane"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>

                {/* Badge */}
                {/* <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl px-3 py-2 shadow-lg shadow-blue-500/30 animate-float-slow">
                  <div className="text-white text-xs font-bold">
                    ML Engineer
                  </div>

                  <div className="text-blue-200 text-xs">
                    CGPA 8.94
                  </div>
                </div> */}

              </div>
            </div>

          </div>
        </div>

        {/* STATS ROW */}
        <div className="mt-16 pt-8 border-t border-slate-700/80 relative z-20 grid grid-cols-3 gap-6 md:gap-10 animate-fade-in-delay-3">

          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-blue-400 leading-none">
              4+
            </h3>

            <p className="mt-2 text-gray-400 text-sm md:text-base font-normal">
              Projects Built
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-blue-400 leading-none">
              8.94
            </h3>

            <p className="mt-2 text-gray-400 text-sm md:text-base font-normal">
              CGPA Score
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-blue-400 leading-none">
              5+
            </h3>

            <p className="mt-2 text-gray-400 text-sm md:text-base font-normal">
              Hackathons
            </p>
          </div>

        </div>

      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer p-2 group"
      >
        <ChevronDown
          className="text-gray-500 group-hover:text-blue-400 transition-colors"
          size={28}
        />
      </a>
    </section>
  );
};