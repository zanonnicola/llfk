import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';
import fb from './facebook.svg';
import ig from './instagram.svg';
import yt from './youtube.svg';

const Footer = ({ lng }) => (
    <footer className={style.footer}>
        <div className="wrapper wrapper--padded">
            <div className={style.flex}>
                <div className={style.info}>
                    <h5>{lng === 'fr' ? 'Nous contacter' : 'Contact details'}</h5>
                    <p>
                        <strong>E-mail :</strong> <a href="mailto:hello@lopenlab.com">hello@lopenlab.com</a><br />
                        <strong>Tel :</strong> <a href="tel:+33686022250">+33 6 86 02 22 50</a>
                    </p>
                    <p>Nantes<br />France</p>
                </div>
                <div className={[style.info, style.mLeft].join(' ')}>
                    <h5>{lng === 'fr' ? 'Réseaux sociaux' : 'Social'}</h5>
                    <a href="https://www.facebook.com/LOpenLabforKids/" target="_blank" rel="noopener noreferrer">
                        <img src={fb} className={style.icon} />
                    </a>
                    <a href="https://www.instagram.com/lopenlabforkids/" target="_blank" rel="noopener noreferrer">
                        <img src={ig} className={style.icon} />
                    </a>
                    <a href="https://www.youtube.com/channel/UC3Aup8xraodhDsYWncTLy9Q" target="_blank" rel="noopener noreferrer">
                        <img src={yt} className={style.icon} />
                    </a>
                </div>
            </div>
            <p className={style.copyright}>&copy; 2018 - L'Open Lab</p>
        </div>
    </footer>
);

Footer.propTypes = {
    lng: PropTypes.string.isRequired
}

export default Footer;
