import React, {useContext, useState,useEffect} from 'react';
import cl from "../signForm/SignForm.module.css";
import Button from "../intro/Button";
import {AuthContext} from "../../context";
import axios from "axios";

const CreateFlight = () => {

    const [sent,setSent] = useState(false);
    const [error2,setError] = useState(undefined);
    const [name,setName] = useState('')
    const [departure_date,setDeparture_date] = useState('')
    const [departure_time,setDeparture_time] = useState('')
    const [departure_airport_name,setDeparture_airport_name] = useState('')
    const [arrival_date,setArrival_date] = useState('')
    const [arrival_time,setArrival_time] = useState('')
    const [arrival_airport_name,setArrival_airport_name] = useState('')
    const [tickets_in_stock,setTickets_in_stock] = useState('')
    const [ticket_price,setTicket_price] = useState('')

    const {token} = useContext(AuthContext)

    async function addFlight(){
        try {
            const response = await axios.post('/flights',{
                company_name:`${name}`,
                departure_date:departure_date,
                departure_time:`${departure_time}`,
                departure_airport_name: `${departure_airport_name}`,
                arrival_date:arrival_date,
                arrival_time:`${arrival_time}`,
                arrival_airport_name:`${arrival_airport_name}`,
                tickets_in_stock:tickets_in_stock,
                ticket_price:ticket_price
            },{headers:{"Authorization":`Bearer ${token}`}})
            console.log(response.status)
            setTicket_price('');
            setName('');
            setTickets_in_stock('');
            setArrival_airport_name('');
            setDeparture_airport_name('');
            setArrival_date('');
            setArrival_time('');
            setDeparture_date('');
            setDeparture_time('');
            setSent(true);
            return response
        }catch(e)
        {
            console.log(e.status);
            setSent(true);
        }
    }


    return (
        <div className={cl.SignForm}>
            <input value = {name} onChange = {e => setName(e.target.value)} className = {cl.Input} placeholder="???????????????? ????????????????????????"/>
            <input value = {departure_date} onChange = {e => setDeparture_date(e.target.value)} className = {cl.Input} placeholder="???????? ???????????? (????????????: 2021-12-15)"/>
            <input value = {departure_time} onChange = {e => setDeparture_time(e.target.value)} className = {cl.Input} placeholder="?????????? ???????????? (????????????: 16:30)"/>
            <input value = {departure_airport_name} onChange = {e => setDeparture_airport_name(e.target.value)} className = {cl.Input} placeholder="???????????????? ????????????"/>
            <input value = {arrival_date} onChange = {e => setArrival_date(e.target.value)} className = {cl.Input} placeholder="???????? ?????????????? (????????????: 2021-12-15)"/>
            <input value = {arrival_time} onChange = {e => setArrival_time(e.target.value)} className = {cl.Input} placeholder="?????????? ?????????????? (????????????: 18:30)"/>
            <input value = {arrival_airport_name} onChange = {e => setArrival_airport_name(e.target.value)} className = {cl.Input} placeholder="???????????????? ??????????????"/>
            <input value = {tickets_in_stock} onChange = {e => setTickets_in_stock(e.target.value)} className = {cl.Input} placeholder="???????????????????? ??????????????"/>
            <input value = {ticket_price} onChange = {e => setTicket_price(e.target.value)} className = {cl.Input} placeholder="???????? ????????????"/>
            {
               sent ?  <div> {
                   !error2 ? <div className = 'error'>????????????! ?????????????????? ?????????????????? ????????????</div> : <div className = 'success'> ???????????? ?????????????? ?????????????????? </div>
                    } </div> : null
             }
            <div onClick = {() => {addFlight().then(res =>{ let response; if(res){response = res.status}else{response = undefined} setError(response)});setSent(false)}}>
                <Button button = {{title:"Submit", class:"btn btn3", click: ()=>{}, showText:()=>{}}}/>
            </div>
        </div>
    );
};

export default CreateFlight;