import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import style from './index.module.css';

const CallOut = ({ lng }) => (
    <section className={style.CallOut}>
        <div className={style.wrapper}>
            {lng === 'fr' ?
                (
                    <React.Fragment>
                        <p className={style.text}><strong>Au programme</strong> : découverte des arts plastiques, théâtre, premières expériences scientifiques et technologiques, bricolage, cuisine, jardinage, activités sensorielles. <br />Nos objectifs : <b style={{ color: "#FDC60D" }}>apprendre, créer, s’amuser, tout en anglais !</b></p>
                        <Link className={style.cta} to="/atelier">
                            Nos ateliers
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.714 2L10.036 19.679 2 11.643" stroke="#FC6681" strokeWidth="4" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p className={style.text}><strong>Our programme</strong> includes fine arts, theatre, STEM experiences, DIY, cooking, gardening, sensory and playful activities… all in English of course! Our objectives: <b style={{ color: "#FDC60D" }}>learning, creating, having fun !</b></p>
                        <Link className={style.cta} to="/en/workshop">
                            Our workshops
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.714 2L10.036 19.679 2 11.643" stroke="#FC6681" strokeWidth="4" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </React.Fragment>
                )}
        </div>
    </section>
);

CallOut.propTypes = {
    lng: PropTypes.string.isRequired
}

export default CallOut;
