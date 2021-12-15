import React from 'react';
import AboutItem from "./AboutItem";
import imageSrc from "../../img/pngwing.com (1).png"
import imageSrc2 from "../../img/cont.png"
import imageSrc3 from "../../img/reviews.png"

const About = () => {
    return (
        <div className="about">
            <AboutItem item = {{img:imageSrc, text: "How to use", info: "Lorem ipsum nulla non mattis nulla tellus curabitur quam congue ornare malesuada pellentesque ipsum&nbsp;&mdash; lorem fusce, commodo congue malesuada nulla nam enim nibh. Adipiscing metus, sem odio fusce et non in justo massa ipsum nulla donec magna arcu gravida, sapien eros enim mattis nibh ligula. Arcu congue risus vulputate&nbsp;&mdash; porta justo sapien donec justo curabitur nibh, vivamus quisque. Sodales&nbsp;&mdash; magna, gravida vitae urna&nbsp;&mdash; maecenas, porttitor arcu amet congue sapien eget elementum nulla lorem elementum, donec adipiscing amet ut et. Porta tellus leo bibendum: diam cursus orci ut eros sodales mattis malesuada"}}/>
            <AboutItem item = {{img:imageSrc2, text: "Support", info: "Lorem ipsum nulla non mattis nulla tellus curabitur quam congue ornare malesuada pellentesque ipsum&nbsp;&mdash; lorem fusce, commodo congue malesuada nulla nam enim nibh. Adipiscing metus, sem odio fusce et non in justo massa ipsum nulla donec magna arcu gravida, sapien eros enim mattis nibh ligula. Arcu congue risus vulputate&nbsp;&mdash; porta justo sapien donec justo curabitur nibh, vivamus quisque. Sodales&nbsp;&mdash; magna, gravida vitae urna&nbsp;&mdash; maecenas, porttitor arcu amet congue sapien eget elementum nulla lorem elementum, donec adipiscing amet ut et. Porta tellus leo bibendum: diam cursus orci ut eros sodales mattis malesuada"}}/>
            <AboutItem item = {{img:imageSrc3, text: "Wishes", info: "Lorem ipsum nulla non mattis nulla tellus curabitur quam congue ornare malesuada pellentesque ipsum&nbsp;&mdash; lorem fusce, commodo congue malesuada nulla nam enim nibh. Adipiscing metus, sem odio fusce et non in justo massa ipsum nulla donec magna arcu gravida, sapien eros enim mattis nibh ligula. Arcu congue risus vulputate&nbsp;&mdash; porta justo sapien donec justo curabitur nibh, vivamus quisque. Sodales&nbsp;&mdash; magna, gravida vitae urna&nbsp;&mdash; maecenas, porttitor arcu amet congue sapien eget elementum nulla lorem elementum, donec adipiscing amet ut et. Porta tellus leo bibendum: diam cursus orci ut eros sodales mattis malesuada"}}/>
        </div>
    );
};

export default About;