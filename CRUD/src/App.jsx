import { useState, useEffect } from 'react'
import './App.css'
import UseFetch from './hooks/UseFetch'

function App() {
  const baseURL = `https://api-demo-reservation.globaltecnoacademy.com`

  const [users, getUsers] = UseFetch(baseURL)

  useEffect(() => {

    getUsers

  }, [])
  
  console.log("los usuarios son:", users)

  return (
    <>
    HOla
    </>
  )
}

export default App
