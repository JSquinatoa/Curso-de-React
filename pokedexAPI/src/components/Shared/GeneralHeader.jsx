import React from 'react'
import './styles/GeneralHeader.css'

const GeneralHeader = () => {
  return (
    <header className='rectangle__red list header__pokemon'>
        <div className='rectangle__black list'></div>
        <div className='circle list'> </div>
        <img className='pokedex__img' src="/logo.png" alt="" />
    </header>
  )
}

export default GeneralHeader