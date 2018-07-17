import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from "gatsby-link";
import Hero from '../components/hero';
import Naviagtion from '../components/navigation';
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


  for (let index = 0; index < data.allMarkdownRemark.edges.length; index++) {
    const { node } = data.allMarkdownRemark.edges[index];
    if (node.frontmatter.path === location.pathname) {
      heroTitle = node.frontmatter.title;
      heroSubtitle = node.frontmatter.subTitle;
      color = node.frontmatter.color;
      break;
    } else if (location.pathname === '/en') {
      heroTitle = 'Learning, creating, having fun!';
      heroSubtitle = 'From the start of the new school year in the heart of Nantes: fun and creative workshops for babies & children aged from 1 to 11.';
      color = '#fff';
      break;
    } else if (location.pathname === '/') {
      heroTitle = 'Apprendre, créer, s’amuser, tout en anglais !';
      heroSubtitle = 'A partir de la rentrée, en plein coeur de Nantes : des ateliers en anglais, créatifs et ludiques, parfaitement adaptés aux enfants de 1 à 11 ans.';
      color = '#fff';
      break;
    } else {
      heroTitle = '';
      heroSubtitle = '';
      color = '#60BDC1';
    }
  }

  const sectionColors = {
    workshops: '#60BDC1',
    pedagogy: '#0E4658',
    team: '#FCC817',
    holidays: '#FC6681',
    contact: '#BDE6F6',
    nosateliers: '#60BDC1',
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
    allMarkdownRemark(limit: 100, filter: {frontmatter: {path: {regex: "/^(?!/blog/)/"}}}) {
      edges {
        node {
          frontmatter {
            path
            title
            subTitle
            color
          }
        }
      }
    }
  }
`
