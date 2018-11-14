import React from 'react';
import Heading from '../components/heading';
import Footer from '../components/footer';

const BlogPage = (props) => {
    console.log(props);
    return (
        <main role="main">
          <div className="wrapper__content wrapper--padded">
            <Heading
              rank={3}
              text="Blog de L’Open LAB for Kids"
            />
            <article className="hero-content">
              <div className="flex">
                <div className="flex-50">
                  <p><b className="bold-it">Et si nos enfants</b> découvraient l’anglais de manière naturelle et sans contrainte ?</p>
                  <p style={{ marginBottom: 0 }}><b className="bold-it">S’ils pouvaient prendre goût</b> à la pratique d’une langue étrangère, en toute confiance et sans complexe, tout en développant leur créativité et en s’amusant ?</p>
                </div>
                <div className="flex-50">
                  <p>C’est l’idée de <strong>L’Open LAB for Kids</strong> : des ateliers créatifs et ludiques où les enfants découvrent, créent et expérimentent en anglais dans une ambiance chaleureuse et familiale.</p>
                </div>
              </div>
            </article>
          </div>
          <Footer lng="fr" />
        </main>
      )
};

export default BlogPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { layout: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            layout
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
