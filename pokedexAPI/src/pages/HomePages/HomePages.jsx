import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerG } from '../../store/states/trainer.state'


const HomePages = () => {

    const inputTrainer = useRef('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [error, setError] = useState(false)
    const [msgError, setmsgError] = useState('second')

    const handleSubmit = (e) => {
        e.preventDefault()  
             
        if (inputTrainer.current.value.trim().length < 3) {
            setError(true)
            setmsgError('Tienes que poner un nombre mayor de 3 caracteres')
            console.log("No pudes acceder")            
        }else{

            dispatch(setTrainerG(inputTrainer.current.value.trim()))
            navigate('/pokedex')
        }
    }

  return (
    <div className='login__page'>

        <article className='window__login'>
            <h2 className='greating__trainer'>Bienvenido entrandor Pokemon</h2>
            <p className='welcome__mesagge'>Para inciar esta aplcaicón dame tu nombre, debe almenos tener 3 caracteres</p>
            <form className='login__form' onSubmit={handleSubmit}>
                {
                    error?(
                        <span>{msgError}</span>
                    ):(
                        ''
                    )
                }

                <input className='input__login' type="text" ref={inputTrainer}/>
                <button className='login__btn'>Atrapalos a todos</button>
            </form>
        </article>
        
    </div>
  )
}

export default HomePages