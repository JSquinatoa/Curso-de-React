import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './styles/CardWeather.css'

const CardWeather = ({cityData, APIKEY}) => {

    const [temp, setTemp] = useState(null)
    const [isCelsius, setIsCelsius] = useState(true)

    useEffect(() => {

        const celsius = (cityData?.main.temp - 273.15).toFixed(1)
        const obj = {
            celsius: celsius,
            farentheit:((cityData?.main.temp-273.15)*(9/5)+32).toFixed(1)
        }
        setTemp(obj)

    }, [cityData])
    
    function changedTemp() {
        setIsCelsius(!isCelsius)        
    }

    if(!temp){
        return <h1>Cargando....</h1>
    }

    
    return (
    <article className='card_weather'>
        <h2 className='card_weathertitle' >{cityData?.name}</h2>
        <h4 className='card_weatherdescription'>"{cityData?.weather[0].description}"</h4>
        <h3 className='card_weathertemp'>
            {isCelsius? `${temp?.celsius}°C`:`${temp?.farentheit}°F`}
        </h3>

        <div className='container'>
            <img className='imgicon' src={`https://openweathermap.org/img/wn/${cityData?.weather[0].icon}@4x.png`} alt="" />
            <ul className='containerinfo'>
                <li className='iteminfo'>Coordenadas: <br /><span className='iteminfodata'> la:t{cityData?.coord.lat}, lon: {cityData?.coord.lon}</span></li>
                <li className='iteminfo'>Presión: <br /><span className='iteminfodata'>{cityData?.main.temp} hpa</span></li>
                <li className='iteminfo'>Humedad: <br /><span className='iteminfodata'>{cityData?.main.humidity}%</span></li>
                <li className='iteminfo'>Velocidad del Viento: <br /><span className='iteminfodata'>{cityData?.wind.speed} m/s</span></li>
                <li className='changetemp' onClick={changedTemp}> cambiar la Medida </li>
            </ul>
        </div>
    </article>
  )
}

export default CardWeather