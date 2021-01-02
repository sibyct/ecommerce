import React from "react";
import './TopBar.css';

import { Mail,Phone } from '@material-ui/icons';
const TopBar = ()=>{
    const iconStyle = {height:'14px',width:'14px'};
    const phoneStyle = {...iconStyle,color:'#D07FA1'};
    const emailStyle = {...iconStyle,color:'#AA59C2'}
    const emailId = "example@gmail.com";
    const phoneNumber = "1234567"
    return (
        <div className="TopBar RowLayout">
            <div className="PhoneContactContainer">   
                <Phone style={phoneStyle}/>
                <span className="PhoneNumber">{phoneNumber}</span>
            </div>
            <div className="EmailContainer">
            <Mail style={emailStyle}/><span className="EmailText">{emailId}</span>
            </div>
        </div>
    )
}

export default TopBar;
