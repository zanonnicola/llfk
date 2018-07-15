import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from "gatsby-link";
import { getSectionColor, getPathData } from '../helpers';
import Hero from '../components/hero';
import Naviagtion from '../components/navigation';
import siteData from '../data/site';
import './flexboxgrid.css';
import './index.css';

const Layout = ({ children, data, location }) => {
  let lng = 'fr';
  let title = data.site.siteMetadata.title_fr;
  let description = data.site.siteMetadata.description_fr;
  if (location.pathname.includes('en')) {
    title = data.site.siteMetadata.title_en;
    description = data.site.siteMetadata.description_en;
    lng = 'en';
  }

  let isHomePage = false;
  if (location.pathname === '/' || location.pathname === '/en' || location.pathname === '/en/') {
    isHomePage = true;
  }

  let heroTitle;
  let heroSubtitle;
  let color;

  const key = location.pathname.split('/');
  const section = key[key.length - 1];

  switch (section) {
    case 'en':
      heroTitle = 'Learning, creating, having fun!';
      heroSubtitle = 'From the start of the new school year in the heart of Nantes: fun and creative workshops for babies & children aged from 1 to 11.';
      color = '#fff';
      break;
    case '':
      heroTitle = 'Apprendre, créer, s’amuser, tout en anglais !';
      heroSubtitle = 'A partir de la rentrée, en plein coeur de Nantes : des ateliers en anglais, créatifs et ludiques, parfaitement adaptés aux enfants de 1 à 11 ans.';
      color = '#fff';
      break;
    case 'workshop':
      heroTitle = 'Workshop';
      heroSubtitle = 'For children to get familiar with English via enriching activities from their youngest age';
      color = '#60BDC1';
      break;
    case 'atelier':
      heroTitle = 'Atelier';
      heroSubtitle = 'A partir du 1er septembre 2018 à Nantes : des ateliers en anglais, créatifs et ludiques, parfaitement adaptés aux enfants de 1 à 11 ans.';
      color = '#60BDC1';
      break;
    case 'pedagogy':
      heroTitle = 'Pedagogy';
      heroSubtitle = 'Absorb and acquire English through fun and enriching activities from their youngest age.';
      color = '#0E4658';
      break;
    case 'pedagogie':
      heroTitle = 'Pédagogie';
      heroSubtitle = 'Dès leur plus jeune âge, à travers des activités épanouissantes et ludiques';
      color = '#0E4658';
      break;
    case 'team':
      heroTitle = 'Team';
      heroSubtitle = 'International and multicultural: English, Irish, American, French and Brazilian';
      color = '#FCC817';
      break;
    case 'equipe':
      heroTitle = `L' Equipe`;
      heroSubtitle = 'A l’image de l’Open Lab for Kids, l’équipe est internationale et multiculturelle : anglaise, irlandaise, américaine, française et brésilienne.';
      color = '#FCC817';
      break;
    case 'holidays':
      heroTitle = 'Holidays';
      heroSubtitle = 'Fun and creative things to do for kids to spend their break';
      color = '#FC6681';
      break;
    case 'vacances':
      heroTitle = 'Vacances';
      heroSubtitle = 'Nous organisons des ateliers-vacances pour les enfants âgés entre 3 et 11 ans pendant les petites et grandes vacances.';
      color = '#FC6681';
      break;
    case 'contact-us':
      heroTitle = 'Contact';
      heroSubtitle = 'Enrolment for the next school year has started!';
      color = '#BDE6F6';
      break;
    case 'contact':
      heroTitle = 'Contact';
      heroSubtitle = 'N’hésitez pas à nous contacter directement pour échanger sur votre projet ou en savoir plus sur nos méthodes.';
      color = '#BDE6F6';
      break;

    default:
      heroTitle = '';
      heroSubtitle = '';
      color = '#FFFFFF';
      break;
  }

  const sectionColors = {
    workshop: '#60BDC1',
    pedagogy: '#0E4658',
    team: '#FCC817',
    holidays: '#FC6681',
    contact: '#BDE6F6',
    atelier: '#60BDC1',
    pedagogie: '#0E4658',
    equipe: '#FCC817',
    vacances: '#FC6681',
  };

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: `${description}` }
        ]}
      >
        <meta name="google-site-verification" content="uVknAbcTUdiYPuPcXjt00iSmnv-YDRH2H-Rqdz6xy4g" />
        <meta name="robots" content="noindex" />
        <link rel="preload" href={withPrefix('/assets/merriweather-v19-latin-700.woff2')} as="font" type="font/woff2" crossOrigin />
        <link rel="preload" href={withPrefix('/assets/muli-v11-latin-regular.woff2')} as="font" type="font/woff2" crossOrigin />
        <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/assets/apple-touch-icon.png')} />
        <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/assets/favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/assets/favicon-16x16.png')} />
        <link rel="icon" href={withPrefix('/assets/favicon.ico')} type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        image={withPrefix('/assets/openlab.jpg')}
        color={color}
        isHomePage={isHomePage}
      />
      <Naviagtion lng={lng} colors={sectionColors} location={location} />
      {children()}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.any,
  location: PropTypes.any
}

export default Layout

export const query = graphql`
  query SiteTitleQueryFr {
    site {
      siteMetadata {
        title_fr
        description_fr
        title_en
        description_en
      }
    }
  }
`
