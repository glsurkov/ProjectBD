import React, {useEffect} from 'react';
import cl from "../flights/Flights.module.css";
import Hotel from "./Hotel";

const Hotels = (props) => {
    useEffect(()=>console.log("rerender"),
        [props.hotels])

    return (
        <div className = {cl.container}>
            {props.hotels.map((hotel) =>
                <Hotel hotel = {hotel} fetchHotels ={props.fetchHotels} key={hotel.hotel_id}/>
            )}
        </div>
    );
};

export default Hotels;