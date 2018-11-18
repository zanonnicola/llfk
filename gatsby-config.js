module.exports = {
  siteMetadata: {
    siteUrl: `https://llfk.netlify.com`,
    title_en: `Welcome to L’Open Lab for Kids!`,
    description_en: 'Fun and creative workshops for babies & children aged from 0 to 11 - Take a look at our different workshops',
    title_fr: `Bienvenue à bord de L’Open Lab for Kids !`,
    description_fr: 'des ateliers en anglais, créatifs et ludiques, parfaitement adaptés aux enfants de 1 à 11 ans - Nos différents ateliers'
  },
  pathPrefix: `/`,
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-next',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify-cms-paths`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              cmsConfig: `/static/admin/config.yml`,
            }
          },
          {
            resolve: "gatsby-remark-external-links",
          },
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1224,
              showCaptions: true
            },
          },
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/pages/`
      }
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1528385333938799',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-124883847-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/admin/**"],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    `gatsby-plugin-netlify`
  ],
}
