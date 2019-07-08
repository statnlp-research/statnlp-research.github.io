/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 module.exports = {
   plugins: [
     {
       resolve: `gatsby-plugin-typography`,
       options: {
         pathToConfigModule: `src/utils/typography`,
       },
     },
     {
       resolve: 'gatsby-plugin-material-ui',
       // If you want to use styled components you should change the injection order.
       options: {
         // stylesProvider: {
         //   injectFirst: true,
         // },
       },
     },
   ],
 }
