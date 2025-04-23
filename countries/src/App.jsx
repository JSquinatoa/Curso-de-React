import { useState } from 'react'
import { useEffect } from 'react'
import { useRef} from 'react'
import './App.css'
import axios from  'axios'
import CountryCard from './Components/CountryCard'

function App() {

  // Estaodos para almacenar mis datos originales y los datos filtrados
  const [data, setData] = useState(null)
  const [allData, setAllData] = useState(null)
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all")

  // Referencia a los input
  const inputCountry = useRef('')
  const inputRegion = useRef('')
  const inputLang = useRef('')
  


  // Método para obtener la data del url
  useEffect(() => {

    axios.get(url)
    .then(res => {
      setData(res.data)
      setAllData(res.data) // Guardamos los datos originales
    })    
    .catch(err => console.log("Error: ", err))

  }, [url])

  // si no hay data nos muestra que esta cargando
  if(!data){
    return <h2>Cargando ...</h2>
  }

  // Función filtro por pais
  function buscarPais(event) {
    event.preventDefault()

    if (inputCountry.current.value == "" ) {
      setData(allData) 
    }else{
      const filteredData = allData.filter(country =>country.name.common.toLowerCase().includes(inputCountry.current.value))
      setData(filteredData)
    }

  }

  // Función para filtrar la región 
  function filtrarRegion(event) {
    event.preventDefault()

    const region = inputRegion.current.value
    if (region) {
      const filteredData = allData.filter(country => country.region.toLowerCase() === region.toLowerCase())     
      setData(filteredData)
    }else{
      setData(allData)
    }
    
  }

  // Función filtrado de idioma
  function filtrarLanguage() {
    const language = inputLang.current.value
    if (language) {
      axios.get(`https://restcountries.com/v3.1/lang/${language}`)     
      .then(res => setData(res.data))
      .catch(err => alert(`Error al obtener los paises para idioma ${language}`))
    }        
  }

  return (

    <div className='container'>
      
      {/* Filtrado por petición por nombre de pais */}
      <form onSubmit={buscarPais}>
        <input type="text" ref={inputCountry} id="inputCountry" placeholder='Ingresa el pais'/>
        <button>Buscar</button>
      </form>
      

      {/* Filtrado por la data */}
      <form onSubmit={filtrarRegion}>
        <input type="text" ref={inputRegion} id="inputCountry" placeholder='Ingresa la Region'/>
        <button>Buscar</button>
      </form>

      {/*Filtrar poe el idoma*/}
      <select onChange={filtrarLanguage} ref={inputLang} id='inputLang'>
        <option value="">Selecciona una opción</option>
        <option value={'Spanish'}>Spanish</option>
        <option value={'English'}>English</option>
      </select>


      {/* mapeo de los paises obtenido */}
      {
        data?.map((item, index) => (
          <CountryCard
          key={index}
          country = {item}
          />
        ))
      }

   
    </div>

  )
}

export default App
