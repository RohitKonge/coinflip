import React from 'react';
import { motion } from 'framer-motion';
import { useFlipStore } from '../store/flipStore';

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
    <div className="flex flex-col items-center space-y-8">
      <div 
        className="coin-container relative w-96 h-96 cursor-pointer hover:scale-105 transition-transform perspective-[1000px]" 
        onClick={flipCoin}
        role="button"
        aria-label="Flip the coin"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && flipCoin()}
      >
        <motion.div
          className="coin relative w-full h-full"
          animate={isFlipping ? 'flipping' : 'static'}
          variants={flipVariants}
          initial={false}
          style={{ transformStyle: 'preserve-3d' }}
          aria-live="polite"
          role="img"
          aria-label={`Coin showing ${result || 'heads'}`}
        >
          {/* Heads side */}
          <div 
            className="absolute w-full h-full rounded-full shadow-lg flex items-center justify-center text-center"
            style={{
              backgroundImage: 'linear-gradient(135deg, #f6d365 0%, #d4a017 100%)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 4px 8px rgba(255,255,255,0.4), inset 0 -4px 8px rgba(0,0,0,0.2)',
              backfaceVisibility: 'hidden'
            }}
            role="presentation"
          >
            <div className="coin-content relative w-5/6 h-5/6 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-600 border-4 border-yellow-700">
              <span className="text-6xl font-bold text-yellow-900 select-none">
                {result === 'heads' ? 'HEADS' : ''}
              </span>
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
            role="presentation"
          >
            <div className="coin-content relative w-5/6 h-5/6 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-600 border-4 border-yellow-700">
              <span className="text-6xl font-bold text-yellow-900 select-none">
                {result === 'tails' ? 'TAILS' : ''}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="text-center" aria-live="assertive">
        {!isFlipping && result && (
          <p className="result-text font-bold text-2xl text-yellow-700 animate-fadeIn">
            Result: {result.toUpperCase()}
          </p>
        )}
        {isFlipping && (
          <p className="flipping-text text-gray-600">Coin is flipping...</p>
        )}
      </div>
    </div>
  );
};

export default Coin;