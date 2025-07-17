import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  structuredData?: object
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/assets/img/profile1.jpg',
  url = 'https://www.nickpinodesigns.com',
  type = 'website',
  structuredData
}: SEOProps) => {
  const fullTitle = `${title} | Nick Pino - UI/UX Designer & Developer`
  const fullUrl = url === 'https://www.nickpinodesigns.com' ? url : `https://www.nickpinodesigns.com${url}`

  return (
    <Helmet>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131953297-2"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'UA-131953297-2');
        `}
      </script>

      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://www.nickpinodesigns.com${image}`} />
      <meta property="og:site_name" content="Nick Pino Designs" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://www.nickpinodesigns.com${image}`} />
      <meta name="twitter:creator" content="@nickpinodesigns" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Nick Pino" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO 