import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'

function App() {

  const [data, setData] = useState()
/*   const URL = "https://restcountries.com/v3.1/all" */
  const URL = "https://restcountries.com/v3.1/name/Ecuador"

  useEffect(() => {
    axios.get(URL)
    .then(response => {
      console.log(response.data)
      setData(response.data)
    })
    .catch(err => console.log(err))

  }, [])

  if(!data){
    return <h2>Cargando...</h2>
  }

  return (
    <>
    <div className="card_country">    

      <img src={data?.[0].flags?.png} alt={`bandera de ${data?.[0].name?.common}`} />
      <h2> {data?.[0].name?.common} </h2>
      <h3> {data?.[0].capital?.[0]} </h3>
      <h4> {data?.[0].area} mts <sup>2</sup> </h4>
      <p> { data?.[0]. population} </p> 

    </div>

    </>
  )
}

export default App
