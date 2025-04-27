import React from 'react'
import { useNavigate ,useParams } from 'react-router-dom'

const ProductDetail = () => {
  
  const {productId} = useParams();

  const navigate = useNavigate();

  function gotohome() {
    navigate('/productos/lista')    
  }

  return (
    <div>
      <h2>Detalles del Producto id: {productId}</h2>
      <h4>Nombre: </h4>
      <h4>Cantidad: </h4>
      <h4>Precio: </h4>      
      <button onClick={gotohome}>Regresar</button>
    </div>
  )
}

export default ProductDetail