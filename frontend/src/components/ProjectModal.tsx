import { X, Github, ExternalLink  } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    image: string;
    gradient: string;
    github?: string;
    demo?: string;
    video?: string;
  } | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-slideUp border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between p-4 sm:p-6 border-b border-slate-700 bg-slate-800/95 backdrop-blur gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white line-clamp-2">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors flex-shrink-0"
          >
            <X size={20} className="sm:hidden" />
            <X size={24} className="hidden sm:block" />
          </button>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-6 h-48 sm:h-64 md:h-80">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`} />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">Overview</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              {project.fullDescription}
            </p>
          </div>

          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-slate-700 text-blue-300 rounded-full text-xs sm:text-sm font-medium hover:bg-slate-600 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Key Features</h4>
              <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                  <span>Advanced algorithm implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                  <span>Production-ready code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                  <span>Optimized performance</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Impact</h4>
              <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                  <span>High accuracy results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                  <span>Scalable architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                  <span>Real-world applications</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <a
              href={project.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 sm:py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm sm:text-base min-h-[44px]"
            >
              <Github size={18} />
              Code
            </a>
            <a
              href={project.demo || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm sm:text-base min-h-[44px]"
            >
              <ExternalLink size={18} />
              Demo
            </a>
            {/* <a
              href={project.video || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 sm:py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm sm:text-base min-h-[44px]"
            >
              <Video size={18} />
              Video
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
