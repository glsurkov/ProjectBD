import React from 'react';
import Container from "../Container";
import HeaderInner from "./HeaderInner";

const Header = () => {
    return (
        <div className = "header">
            <Container contain = {<HeaderInner/>}/>
        </div>
    );
};

export default Header;