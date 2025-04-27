import './App.css'
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/aboutus' element={<About/>}/> 
        <Route path='/contactus' element={<Contact/>}/> 
      </Routes>

    </>    
  )
}

export default App
