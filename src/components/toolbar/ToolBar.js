import React from "react";
import {Menu} from '@material-ui/icons'
import './ToolBar.css';

const ToolBar = ()=>{
    const menuStyle = {color:'white',cursor: 'pointer'}
    return (
        <div className="Toolbar">
            <div className="RowLayout FullSize">
                <div className="LogoSection AlignVertical RowLayout">
                    <Menu style={menuStyle}/>
                    <div style={{marginLeft:'20px'}}>One Avanue</div>
                </div >

                <div className="NavSection ColumnLayout">
                    <div></div>

                </div>
                <div className="SignInSection">

                </div>
            </div>
        </div>
    )
}

export default ToolBar;