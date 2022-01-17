import axios from 'axios';
import  { useState } from 'react'
import { location_URL } from '../../../Api';
import { API_KEY } from '../../../constants';

const Citylocation = ({onCityFound}) => {
    const [zipcode,setZipcode] = useState();
    const [location_key,setLoction_key] = useState();
    // console.log(location_URL)
    const handleClick = (e)=>{
        console.log(e.target.value);
        e.preventDefault();
        axios.get(`${location_URL}apikey=${API_KEY}&q=${zipcode}`).then((res)=>setLoction_key(res.data)).catch(e=>console.log(e.message));
    }
    // console.log("location>>>",location_key);
    const l_key = location_key && location_key[0];
    // console.log("lkry>>>",l_key);
    const key =l_key && l_key.Key;
    console.log(key);
    const cityfound = l_key && onCityFound({
        key:l_key.Key,
        name:l_key.LocalizedName
    })


    // const unique_key = l_key && l_key.slice(0,l_key.length-2);
    // console.log(unique_key);
    // console.log(location_key);
    return (
        <form > 
        <input type="text" placeholder="enter city" value={zipcode} onChange={(e)=>setZipcode(e.target.value)} />
        <button  onClick={(e)=>handleClick(e)}>Submit</button>
        </form>
    )
}

export default Citylocation
