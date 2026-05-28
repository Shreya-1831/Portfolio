import { useRef } from 'react';
import { useInView } from '../hooks/useScrollAnimation';
import { GraduationCap, BookOpen, Star, MapPin, Calendar } from 'lucide-react';

export const Education = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Meenakshi Sundararajan Engineering College',
      period: '2023 - 2027',
      location: 'Chennai, India',
      description: 'Specialized in Deep Learning, Natural Language Processing, and Computer Vision with focus on practical applications.',
      achievements: [
        'CGPA: 8.94/10.0',
        'Awarded 4th Prize at the ECube Paper Presentation Event for presenting a seminar on Brain–Computer Interface',
        'Secretary of the DevDynasty Web Development & E-Sports Club',
      ],
      courses: ['Data Structures', 'Algorithms', 'Machine Learning', 'Database Management', 'Web Development'],
      color: 'from-blue-500 to-cyan-600',
      accent: '#3b82f6',
    },
    {
      degree: 'Grade XII',
      institution: 'Prince Srivari Senior Secondary School',
      period: '2022-2023',
      location: 'Chennai, India',
      description: 'Strong foundation in computer science fundamentals, algorithms, and software engineering with specialization in AI/ML.',
      achievements: [
        'Secured an overall score of 92.4% in board examinations, demonstrating strong academic performance and consistency.',
      ],
      courses: ['Python', 'Computer Science', 'MySQL'],
      color: 'from-purple-500 to-pink-600',
      accent: '#8b5cf6',
    },
  ];

  return (
    <section ref={ref} id="education" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute top-0 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full glass border border-cyan-500/20">
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">Academic</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Education</h2>
          <div className="h-1 w-20 mx-auto mb-5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }} />
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Continuous learning and academic excellence
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className="glass border border-slate-700/50 hover:border-slate-600 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden"
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${edu.accent}30, 0 20px 60px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`} />

                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5 pt-2">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${edu.color} p-3 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap className="text-white" size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{edu.degree}</h3>
                      <p className={`font-semibold text-sm mt-1 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 md:text-right">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 md:justify-end">
                      <Calendar size={11} /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500 md:justify-end">
                      <MapPin size={11} /> {edu.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{edu.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Achievements */}
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      <Star size={12} /> Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
                            style={{ background: edu.accent }} />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Courses */}
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      <BookOpen size={12} /> Key Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="badge-glow px-3 py-1.5 text-xs font-medium rounded-full border"
                          style={{
                            background: `${edu.accent}15`,
                            borderColor: `${edu.accent}40`,
                            color: edu.accent === '#3b82f6' ? '#93c5fd' : '#c4b5fd',
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
