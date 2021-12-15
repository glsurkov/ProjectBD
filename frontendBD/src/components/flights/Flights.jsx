import React, {useEffect} from 'react';
import Flight from "./Flight";
import cl from "./Flights.module.css";

const Flights = (props) => {
    useEffect(()=>console.log("rerender"),
        [props.flights])
    return (
        <div className = {cl.container}>
                {props.flights.map((flight) =>
                    <Flight flight = {flight} fetchFlights = {props.fetchFlights} key={flight.flight_id}/>
                )}
        </div>
    );
};

export default Flights;