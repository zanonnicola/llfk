import React from "react";
import Helmet from "react-helmet";
import Heading from '../components/heading';
import Footer from '../components/footer';
import MemberCard from '../components/member';
import './css/team.css'; // make it pretty!

export default function Template({
    data
}) {
    const { markdownRemark: post, allDataYaml: team } = data;
    const memberCards = [...team.edges].sort((a, b) => {
        return Number(a.node.person.order) - Number(b.node.person.order);
    }).map(({ node }, i) => {
        if (node.person.lng === post.frontmatter.lng) {
            return <MemberCard key={`mem-${i}`} primary={(i === 0 || i === 1) ? true : false} data={node.person} />;
        }
    });
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
                    <div dangerouslySetInnerHTML={{ __html: post.html }}>
                    </div>
                </article>
            </div>
            <section className="team-cards" id="team">
                <div className="wrapper wrapper--padded">
                    <div className={team.edges.length > 1 ? 'team-columns' : ''}>
                        {memberCards}
                    </div>
                </div>
            </section>
            <Footer lng={post.frontmatter.lng} />
        </main>
    );
}

export const pageQuery = graphql`
    query PageTeam($path: String!) {
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
        allDataYaml {
            edges {
                node {
                    person {
                        name
                        title
                        lng
                        description
                        diploma
                    }
                }
            }
        }
    }
`;