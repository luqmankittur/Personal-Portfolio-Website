import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO = ({ title, description, keywords, ogImage, canonical }: SEOProps) => {
  const siteUrl = 'https://luqman.co.in';
  const defaultKeywords = 'graphic design, visual overlays, brand identity, logo design, digital art, creative designer, free downloads, professional graphics, Stream Overlays, Twitch overlays, Custom Overlay';
  const defaultOgImage = `${siteUrl}/images/og_image.png`;
  
  const fullTitle = `${title} | Luqman Graphics`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const ogImageUrl = ogImage || defaultOgImage;
  const keywordList = keywords ? `${defaultKeywords}, ${keywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordList} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content="Luqman Graphics" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageUrl} />
      <meta name="twitter:creator" content="@KitturLuqman" />
    </Helmet>
  );
};

export default SEO;
