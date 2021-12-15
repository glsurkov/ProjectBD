import React from 'react';

const SectionTitle = (props) => {
    return (
        <h2 className=" section_title " id = "info"> {props.text}</h2>
    );
};

export default SectionTitle;