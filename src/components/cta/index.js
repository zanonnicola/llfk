import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';

const Cta = ({ text, url, color = "#FC6681", margin }) => (
    <a href={url} className={style.cta} style={{ margin: margin }}>
        {text}
        <svg xmlns="http://www.w3.org/2000/svg">
            <path d="M27.714 2L10.036 19.679 2 11.643" stroke={color} strokeWidth="4" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    </a>
);

Cta.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    color: PropTypes.string,
    margin: PropTypes.string
}

export default Cta;
