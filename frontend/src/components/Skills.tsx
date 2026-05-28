import { useRef, useState } from 'react';
import { useInView } from '../hooks/useScrollAnimation';

export const Skills = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);
  const [activeTab, setActiveTab] = useState<'technical' | 'nonTechnical'>('technical');

  const technicalSkills = [
    { category: 'Libraries', emoji: '📚', skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'], color: 'from-blue-500 to-indigo-600' },
    { category: 'Programming Languages', emoji: '💻', skills: ['Python', 'Java'], color: 'from-purple-500 to-pink-600' },
    { category: 'Tools & Frameworks', emoji: '🛠️', skills: ['Flask', 'Git', 'Jupyter'], color: 'from-orange-500 to-red-500' },
    { category: 'Data & Visualisation', emoji: '📊', skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'], color: 'from-cyan-500 to-blue-600' },
    { category: 'Web & Database', emoji: '🌐', skills: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'MongoDB'], color: 'from-emerald-500 to-teal-600' },
  ];

  const nonTechnicalSkills = [
    { category: 'Leadership', emoji: '🎯', skills: ['Team Management', 'Project Planning', 'Decision Making'], color: 'from-violet-500 to-purple-600' },
    { category: 'Communication', emoji: '💬', skills: ['Technical Writing', 'Presentations', 'Documentation'], color: 'from-blue-500 to-cyan-600' },
    { category: 'Problem Solving', emoji: '🧩', skills: ['Critical Thinking', 'Innovation', 'Analytical Thinking'], color: 'from-rose-500 to-pink-600' },
    { category: 'Soft Skills', emoji: '✨', skills: ['Collaboration', 'Adaptability', 'Time Management', 'Creativity'], color: 'from-amber-500 to-orange-600' },
  ];

  const currentSkills = activeTab === 'technical' ? technicalSkills : nonTechnicalSkills;

  return (
    <section ref={ref} id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-14 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full glass border border-purple-500/20">
            <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">Expertise</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Skills</h2>
          <div className="h-1 w-20 mx-auto mb-5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)' }} />
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {(['technical', 'nonTechnical'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-7 md:px-9 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === tab
                ? 'text-white shadow-lg shadow-blue-500/30 scale-105'
                : 'glass border border-slate-700 text-gray-400 hover:text-white hover:border-slate-500'
                }`}
              style={activeTab === tab ? { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' } : {}}
            >
              {tab === 'technical' ? 'Technical Skills' : 'Non-Technical Skills'}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {currentSkills.map((category, categoryIndex) => (
            <div
              key={`${activeTab}-${categoryIndex}`}
              className={`glass border border-slate-700/50 hover:border-slate-600 p-6 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl card-glow ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                <span className="text-2xl">{category.emoji}</span>
                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="badge-glow px-4 py-2 text-sm font-medium rounded-full border cursor-default select-none"
                    style={{
                      background: 'rgba(59,130,246,0.08)',
                      borderColor: 'rgba(59,130,246,0.2)',
                      color: '#93c5fd',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
