import React, { Component, FC } from 'react';
import images from '../../constants/images';
import icons from '../../constants/icons';
import Colors from '../../styles/colors';

const IconBtn = () => {
    return (
        <div style={btnContainer}>
            <img src={icons.lock_icon} style={iconStyle} />
        </div>
    )
}

export default IconBtn;




const btnContainer = {
    width:'50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
}

const iconStyle = {
    width: '25px',
    height: '25px'
}