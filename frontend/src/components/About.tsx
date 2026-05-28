import { useRef } from 'react';
import { useInView } from '../hooks/useScrollAnimation';
import { Brain, Code, Database, Cpu } from 'lucide-react';

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  const features = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Expertise in developing and deploying ML models for real-world applications',
      color: 'from-blue-500 to-indigo-600',
      glow: 'hover:shadow-blue-500/30',
    },
    {
      icon: Code,
      title: 'Deep Learning',
      description: 'Proficient in neural networks, CNNs, RNNs, and transformer architectures',
      color: 'from-purple-500 to-pink-600',
      glow: 'hover:shadow-purple-500/30',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Advanced analytics, visualization, and statistical modeling expertise',
      color: 'from-cyan-500 to-blue-600',
      glow: 'hover:shadow-cyan-500/30',
    },
    {
      icon: Cpu,
      title: 'AI Innovation',
      description: 'Passionate about exploring cutting-edge AI technologies and research',
      color: 'from-emerald-500 to-teal-600',
      glow: 'hover:shadow-emerald-500/30',
    },
  ];

  return (
    <section ref={ref} id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full glass border border-blue-500/20">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
            Who I Am
          </h2>
          <div className="h-1 w-20 mx-auto mb-6 rounded-full"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I am a Machine Learning Engineer with a strong foundation in machine learning and deep learning,
            focused on building scalable, real-world AI solutions. I enjoy transforming complex data into
            intelligent systems through thoughtful model design, experimentation, and continuous learning.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group glass border border-slate-700/50 hover:border-slate-600 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${feature.glow} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <Icon className="text-white" size={26} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>

                {/* Bottom accent line */}
                <div className={`mt-5 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500 bg-gradient-to-r ${feature.color}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
