import React from "react";
import Helmet from "react-helmet";
import Link from 'gatsby-link';

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
    data
}) {
    const { markdownRemark: post } = data;
    return (
        <div className="blog-post-container">
            <Helmet
                title={`Page - ${post.frontmatter.title}`}
                meta={[
                    { name: 'description', content: `${post.frontmatter.description}` }
                ]}
            />
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <Link to="/">Go back to the homepage</Link>
            </div>
        </div>
    );
}

export const postQuery = graphql`
    query BlogCategoryByPath($category: String!) {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { categories: { eq: "[$category]" } } }
            ) {
            totalCount
            edges {
                node {
                  frontmatter {
                    title
                    path
                  }
                }
              }
        }
    }
`;