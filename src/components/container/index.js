import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';

const FlexView = ({ children }) => {
    return (
        <div className={style.flex}>
            {children}
        </div>
    );
};
FlexView.propTypes = {
    children: PropTypes.func.isRequired,
};

export { FlexView };
