import React from 'react';

const SectionText = (props) => {
    return (
        <div className="section_text">
            <p>
                {props.text}
            </p>
        </div>
    );
};

export default SectionText;