import { useState,useEffect } from "react"


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
    // const day = date.getDay();
    // console.log(day)
   
    return (
        <>
       
        <div className="cardDiv">
            <h4>{date}</h4>
            <p>min : {min} / max: {max}</p>
            <img src={`https://developer.accuweather.com/sites/default/files/${Icon}-s.png`} alt="" />
            <p>{weatherType}</p>
        </div>
        </>
    )
}

export default Weather
