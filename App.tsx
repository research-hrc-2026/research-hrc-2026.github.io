
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoPlayer from './components/VideoPlayer';
import { VideoData } from './types';

// --- USER: REPLACE WITH YOUR VIDEO DATA ---
// You can host your videos in your GitHub repository and link them directly.
// For example, if your video is at `https://github.com/user/repo/blob/main/videos/video1.mp4`,
// the raw link would be `https://raw.githubusercontent.com/user/repo/main/videos/video1.mp4`
// Or use a video hosting service like YouTube/Vimeo and embed them.
// For now, these are placeholder videos.
const videos: VideoData[] = [
  {
    id: 1,
    title: 'Experiment 1: Dynamic Obstacle Avoidance',
    description: 'This video showcases the robots\' ability to dynamically re-plan paths in a cluttered environment with moving obstacles, demonstrating the core resilience of our coordination algorithm.',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    poster: 'https://picsum.photos/seed/robot1/800/450',
  },
  {
    id: 2,
    title: 'Experiment 2: Task Re-allocation on Robot Failure',
    description: 'A demonstration of the system\'s fault tolerance. When one robot is manually disabled, its task is seamlessly re-allocated to the nearest available team member, ensuring mission continuity.',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://picsum.photos/seed/robot2/800/450',
  },
  {
    id: 3,
    title: 'Experiment 3: Human-in-the-Loop Task Prioritization',
    description: 'An operator provides high-level commands to the robot team. The video highlights the intuitive interface and the robots\' ability to interpret and execute complex collaborative tasks.',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://picsum.photos/seed/robot3/800/450',
  },
  {
    id: 4,
    title: 'Simulation: Scalability Test (50 Robots)',
    description: 'A large-scale simulation demonstrating the computational efficiency and scalability of our coordination strategy with a team of 50 robots in a complex warehouse scenario.',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    poster: 'https://picsum.photos/seed/robot4/800/450',
  },
  {
    id: 5,
    title: 'Hardware Demo: Collaborative Object Transport',
    description: 'Two physical robots collaborate to pick up and transport an object that is too large for a single robot, showing successful real-world implementation.',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://picsum.photos/seed/robot5/800/450',
  },
  {
    id: 6,
    title: 'Comparison: Our Method vs. Centralized Planner',
    description: 'A side-by-side comparison showing the performance benefits of our decentralized approach over a traditional centralized planner, especially in scenarios with communication delays.',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    poster: 'https://picsum.photos/seed/robot6/800/450',
  },
];


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12">
          This page hosts the supplementary video material for our research paper. Each video corresponds to a key experiment or demonstration discussed in the paper, showcasing the performance and resilience of our proposed multi-robot coordination system.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {videos.map((video) => (
            <VideoPlayer key={video.id} video={video} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
