import React from 'react';
import PropTypes from 'prop-types';
import { HamburgerButton } from '../styles/HamburgerStyles';
import Menu from '../../images/hamburger.png';

const Hamburger = ({
    handleOverlayMenu,
}) => (
    <HamburgerButton
        onClick={handleOverlayMenu}
        tabIndex="0"
    >
        <img src={Menu} alt="menu" />
    </HamburgerButton>
);

Hamburger.propTypes = {
    handleOverlayMenu: PropTypes.func,
};

export default Hamburger;
