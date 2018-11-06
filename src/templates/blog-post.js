import React from "react";
import Helmet from "react-helmet";
import Heading from '../components/heading';
import Footer from '../components/footer';
import Link from 'gatsby-link';

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
    data, pathContext
}) {
    const { markdownRemark: post } = data;
    console.log(pathContext);
    return (
        <main role="main">
            <div className="wrapper wrapper--padded">
                <div className="blog-post-container">
                    <Helmet
                        title={`Blog - ${post.frontmatter.title}`}
                        meta={[
                            { name: 'description', content: `${post.frontmatter.metaDescription}` }
                        ]}
                    />
                    <Heading
                        rank={1}
                        text={post.frontmatter.title}
                        extraStyle={{ textAlign: 'left' }}
                    />
                    <div className="blog-post padding-bottom">
                        <h1>{post.frontmatter.title}</h1>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: post.html }}
                        />
                        <Link to="/">Go back to the homepage</Link>
                    </div>
                </div>
            </div>
            <Footer lng="fr" />
        </main>
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