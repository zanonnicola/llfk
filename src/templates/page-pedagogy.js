import React from "react";
import Helmet from "react-helmet";
import Heading from '../components/heading';
import Footer from '../components/footer';
import './css/pedagogy.css';

export default function Template({
    data
}) {
    const { markdownRemark: post, allDataYaml: team } = data;
    return (
        <main role="main">
            <div className="wrapper wrapper--padded">
                <Helmet
                    title={`Page - ${post.frontmatter.title}`}
                    meta={[
                        { name: 'description', content: `${post.frontmatter.metaDescription}` }
                    ]}
                />
                <article className="small-content padding-bottom">
                    <Heading
                        rank={3}
                        text={post.frontmatter.contentTitle}
                        extraStyle={{ textAlign: 'left' }}
                    />
                    <div className="pedagogy-content" dangerouslySetInnerHTML={{ __html: post.html }}>
                    </div>
                </article>
            </div>
            <Footer lng={post.frontmatter.lng} />
        </main>
    );
}

export const pageQuery = graphql`
    query PagePedagogy($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
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