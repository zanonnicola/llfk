import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import Heading from '../heading';
import style from './index.module.css';

const colorMap = new Map();
colorMap.set('1-3', '#9DD6D9');
colorMap.set('3-6', '#60BDC1');
colorMap.set('6-11', '#47888B');

function compare(a, b) {
    if (a.node.frontmatter.age < b.node.frontmatter.age)
        return -1;
    if (a.node.frontmatter.age > b.node.frontmatter.age)
        return 1;
    return 0;
}

class WorkshopList extends Component {
    constructor(props) {
        super(props);
        this.filter = React.createRef();
    }
    state = { selection: 'all' };

    handleSelection = (age) => (evt) => {
        evt.preventDefault();
        this.setState(() => ({
            selection: age
        }));
        localStorage.setItem('scroll', window.pageYOffset + this.filter.current.getBoundingClientRect().top);
    };

    render() {
        const { workshops } = this.props;
        const sortedWorkshops = workshops.sort(compare);
        // Translations
        const cta = this.props.lng === 'fr' ? 'En savoir plus' : 'Read more';
        const viewAll = this.props.lng === 'fr' ? 'Tous nos ateliers' : 'View all';
        const name = this.props.lng === 'fr' ? 'Atelier' : 'Workshop';
        const to13 = this.props.lng === 'fr' ? 'Parents-Enfants' : 'Toddlers & Parents';
        const to36 = this.props.lng === 'fr' ? 'Jeunes enfants' : 'Younger Kids';
        const to611 = this.props.lng === 'fr' ? 'Enfants' : 'Older Kids';

        const cards = sortedWorkshops.filter(workshop => workshop.node.frontmatter.lng === this.props.lng).map((workshop, i) => {
            let visibleCard;
            if (this.state.selection === workshop.node.frontmatter.age || this.state.selection === 'all') {
                visibleCard = '';
            } else {
                visibleCard = 'none'
            }
            return (
                <div className={style.flexCol} key={`card-${i}`} style={{
                    display: visibleCard
                }}>
                    <Card
                        title={workshop.node.frontmatter.title}
                        color={colorMap.get(workshop.node.frontmatter.age)}
                        pagePath={workshop.node.frontmatter.path}
                        text={workshop.node.excerpt}
                        cta={cta}
                        tag={workshop.node.frontmatter.age}
                        secondary
                        active={this.state.selection}
                    />
                </div>
            );
        })
        return (
            <div ref={this.filter} className={`${style.grid} clearfix`}>
                <div className={`${style.gridCol} ${style.col1_4}`}>
                    <aside className={style.filter}>
                        <div className={style.filterRow}>
                            <span>{name}</span><span>Age</span>
                        </div>
                        <a href="#1-3" className={`${style.filterRow} ${this.state.selection === '1-3' ? style.filterRowActive : ''}`} onClick={this.handleSelection('1-3')}>
                            <span>{to13}</span><span>1 - 3</span>
                        </a>
                        <a href="#3-6" className={`${style.filterRow} ${this.state.selection === '3-6' ? style.filterRowActive : ''}`} onClick={this.handleSelection('3-6')}>
                            <span>{to36}</span><span>3 - 6</span>
                        </a>
                        <a href="#6-11" className={`${style.filterRow} ${this.state.selection === '6-11' ? style.filterRowActive : ''}`} onClick={this.handleSelection('6-11')}>
                            <span>{to611}</span><span>6 - 11</span>
                        </a>
                    </aside>
                    <a className={style.filterAll} href="#all" onClick={this.handleSelection('all')}>{viewAll}</a>
                </div>
                <div className={`${style.gridCol} ${style.col3_4}`}>
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
