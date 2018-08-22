import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import style from './index.module.css';
import logo from './LopenLabLOGO.png';
import menu from './menu.svg';
import Overlay from '../overlay';

const lngMap = {
    fr: {
        nosateliers: {
            title: 'Nos ateliers',
            url: '/nosateliers'
        },
        pedagogy: {
            title: 'Pédagogie',
            url: '/pedagogie'
        },
        team: {
            title: `L’équipe`,
            url: '/lequipe'
        },
        holidays: {
            title: 'Vacances',
            url: '/ateliers-vacances-nantes'
        },
        contact: {
            title: 'Contact',
            url: '/contact'
        }
    },
    en: {
        workshops: {
            title: 'Our workshops',
            url: '/en/workshops'
        },
        pedagogy: {
            title: 'Pedagogy',
            url: '/en/pedagogy'
        },
        team: {
            title: 'Team',
            url: '/en/team'
        },
        holidays: {
            title: 'Holidays',
            url: '/en/holidays-nantes'
        },
        contact: {
            title: 'Contact',
            url: '/en/contact-us'
        }
    }
}

class Navigation extends Component {
    state = { show: false };

    toggleOverlay = (evt) => {
        evt.preventDefault();
        this.setState(() => ({
            show: !this.state.show
        }));
    };

    componentWillReceiveProps(nextProp) {
        if (this.props.location.pathname !== nextProp.location.pathname) {
            this.setState(() => ({
                show: false
            }));
        }
    }

    render() {
        const { lng, colors, location } = this.props;
        return (
            <nav className={style.navigation}>
                <div className="wrapper wrapper--padded u-relative">
                    <Link to={lng === 'fr' ? '/' : '/en'} className={style.navigation__logo}>
                        <img src={logo} alt="L'Open Lab" />
                    </Link>
                </div>
                <div className={style.navigation__list}>
                    {Object.keys(lngMap[lng]).map((section, i) => {
                        return (
                            <Link
                                key={`nav-${i}`}
                                className={style.navigation__listItem}
                                activeStyle={{
                                    color: colors[section]
                                }}
                                to={lngMap[lng][section].url}
                            >
                                <span className={style.navigation__plus} style={{ color: colors[section] }}>+</span> {lngMap[lng][section].title}
                            </Link>
                        )
                    }
                    )}
                    <Link className={style.navigation__lng} to={lng === 'fr' ? '/en' : '/'}>{lng === 'fr' ? 'en' : `fr`}</Link>
                    <a href="#0" className={style.mobileMenu} onClick={this.toggleOverlay}>
                        <img src={menu} alt="Menu" style={{ verticalAlign: 'middle', maxWidth: '30px' }} />
                    </a>
                </div>
                <Overlay lng={lng} menu={lngMap} colors={colors} show={this.state.show} toggleOverlay={this.toggleOverlay} />
            </nav>
        );
    }
}


Navigation.propTypes = {
    lng: PropTypes.string.isRequired,
    colors: PropTypes.object,
    location: PropTypes.any
}

export default Navigation;
