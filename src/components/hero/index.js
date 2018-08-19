import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';

const Hero = ({ title, subtitle, image, isHomePage, color, secondaryColor, tag }) => {
    const bg = isHomePage ? {} : { backgroundColor: secondaryColor };
    return (
        <header className={style.hero} style={bg}>
            {isHomePage ? (
                <img src={image} className={style.bg} alt="L'Open Lab" />
            ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 702" preserveAspectRatio="none" height="100%" width="100%" className={style.clip}>
                        <path d="M-23 0h1489.883c70.33 195.674-64.105 368.82-403.306 519.438C724.377 670.056 362.184 735.841-23 716.792V0z" fill={color} fillRule="evenodd" />
                    </svg>
                )}
            <div className="wrapper wrapper--padded">
                <h1 className={style.hero__h1}>{title}</h1>
                {(subtitle !== null) && <h2 className={style.hero__h2} dangerouslySetInnerHTML={{ __html: subtitle }}></h2>}
                {(tag !== null) && <span className={style.hero__tag}>{tag}</span>}
            </div>
        </header>
    );
}

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    isHomePage: PropTypes.bool.isRequired,
    color: PropTypes.string,
    secondaryColor: PropTypes.string,
    image: PropTypes.string,
    tag: PropTypes.string
}

export default Hero;
