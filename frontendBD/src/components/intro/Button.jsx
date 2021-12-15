import React from 'react';
import '../../styles/style.css'

const Button = (props) => {
    return (
        <a onClick = {() => {props.button.click(true); props.button.showText(props.button.title)}} className={props.button.class}>{props.button.title}</a>
    );
};

export default Button;