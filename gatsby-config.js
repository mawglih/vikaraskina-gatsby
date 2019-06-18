require('dotenv').config({
  path: `.env.${process.env.NODE.ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Дети Билингвы`,
    description: `Вика Раскина рулит в онлайне как детишек пичкать знаниями`,
    author: `@olegmarkoff`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        concurrentRequests: 10,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/media',
          '**/tags',
          '**/menus',
          '**/users',
          '**/taxonomies',
        ],
        excludedRoutes: [
          '/wp/v2/themes',
          '/wp/v2/settings*',
          '/wp-json/akismet/v1/',
          '/wp-json/jetpack/v4/'],
        baseUrl: 'vikaraskina.com',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        auth: {
          wpcom_user: process.env.GATSBY_ROOT_USER,
          wpcom_pass: process.env.GATSBY_ROOT_PASSWORD,
        },
        searchAndReplaceContentUrls: {
          sourceUrl: 'vikaraskina.com',
          replacementUrl: '',
        },
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            variants: ['200', '300', '400', '500', '600', '700', '800', '900'],
          },
          {
            family: 'Lobster',
          },
          {
            family: 'Cuprum',
          }
        ],
      },
    },
    {       
      resolve: '@pasdo501/gatsby-source-woocommerce',
      options: {
       // Base URL of Wordpress site
        api: 'vikaraskina.com',
        // true if using https. false if nah.
        https: true,
        api_keys: {
          consumer_key: 'ck_eecbb1070bfa6c6d1954e62c8a50e327350c3788',
          consumer_secret: 'cs_9a996756bac6383d7a8d8b59858c515f4fcdd242',
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ['products', 'products/categories', 'customers', 'orders'],
        // Version of the woocommerce API to use
        // OPTIONAL: defaults to 'wc/v1'
        api_version: 'wc/v3',
        // OPTIONAL: How many results to retrieve
        per_page: 100
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
