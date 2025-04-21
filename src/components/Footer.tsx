import React from 'react';
import { Coins, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white/80 backdrop-blur-sm border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2">
              <Coins size={24} className="text-yellow-600" />
              <span className="text-xl font-bold text-gray-800">Just Flip A Coin</span>
            </div>
            <p className="mt-4 text-gray-600">
              The internet's most trusted coin flip tool. Make quick decisions with our free,
              fair, and beautifully animated virtual coin flipper.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-800 uppercase mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#how-it-works" className="hover:text-yellow-600 transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-yellow-600 transition-colors">Features</a></li>
              <li><a href="#uses" className="hover:text-yellow-600 transition-colors">Common Uses</a></li>
              <li><a href="#statistics" className="hover:text-yellow-600 transition-colors">Statistics</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-800 uppercase mb-4">Resources</h2>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/about" className="hover:text-yellow-600 transition-colors">About Us</a></li>
              <li><a href="/privacy" className="hover:text-yellow-600 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-yellow-600 transition-colors">Terms of Use</a></li>
              <li>
                <a 
                  href="https://github.com/yourusername/coinflip" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-yellow-600 transition-colors"
                >
                  <Github size={16} />
                  <span>Open Source</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© {currentYear} Just Flip A Coin. All rights reserved.</p>
            <p>Made with ❤️ for decision makers worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;