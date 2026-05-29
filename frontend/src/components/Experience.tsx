import { useRef } from 'react';
import { useInView } from '../hooks/useScrollAnimation';
import { Briefcase, Award, MapPin, Calendar } from 'lucide-react';

export const Experience = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  const experiences = [
    {
      title: 'Python FastAPI Intern',
      organization: 'Hexaware Technologies',
      period: '2026 - Present',
      location: 'Chennai, India',
      description: 'Pursuing a Python FastAPI internship at Hexaware Technologies, working on backend development, API design, and scalable web application development.',
      achievements: [
        'Developed and explored RESTful APIs using FastAPI for high-performance backend services',
        'Worked with modern backend development concepts including routing, request handling, and API integration',
        'Enhanced practical skills in Python backend development, scalable architectures, and enterprise workflows',
      ],
      color: 'from-emerald-500 to-cyan-600',
      dotColor: '#10b981',
    },

    {
      title: 'Secretary - DevDynasty Club',
      organization: 'Meenakshi Sundararajan Engineering College',
      period: '2025 - Present',
      location: 'Chennai, India',
      description: 'Serving as Secretary of the DevDynasty Club, actively contributing to technical leadership and student community development.',
      achievements: [
        'Coordinated and managed 3+ campus technical events focused on innovation and collaboration',
        'Facilitated teamwork and communication among club members and event participants',
        'Strengthened leadership, organizational, and event management skills through hands-on coordination',
      ],
      color: 'from-blue-500 to-indigo-600',
      dotColor: '#3b82f6',
    },
    {
      title: 'Software Intern',
      organization: 'Intelizign Lifecycle Services Pvt. Ltd.',
      period: 'Jun 2025 - Jul 2025',
      location: 'Chennai, India',
      description:
        'Developed a machine learning-based stock price prediction model using Python, applying data preprocessing and feature engineering techniques in a real-world development environment.',

      achievements: [
        'Built and trained machine learning models for stock price forecasting using Python',
        'Applied data preprocessing, feature engineering, and model evaluation techniques',
        'Worked in a real-world software development environment following industry practices',
      ],

      certificateLink: 'https://drive.google.com/file/d/1uyuC3C_Ttkx_Bv3YHbV2szLeIiOUeHcL/view?usp=sharing',

      color: 'from-purple-500 to-pink-600',
      dotColor: '#8b5cf6',
    },
  ];

  return (
    <section ref={ref} id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full glass border border-purple-500/20">
            <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">Career</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Work Experience</h2>
          <div className="h-1 w-20 mx-auto mb-5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }} />
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Building intelligent systems across diverse organizations
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{ background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #06b6d4)' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-4 border-slate-900 -translate-x-1/2 top-6 z-10 shadow-lg"
                  style={{ background: exp.dotColor, boxShadow: `0 0 16px ${exp.dotColor}80` }}
                />

                {/* Spacer for opposite side on desktop */}
                <div className="hidden md:block w-1/2" />

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className="glass border border-slate-700/50 hover:border-slate-600 rounded-2xl p-5 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl card-glow">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div className={`bg-gradient-to-br ${exp.color} p-2.5 rounded-xl flex-shrink-0 shadow-lg`}>
                          <Briefcase className="text-white" size={18} />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white">{exp.title}</h3>
                          <p className={`font-semibold text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                            {exp.organization}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 text-right">
                        <span className="flex items-center gap-1 text-xs text-gray-400 justify-end">
                          <Calendar size={11} /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500 justify-end">
                          <MapPin size={11} /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                    <div>
                      <h4 className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        <Award size={12} /> Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: exp.dotColor }} />
                            {ach}
                          </li>
                        ))}
                        {exp.certificateLink && (
                          <div className="mt-5">
                            <a
                              href={exp.certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${exp.color} text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                            >
                              View Certificate
                            </a>
                          </div>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
