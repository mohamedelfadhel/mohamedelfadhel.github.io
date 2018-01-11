module.exports = {
  siteMetadata: {
    title: `Med elfadhel ELHACHEMI | Front End Developer`,
  },
  plugins: [`gatsby-plugin-react-helmet`,
            `gatsby-plugin-sass`,
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: "UA-93092802-1",
              // Setting this parameter is optional
              anonymize: true,
          },
      },
  ],
}
