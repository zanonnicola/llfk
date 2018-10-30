import React from "react";
import Helmet from "react-helmet";
import Heading from '../components/heading';
import Footer from '../components/footer';
import WorkshopList from '../components/workshop-list';
import img1 from './assets/Notre_Atelier_1.jpg';
import img2 from './assets/Notre_Atelier_2.jpg';
import img3 from './assets/Notre_Atelier_3.jpg';
import imgLab1 from './assets/open_lab_for_kids_1.jpg';
import imgLab2 from './assets/open_lab_for_kids_2.jpg';
import imgLab3 from './assets/open_lab_for_kids_3.jpg';

export default function Template({
    data
}) {
    const { markdownRemark: post } = data;
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
                        text={post.frontmatter.contentTitle}
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
                        text={post.frontmatter.lng === 'fr' ? 'Nos ateliers en anglais' : 'All workshops'}
                        extraStyle={{ marginBottom: '50px' }}
                    />
                    <WorkshopList workshops={edges} lng={post.frontmatter.lng} />
                </div>
            </section>
            <section className="workshops-gallery" id="lab">
                <div className="wrapper wrapper--padded">
                    <Heading
                        rank={1}
                        text={post.frontmatter.lng === 'fr' ? 'Notre Lab' : 'Our Lab'}
                        extraStyle={{ marginBottom: '50px' }}
                    />
                    <div className="workshops-gallery-photos">
                        {/* <img src={img1} alt="Open Lab for Kids" />
                        <img src={imgLab1} alt="Open Lab for Kids" /> */}
                        <img src={imgLab2} alt="Open Lab for Kids" />
                        <img src={imgLab3} alt="Open Lab for Kids" />
                    </div>
                </div>
            </section>
            <section className="workshops-gallery" id="vacouva">
                <div className="wrapper wrapper--padded">
                    <Heading
                        rank={1}
                        text={post.frontmatter.lng === 'fr' ? 'Happy Place by Vacouva' : 'Happy Place by Vacouva'}
                        extraStyle={{ marginBottom: '50px' }}
                    />
                    <div className="workshops-gallery-photos">
                        <div>
                            <img src={img2} alt="Lab" />
                            <p className="workshops-gallery__copy">&copy; Caroline Morin</p>
                        </div>
                        <div>
                            <img src={img3} alt="Lab" />
                            <p className="workshops-gallery__copy">&copy; Caroline Morin</p>
                        </div>
                    </div>
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
                  lng
                }
              }
            }
        }
    }
`;