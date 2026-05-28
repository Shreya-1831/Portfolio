import { useRef, useState } from 'react';
import { useInView } from '../hooks/useScrollAnimation';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export const Projects = () => {
  const ref = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const projects = [
    // {
    //   title: 'Medical RAG Chatbot',
    //   description: 'Retrieval-augmented medical question-answering system for accurate, context-aware responses.',
    //   fullDescription: 'A Retrieval-Augmented Generation (RAG) based medical chatbot designed to answer medical queries with high accuracy and reduced hallucinations. The system retrieves relevant medical documents from a knowledge base and grounds responses in verified sources, ensuring reliability, contextual relevance, and improved trustworthiness in healthcare-related interactions.',
    //   tags: ['Python', 'NLP', 'Machine Learning', 'Information Retrieval'],
    //   image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   gradient: 'from-blue-500 to-indigo-600',
    //   glowColor: 'rgba(59,130,246,0.35)',
    //   github: 'https://github.com',
    //   demo: 'https://example.com',
    //   video: 'https://youtube.com',
    // },
    {
      title: 'Smart Learning Platform for Children with Dyslexia',
      description: 'AI-driven learning platform offering personalized support for children with dyslexia.',
      fullDescription: 'An AI-powered, cartoon-themed educational platform designed to assist children with dyslexia through personalized reading, writing, and spelling exercises. The system adapts in real time based on user performance, providing customized feedback and interactive learning experiences to improve engagement and learning outcomes.',
      tags: ['Python', 'Deep Learning', 'EdTech', 'Adaptive Learning'],
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-pink-500 to-purple-600',
      glowColor: 'rgba(236,72,153,0.35)',
      github: 'https://github.com/Shreya-1831/Smart_Learning',
      demo: 'https://the-smart-learning-platform.vercel.app/',
      // video: 'https://youtube.com',
    },
    // {
    //   title: 'IoT-Based Campus Fire Detection System (ML Module)',
    //   description: 'Machine learning module for predicting fire hazards in IoT-enabled environments.',
    //   fullDescription: 'Developed a machine learning module using the Random Forest algorithm to predict potential fire hazards in an IoT-based campus fire detection system. The model achieved 89% prediction accuracy by analyzing sensor data patterns, enabling early detection and proactive fire risk management.',
    //   tags: ['Python', 'Machine Learning', 'Random Forest', 'IoT'],
    //   image: 'https://images.pexels.com/photos/266487/pexels-photo-266487.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   gradient: 'from-orange-500 to-red-600',
    //   glowColor: 'rgba(239,68,68,0.35)',
    //   github: 'https://github.com',
    //   demo: 'https://example.com',
    //   video: 'https://youtube.com',
    // },
    {
      title: 'Privacy-Preserving Fraud Detection System',
      description: 'Federated learning-based fraud detection system with differential privacy for secure collaborative banking intelligence.',
      fullDescription: 'A privacy-preserving fraud detection system designed to enable multiple financial institutions to collaboratively train machine learning models without sharing sensitive customer data. The project leverages Federated Learning and Differential Privacy techniques to detect fraudulent transactions while maintaining strong data confidentiality and regulatory compliance. Secure aggregation mechanisms and distributed model training improve fraud detection accuracy while minimizing privacy risks in real-world financial environments.',
      tags: ['Python', 'Federated Learning', 'Machine Learning', 'Differential Privacy', 'Flask'],
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-cyan-500 to-blue-600',
      glowColor: 'rgba(6,182,212,0.35)',
      github: 'https://github.com/CodebyDeshma-27/FedShield',
      demo: 'https://example.com',
      // video: 'https://youtube.com',
    },
    {
      title: 'AI-Powered Gardening Assistant',
      description: 'Intelligent gardening assistant with plant disease detection and care recommendations.',
      fullDescription: 'An AI-powered gardening assistant that detects plant diseases using CNN-based image classification with 93% accuracy. The system provides personalized plant care recommendations and enhances user engagement through an interactive, chatbot-style assistant designed to guide users in sustainable gardening practices.',
      tags: ['Python', 'Deep Learning', 'CNN', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/4505168/pexels-photo-4505168.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-emerald-600',
      glowColor: 'rgba(16,185,129,0.35)',
      github: 'https://github.com/Shreya-1831/Leafy-Chatbot',
      demo: 'https://leafy-chatbot.vercel.app/',
      // video: 'https://youtube.com',
    },
    {
      title: 'Gaming Platform Intrusion Detection System',
      description: 'AI-powered intrusion detection system for identifying malicious activities and abnormal behavior in gaming platforms.',
      fullDescription: 'An intelligent Intrusion Detection System (IDS) designed specifically for online gaming platforms to detect cyber threats, cheating attempts, unauthorized access, and abnormal network behavior in real time. The system leverages machine learning algorithms to analyze traffic patterns, identify suspicious activities, and enhance platform security while maintaining seamless gaming performance. Built with a focus on scalability, low latency, and proactive threat prevention for modern multiplayer environments.',
      tags: ['Python', 'Machine Learning', 'Cybersecurity', 'Network Security', 'Flask'],
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-red-500 to-orange-600',
      glowColor: 'rgba(239,68,68,0.35)',
      github: 'https://github.com/CodebyDeshma-27/Online-Game-Cheat-Detection-System',
      demo: 'https://online-game-cheat-detection-system-brseqfmrfnvxhnpvwx43cv.streamlit.app/',
      // video: 'https://youtube.com',
    },
    {
      title: 'Smart Customer Support Automation',
      description: 'AI-powered customer support system that automates complaint handling and response generation.',
      fullDescription: 'A full-stack AI-powered customer support automation system designed to streamline complaint handling workflows. The system intelligently categorizes incoming complaints, detects duplicate issues, assesses priority levels, and generates automated responses. Built with a Flask backend and React frontend.',
      tags: ['React', 'TypeScript', 'Flask', 'Python', 'AI Automation'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-violet-500 to-purple-600',
      glowColor: 'rgba(139,92,246,0.35)',
      github: 'https://github.com/freebird-prod/resolve-x',
      demo: 'https://resolve-x.netlify.app/',
      // video: 'https://youtube.com',
    },
  ];

  return (
    <>
      <section ref={ref} id="projects" className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div
            className={`text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full glass border border-blue-500/20">
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Portfolio</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Featured Projects</h2>
            <div className="h-1 w-20 mx-auto mb-5 rounded-full"
              style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)' }} />
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Innovative AI/ML solutions showcasing cutting-edge technology
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Nav arrows */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 glass border border-slate-700 hover:border-blue-500/50 text-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 glass border border-slate-700 hover:border-blue-500/50 text-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <ChevronRight size={22} />
          </button>

          <div
            ref={scrollContainerRef}
            className={`flex gap-6 px-4 sm:px-12 overflow-x-auto scrollbar-hide py-8 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-96 group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className="glass border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 h-full shimmer"
                  style={{ '--hover-glow': project.glowColor } as React.CSSProperties}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${project.glowColor}, 0 20px 60px rgba(0,0,0,0.5)`;
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(148,163,184,0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                    (e.currentTarget as HTMLElement).style.borderColor = '';
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 sm:h-52">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    {/* Tag overlay */}
                    <div className="absolute top-3 right-3 flex gap-1 flex-wrap justify-end">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex gap-2 mb-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 glass border border-slate-700 hover:border-slate-500 text-white rounded-lg transition-all duration-300 text-xs font-medium hover:bg-white/10"
                      >
                        <Github size={14} /> Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all duration-300 text-xs font-medium text-white hover:opacity-90"
                        style={{ background: `linear-gradient(135deg, ${project.gradient.includes('blue') ? '#3b82f6' : '#8b5cf6'}, ${project.gradient.includes('cyan') ? '#06b6d4' : '#6366f1'})` }}
                      >
                        <ExternalLink size={14} /> Demo
                      </a>
                      {/* <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-lg transition-all duration-300 text-xs font-medium"
                      >
                        <Video size={14} /> Video
                      </a> */}
                    </div>

                    <button
                      onClick={e => { e.stopPropagation(); setSelectedProject(project); }}
                      className="shimmer w-full text-white font-semibold py-2.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg text-sm"
                      style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile nav */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 px-4">
            <div className="flex gap-3 md:hidden">
              <button onClick={() => scroll('left')}
                className="glass border border-slate-700 text-white p-3 rounded-full hover:scale-110 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => scroll('right')}
                className="glass border border-slate-700 text-white p-3 rounded-full hover:scale-110 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
            <p className="text-gray-500 text-xs">Scroll horizontally to explore more projects</p>
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
};
