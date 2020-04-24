// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: `Store test`,
    description: `Store creator!.`,
    author: `@luispagarcia`,
    cellphone: '49033688',
    areacode: '502',
    products: [
      {
        nombre: 'Hamburguesa simple',
        precio: '10.00',
        unidad: 'unidad',
        image: 'hamburguer',
        descripcion: 'Esta es una hamburguesa yum yum',
      },
      {
        nombre: 'Pizza de peperoni',
        precio: '40.00',
        unidad: 'unidad',
        image: 'pizza',
        descripcion: 'Esta es una pizza yum yum'
      },
      {
        nombre: 'Six de chelas',
        precio: '100.00',
        unidad: 'unidad',
        image: 'beer',

      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "Src": "src",
          "Components": "src/components",
          "Utils": "src/utils",
          "Pages": "src/pages",
        },
        extensions: [
          "js",
        ],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // eslint-disable-next-line no-undef
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
