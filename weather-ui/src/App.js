import axios from "axios"
import { useEffect,useState } from "react"
import { baseURL } from "./Api"
import Weather from "./components/pages/weather/Weather"
import './App.css'
import Citylocation from "./components/pages/location/Citylocation"
import { API_KEY } from "./constants"
const App = () => {
  const [location_key,setlocation_key]= useState(''); 
  const [weatherInfo,setweatherInfo] = useState();
  const [error,setError] = useState('');
  useEffect(()=>{
    if(location_key){
      axios.get(`${baseURL}${location_key}?apikey=${API_KEY}`).then((res)=>setweatherInfo(res.data.DailyForecasts.map(df=>{
        console.log(df);
        return {
          min : df.Temperature.Minimum.Value,
          max : df.Temperature.Maximum.Value,
          weatherType : df.Day.IconPhrase,
          icon:df.Day.Icon,
          date:df.Date
        }
      }))).catch((error)=>setError(error.message));
    }
  },[location_key])
  console.log("weatherInfo>>>",weatherInfo);
  console.log("locationKey>>",location_key);
  return (
    <>
    
     <div className="main">
            <Citylocation onCityFound={(cityInfo)=>setlocation_key(cityInfo.key)}/>
        <div className="weathercard">
      {
        
        weatherInfo && weatherInfo.map((item,index)=>{
          return ( <Weather min={item.min} max={item.max} icon={item.icon} weatherType={item.weatherType} key={index} date={item.date} />)
        })
      }
        </div>
    </div>
    </>
  )
}

export default App
