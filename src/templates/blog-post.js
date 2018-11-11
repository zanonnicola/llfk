import React from "react";
import Helmet from "react-helmet";
import Link from 'gatsby-link';
import Cta from '../components/cta';
import Footer from '../components/footer';
import Heading from '../components/heading';
import './css/blog.css';
import calendar from './assets/calendar.svg';
import tag from './assets/tag.svg';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';

export default function Template({
    data
}) {
    const { markdownRemark: post } = data;
    const {tags} = post.frontmatter;
    return (
        <main role="main">
            <div className="wrapper__content wrapper--padded">
                <Helmet
                    title={`Page - ${post.frontmatter.title}`}
                    meta={[
                        { name: 'description', content: `${post.frontmatter.description}` }
                    ]}
                />
                <Cta text="Blog" url="/blog" margin="0 0 35px 0" swapIcon={true} small={true} />
                <article className="blog-post">
                    <div className="blog-heading">
                    <span className="blog-date"><img src={calendar} /> {post.frontmatter.date}</span>
                        <Heading
                            rank={1}
                            text={post.frontmatter.title}
                            extraStyle={{ textAlign: 'center', marginBottom: '10px' }}
                        />
                        <span className="blog-author">by {post.frontmatter.author}</span>
                    </div>
                    {tags.length > 0 
                        ? 
                        tags.map(tagName => (<Link to={"tags/" + tagName} className="blog-tags" key={tagName}><img src={tag} />{tagName}</Link>)) 
                        : ''}
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </article>
                <div className="blog-footer">
                    <div className="share-box">
                        Share: 
                        <a href="javascript:window.location=%22http://www.facebook.com/sharer.php?u=%22+encodeURIComponent(document.location)+%22&#38;t=%22+encodeURIComponent(document.title)">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="javascript:window.location=%22https://twitter.com/share?url=%22+encodeURIComponent(document.location)+%22&amp;text=%22+encodeURIComponent(document.title)">
                            <img src={twitter} alt="Twitter" />
                        </a>
                    </div>
                </div>
            </div>
            <Footer lng="fr" />
        </main> 
    );
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(fields: { slug: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                author
                tags
            }
        }
    }
`;