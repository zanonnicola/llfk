import React from "react";
import Helmet from "react-helmet";
import Heading from '../components/heading';
import Footer from '../components/footer';

// import '../css/page.css'; // make it pretty!

export default function Template({
    data
}) {
    const { markdownRemark: post } = data;
    return (
        <main role="main">
            <div className="wrapper wrapper--padded">
                <Helmet
                    title={`Page - ${post.frontmatter.title}`}
                    meta={[
                        { name: 'description', content: `${post.frontmatter.metaDescription}` }
                    ]}
                />
                <Heading
                    rank={3}
                    text={post.frontmatter.title}
                />
                <div className="flex">
                    <div className="flex-50" dangerouslySetInnerHTML={{ __html: post.html }}></div>
                    <div className="flex-50">
                        <aside className="yellow-box">
                            <Heading
                                rank={4}
                                text={post.frontmatter.contactTitle}
                            />
                        </aside>
                    </div>
                </div>
            </div>
            <Footer lng={post.frontmatter.lng} />
        </main>
    );
}

export const pageQuery = graphql`
    query PageWorkshop($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                metaDescription
                subTitle
                lng
            }
        }
    }
`;