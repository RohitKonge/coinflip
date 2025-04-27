import React from 'react';
import { Coins } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-4 py-6 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-center space-x-2">
            <Coins size={28} className="text-yellow-600" aria-hidden="true" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              <span className="sr-only">FlipACoin.pw - </span>
              Flip a Coin Online
            </h1>
          </div>
          
          <nav aria-label="Main navigation">
            <ul className="flex items-center space-x-6 text-gray-600">
              <li>
                <a href="#how-it-works" className="hover:text-yellow-600 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-yellow-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#uses" className="hover:text-yellow-600 transition-colors">
                  Common Uses
                </a>
              </li>
              <li>
                <a href="#statistics" className="hover:text-yellow-600 transition-colors">
                  Statistics
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="mt-6 text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Free Random Coin Flip Generator
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Make quick decisions with our free, fair, and beautifully animated coin flip tool.
            Perfect for games, sports, or any time you need a random choice.
            Join millions who trust our instant coin flipper!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            ✓ Instant Results ✓ No Ads ✓ Fair & Random ✓ Beautiful 3D Animation
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;