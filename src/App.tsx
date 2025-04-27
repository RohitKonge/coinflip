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
          <article className="space-y-12 w-full">
            <section 
              id="flipper" 
              aria-label="Coin Flipper" 
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Free Online Coin Flip Generator
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Need to make a quick decision? Use our instant coin flip tool - it's free, 
                fair, and features beautiful 3D animation. Perfect for games, sports, or 
                any random choice!
              </p>
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
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                How Our Online Coin Flip Works
              </h2>
              <div className="text-gray-600 max-w-2xl mx-auto space-y-6">
                <p className="text-lg">
                  Our virtual coin flipper provides an instant, fair, and completely random way 
                  to make decisions. Just like flipping a real coin, you'll get a perfect 
                  50/50 chance between heads and tails.
                </p>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold mb-4">Key Features:</h3>
                  <ul className="grid md:grid-cols-2 gap-4 text-left">
                    <li className="flex items-start space-x-2">
                      <span className="text-yellow-600">✓</span>
                      <span>Beautiful 3D coin animation with realistic physics</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-yellow-600">✓</span>
                      <span>Satisfying flip sound effects for immersion</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-yellow-600">✓</span>
                      <span>Cryptographically secure random number generation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-yellow-600">✓</span>
                      <span>Works perfectly on all devices - mobile & desktop</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-yellow-600">✓</span>
                      <span>No ads or distractions - pure coin flipping</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-yellow-600">✓</span>
                      <span>Completely free and unlimited usage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="uses" className="text-center px-4">
              <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                Popular Uses for Our Coin Flip Tool
              </h2>
              <div className="text-gray-600 max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">
                    Quick Decision Making
                  </h3>
                  <p>
                    Perfect for those moments when you're stuck between two equally good 
                    choices. Our coin flip provides an instant, unbiased answer.
                  </p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Where to eat for lunch</li>
                    <li>• Which movie to watch</li>
                    <li>• Shopping decisions</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">
                    Games & Sports
                  </h3>
                  <p>
                    Used by players and referees worldwide for fair game starts and 
                    random selections.
                  </p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Choose starting player</li>
                    <li>• Pick teams fairly</li>
                    <li>• Determine field sides</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">
                    Educational Tool
                  </h3>
                  <p>
                    Great for teaching probability concepts in mathematics and statistics 
                    classes.
                  </p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Probability demonstrations</li>
                    <li>• Random sampling</li>
                    <li>• Data collection exercises</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">
                    Team Building
                  </h3>
                  <p>
                    Make group activities fair and fun with random selections.
                  </p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Assign tasks randomly</li>
                    <li>• Choose presentation order</li>
                    <li>• Select team leaders</li>
                  </ul>
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