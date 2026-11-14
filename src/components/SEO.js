import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function SEO({
  title,
  description,
  pathname = "",
  image,
  imageAlt,
  keywords,
  article = false,
  publishedTime,
  modifiedTime,
  author,
  noIndex = false,

  // Optional local/project SEO
  city,
  state = "KY",
  postalCode,
  serviceType = [],
  areaServed = [],
  projectSchema = null,
  productSchema = null,
  breadcrumbs = [],
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

  const currentPath = pathname || (typeof window !== "undefined" ? window.location.pathname : "/");
  const cleanPath = currentPath.split(/[?#]/)[0].replace(/^\/+|\/+$/g, "");
  const normalizedPath = cleanPath ? `/${cleanPath}/` : "/";

  const baseUrl = siteUrl.replace(/\/+$/, "");
  const absoluteUrl = value => new URL(value, `${baseUrl}/`).href;
  const normalizedImage = absoluteUrl(image || "/images/remodler1.webp");
  // Escaping '<' keeps supplied copy inside the JSON script during HTML parsing.
  const jsonLd = value => JSON.stringify(value).replace(/</g, "\\u003c");

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${baseUrl}${normalizedPath}`,
    image: normalizedImage,
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
    "@type": article ? "BlogPosting" : "WebPage",
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
    ...(article && {
      datePublished: publishedTime,
      ...(modifiedTime && { dateModified: modifiedTime }),
      author: { "@type": "Organization", name: author || "Yellowstone Renovation" },
      publisher: { "@id": `${siteUrl}/#organization` },
    }),
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: seo.image,
      caption: imageAlt || seo.title,
    },
    ...(breadcrumbs.length > 0 && { breadcrumb: { "@id": `${seo.url}#breadcrumb` } }),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#organization`,
    name: "Yellowstone Renovation",
    url: siteUrl,
    image: `${siteUrl}/icons/logo.webp`,
    logo: `${siteUrl}/icons/logo.webp`,
    description: "Deck building, siding installation, fencing, and window replacement in Lexington and Central Kentucky.",
    telephone: "+1-859-765-7267",
    email: "info@yellowstonerenovation.com",
    sameAs: [
      "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
      "https://www.instagram.com/yellowstone_renovation/",
      "https://www.yelp.com/biz/yellowstone-renovation-lexington",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-859-765-7267",
      email: "info@yellowstonerenovation.com",
      contactType: "customer service",
      areaServed: "KY",
      availableLanguage: ["English"],
    },
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "120 Tina Way",
      addressLocality: "Nicholasville",
      addressRegion: "KY",
      postalCode: "40356",
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
    knowsAbout:
      serviceType.length > 0
        ? serviceType
        : [
          "Deck Construction",
          "Fence Installation",
          "Siding Installation",
          "Window Replacement",
          "Exterior Remodeling",
        ],
  };

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{seo.title}</title>
      {normalizedPath === "/" && <meta name="msvalidate.01" content="DCAB509CA35401271D7D492717D01D20" />}
      <meta name="description" content={seo.description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow, max-image-preview:large"} />
      <link rel="canonical" href={seo.url} />

      <meta property="og:type" content={article ? "article" : "website"} />
      {article && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {article && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="Yellowstone Renovation" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:secure_url" content={seo.image} />
      <meta property="og:image:alt" content={imageAlt || seo.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={imageAlt || seo.title} />

      {normalizedPath === "/" && <script type="application/ld+json">{jsonLd(websiteSchema)}</script>}

      <script type="application/ld+json">
        {jsonLd(webpageSchema)}
      </script>

      <script type="application/ld+json">
        {jsonLd(localBusinessSchema)}
      </script>

      {breadcrumbs.length > 0 && <script type="application/ld+json">{jsonLd({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${seo.url}#breadcrumb`,
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.url || item.path || normalizedPath),
        })),
      })}</script>}

      {productSchema && (
        <script type="application/ld+json">
          {jsonLd({
            "@context": "https://schema.org",
            "@type": "Product",
            brand: {
              "@type": "Brand",
              name: "Yellowstone Renovation",
            },
            ...productSchema,
            image: productSchema.image || seo.image,
            url: productSchema.url || seo.url,
          })}
        </script>
      )}

      {projectSchema && (
        <script type="application/ld+json">
          {jsonLd({
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
