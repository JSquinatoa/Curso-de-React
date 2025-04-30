import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/NavigationMenu.css'

const NavigationMenu = () => {

    const navigate = useNavigate()

    const goToPokedex = () => {
        navigate('/pokedex')
    }

    const goToLocations = () => {
        navigate('/locations')
    }
    

  return (
    <div className='nav__bar'>   
        <ul className='nav__menu'>
            <li className='nav__menu__item' onClick={goToPokedex}>Pokemosn</li>
            <li className='nav__menu__item' onClick={goToLocations}>Locations</li>
        </ul>
    </div>
  )
}

export default NavigationMenu