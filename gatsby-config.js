module.exports = {
  siteMetadata: {
    title: `Yellowstone Renovation`,
    description: `Top-rated remodeling, siding & deck contractors serving Lexington, KY and Central Kentucky.`,
    author: `Yellowstone Renovation`,
    siteUrl: `https://yellowstonerenovation.com`,
  },
  plugins: [
    // 🔹 Core plugins
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,

    // 🔹 SEO & Sitemap
    // One sitemap and one robots.txt configuration.
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        excludes: [`/404/`, `/projects/`, `/thank-you/`, `/success/`, `/success-offer/`, `/sales-tools/`, `/fence-estimator/`, `/fence-estimator1/`, `/black-friday/`],
        serialize: ({ path }) => ({
          url: path,
          changefreq: "weekly",
          priority: path === "/" ? 1.0 : 0.7,
        }),
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://yellowstonerenovation.com`,
        sitemap: `https://yellowstonerenovation.com/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },

    // 🔹 Web App Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yellowstone Renovation`,
        short_name: `Yellowstone`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0AAA3D`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },

    // 🔹 Blog content source
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    `gatsby-transformer-remark`,

    // 🔹 Google Tag Manager
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WVHDRN55",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        enableWebVitalsTracking: true,
      },
    },
  ],
};
