import { useState,useEffect } from "react"
import { mdiTemperatureFahrenheit } from '@mdi/js';
import moment from "moment"
import { unix } from "moment";

const Weather = ({min,max,icon,weatherType,date}) => {
    const [Icon,setIcon]=useState(icon)
    useEffect(() => {
        if(icon >10){
            setIcon(icon)
        }
        else {
            setIcon(`0${icon}`)
        }
    }, [])
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log("date>>>",date);
   let days = new Date(date);
   const day = weekday[days.getDay()];
   const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const timedate = days.getDate();
    const timemonth =month[days.getMonth()];
    console.log("month>>",timemonth)
    const timeyear = days.getFullYear();
  
    return (
        <>
       
        <div className="cardDiv">
            <h4>{day}</h4>
            <p>{timedate}-{timemonth}-{timeyear}</p>
            <p>min : {min} /max: {max}</p>
            <img src={`https://developer.accuweather.com/sites/default/files/${Icon}-s.png`} alt="" />
            <p>{weatherType}</p>
        </div>
        </>
    )
}

export default Weather
