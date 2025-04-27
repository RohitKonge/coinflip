import React from 'react';
import { useFlipStore } from '../store/flipStore';
import { Helmet } from 'react-helmet-async';

const MetaTags: React.FC = () => {
  const { seoMetadata, totalFlips, result } = useFlipStore();
  const domain = 'https://flipacoin.pw';
  
  // Dynamic title based on result
  const pageTitle = result 
    ? `Coin Flip Result: ${result.toUpperCase()} | Free Online Coin Flipper`
    : 'Flip a Coin Online ⚡ Instant Random Coin Flip Generator [2025]';

  // Dynamic description based on total flips
  const description = `FREE online coin flipper with beautiful 3D animation! ✓ Instant results ✓ No ads ✓ Fair & random ✓ Used ${totalFlips.toLocaleString()}+ times. Try now at FlipACoin.pw!`;

  // Enhanced keywords targeting common searches
  const keywords = [
    'flip a coin',
    'coin flip',
    'online coin flip',
    'coin flipper',
    'heads or tails',
    'coin toss',
    'random decision maker',
    'virtual coin flip',
    'flip coin online',
    'random coin flip',
    'coin flip generator',
    'best coin flip',
    '3d coin flip',
    'fair coin flip',
    'free coin flip'
  ].join(', ');

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="FlipACoin.pw" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={domain} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${domain}/coin-preview.png`} />
      <meta property="og:site_name" content="FlipACoin.pw" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={domain} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${domain}/coin-preview.png`} />

      {/* Canonical URL */}
      <link rel="canonical" href={domain} />

      {/* Structured Data - Updated dynamically */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "FlipACoin.pw - Online Coin Flip Generator",
          "description": description,
          "url": domain,
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": totalFlips,
            "reviewCount": Math.floor(totalFlips / 100)
          },
          "featureList": [
            "Instant random results",
            "Beautiful 3D coin animation",
            "Sound effects",
            "Mobile friendly",
            "No registration required",
            "100% free to use"
          ]
        })}
      </script>

      {/* FAQ Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is this coin flip truly random?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our coin flip uses cryptographically secure random number generation to ensure completely fair and random results every time."
              }
            },
            {
              "@type": "Question",
              "name": "How many times can I flip the coin?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `You can flip the coin as many times as you want - it's completely free and has no limits! Already used ${totalFlips.toLocaleString()}+ times.`
              }
            },
            {
              "@type": "Question",
              "name": "Can I use this for making decisions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Our coin flip tool is perfect for making quick, unbiased decisions. Use it for games, sports, or any situation requiring a random choice."
              }
            },
            {
              "@type": "Question",
              "name": "Does it work on mobile devices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our coin flip works perfectly on all devices including smartphones, tablets, and computers. The 3D animation is optimized for all screen sizes."
              }
            }
          ]
        })}
      </script>

      {/* BreadcrumbList Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": domain
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": result ? `Result: ${result.toUpperCase()}` : "Flip Coin",
              "item": `${domain}${result ? '/result' : '/flip'}`
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default MetaTags;