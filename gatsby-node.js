const path = require("path")
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      slugInfo: allContentfulChalladata {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.slugInfo.edges.forEach(({ node }) => {
    //creating tours pages
    createPage({
      //path for this page -- Required
      path: `challadata/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      //Adding context data sluginfo in this case
      context: {
        slug: node.slug,
      },
    })
  })
}
