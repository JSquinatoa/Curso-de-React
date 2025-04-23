import { useState, useEffect } from 'react'
import './App.css'
import UseFetch from './hooks/UseFetch'
import CardInfo from './components/CardInfo'

function App() {
  const baseURL = `https://api-demo-reservation.globaltecnoacademy.com`

  const [users, getUsers] = UseFetch({baseURL})

  useEffect(() => {

    getUsers()

  }, [])
  
  console.log("los usuarios son:", users)

  return (
    <div className='app'>
      <div className="app_header">
        <h1>CRUD</h1>
        <button className='app_btncreate'>Create</button>
      </div>

      <div className="info_container">



      </div>

    </div>
  )
}

export default App
