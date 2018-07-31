import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Card from '../card';
import Heading from '../heading';
import style from './index.module.css';

const colorMap = new Map();
colorMap.set('1-3', '#9DD6D9');
colorMap.set('3-6', '#60BDC1');
colorMap.set('6-11', '#47888B');

class WorkshopList extends Component {
    state = { selection: 'all' };

    handleSelection = (evt) => {
        evt.preventDefault();
        this.setState(() => ({
            selection: 'something'
        }));
    };

    render() {
        const { workshops } = this.props;
        const cta = this.props.lng === 'fr' ? 'En savoir plus' : 'Read more';
        const cards = workshops.map((workshop, i) => {
            return (
                <div className={style.flexCol} key={`card-${i}`}>
                    <Card
                        title={workshop.node.frontmatter.title}
                        color={colorMap.get(workshop.node.frontmatter.age)}
                        pagePath={workshop.node.frontmatter.path}
                        text={workshop.node.excerpt}
                        cta={cta}
                        tag={workshop.node.frontmatter.age}
                        secondary
                    />
                </div>
            );
        })
        return (
            <div className={`${style.grid} clearfix`}>
                <div className={`${style.gridCol} ${style.col1_4}`}>
                    <aside className={style.filter}>
                        <div className={style.filterRow}>
                            <span>Name</span><span>Age</span>
                        </div>
                        <a href="#1-3" className={style.filterRow}>
                            <span>Toddlers & Parents</span><span>1 - 3</span>
                        </a>
                        <a href="#3-6" className={style.filterRow}>
                            <span>Younger Kids</span><span>3 - 6</span>
                        </a>
                        <a href="#6-11" className={style.filterRow}>
                            <span>Older Kids</span><span>6 - 11</span>
                        </a>
                    </aside>
                    <a className={style.filterAll} href="#all">View All</a>
                </div>
                <div className={`${style.gridCol} ${style.col3_4}`}>
                    <Heading
                        rank={4}
                        text="All workshops"
                        extraStyle={{ fontFamily: 'Muli', fontWeight: 600, fontSize: '25px', marginBottom: '35px' }}
                    />
                    <div className={style.cardsContainer}>
                        {cards}
                    </div>
                </div>
            </div>
        );
    }
}


WorkshopList.propTypes = {
    workshops: PropTypes.array.isRequired,
    lng: PropTypes.string.isRequired
}

export default WorkshopList;
