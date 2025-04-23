import React from 'react'

const Score = ({score, intentos}) => {
  return (
    <div className='text-2xl font-bold mb-8'>
        Puntaje: {score} 
        Intentos: {intentos}
    </div>
  )
}

export default Score