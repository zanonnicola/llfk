import React from "react";
import Helmet from "react-helmet";
import Heading from '../components/heading';
import Footer from '../components/footer';

export default function Template({
    data
}) {
    const { markdownRemark: post } = data;
    const phone = post.frontmatter.lng === 'fr' ? 'Par téléphone :' : 'Phone:';
    const email = post.frontmatter.lng === 'fr' ? 'Par mail :' : 'Email:';
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
                    extraStyle={{ textAlign: 'left' }}
                />
                <div className="padding-bottom">
                    <div className="flex">
                        <div className="flex-50" dangerouslySetInnerHTML={{ __html: post.html }}></div>
                        <div className="flex-50">
                            <aside className="yellow-box">
                                <Heading
                                    rank={5}
                                    text={post.frontmatter.contactBoxTitle}
                                />
                                <ul className="ul_general">
                                    <li><strong>{phone}</strong><a href="tel:+33686022250">+33 6 86 02 22 50</a></li>
                                    <li><strong>{email}</strong><a href="mailto:hello@lopenlab.com">hello@lopenlab.com</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <Footer lng={post.frontmatter.lng} />
        </main>
    );
}

export const pageQuery = graphql`
    query PageContact($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                metaDescription
                subTitle
                lng
                age
                when
                where
                price
            }
        }
    }
`;