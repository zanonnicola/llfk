const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(`{
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter {
              date
              path
              title
              layout
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
      posts.forEach(({ node }, index) => {
        const prev = index === 0 ? false : posts[index - 1].node;
        const next = index === posts.length - 1 ? false : posts[index + 1].node;
        createPage({
          path: node.frontmatter.path,
          component: node.frontmatter.layout.includes("page") ? path.resolve(`src/templates/${node.frontmatter.layout}.js`) : blogPostTemplate,
          context: {

          }
        });
      });

      return posts;
    })
};

// use different layout for EN pages
// exports.onCreatePage = async ({ page, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;

//   return new Promise((resolve, reject) => {
//     if (page.path.match(/^\/en/)) {
//       page.layout = "index-en";

//       // Update the page.
//       createPage(page);
//     }

//     resolve();
//   });
// };