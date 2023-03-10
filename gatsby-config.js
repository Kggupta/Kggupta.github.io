const conf = require('./config.json')

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: conf.title,
    description: conf.description,
    author: conf.author,
    keywords: conf.keywords,
    image: conf.siteImage,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: conf.name,
        short_name: conf.name,
        start_url: `/`,
        background_color: conf.background_color,
        theme_color: conf.theme_color,
        display: `standalone`,
        icon: `static/images/favicon.png`,
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          conf.googleAnalytics
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}