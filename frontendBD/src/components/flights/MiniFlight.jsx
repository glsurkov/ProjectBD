import React from 'react';
import cl from './miniFlight.module.css'

const MiniFlight = (props) => {
    return (
        <div className={cl.card}>
            <div>
                Компания : {props.flight['flights.aviacompany.company_name']}
            </div>
            <div>
                Дата и время вылета :
                <br/>
                {props.flight['flights.departure_date'].slice(0,10)} {props.flight['flights.departure_time'].slice(0,5)}
            </div>
            <div>
            <div>
                Дата и время прилета:
                <br/>
                {props.flight['flights.arrival_date'].slice(0,10)} {props.flight['flights.arrival_time'].slice(0,5)}
            </div>
            </div>
        </div>
    );
};

export default MiniFlight;