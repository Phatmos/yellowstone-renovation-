import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function SEO({
  title,
  description,
  pathname = "",
  image,
  keywords,
  article = false,

  // Optional local/project SEO
  city,
  state = "KY",
  postalCode,
  serviceType = [],
  areaServed = [],
  projectSchema = null,
  productSchema = null,
}) {
  const { site } = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = site.siteMetadata;

  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  const normalizedImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}/images/remodler1.webp`;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${normalizedPath}`,
    image: normalizedImage,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Yellowstone Renovation",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.webp`,
    description:
      "Yellowstone Renovation is a trusted exterior remodeling company serving Kentucky with deck building, siding installation, fencing, and window replacement services.",
    sameAs: [
      "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
      "https://www.instagram.com/yellowstone_renovation/",
      "https://www.yelp.com/biz/yellowstone-renovation-lexington",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-859-765-7267",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Yellowstone Renovation",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": article ? "Article" : "WebPage",
    "@id": `${seo.url}#webpage`,
    url: seo.url,
    name: seo.title,
    description: seo.description,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: seo.image,
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Yellowstone Renovation",
    url: siteUrl,
    image: seo.image,
    telephone: "+1-859-765-7267",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: city || "Lexington",
      addressRegion: state,
      postalCode: postalCode || "40509",
      addressCountry: "US",
    },
    areaServed:
      areaServed.length > 0
        ? areaServed
        : [
          "Lexington, KY",
          "Nicholasville, KY",
          "Frankfort, KY",
          "Georgetown, KY",
          "Richmond, KY",
        ],
    serviceType:
      serviceType.length > 0
        ? serviceType
        : [
          "Deck Construction",
          "Fence Installation",
          "Siding Installation",
          "Window Replacement",
          "Exterior Remodeling",
        ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: 87,
    },
  };

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={seo.url} />

      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="Yellowstone Renovation" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:secure_url" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(webpageSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            brand: {
              "@type": "Brand",
              name: "Yellowstone Renovation",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: 87,
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "1",
              availability: "https://schema.org/InStock",
              url: seo.url,
            },
            ...productSchema,
            image: productSchema.image || seo.image,
            url: productSchema.url || seo.url,
          })}
        </script>
      )}

      {projectSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            author: {
              "@type": "Organization",
              name: "Yellowstone Renovation",
            },
            ...projectSchema,
            image: projectSchema.image || seo.image,
          })}
        </script>
      )}
    </Helmet>
  );
}