import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {},
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
        // ignore: [],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@comps': 'src/components',
          '@layouts': 'src/layouts',
          '@pages': 'src/pages',
          '@styles': 'src/styles',
          '@hooks': 'src/hooks',
          '@templates': 'src/templates',
          '@utils': 'src/utils',
          '@icons': 'src/icons',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
  ],
}

export default config
