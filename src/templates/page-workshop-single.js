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
    const price = post.frontmatter.lng === 'fr' ? 'Tarif' : 'Price';
    const ctaText = post.frontmatter.lng === 'fr' ? 'Je prends contact' : 'Contact us';
    const goBackText = post.frontmatter.lng === 'fr' ? 'Tous nos ateliers' : 'All Workshops';
    const goBackPath = post.frontmatter.lng === 'fr' ? '/nosateliers' : '/en/workshops';
    const listTtitle = post.frontmatter.lng === 'fr' ? 'Informations pratiques' : 'Practical Information';
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
                                    text={listTtitle}
                                />
                                <ul className="ul_general">
                                    <li><strong>{when}</strong><span dangerouslySetInnerHTML={{ __html: post.frontmatter.when }}></span></li>
                                    <li><strong>{where}</strong><span dangerouslySetInnerHTML={{ __html: post.frontmatter.where }}></span></li>
                                    <li><strong>{price}</strong><span dangerouslySetInnerHTML={{ __html: post.frontmatter.price }}></span></li>
                                </ul>
                                <Cta text={ctaText} url={`mailto:hello@lopenlab.com?subject=${post.frontmatter.title}`} margin="35px 0 0 0" />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            {post.frontmatter.age === '3-6' ? (<section className="section" style={{ paddingTop: 0 }}>
                <div className="wrapper__content wrapper--padded">
                    <Heading
                        rank={3}
                        text="A sneak preview of our workshops"
                        extraStyle={{ textAlign: 'left' }}
                    />
                    <div className="intrinsic-container intrinsic-container-16x9">
                        <iframe src="https://www.youtube.com/embed/Bbmnfk8ER6M" allow="autoplay; encrypted-media" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </section>) : null}
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