import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Heading from '../heading';
import style from './index.module.css';

const Card = ({ pagePath, text, title, color, cta, secondary, tag }) => (
    <Link className={secondary ? style.card__secondary : style.card} to={`${pagePath}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392 219">
            <path d="M-3.516.398h410.524c19.379 59.172-17.664 111.532-111.127 157.079-93.464 45.546-193.263 65.44-299.397 59.68V.397z" fill={color} fillRule="evenodd" />
        </svg>
        {(tag) && <span className={style.card__tag}>{tag}</span>}
        <div className={style.card__content}>
            <Heading
                rank={4}
                text={title}
                extraStyle={{
                    color: color,
                    fontFamily: 'Muli',
                    fontSize: secondary ? '17px' : undefined
                }}
            />
            <p>{text}</p>
            <span className={style.readMore}>{cta}</span>
        </div>
    </Link>
);

Card.propTypes = {
    pagePath: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    cta: PropTypes.string,
    tag: PropTypes.string,
    secondary: PropTypes.bool
}

export default Card;
