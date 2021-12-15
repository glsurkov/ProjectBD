import React from 'react';
import HeaderLogo from "./HeaderLogo";
import Nav from "./Nav";
import ImageSrc from "../../img/airbook.png"

const HeaderInner = () => {
    return (
        <div className = "header_inner">
            <HeaderLogo logo = {{text:"AirBook",img:ImageSrc}}/>
            <Nav/>
        </div>
    );
};

export default HeaderInner;