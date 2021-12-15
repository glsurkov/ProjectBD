import React from 'react';
import NavLink from "./NavLink";

const Nav = () => {
    return (
        <nav className = "nav">
            <NavLink navlink = {"Information"} onClick = {()=>{}}/>
            <NavLink navlink = {"Service"} onClick = {()=>{}}/>
            <NavLink navlink = {"Blog"} onClick = {()=>{}}/>
            <NavLink navlink = {"Contact"} onClick = {()=>{}}/>
        </nav>
    );
};

export default Nav;