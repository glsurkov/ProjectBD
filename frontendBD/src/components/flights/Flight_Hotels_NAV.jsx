import React from 'react';
import NavLink from "../header/NavLink";

const FlightHotelsNav = ({fetchFlights,fetchHotels}) => {
    return (
            <nav className = "nav flight_nav">
                <NavLink onClick={fetchHotels} navlink = {"Hotels"}/>
                <NavLink onClick ={fetchFlights} navlink = {"Flights"}/>
            </nav>
    );
};

export default FlightHotelsNav;