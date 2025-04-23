import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [persona, setPersona] = useState({
    id: 1,
    Nombre: "John",
    Apellido: "Quinatoa",
    Edad: 24  
  })

  function addEmail() {
    setPersona({...persona, mail: "correo@core.com"})        
  }
  
  const [cadena, setCadena] = useState(["Manzana", "Pera", "Mandarina"])

  function addFruit() {
    setCadena([...cadena, "Naranja"])        
  }

  function addFruitcontrolada() {
    if(!cadena.includes("Naranja")){
      setCadena([...cadena, "Naranja"])      
    }  
  }

  return (
    <>
    {JSON.stringify(persona)}
    <button onClick={addEmail}>Agregar Email</button><br />
    {JSON.stringify(cadena)}
    <button onClick={addFruitcontrolada}>Agregar Fruta</button>

    </>
  )
}

export default App
