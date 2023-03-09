import React, { Component, FC } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { AiOutlineSearch, AiFillLock } from 'react-icons/ai';

import './Header.css';
import icons from '../../constants/icons';
import Colors from '../../styles/colors';


const options = [
    'one', 'two', 'three'
]
  
const Header = () => {

    const onSelect = (val: any) => {
        console.log(val);
    }


    return (
        <>
            <div className="header-container">
                {/* Logo */}
                <div style={{display: 'flex'}}>
                    <img src={icons.logo_icon} className="header-logo" /> 
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <h1 style={{color: Colors.primary, fontWeight: 900, textAlign: 'center'}}>COHETE</h1>
                        <p style={{color: Colors.primary, letterSpacing: 2, fontWeight: 900, marginLeft: 5}}>SOCIAL MOTIVATION</p>
                    </div>
                </div>
                {/* Three dropdowns */}
                <div className='header-dropdowns-container'>
                    <Dropdown options={options} onChange={onSelect} controlClassName="header-dropdown-container" value={"Where"} placeholder="Select an option" />
                    <Dropdown options={options} onChange={onSelect} controlClassName="header-dropdown-container" value={"What"} placeholder="Select an option" />
                    <Dropdown options={options} onChange={onSelect} arrowClosed={<span className="arrow-closed" />}  controlClassName="header-dropdown-container" value={"For Restaurants"} placeholder="Select an option" />

                </div>

                {/* Two Icons */}
                <div className='header-icons-container'>
                    <div style={btnContainer}>
                        <AiOutlineSearch style={{ color: 'white' }} size={"50%"} />
                    </div>
                    <div style={btnContainer}>
                        <AiFillLock style={{ color: 'white' }} size={"50%"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;

const btnContainer = {
    width:'50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: Colors.primary,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
}
