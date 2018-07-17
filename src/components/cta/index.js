import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import style from './index.module.css';

const Cta = ({ text, url, color = "#FC6681", margin, swapIcon = false, small = false }) => {
    if (url.includes('mailto')) {
        return (
            <a href={url} className={small ? `${style.cta} ${style.ctaSmall}` : style.cta} style={{ margin: margin }}>
                {text}
                {swapIcon ? (
                    <svg className={style.swapped} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 17">
                        <g transform="translate(1 1)" stroke={color} fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="7.5" cy="7.5" r="7.5" />
                            <path d="M7.5 4.5l-3 3 3 3M10.5 7.5h-6" />
                        </g>
                    </svg>
                ) : (
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.714 2L10.036 19.679 2 11.643" stroke={color} strokeWidth="4" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
            </a>
        )
    } else {
        return (
            <Link to={url} className={small ? `${style.cta} ${style.ctaSmall}` : style.cta} style={{ margin: margin }}>
                {text}
                {swapIcon ? (
                    <svg className={style.swapped} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 17">
                        <g transform="translate(1 1)" stroke={color} fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="7.5" cy="7.5" r="7.5" />
                            <path d="M7.5 4.5l-3 3 3 3M10.5 7.5h-6" />
                        </g>
                    </svg>
                ) : (
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.714 2L10.036 19.679 2 11.643" stroke={color} strokeWidth="4" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
            </Link>
        )
    }
}

Cta.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    color: PropTypes.string,
    margin: PropTypes.string,
    swapIcon: PropTypes.bool,
    small: PropTypes.bool
}

export default Cta;
