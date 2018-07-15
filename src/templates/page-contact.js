import React from "react";
import Helmet from "react-helmet";
import Heading from '../components/heading';
import Footer from '../components/footer';
import './css/contact.css';
import pin from './assets/map-pin.svg';

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
            <section className="address padding-bottom">
                <div className="wrapper wrapper--padded">
                    <div className="flex">
                        <div className="flex-50">
                            <article className="contact-loc">
                                <a href="https://www.google.fr/maps/place/Vacouva/@47.2147032,-1.5433222,17z/data=!4m13!1m7!3m6!1s0x4805eeb84753995d:0xb3771b6433584ec0!2s43+Quai+de+Malakoff,+44000+Nantes!3b1!8m2!3d47.2147032!4d-1.5411335!3m4!1s0x4805eeb8399276c5:0xe54ac076a5ce2080!8m2!3d47.2146419!4d-1.5411651" target="_blank" rel="noopener noreferrer">
                                    <h6><img src={pin} alt="Location" />Happy Place by Vacouva</h6>
                                    43 quai de Malakoff<br />
                                    44 000 Nantes</a>
                            </article>
                        </div>
                        <div className="flex-50">
                            <article className="contact-loc">
                                <a href="https://www.google.fr/maps/place/77+Rue+de+la+Tullaye,+44300+Nantes/data=!4m2!3m1!1s0x4805eef2f55178b9:0xb8d682b0e8e29b0e?sa=X&ved=0ahUKEwiK7KG7rZfcAhXJthQKHcenAV4Q8gEIJzAA" target="_blank" rel="noopener noreferrer">
                                    <h6><img src={pin} alt="Location" />Le Lab, notre Atelier au coeur d’un jardin</h6>
                                    77 rue de la Tullaye<br />
                                    44300 Nantes</a>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
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
                contactBoxTitle
            }
        }
    }
`;