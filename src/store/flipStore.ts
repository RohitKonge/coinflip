import { create } from 'zustand';
import { incrementFlipCount, getTotalFlips } from '../lib/supabase';

interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  lastUpdate: string;
}

interface ShareableResult {
  result: 'heads' | 'tails';
  timestamp: string;
  flipNumber: number;
}

interface FlipState {
  isFlipping: boolean;
  result: 'heads' | 'tails' | null;
  totalFlips: number;
  lastFlipTimestamp: number | null;
  seoMetadata: SeoMetadata;
  flipCoin: () => Promise<void>;
  fetchTotalFlips: () => Promise<void>;
  updateSeoMetadata: (metadata: Partial<SeoMetadata>) => void;
  generateShareableUrl: () => string;
  handleSharedUrl: () => void;
}

const defaultSeoMetadata: SeoMetadata = {
  title: 'Online Coin Flip - Free, Fast & Fair Random Coin Flipper',
  description: 'Make quick decisions with our free online coin flip tool. Beautiful 3D animation, instant results, and completely random. Perfect for games, decisions, and more!',
  keywords: [
    'coin flip',
    'flip a coin',
    'online coin flip',
    'coin flipper',
    'random decision',
    'heads or tails',
    'virtual coin toss',
    'coin toss simulator',
    'random coin flip',
    'decision maker'
  ],
  lastUpdate: new Date().toISOString()
};

export const useFlipStore = create<FlipState>((set, get) => ({
  isFlipping: false,
  result: null,
  totalFlips: 0,
  lastFlipTimestamp: null,
  seoMetadata: defaultSeoMetadata,
  
  flipCoin: async () => {
    // Prevent rapid clicking
    const lastFlip = get().lastFlipTimestamp;
    const now = Date.now();
    if (lastFlip && now - lastFlip < 1500) return;

    set({ 
      isFlipping: true, 
      result: null,
      lastFlipTimestamp: now
    });
    
    // Random result after animation completes
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    
    // Play flip sound
    const audio = new Audio('/flip_sound.mp3');
    audio.play().catch(() => console.log('Audio play failed - user might not have interacted with the page yet'));
    
    // Record flip in database
    await incrementFlipCount();
    
    // Wait for animation to complete (1.5s)
    setTimeout(async () => {
      set({ 
        isFlipping: false, 
        result,
        seoMetadata: {
          ...get().seoMetadata,
          title: `Coin Flip Result: ${result.toUpperCase()} | Just Flip A Coin`,
          description: `The coin landed on ${result.toUpperCase()}! Make quick decisions with our free online coin flip tool. Join ${get().totalFlips.toLocaleString()} other flips!`,
          lastUpdate: new Date().toISOString()
        }
      });
      // Update total flips count
      await get().fetchTotalFlips();
    }, 1500);
  },
  
  fetchTotalFlips: async () => {
    const count = await getTotalFlips();
    set({ totalFlips: count });
  },

  updateSeoMetadata: (metadata: Partial<SeoMetadata>) => {
    set(state => ({
      seoMetadata: {
        ...state.seoMetadata,
        ...metadata,
        lastUpdate: new Date().toISOString()
      }
    }));
  },

  generateShareableUrl: () => {
    const { result, totalFlips } = get();
    if (!result) return window.location.href;

    const shareData: ShareableResult = {
      result,
      timestamp: new Date().toISOString(),
      flipNumber: totalFlips
    };

    const searchParams = new URLSearchParams();
    searchParams.set('share', btoa(JSON.stringify(shareData)));
    
    const url = new URL(window.location.href);
    url.search = searchParams.toString();
    
    // Update SEO metadata for shared URL
    get().updateSeoMetadata({
      title: `I got ${result.toUpperCase()} on Just Flip A Coin!`,
      description: `The coin landed on ${result.toUpperCase()}! This was flip number ${totalFlips.toLocaleString()}. Try your luck with our free online coin flip tool!`
    });

    return url.toString();
  },

  handleSharedUrl: () => {
    const params = new URLSearchParams(window.location.search);
    const shareData = params.get('share');
    
    if (shareData) {
      try {
        const decoded: ShareableResult = JSON.parse(atob(shareData));
        set({ 
          result: decoded.result,
          totalFlips: decoded.flipNumber,
          seoMetadata: {
            ...get().seoMetadata,
            title: `Shared Coin Flip Result: ${decoded.result.toUpperCase()}`,
            description: `This shared coin flip landed on ${decoded.result.toUpperCase()}! It was flip number ${decoded.flipNumber.toLocaleString()}. Try your own flip!`
          }
        });
      } catch (e) {
        console.error('Invalid share data');
      }
    }
  }
}));