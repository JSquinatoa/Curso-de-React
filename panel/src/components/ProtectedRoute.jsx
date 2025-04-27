import React from 'react'
import { useState } from 'react'

export const ProtectedRoute = ({children}) => {
    const [key, setKey] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleKeyChanged = (e) =>{      
        e.preventDefault();  
        setKey(e.target.value)
    }

    const handleKeySubmit = (e) =>{
        e.preventDefault();
        if (key == '123') {
            setIsAuthenticated(true)                        
        }
    }

    if (isAuthenticated) {
        return children            
    }
  return (
    <div>
        <h2>Acceso Restringido</h2>
        <form onSubmit={handleKeySubmit}>
            <input type="password" value={key} onChange={handleKeyChanged} placeholder='Ingrese la Clave'/>
            <button type='submit'>Ingresar</button>
        </form>
    </div>
  )
}
