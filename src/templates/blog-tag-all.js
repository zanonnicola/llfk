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
                title={`All Tags Page`}
                meta={[
                    { name: 'description', content: `Tags` }
                ]}
            />
            <div className="blog-post">
                <h1>Tags</h1>
                <div className="blog-post-content">Hello tags!!!</div>
                <Link to="/">Go back to the homepage</Link>
            </div>
        </div>
    );
}

export const postQuery = graphql`
    query BlogAllTagsByPath($path: String!) {
        markdownRemark(fields: { slug: { eq: $path } }) {
            html
            frontmatter {
				date(formatString: "MMMM DD, YYYY")
                path
                title
                contentTitle
                metaDescription
                subTitle
                lng
            }
        }
    }
`;