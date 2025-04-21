import React from 'react';
import { Coins } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-4 py-6 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-center space-x-2">
            <Coins size={28} className="text-yellow-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Just Flip A Coin</h1>
          </div>
          
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
                Uses
              </a>
            </li>
          </ul>
        </div>
        
        <div className="mt-4 text-center md:text-left">
          <p className="text-gray-600">
            Make quick decisions with our free, fair, and beautifully animated coin flip tool
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Trusted by millions for random, unbiased choices
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;