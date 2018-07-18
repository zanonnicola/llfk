import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Heading from '../heading';
import style from './index.module.css';

class WorkshopList extends Component {
    state = { selection: 'all' };

    handleSelection = (evt) => {
        evt.preventDefault();
        this.setState(() => ({
            selection: 'something'
        }));
    };

    render() {
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
                    asdasdasd
                </div>
            </div>
        );
    }
}


WorkshopList.propTypes = {
    workshops: PropTypes.array.isRequired
}

export default WorkshopList;
