import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  // { label: 'Certifications', href: '#certifications' },
  { label: 'Competitions', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollY = useScrollAnimation();

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  // Detect active section via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/shreya_resume.pdf'; 
    link.download = 'shreya_resume.pdf'; 
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass-dark shadow-lg shadow-black/30 border-b border-white/5'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shimmer"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
                <span className="text-white font-black text-lg">SS</span>
              </div>
              <span className="hidden sm:inline font-bold text-lg tracking-tight">
                <span className="gradient-text-blue">Shreya</span>
              </span>
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', width: '70%', left: '15%' }} />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Resume button desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleResumeDownload}
              className="shimmer flex items-center gap-2 px-5 py-2.5 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 text-sm"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
            >
              <Download size={16} />
              Resume
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={handleResumeDownload}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              <Download size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden glass-dark border-t border-white/5 animate-slideDown rounded-b-2xl mb-2">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm ${isActive
                        ? 'text-white bg-white/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
