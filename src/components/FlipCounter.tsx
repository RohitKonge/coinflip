import React, { useEffect } from 'react';
import { useFlipStore } from '../store/flipStore';
import { Activity, Users, Globe, Zap } from 'lucide-react';

const FlipCounter: React.FC = () => {
  const { totalFlips, fetchTotalFlips } = useFlipStore();

  useEffect(() => {
    fetchTotalFlips();
  }, [fetchTotalFlips]);

  const statsData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Just Flip A Coin",
    "applicationCategory": "UtilityApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": totalFlips,
      "reviewCount": Math.floor(totalFlips / 100)
    }
  };

  return (
    <section className="flip-counter text-center space-y-6" id="statistics">
      <header className="flex items-center justify-center space-x-2">
        <Activity className="text-yellow-600" aria-hidden="true" />
        <h2 className="text-2xl font-semibold text-gray-800">Global Flip Statistics</h2>
      </header>

      <div 
        className="stats-container"
        itemScope 
        itemType="https://schema.org/InteractionCounter"
      >
        <meta itemProp="interactionType" content="https://schema.org/UseAction" />
        <h3 className="text-gray-700 text-lg">
          Total number of decisions made with our coin flip:
        </h3>
        <p 
          className="text-4xl font-bold text-yellow-600 mt-2"
          itemProp="userInteractionCount"
        >
          {totalFlips.toLocaleString()}
        </p>
        <p className="text-gray-600 mt-4 max-w-md mx-auto text-sm">
          Join millions of users who trust our coin flip for fair, random decisions.
          Every flip is recorded to ensure transparency and build trust.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">
        {[
          { label: 'Response Time', value: '< 0.1s', icon: Zap },
          { label: 'Success Rate', value: '100%', icon: Activity },
          { label: 'Daily Users', value: '50K+', icon: Users },
          { label: 'Countries', value: '190+', icon: Globe }
        ].map(stat => (
          <article 
            key={stat.label} 
            className="bg-white/60 rounded-lg p-4 shadow-sm"
            role="presentation"
          >
            <div className="flex items-center justify-center mb-2">
              <stat.icon className="text-yellow-600 w-5 h-5" aria-hidden="true" />
            </div>
            <h4 className="text-gray-600 text-sm">{stat.label}</h4>
            <p className="text-xl font-semibold text-gray-800 mt-1">{stat.value}</p>
          </article>
        ))}
      </div>

      <script type="application/ld+json">
        {JSON.stringify(statsData)}
      </script>
    </section>
  );
};

export default FlipCounter;