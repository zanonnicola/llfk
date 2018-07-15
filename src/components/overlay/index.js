import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import style from './index.module.css';
import close from './x.svg';


const Overlay = ({ lng, show, menu, colors, toggleOverlay }) => {
    const showHideClassName = show ? `${style.overlay} ${style.show}` : style.overlay;
    return (
        <aside className={showHideClassName}>
            <a href="#0" className={style.close} onClick={toggleOverlay}>
                <img src={close} alt="Close" style={{ verticalAlign: 'middle', maxHeight: '20px' }} />
            </a>
            <nav className={style.nav}>
                <div className="wrapper wrapper--padded">
                    <ul>
                        {Object.keys(menu[lng]).map((section, i) => {
                            return (
                                <li key={`overlay-${i}`}>
                                    <Link
                                        className={style.navigation__listItem}
                                        activeStyle={{
                                            color: colors[section]
                                        }}
                                        to={menu[lng][section].url}
                                    >
                                        <span className={style.navigation__plus} style={{ color: colors[section] }}>+</span> {menu[lng][section].title}
                                    </Link>
                                </li>
                            )
                        }
                        )}
                        <li><Link className={style.lng} to={lng === 'fr' ? '/en' : '/'}>{lng === 'fr' ? 'en' : `fr`}</Link></li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
};

Overlay.propTypes = {
    lng: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    menu: PropTypes.any.isRequired,
    colors: PropTypes.any.isRequired,
    toggleOverlay: PropTypes.func.isRequired
}

export default Overlay;
