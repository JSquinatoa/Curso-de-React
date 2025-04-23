import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import CardWeather from './components/CardWeather';

function App() {

  const [city, setCity] = useState("Ecuador")
  const [cityData, setCityData] = useState(null)
  const APIKEY = '030dd83f092a99dfb166cc7000343e60';

  useEffect(() => {  

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
    

    axios.get(URL)
    .then(res => {
      console.log(res.data)
      setCityData(res.data)
    })
    .catch(err => console.log("Error: ", err))

  }, [])
  


  return (
    <div className='app'>

      <CardWeather
      cityData = {cityData}
      APIKEY={APIKEY} 
      />

    </div>
  )
}

export default App
