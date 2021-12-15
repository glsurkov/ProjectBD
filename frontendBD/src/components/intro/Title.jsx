import React from 'react';
import '../../styles/style.css'

const Title = (props) => {
    return (
        <h1 className="intro_title"> {props.title} </h1>
    );
};

export default Title;