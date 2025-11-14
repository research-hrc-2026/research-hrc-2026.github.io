
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 mt-16 py-8 border-t border-teal-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Research Contributors.</p>
        <p className="mt-1 text-sm">
          Video gallery for the paper "Keeping the Team Moving".
        </p>
        <div className="mt-4">
          <a 
            href="https://research-hrc-2026.github.io/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-500 hover:text-teal-400 transition-colors duration-300"
          >
            Project Home Page
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
