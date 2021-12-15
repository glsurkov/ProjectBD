import React from 'react';
import '../styles/style.css'

const Container = (props) => {
    return (
        <div className="container">
            {props.contain}
        </div>
    );
};

export default Container;