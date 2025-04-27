import React from 'react'
import './styles/sidebar.css'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <h2>Ecomerce Panel</h2>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/productos/lista'>Productos</Link></li>
        <li><Link to='/pedidos'>Ordenes</Link></li>
        <li><Link to='/clientes'>Clientes</Link></li>
        <li><Link to='/configuraciones'>Configuraciones</Link></li>
      </ul>
    </div>
  )
}

export default SideBar