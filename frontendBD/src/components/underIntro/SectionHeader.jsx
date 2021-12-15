import React from 'react';
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

const SectionHeader = () => {
    return (
        <div className ="section_header">
            <SectionSubtitle text = {"What we do"}/>
            <SectionTitle text = {"Inforamtion"}/>
            <SectionText text = {"We are providing the most exciting app for students and teachers!"}/>
        </div>
    );
};

export default SectionHeader;