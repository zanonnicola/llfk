const _ = require("lodash");
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const tagTemplate = path.resolve(`src/templates/blog-tag.js`);
  const allTagsTemplate = path.resolve(`src/templates/blog-tag-all.js`);

  return graphql(`{
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            fields {
              slug
            }
            frontmatter {
              path
              layout
              tags
            }
          }
        }
      }
    }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges;

      // Create pages for each markdown file.
      posts.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path || node.fields.slug,
          component: node.frontmatter.layout.includes("page") ? path.resolve(`src/templates/${node.frontmatter.layout}.js`) : blogPostTemplate
        });
      });

      // Tag pages.
      let tags = []
      _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })
      tags = _.uniq(tags)

      createPage ({
        path: `/tags`,
        component: allTagsTemplate,
        context: {
          tags: tags.sort(),
        },
      });

      tags.forEach(tag => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`
        createPage({
          path: tagPath,
          component: tagTemplate,
          context: {
            tag,
          },
        })
      })

      return posts;
    })
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `File`) {
    const parsedFilePath = path.parse(node.absolutePath)
    const slug = `/${parsedFilePath.dir.split("---")[1]}/`
    createNodeField({ node, name: `slug`, value: slug })
  } else if (
    node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: value.replace(/\/$/, ``) 
    });
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