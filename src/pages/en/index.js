import React from 'react';
import Heading from '../../components/heading';
import CallOut from '../../components/callOut';
import Card from '../../components/card';
import Footer from '../../components/footer';
import site from '../../data/site';

const IndexPage = () => (
    <main role="main">
        <div className="wrapper__content wrapper--padded">
            <Heading
                rank={3}
                text="Welcome to L’Open Lab for Kids"
            />
            <article className="hero-content">
                <div className="flex">
                    <div className="flex-50">
                        <p><b className="bold-it">What if our children</b> could learn English in the same way they pick up their first language?</p>
                        <p style={{ marginBottom: 0 }}><b className="bold-it">And for native English speakers</b> what if they could have the opportunity to practice English more, surrounded by friends and kids of the same age, in a safe and engaging environment, while taking part in creative and interactive activities?</p>
                    </div>
                    <div className="flex-50">
                        <p>That is the idea behind <strong>L’Open Lab for Kids</strong>: fun and creative workshops where children get to discover, create and experiment, all in English, in a nurturing environment.</p>
                    </div>
                </div>
            </article>
        </div>
        <CallOut lng="en" />
        <section className="section">
            <div className="wrapper wrapper--padded">
                <Heading
                    rank={3}
                    text="Get to know us"
                />
                <div className="row center-xs">
                    {Object.keys(site.en).filter(key => key !== 'homepage').map((section, i) =>
                        <div key={`${section}-${i}`} className="col-xs-12 col-sm-6 col-md-4" style={{ marginBottom: '40px' }}>
                            <Card
                                title={site['en'][section].title}
                                color={site['en'][section].color}
                                pagePath={section}
                                text={site['en'][section].intro}
                                cta="Read more"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
        <Footer lng="en" />
    </main>
)

export default IndexPage;
