import React, {FC, Fragment} from 'react';
import './MainPage.css';

import Colors from '../../styles/colors';
import images from '../../constants/images';


const MainPage: FC = () => {

    return (
        <div className="main-container">
            <h1 style={{color: Colors.primary, fontSize: 75, letterSpacing: -2}}>LET'S DO OUR BEST TOGETHER!</h1>
            <div style={{display: "flex", marginBottom: '4em'}} >
                <p style={{fontSize: 20}}>Try COHETE Random Social Motivation by</p> 
                <p style={{color: Colors.primary, fontSize: 20}}>&nbsp;Clicking START button&nbsp;</p>
                <p style={{fontSize: 20}}>below</p>
            </div>
            {/* Images */}
            <div style={{ display: "flex", flexDirection: 'row', width: '100%', justifyContent: 'space-between', flexFlow: 'nowrap', marginBottom: '5%' }} >
                <img src={images.office_chat_img} style={{ width: '33%' }} />
                <img src={images.meeting_img} style={{width:'33%', border: `10px solid ${Colors.primary}`, borderRadius: '2.5%' }} />
                <img src={images.hands_crossed_img} width={"33%"} />
            </div>
            <br />
            <h2 style={{ color: Colors.primary, fontSize: 40, fontWeight: 900 }}>PAPER WORK</h2>
            <h5>Nearby Dong Daegu Station</h5>
        </div>
    )
}

export default MainPage
