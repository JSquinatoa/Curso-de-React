import React from 'react'
import "./styles/CountryCard.css"

const CountryCard = ({country}) => {


  return (
    <div className="card_country">
        <img src={country.flags.png} alt="" />
        <h2 className='name'> Nombre Pais: {country.name.common} </h2>
        <h4 className='capital'> Capital {country.name.official}</h4>
        <h4 className='area'> Area {country.area} m<sup>2</sup> </h4>
        <h4 className='population'>Población {country.population}</h4>
        <h5 className='languaje'>
        <details>
            <summary>Idiomas</summary>  
            <ul>
              {Object.entries(country.languages ?? {}).map(([code, name]) => (
                <li key={code}>{name}</li>
              ))}
            </ul>
        </details> 
        </h5>
    </div>
  )
}

export default CountryCard