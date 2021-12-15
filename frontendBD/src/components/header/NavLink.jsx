import React from 'react';

const NavLink = (props) => {
    return (
            <a className="nav_link" onClick = {(e) => props.onClick(e)} href="#info">{props.navlink}</a>
    );
};

export default NavLink;