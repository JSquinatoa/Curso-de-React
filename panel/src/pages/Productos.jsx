import React from 'react'
import { Outlet } from 'react-router-dom'

const Productos = () => {
  return (
    <div>
      <h2>Lista de Prodcutos</h2>
      <Outlet/>    
    </div>
  )
}

export default Productos