const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const categoryTemplate = path.resolve(`src/templates/blog-category.js`)
  const allCategoriesTemplate = path.resolve(
    `src/templates/blog-categories-all.js`
  )

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
              layout
              categories
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    // Create pages for each markdown file.
    posts.forEach(({ node }) => {
      const pagePath =
        node.frontmatter.path === null || node.frontmatter.path === undefined
          ? node.fields.slug
          : node.frontmatter.path
      createPage({
        path: pagePath,
        component: node.frontmatter.layout.includes('page')
          ? path.resolve(`src/templates/${node.frontmatter.layout}.js`)
          : blogPostTemplate,
      })
    })

    //Tag pages.
    let categories = []
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.categories')) {
        categories = categories.concat(edge.node.frontmatter.categories)
      }
    })
    categories = _.uniq(categories)

    createPage({
      path: `/categories`,
      component: allCategoriesTemplate,
      context: {
        categories: categories.sort(),
      },
    })

    categories.forEach(category => {
      const tagPath = `/categories/${_.kebabCase(category)}/`
      createPage({
        path: tagPath,
        component: categoryTemplate,
        context: {
          category,
          categoryPath: tagPath,
        },
      })
    })

    return posts
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  fmImagesToRelative(node)

  if (
    node.internal.type === `MarkdownRemark` &&
    typeof node.slug === 'undefined'
  ) {
    console.log(node.frontmatter.path)
    let value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: value.replace(/\/$/, ``),
    })
  }
}

/*
This works!

{
  markdownRemark(fields: {slug: {eq: "/2018-11-08-test/"}}) {
    id
    frontmatter {
                date(formatString: "MMMM DD, YYYY")
				title
            }
  }
  
}

*/
