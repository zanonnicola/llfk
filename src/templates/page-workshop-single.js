import React from "react";
import Helmet from "react-helmet";
import Heading from '../components/heading';
import Footer from '../components/footer';
import Cta from '../components/cta';
import './css/workshop.css';

export default function Template({
    data
}) {
    const { markdownRemark: post } = data;
    const when = post.frontmatter.lng === 'fr' ? 'Quand ?' : 'When?';
    const where = post.frontmatter.lng === 'fr' ? 'Où ?' : 'Where?';
    const price = post.frontmatter.lng === 'fr' ? 'Prix' : 'Price';
    const ctaText = post.frontmatter.lng === 'fr' ? 'Je réserve' : 'Sign up';
    const goBackText = post.frontmatter.lng === 'fr' ? 'Tous les ateliers' : 'All Workshops';
    const goBackPath = post.frontmatter.lng === 'fr' ? '/nosateliers' : '/en/workshops';
    return (
        <main role="main">
            <div className="wrapper wrapper--padded">
                <Helmet
                    title={`Page - ${post.frontmatter.title}`}
                    meta={[
                        { name: 'description', content: `${post.frontmatter.metaDescription}` }
                    ]}
                />
                <Cta text={goBackText} url={goBackPath} margin="0 0 35px 0" swapIcon={true} small={true} />
                <Heading
                    rank={3}
                    text={post.frontmatter.contentTitle}
                    extraStyle={{ textAlign: 'left' }}
                />
                <div className="padding-bottom">
                    <div className="flex">
                        <div className="flex-50 single-workshop" dangerouslySetInnerHTML={{ __html: post.html }}></div>
                        <div className="flex-50">
                            <aside className="yellow-box">
                                <Heading
                                    rank={5}
                                    text="Pratical Information"
                                />
                                <ul className="ul_general">
                                    <li><strong>{when}</strong>{post.frontmatter.when}</li>
                                    <li><strong>{where}</strong>{post.frontmatter.where}</li>
                                    <li><strong>{price}</strong>{post.frontmatter.price}</li>
                                </ul>
                                <Cta text={ctaText} url={`mailto:hello@lopenlab.com?subject=${ctaText} - ${post.frontmatter.title}`} margin="35px 0 0 0" />
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
    query PageWorkshopSingle($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                contentTitle
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