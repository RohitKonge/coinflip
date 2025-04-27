import React from 'react';
import { Coins, Github, Globe2, Users, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white/80 backdrop-blur-sm border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2">
              <Coins size={24} className="text-yellow-600" aria-hidden="true" />
              <span className="text-xl font-bold text-gray-800">FlipACoin.pw</span>
            </div>
            <p className="mt-4 text-gray-600">
              The web's most trusted coin flip tool. Make quick decisions with our free,
              fair, and beautifully animated virtual coin flipper. Used millions of times
              by people worldwide for games, sports, and decision making.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              {[
                { icon: Zap, text: 'Instant Results' },
                { icon: Users, text: 'Millions of Flips' },
                { icon: Globe2, text: '190+ Countries' }
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center text-sm text-gray-500">
                  <Icon size={16} className="mr-1" aria-hidden="true" />
                  {text}
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Site navigation">
            <h2 className="text-sm font-semibold text-gray-800 uppercase mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/" className="hover:text-yellow-600 transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-yellow-600 transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-yellow-600 transition-colors">Features</a></li>
              <li><a href="#uses" className="hover:text-yellow-600 transition-colors">Common Uses</a></li>
              <li><a href="#statistics" className="hover:text-yellow-600 transition-colors">Statistics</a></li>
            </ul>
          </nav>

          <nav aria-label="Additional resources">
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
                  <Github size={16} aria-hidden="true" />
                  <span>Open Source</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© {currentYear} FlipACoin.pw. All rights reserved.</p>
            <p>Made with precision for fair decision making worldwide</p>
          </div>
          <p className="mt-4 text-xs text-gray-400 text-center md:text-left">
            Keywords: flip a coin, coin flip, online coin flip, coin flipper, heads or tails, random decision maker
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;