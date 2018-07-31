import React from "react";
import Helmet from "react-helmet";
import Link from 'gatsby-link';
import Heading from '../components/heading';
import Footer from '../components/footer';
import WorkshopList from '../components/workshop-list';

// import '../css/page.css'; // make it pretty!

export default function Template({
    data
}) {
    const { markdownRemark: post } = data;
    console.log(data);
    const { edges } = data.allMarkdownRemark;
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
                        text={post.frontmatter.title}
                        extraStyle={{ textAlign: 'left' }}
                    />
                    <div dangerouslySetInnerHTML={{ __html: post.html }}>
                    </div>
                </article>
            </div>
            <section className="workshops-section">
                <div className="wrapper wrapper--padded">
                    <Heading
                        rank={1}
                        text="Available workshops"
                        extraStyle={{ marginBottom: '50px' }}
                    />
                    <WorkshopList workshops={edges} lng={post.frontmatter.lng} />
                    <p><br /><br />I'm displaying all the single workshops EN and FR at the same time so you can navigate better. TO BE REMOVED</p>
                    {edges.map(({ node }, i) => <Link to={node.frontmatter.path} style={{ display: 'block' }} key={`l-${i}`}>{node.frontmatter.title}</Link>)}
                </div>
            </section>
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
                contentTitle
                metaDescription
                subTitle
                lng
            }
        }
        allMarkdownRemark(limit: 100, filter: {frontmatter: {path: {regex: "/(workshops|nosateliers)/[a-z]/i"}}}) {
            edges {
              node {
                excerpt(pruneLength: 180)
                frontmatter {
                  path
                  title
                  color
                  age
                }
              }
            }
        }
    }
`;