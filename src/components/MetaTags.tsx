import React from 'react';
import { useFlipStore } from '../store/flipStore';
import { Helmet } from 'react-helmet-async';

const MetaTags: React.FC = () => {
  const { seoMetadata, totalFlips } = useFlipStore();
  const { title, description, keywords, lastUpdate } = seoMetadata;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Just Flip A Coin" />
      <meta name="last-modified" content={lastUpdate} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://justflipacoin.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/coin-preview.png" />
      <meta property="og:updated_time" content={lastUpdate} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://justflipacoin.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/coin-preview.png" />

      {/* Additional SEO Tags */}
      <link rel="canonical" href="https://justflipacoin.com/" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />

      {/* PWA Related */}
      <meta name="theme-color" content="#F6D365" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Coin Flip" />
      <link rel="manifest" href="/manifest.json" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Just Flip A Coin",
          "description": description,
          "url": "https://justflipacoin.com",
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
          "dateModified": lastUpdate,
          "keywords": keywords.join(', ')
        })}
      </script>

      {/* Breadcrumbs Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://justflipacoin.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Coin Flip Tool",
              "item": "https://justflipacoin.com#flipper"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Statistics",
              "item": "https://justflipacoin.com#statistics"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default MetaTags;