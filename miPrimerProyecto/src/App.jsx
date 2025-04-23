import React, { useState } from 'react'
import './App.css'


function App() {

  const [first, setfirst] = useState(5)


  function handleClick() {
    setfirst(first + 1)    
  }

  const [estado1, setEstado1] = useState('existe')
  const [estado2, setEstado2] = useState('no existe')

  return (
    <>
      
      <h2> {first?estado1:estado2} </h2>
      <h1>Hola mundo</h1>
      <p>Hola de regres</p>
      <button onClick={handleClick}>Presioname</button>
    </>
  )
}

export default App
