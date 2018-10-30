import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from "gatsby-link";
import Hero from '../components/hero';
import Naviagtion from '../components/navigation';
import { lightenDarkenColor } from '../helpers';
import './flexboxgrid.css';
import './index.css';

const Layout = ({ children, data, location }) => {
  let lng = 'fr';
  let title = data.site.siteMetadata.title_fr;
  let description = data.site.siteMetadata.description_fr;
  if (location.pathname.startsWith('/en')) {
    title = data.site.siteMetadata.title_en;
    description = data.site.siteMetadata.description_en;
    lng = 'en';
  }

  let isHomePage = false;
  let tag = null;

  if (location.pathname === '/' || location.pathname === '/en' || location.pathname === '/en/') {
    isHomePage = true;
  }
  //const reg = new RegExp("/workshops|nosateliers/[a-z]", 'g');

  for (let index = 0; index < data.allMarkdownRemark.edges.length; index++) {
    const { node } = data.allMarkdownRemark.edges[index];
    if (node.frontmatter.path === location.pathname) {
      tag = node.frontmatter.age;
      break;
    }
  }

  let heroTitle;
  let heroSubtitle;
  let color;
  let secondaryColor;


  for (let index = 0; index < data.allMarkdownRemark.edges.length; index++) {
    const { node } = data.allMarkdownRemark.edges[index];
    // Always remove trailing slashes
    if (node.frontmatter.path === location.pathname.replace(/\/$/, '')) {
      heroTitle = node.frontmatter.title;
      heroSubtitle = node.frontmatter.subTitle;
      color = node.frontmatter.color;
      secondaryColor = node.frontmatter.secondaryColor || lightenDarkenColor(node.frontmatter.color, 44);
      break;
    } else if (location.pathname === '/en') {
      heroTitle = 'Learning, creating, having fun!';
      heroSubtitle = 'The next autumn school holiday workshop will be from October, 22nd to October, 26th. For more information and to enrol your child(ren), please contact us on <a href="mailto:hello@lopenlab.com">hello@lopenlab.com</a>.';
      color = '#fff';
      secondaryColor = '#fff';
      break;
    } else if (location.pathname === '/') {
      heroTitle = 'Apprendre, créer, s’amuser, tout en anglais !';
      heroSubtitle = 'Le prochain atelier-vacances a lieu du 22 au 26 octobre.<br />Informations & réservations à <a href="mailto:hello@lopenlab.com">hello@lopenlab.com</a>.';
      color = '#fff';
      secondaryColor = '#fff';
      break;
    } else {
      heroTitle = '';
      heroSubtitle = '';
      color = '#60BDC1';
      secondaryColor = '#95CEC7';
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
    lequipe: '#FCC817',
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
        image={withPrefix('/assets/website_banner.jpg')}
        color={color}
        secondaryColor={secondaryColor}
        isHomePage={isHomePage}
        tag={tag}
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
            secondaryColor
            age
          }
        }
      }
    }
  }
`
