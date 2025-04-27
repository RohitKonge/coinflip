import React from 'react';
import { motion } from 'framer-motion';
import { useFlipStore } from '../store/flipStore';
import { Coins } from 'lucide-react';

const Coin: React.FC = () => {
  const { isFlipping, result, flipCoin } = useFlipStore();

  const flipVariants = {
    flipping: {
      rotateX: [0, 360, 720, 1080, 1440, 1800],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }
    },
    static: { 
      rotateX: result === 'tails' ? 180 : 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="coin-flipper space-y-8" role="application" aria-label="Coin Flip Tool">
      <div className="coin-instructions text-center space-y-4">
        <p className="text-lg text-gray-600">
          Click or tap the coin to flip it and get a random result
        </p>
        {!isFlipping && result && (
          <p className="text-sm text-gray-500">
            Last result: {result.toUpperCase()}. Click again to flip again!
          </p>
        )}
      </div>

      <button 
        className="coin-container relative w-96 h-96 mx-auto block focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-full transition-all hover:scale-105" 
        onClick={flipCoin}
        aria-label={isFlipping ? "Coin is flipping" : `Coin showing ${result || 'heads'}. Click to flip`}
        disabled={isFlipping}
      >
        <motion.div
          className="coin relative w-full h-full"
          animate={isFlipping ? 'flipping' : 'static'}
          variants={flipVariants}
          initial={false}
          style={{ transformStyle: 'preserve-3d' }}
          aria-hidden="true"
        >
          {/* Heads side */}
          <div 
            className="absolute w-full h-full rounded-full shadow-lg flex items-center justify-center text-center"
            style={{
              backgroundImage: 'linear-gradient(135deg, #f6d365 0%, #d4a017 100%)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 4px 8px rgba(255,255,255,0.4), inset 0 -4px 8px rgba(0,0,0,0.2)',
              backfaceVisibility: 'hidden'
            }}
          >
            <div className="coin-content relative w-5/6 h-5/6 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-600 border-4 border-yellow-700">
              <Coins className="w-24 h-24 text-yellow-900" aria-hidden="true" />
              <span className="sr-only">Heads</span>
            </div>
          </div>
          
          {/* Tails side */}
          <div 
            className="absolute w-full h-full rounded-full shadow-lg flex items-center justify-center text-center"
            style={{
              backgroundImage: 'linear-gradient(135deg, #f6d365 0%, #d4a017 100%)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 4px 8px rgba(255,255,255,0.4), inset 0 -4px 8px rgba(0,0,0,0.2)',
              backfaceVisibility: 'hidden',
              transform: 'rotateX(180deg)'
            }}
          >
            <div className="coin-content relative w-5/6 h-5/6 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-600 border-4 border-yellow-700">
              <Coins className="w-24 h-24 text-yellow-900 rotate-180" aria-hidden="true" />
              <span className="sr-only">Tails</span>
            </div>
          </div>
        </motion.div>
      </button>
      
      <div 
        className="result-section text-center" 
        aria-live="polite" 
        aria-atomic="true"
      >
        {!isFlipping && result && (
          <div className="space-y-2 animate-fadeIn">
            <h2 className="text-2xl font-bold text-yellow-700">
              Result: {result.toUpperCase()}
            </h2>
            <p className="text-gray-600">
              Your coin flip landed on {result}. Need another flip? Just click the coin again!
            </p>
          </div>
        )}
        {isFlipping && (
          <p className="text-xl text-gray-600 animate-pulse">
            Flipping coin...
          </p>
        )}
      </div>

      <div className="keyboard-instructions text-sm text-gray-500 mt-4">
        <p>
          Keyboard users: Press Enter or Space to flip the coin
        </p>
      </div>
    </div>
  );
};

export default Coin;