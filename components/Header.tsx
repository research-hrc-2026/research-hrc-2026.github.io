
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm py-8 border-b border-teal-500/20 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-400 tracking-tight">
          Keeping the Team Moving
        </h1>
        <p className="mt-2 text-lg sm:text-xl font-light text-gray-300">
          Resilient Multi-Robot Coordination for Effective Human–Robot Collaboration
        </p>
      </div>
    </header>
  );
};

export default Header;
