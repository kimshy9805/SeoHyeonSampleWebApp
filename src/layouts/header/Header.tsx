import React, { Component, FC } from 'react';
import './Header.css';
import icons from '../../constants/icons';
import IconBtn from '../../components/buttons/IconBtn';

const Header = () => {
    return (
        <>
            <div className="header-container">
                {/* Logo */}
                <img src={icons.logo_icon} className="header-logo"/> 
                {/* Three dropdowns */}
                <h1>hoho</h1>
                {/* Two Icons */}
                <div>
                    <IconBtn />
                    <IconBtn />
                </div>
            </div>
        </>
    )
}

export default Header;