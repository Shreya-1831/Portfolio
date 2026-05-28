import { useRef, useState } from 'react';
import { useInView } from '../hooks/useScrollAnimation';
import { Award, Trophy, MessageSquare, ExternalLink, Brain } from 'lucide-react';

type Tab = 'certifications' | 'competitions' | 'papers';

export const Certifications = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);
  const [activeTab, setActiveTab] = useState<Tab>('certifications');

  const certifications = [
    // {
    //   title: 'Deep Learning Specialization',
    //   issuer: 'Coursera - Andrew Ng',
    //   date: 'January 2021',
    //   description: 'Comprehensive certification covering neural networks, CNNs, RNNs, and sequence models.',
    //   link: 'https://coursera.org',
    // },
    // {
    //   title: 'TensorFlow Developer Certificate',
    //   issuer: 'Google',
    //   date: 'June 2021',
    //   description: 'Professional certification demonstrating proficiency in TensorFlow framework.',
    //   link: 'https://tensorflow.org',
    // },
    // {
    //   title: 'AWS Machine Learning Specialty',
    //   issuer: 'Amazon Web Services',
    //   date: 'March 2022',
    //   description: 'Advanced certification in deploying ML solutions on AWS cloud infrastructure.',
    //   link: 'https://aws.amazon.com',
    // },
    // {
    //   title: 'Advanced Machine Learning',
    //   issuer: 'Stanford Online',
    //   date: 'September 2022',
    //   description: 'Graduate-level course covering advanced ML algorithms and techniques.',
    //   link: 'https://online.stanford.edu',
    // },
    {
      title: 'Altruisty Coding Challenge',
      // position: 'Participant',
      issuer: 'Altruisty Pvt. Ltd.',
      date: 'December 2024',
      description: 'Competed against 500+ participants in algorithmic problem solving.',
      link: 'https://www.linkedin.com/posts/shreya-sonpavane-2b2b152a1_altruistyinnovation-codingchallenge-problemsolving-activity-7327224035715571712-JdAa',
    },
    {
      title: 'Coding Quest, Samhita\'25',
      // position: 'Participant',
      issuer: 'MIT Chromepet',
      date: 'April 2025',
      description: 'Competed against 250+ participants in critical thinking and algorithmic problem solving.',
      link: 'https://drive.google.com/file/d/1341XWmTgz8ctW3gTg4yKMkKl-NU-KkDa/view?usp=sharing',
    },
  ];

  const competitions = [
    {
      title: 'VIT Hack-A-Cure',
      position: 'Finalist',
      date: '2026',
      description: 'Built an AI-powered medical chatbot using Retrieval-Augmented Generation (RAG) and vector database techniques for accurate and context-aware medical query responses.',
      link: 'https://drive.google.com/file/d/1it4rHBfkjiTVyPy5QOUbUP3KgGGkwsgV/view?usp=sharing',
    },
    {
      title: "Hackintym'25 2.0 - Meenakshi Sundararajan Engineering College",
      position: 'Finalist',
      date: 'September 2025',
      description: 'Built an AI-powered customer support automation system enabling intelligent complaint categorization, prioritization, and automated responses.',
      link: 'https://resolve-x.netlify.app/',
    },
    {
      title: 'Agentic AI Day Hackathon - Google Cloud & H2Skills',
      position: 'Participant',
      date: 'July 2025',
      description: 'Participated in the Agentic AI Day Hackathon conducted by Google Cloud and H2Skills, collaborating on AI-driven solutions and exploring agentic AI concepts through innovation and teamwork.',
      link: 'https://drive.google.com/file/d/1v4u1EgYefKT3HDEiMEOz1R2XXlga7TQE/view?usp=sharing',
    },
    {
      title: "Hackintym'25 - Meenakshi Sundararajan Engineering College",
      position: 'Participant',
      date: 'April 2025',
      description: 'Built an AI-powered resume analyzer that evaluates resumes, provides intelligent feedback, and enhances candidate profile assessment using machine learning techniques.',
      link: 'https://drive.google.com/file/d/1pLguoQC--cCV9DxtJKRGgd1MCvDX1LSu/view?usp=sharing',
    },
    {
      title: "Smartathon'25 - St.Joseph's College of Engineering",
      position: 'Participant',
      date: 'February 2025',
      description: 'Created a self-learning website using HTML, CSS, and JS where students can learn independently and connect via study groups.',
      link: 'https://www.linkedin.com/posts/shreya-sonpavane-2b2b152a1_smartathon-innovation-collaboration-activity-7327239282773884929-D7Xn',
    },
    {
      title: "Course Sharing Platform - IEEE Buildathon'25, SSN College of Engineering",
      position: 'Participant',
      date: 'February 2025',
      description: 'Collaborated with diverse participants to build and present a functional MVP for a course sharing platform, focusing on teamwork, communication, and innovative problem-solving.',
      link: 'https://drive.google.com/file/d/1tHpULnc5_PSCKQ5BkzbzUtI62Tl_z21R/view?usp=sharing',
    },
  ];

  const papers = [
    {
      title: 'AI-Based Intrusion Detection System for Multiplayer Cheat Detection',
      venue: 'HICET International Conference',
      date: 'February 2026',
      description: 'Presented a research paper on an AI-based intrusion detection system for multiplayer cheat detection, achieving 93% accuracy with 1.5–2s latency using hybrid machine learning models.',
      link: '',
    },
    {
      title: 'Optimising Marketing Strategies: Predicting Customer Personality Using Advanced Machine Learning Models',
      venue: "Xplore'25, Loyola-ICAM College of Engineering and Technology",
      date: 'September 2025',
      description: 'Presented a research paper at the Diamond Docs event on predicting customer personality using advanced machine learning models.',
      link: 'https://drive.google.com/file/d/1YefsdPWnQ0gR4d2Ed0peDihkiBqbhSM8/view?usp=sharing',
    },
    {
      title: 'Seminar on Brain Computer Interface',
      venue: 'E-Cube Event - Meenakshi Sundararajan Engineering College',
      date: 'September 2024',
      description: 'Delivered a seminar on Brain–Computer Interface (BCI) technology and secured 4th place for technical presentation excellence.',
      link: 'https://drive.google.com/file/d/1frYq4U0ag2Y04H28Zab76mKHS1em-W_j/view?usp=sharing',
    },
  ];

  const tabs: { id: Tab; label: string; icon: typeof Award; color: string; gradient: string }[] = [
    { id: 'certifications', label: 'Coding Competitions', icon: Trophy, color: 'text-blue-400', gradient: 'from-blue-500 to-cyan-600' },
    { id: 'competitions', label: 'Hackathons', icon: Brain, color: 'text-amber-400', gradient: 'from-amber-500 to-orange-600' },
    { id: 'papers', label: 'Papers & Talks', icon: MessageSquare, color: 'text-emerald-400', gradient: 'from-emerald-500 to-teal-600' },
  ];

  const currentData = activeTab === 'certifications' ? certifications : activeTab === 'competitions' ? competitions : papers;
  const activeTabObj = tabs.find(t => t.id === activeTab)!;
  const TabIcon = activeTabObj.icon;

  return (
    <section ref={ref} id="certifications" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full glass border border-amber-500/20">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            {/* Certificates & Achievements */}
            Competitions & Achievements
          </h2>
          <div className="h-1 w-20 mx-auto mb-5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #f59e0b, #06b6d4)' }} />
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Recognition and accomplishments in AI/ML
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 md:px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${isActive
                  ? 'text-white shadow-lg scale-105'
                  : 'glass border border-slate-700 text-gray-400 hover:text-white hover:border-slate-500'
                  }`}
                style={isActive ? { background: `linear-gradient(135deg, ${tab.gradient.split(' ')[1]?.replace('from-', '') ?? '#3b82f6'}, ${tab.gradient.split(' ')[2]?.replace('to-', '') ?? '#06b6d4'})` } : {}}
              >
                <Icon size={16} className={isActive ? 'text-white' : tab.color} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {currentData.map((item, index) => (
            <div
              key={`${activeTab}-${index}`}
              className={`shimmer glass border border-slate-700/50 hover:border-slate-600 p-6 md:p-7 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl card-glow ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`bg-gradient-to-br ${activeTabObj.gradient} p-3 rounded-xl flex-shrink-0 shadow-lg`}>
                  <TabIcon className="text-white" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className={`font-semibold text-sm ${activeTabObj.color}`}>
                    {'issuer' in item ? item.issuer : 'venue' in item ? item.venue : (item as { position?: string }).position}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.date}</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 ${activeTabObj.color} hover:opacity-80 font-medium text-sm transition-all group`}
              >
                View Details
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
