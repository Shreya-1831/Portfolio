import { useRef, useState } from 'react';
import { useInView } from '../hooks/useScrollAnimation';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import axios from 'axios';

export const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {

      const response = await axios.post(
        'http://127.0.0.1:8000/send-email',
        formData
      );

      if (response.data.success) {

        setSubmitted(true);

        setFormData({
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);

      } else {
        alert('Failed to send email');
      }

    } catch (error) {
      console.error(error);
      alert('Server error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'shreyasonpavane.18@gmail.com', link: 'mailto:shreyasonpavane.18@gmail.com', color: '#3b82f6' },
    { icon: Phone, title: 'Phone', value: '+91 73580 45980', link: 'tel:+917358045980', color: '#8b5cf6' },
    { icon: MapPin, title: 'Location', value: 'Chennai, India', link: '#', color: '#06b6d4' },
  ];

  return (
    <section ref={ref} id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full glass border border-blue-500/20">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Let's Connect</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 mx-auto mb-5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Let's collaborate on innovative AI/ML projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Left: info + social */}
          <div
            className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="glass border border-slate-700/50 p-7 rounded-2xl mb-6">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                    >
                      <div
                        className="p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                        style={{ background: `${info.color}20`, border: `1px solid ${info.color}30` }}
                      >
                        <Icon size={18} style={{ color: info.color }} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-0.5">{info.title}</p>
                        <p className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass border border-slate-700/50 p-7 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">Open to Opportunities</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                I'm currently seeking opportunities in AI/ML research, data science, and innovative tech projects.
                Feel free to reach out for collaborations, research discussions, or potential roles.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Research', 'Full-time', 'Freelance'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold glass border border-slate-700 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/Shreya-1831', icon: Github, label: 'GitHub', color: '#f1f5f9' },
                  { href: 'https://www.linkedin.com/in/shreya-sonpavane-2b2b152a1/', icon: Linkedin, label: 'LinkedIn', color: '#0ea5e9' },
                  { href: 'mailto:shreyasonpavane.18@gmail.com', icon: Mail, label: 'Email', color: '#3b82f6' },
                ].map(({ href, icon: Icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-11 h-11 rounded-xl glass border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:scale-110"
                    style={{ color }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <form onSubmit={handleSubmit} className="glass border border-slate-700/50 p-7 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              {/* Name */}
              <div className="mb-5 relative">
                <label
                  htmlFor="name"
                  className={`block text-xs font-semibold uppercase tracking-wider mb-2 transition-colors duration-300 ${focused === 'name' ? 'text-blue-400' : 'text-gray-500'
                    }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 bg-slate-900/80 border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all text-sm"
                  style={{
                    borderColor: focused === 'name' ? '#3b82f6' : 'rgba(100,116,139,0.3)',
                    boxShadow: focused === 'name' ? '0 0 0 3px rgba(59,130,246,0.12)' : 'none',
                  }}
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-5 relative">
                <label
                  htmlFor="email"
                  className={`block text-xs font-semibold uppercase tracking-wider mb-2 transition-colors duration-300 ${focused === 'email' ? 'text-blue-400' : 'text-gray-500'
                    }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 bg-slate-900/80 border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all text-sm"
                  style={{
                    borderColor: focused === 'email' ? '#3b82f6' : 'rgba(100,116,139,0.3)',
                    boxShadow: focused === 'email' ? '0 0 0 3px rgba(59,130,246,0.12)' : 'none',
                  }}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-6 relative">
                <label
                  htmlFor="message"
                  className={`block text-xs font-semibold uppercase tracking-wider mb-2 transition-colors duration-300 ${focused === 'message' ? 'text-blue-400' : 'text-gray-500'
                    }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/80 border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all resize-none text-sm"
                  style={{
                    borderColor: focused === 'message' ? '#3b82f6' : 'rgba(100,116,139,0.3)',
                    boxShadow: focused === 'message' ? '0 0 0 3px rgba(59,130,246,0.12)' : 'none',
                  }}
                  placeholder="Tell me about your project or idea..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`shimmer w-full font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/30 text-sm ${submitted ? 'bg-emerald-600' : ''
                  }`}
                style={
                  !submitted
                    ? {
                      background:
                        'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    }
                    : {}
                }
              >

                {loading ? (
                  <>Sending...</>
                ) : submitted ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}

              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-10 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 <span className="gradient-text-blue font-semibold">Shreya Sonpavane</span>. Crafted with passion for AI/ML innovation.
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/Shreya-1831', icon: Github },
              { href: 'https://www.linkedin.com/in/shreya-sonpavane-2b2b152a1/', icon: Linkedin },
              { href: 'mailto:shreyasonpavane.18@gmail.com', icon: Mail },
            ].map(({ href, icon: Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-white transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
