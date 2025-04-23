import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import NavBar from './components/NavBar'
import './components/styles/UserCard.css'


function App() {
  const [name, setName] = useState('John Quinatoa')

  return (
    <>    
    Hola mundo 
      <UserCard 
        fisrtName={name}
        proffesion={"Desarrollador Frontend"}
        city={"Quito, Ecuador"}
        email={'john_esty_@hotmail.com'}
        setName = {setName}
      ></UserCard>
      <NavBar></NavBar>      
    </>
  )
}

export default App
