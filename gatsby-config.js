module.exports = {
  siteMetadata: {
    title: `Sydney Garden`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/sydney/notes`,
        rootNote: `/Hello World`,
      },
    },
  ],
}
