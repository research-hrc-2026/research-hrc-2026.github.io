import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- From components/Icons.tsx ---

interface IconProps {
  className?: string;
  width?: string;
  height?: string;
}

const PaperIcon: React.FC<IconProps> = ({ className, width = "20", height = "20" }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const VideoIcon: React.FC<IconProps> = ({ className, width = "20", height = "20" }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

const ChevronUpIcon: React.FC<IconProps> = ({ className, width = "24", height = "24" }) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6"/>
    </svg>
);

const PlayIcon: React.FC<IconProps> = ({ className, width = "24", height = "24" }) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);


// --- From components/VideoPlaceholder.tsx ---

interface VideoPlaceholderProps {
  text?: string;
}

const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ text = "Video Placeholder" }) => {
  return (
    <div className="aspect-video w-full h-full bg-gray-900/50 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-700 text-gray-400">
      <div className="text-gray-500 mb-2">
        <VideoIcon width="48" height="48" />
      </div>
      <p className="text-xl font-semibold">{text}</p>
      <p className="text-sm mt-1 text-gray-500">Video coming soon</p>
    </div>
  );
};


// --- From components/Header.tsx ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const buttonLinkClasses = "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/70 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-xl font-bold text-gray-200 hover:text-white transition-colors">
          Keeping the Team Moving
        </a>
        <div className="flex items-center space-x-2">
          <a href="paper.pdf" target="_blank" rel="noopener noreferrer" className={`${buttonLinkClasses} bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 text-white shadow-lg`}>
            <PaperIcon />
            <span className="hidden sm:inline">Paper</span>
          </a>
        </div>
      </nav>
    </header>
  );
};


// --- From components/Hero.tsx ---

const Hero: React.FC = () => {
  return (
    <section className="text-center py-12">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-50 mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        Keeping the Team Moving
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
        Resilient Multi-Robot Coordination for Effective Human–Robot Collaboration
      </p>
    </section>
  );
};


// --- From components/Section.tsx ---

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-12 md:py-16">
      <h2 className="text-3xl font-bold text-gray-100 mb-10 text-center">{title}</h2>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

// --- From components/VideoLibrary.tsx ---

const videos = [
  {
    id: 'teaser',
    src: null,
    title: 'Teaser Video',
    description: 'A short, high-level overview of our resilient multi-robot coordination system in action.'
  },
  {
    id: 'perception',
    src: 'perception.mp4',
    title: 'Perception Pipeline Deep Dive',
    description: 'Our robust perception pipeline, showing successful tracking and rejection of ambiguous ghost paths.'
  },
  {
    id: 'comparison',
    src: 'comparison1.mp4',
    title: 'Baseline vs. Our Method',
    description: 'A side-by-side comparison, highlighting our system\'s stability and accuracy.'
  },
  {
    id: 'high-effort',
    src: null,
    title: 'Scenario A: High-Effort Deadlock',
    description: 'The robot team detects a high-cost maneuver and collaborates with the human for resolution.'
  },
  {
    id: 'low-effort',
    src: null,
    title: 'Scenario B: Low-Effort Deadlock',
    description: 'The system detects planner stagnation and alerts the human to choose a recovery strategy.'
  },
  {
    id: 'coordination-gap',
    src: null,
    title: 'Scenario C: Coordination Gap',
    description: 'The system detects a large separation distance and initiates communication to re-establish formation.'
  }
];

const VideoLibrary: React.FC = () => {
    const [activeVideo, setActiveVideo] = useState(videos[0]);
    
    return (
        <Section id="video-library" title="Video Library">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Main Video Player */}
                <div className="lg:w-2/3 w-full">
                    <div className="aspect-video w-full overflow-hidden rounded-xl shadow-2xl bg-black ring-1 ring-white/10">
                        {activeVideo.src ? (
                            <video key={activeVideo.src} className="w-full h-full object-contain" src={activeVideo.src} controls autoPlay muted loop>
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <VideoPlaceholder text={activeVideo.title} />
                        )}
                    </div>
                    <div className="mt-6">
                        <h3 className="text-2xl font-bold text-gray-100">{activeVideo.title}</h3>
                        <p className="text-lg text-gray-400 mt-2 leading-relaxed">{activeVideo.description}</p>
                    </div>
                </div>

                {/* Video Playlist */}
                <div className="lg:w-1/3 w-full lg:max-h-[70vh] lg:overflow-y-auto -mr-4 pr-4">
                    <div className="space-y-4">
                        {videos.map((video) => (
                            <button
                                key={video.id}
                                onClick={() => setActiveVideo(video)}
                                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 border ${activeVideo.id === video.id ? 'bg-white/10 border-blue-500 shadow-lg scale-105' : 'bg-white/5 hover:bg-white/10 border-transparent hover:border-white/20 transform hover:scale-[1.02]'}`}
                                aria-current={activeVideo.id === video.id}
                            >
                                <div className="flex-shrink-0 w-24 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white/50">
                                    {video.src ? <PlayIcon width="32" height="32" className="text-white" /> : <VideoIcon width="32" height="32" />}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-100">{video.title}</h4>
                                    <p className="text-sm text-gray-400 line-clamp-2">{video.description}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};


// --- From App.tsx ---

const App: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-gray-900 font-['Inter',_sans-serif] text-gray-300 relative overflow-x-hidden">
      {/* Animated Gradient Background Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <Hero />

          <VideoLibrary />
          
        </main>

        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white p-3 rounded-full shadow-lg hover:from-blue-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon />
        </button>
      </div>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};


// --- Original index.tsx render logic ---

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
