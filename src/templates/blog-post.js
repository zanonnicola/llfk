import React from "react";
import Helmet from "react-helmet";
import Link from 'gatsby-link';

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
    data, pathContext
}) {
    const { markdownRemark: post } = data;
    console.log(pathContext);
    return (
        <div className="blog-post-container">
            <Helmet
                title={`Page - ${post.frontmatter.title}`}
                meta={[
                    { name: 'description', content: `${post.frontmatter.metaDescription}` }
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
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;