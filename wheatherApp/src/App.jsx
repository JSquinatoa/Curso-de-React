import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import CardWeather from './components/CardWeather';

function App() {

  const [city, setCity] = useState()
  const [cityData, setCityData] = useState(null)
  const [weatherDescription, setWeatherDescription] = useState()
  const [coords, setCoords] = useState()

  const APIKEY = '030dd83f092a99dfb166cc7000343e60';
  const getDataLocation = pos =>{
    const obj ={
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }    
    setCoords(obj)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getDataLocation)
  }, [])
  

  useEffect(() => {

    if(coords){
      const {lat, lon} = coords
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
      .then(res => {
        setCity(res.data.name)
        console.log("data", red.data)
      })
      .catch(err => console.log(err))
    }

  }, [coords])
  

  useEffect(() => {  

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
    

    axios.get(URL)
    .then(res => {
      console.log(res.data)
      setWeatherDescription(res.data.weather[0].description)
      setCityData(res.data)
    })
    .catch(err => console.log("Error: ", err))

  }, [city])

  const getBackground = () => {
    const classMapping = {
      'clear sky': 'clear-sky',
      'few clouds': '	few-clouds',
      'scattered clouds': 'scattered-clouds',
      'broken clouds': 'broken-clouds',
      'shower rain': 'shower-rain',
      'rain': 'rain',
      'light rain': 'light-rain',
    }    

    return classMapping[weatherDescription] || 'default-background'
  }
  


  return (
    <div className={`app bgestilo ${getBackground(city)}`}>

      <CardWeather
      cityData = {cityData}
      APIKEY={APIKEY} 
      setCityData = {setCityData}
      setCity = {setCity}
      />

    </div>
  )
}

export default App
