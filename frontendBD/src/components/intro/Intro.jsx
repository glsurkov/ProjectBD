import React from 'react';
import Container from "../Container";
import '../../styles/style.css'
import IntroInner from "./IntroInner";

const Intro = ({show, showText}) => {

    return (
        <div className="intro">
            <Container contain = {<IntroInner showText = {showText} show = {show}/>}/>
        </div>
    );
};

export default Intro;