import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './styles/NavBar.css'

const NavBar = () => {
    
    const navigate = useNavigate()
    
    function navigateHome() {
        navigate('/')        
    }

  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            <h1 onClick={navigateHome} className='brand-logo'>Mi Sitio Web</h1>
        </div>

        <ul className='navbar-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/aboutus'>Contactanos</Link></li>
            <li><Link to='/contactus'>Cerca de</Link></li>

        </ul>
    </nav>
  )
}

export default NavBar