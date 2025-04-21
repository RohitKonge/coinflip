import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PreloadResources: React.FC = () => {
  useEffect(() => {
    // Add connection preload hints for fast subsequent navigations
    const preconnectHints = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectHints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = hint;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Dynamic prefetch based on user interaction
    const prefetchOnHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      
      if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
      }
    };

    document.addEventListener('mouseover', prefetchOnHover);
    return () => document.removeEventListener('mouseover', prefetchOnHover);
  }, []);

  return (
    <Helmet>
      {/* Preload critical resources */}
      <link rel="preload" href="/flip-sound.mp3" as="audio" />
      <link rel="preload" href="/coin-favicon.svg" as="image" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

      {/* Resource Hints */}
      <link rel="modulepreload" href="/src/components/Coin.tsx" />
      <link rel="modulepreload" href="/src/store/flipStore.ts" />
    </Helmet>
  );
};

export default PreloadResources;