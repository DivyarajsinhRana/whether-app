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
      axios.get(`${baseURL}${location_key}?apikey=${API_KEY}`).then((res)=>{
        console.log("res.data",res.data);
        setweatherInfo(res.data.DailyForecasts.map(df=>{
        console.log(df);
        return {
          min : df.Temperature.Minimum.Value,
          max : df.Temperature.Maximum.Value,
          weatherType : df.Day.IconPhrase,
          icon:df.Day.Icon,
          date:df.Date
        }
      }))}).catch((error)=>setError(error.message));
    }
  },[location_key])
 
  return (
    <>
    
     <div className="main">
         <h1>5-Day Forecast</h1>
       <div className="input">
            <Citylocation onCityFound={(cityInfo)=>setlocation_key(cityInfo.key)}/>
       </div>
        <div className="weathercard">
      {
        error ? (<h1>{error}</h1>) :
        weatherInfo && weatherInfo.map((item,index)=>{
          return (<div className="grid-col" key={index} >
             <Weather min={item.min} max={item.max} icon={item.icon} weatherType={item.weatherType}  date={item.date} />
             </div>)
        })
      }
        </div>
    </div>
    </>
  )
}

export default App
