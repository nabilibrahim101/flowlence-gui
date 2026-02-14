import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import Box from '../box/box.jsx';
import styles from './blocks.css';
import bgcLogo from './bgc-logo.png';

const BlocksComponent = props => {
    const {
        containerRef,
        dragOver,
        ...componentProps
    } = props;
    return (
        <Box
            className={classNames(styles.blocks, {
                [styles.dragOver]: dragOver
            })}
            {...componentProps}
            componentRef={containerRef}
        >
            <img
                className={styles.workspaceLogo}
                src={bgcLogo}
                alt="Brilliant Global Competitions"
                draggable={false}
            />
        </Box>
    );
};
BlocksComponent.propTypes = {
    containerRef: PropTypes.func,
    dragOver: PropTypes.bool
};
export default BlocksComponent;
