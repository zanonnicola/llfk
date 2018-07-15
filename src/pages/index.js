import React from 'react';
import Heading from '../components/heading';
import CallOut from '../components/callOut';
import Footer from '../components/footer';
import Card from '../components/card';
import site from '../data/site';

const IndexPage = () => (
  <main role="main">
    <div className="wrapper__content wrapper--padded">
      <Heading
        rank={3}
        text="Bienvenue à bord de L’Open Lab for Kids"
      />
      <article className="hero-content">
        <div className="flex">
          <div className="flex-50">
            <p><b className="bold-it">Et si nos enfants</b> découvraient l’anglais de manière naturelle et sans contrainte ?</p>
            <p style={{ marginBottom: 0 }}><b className="bold-it">S’ils pouvaient prendre goût</b> à la pratique d’une langue étrangère, en toute confiance et sans complexe, tout en développant leur créativité et en s’amusant ?</p>
          </div>
          <div className="flex-50">
            <p>C’est l’idée derrière <strong>L’Open Lab for Kids</strong> : des ateliers créatifs et ludiques où les enfants découvrent, créent et expérimentent en anglais dans une ambiance chaleureuse et familiale.</p>
          </div>
        </div>
      </article>
    </div>
    <CallOut lng="fr" />
    <section className="section">
      <div className="wrapper wrapper--padded">
        <Heading
          rank={3}
          text="Découvrez-nous"
        />
        <div className="row center-xs">
          {Object.keys(site.fr).filter(key => key !== 'homepage').map((section, i) =>
            <div key={`${section}-${i}`} className="col-xs-12 col-sm-6 col-md-4" style={{ marginBottom: '40px' }}>
              <Card
                title={site['fr'][section].title}
                color={site['fr'][section].color}
                pagePath={section}
                text={site['fr'][section].intro}
                cta="En savoir plus"
              />
            </div>
          )}
        </div>
      </div>
    </section>
    <Footer lng="fr" />
  </main>
)

export default IndexPage;
