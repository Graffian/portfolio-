import React,{useState,useEffect} from 'react'
import styles from './weatherApp.css'
function WeatherApp(){
  const [cityList,setCityList]=useState([])
  const [cityInput,setCityInput]=useState("")
  const [selectedCity,setSelectedCity]=useState("")
  const [weatherData,setWeatherData]=useState(null)
  function handleCityInput(e){
    setCityInput(e.target.value)
  }
  function confirmBtn(){
    setCityList(...cityList,cityInput)
    setSelectedCity(cityInput)
    setCityInput("")
  }
  useEffect(()=>{
    async function fetchWeather(){
      if(!selectedCity){
        return 
      }
      const api = "852b79af6ddc4d1bb5d64436241405"
      const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=${api}&q=${selectedCity}`)
      const data = await response.json()
      setWeatherData(data)
    };
    fetchWeather()},[selectedCity])
  return(<div>
    <h1>WEATHER-APP</h1>
    <input value={cityInput} 
    onChange={handleCityInput} 
    placeholder="enter a city name"/>
    <button onClick={confirmBtn}>CONFIRM√</button>
    <h2>LOCATION:{weatherData?
    (weatherData.location.name): (<p>LOADING...</p>)}</h2>
    {weatherData?(<ul>
      <li>FEELS LIKE:{weatherData.current.feelslike_c}°C</li>
      <li>GUST SPEED:{weatherData.current.gust_mph}mph</li>
      <li>HUMIDITY:{weatherData.current.humidity}</li>
      <li>WIND SPEED: {weatherData.current.wind_mph}mph</li>
    </ul>)
      
   :(<p>LOADING.........</p>) }
    
   </div>)
}
export default WeatherApp