import { useEffect, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import MetaTags from './components/MetaTags';
import PreloadResources from './components/PreloadResources';
import { useFlipStore } from './store/flipStore';

// Lazy load non-critical components
const Coin = lazy(() => import('./components/Coin'));
const FlipCounter = lazy(() => import('./components/FlipCounter'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="animate-pulse bg-gray-200 rounded-lg w-80 h-80" role="progressbar" aria-label="Loading..." />
);

function App() {
  const { fetchTotalFlips } = useFlipStore();

  useEffect(() => {
    fetchTotalFlips();

    // Add page visibility tracking for analytics
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchTotalFlips();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [fetchTotalFlips]);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-between">
        <MetaTags />
        <PreloadResources />
        <Header />
        
        <main className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 py-12">
          <article className="space-y-7">
            <section id="flipper" aria-label="Coin Flipper" className="text-center">
              <h1 className="sr-only">Online Coin Flip Tool - Free Random Decision Maker</h1>
              <Suspense fallback={<LoadingFallback />}>
                <Coin />
              </Suspense>
            </section>

            <section id="statistics" aria-label="Statistics" className="text-center">
              <Suspense fallback={<LoadingFallback />}>
                <FlipCounter />
              </Suspense>
            </section>
            
            <section id="how-it-works" className="text-center px-4 space-y-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">How Our Online Coin Flip Works</h2>
              <div className="text-gray-600 max-w-2xl mx-auto space-y-6">
                <p className="text-lg">
                  Our virtual coin flipper provides a quick, fair, and completely random way to make decisions. 
                  Just like flipping a real coin, you'll get a 50/50 chance between heads and tails.
                </p>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                  <ul className="list-disc text-left max-w-md mx-auto space-y-2 pl-4">
                    <li>Beautiful 3D coin animation with realistic physics</li>
                    <li>Satisfying flip sound effects for an immersive experience</li>
                    <li>Completely fair and random results using cryptographic randomness</li>
                    <li>Works on all devices - mobile, tablet, and desktop</li>
                    <li>No ads or distractions - just pure coin flipping fun</li>
                  </ul>
                </div>
                <p>
                  Whether you're making a quick decision, settling a friendly dispute, or teaching probability, 
                  our coin flipper is the perfect tool for the job.
                </p>
              </div>
            </section>

            <section id="uses" className="text-center px-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Common Uses for Coin Flips</h2>
              <div className="text-gray-600 max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Decision Making</h3>
                  <p>Perfect for quick yes/no decisions when you're stuck between two equally good choices.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Games & Sports</h3>
                  <p>Use it to decide who goes first in games or which team starts with the ball.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Teaching Tool</h3>
                  <p>Great for demonstrating probability concepts in mathematics and statistics.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Team Building</h3>
                  <p>Fairly divide teams or assign tasks in a random, unbiased way.</p>
                </div>
              </div>
            </section>
          </article>
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;