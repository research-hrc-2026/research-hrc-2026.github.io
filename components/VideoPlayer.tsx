
import React from 'react';
import { VideoData } from '../types.ts';

interface VideoPlayerProps {
  video: VideoData;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden flex flex-col group transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-teal-500/20">
      <div className="aspect-w-16 aspect-h-9 w-full">
        <video
          controls
          src={video.src}
          poster={video.poster}
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-5 flex-grow">
        <h3 className="text-lg font-semibold text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
          {video.title}
        </h3>
        <p className="mt-2 text-sm text-gray-400">
          {video.description}
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;