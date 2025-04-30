import React, { useEffect, useRef } from 'react'
import UseFetch from '../../hooks/UseFetch'

const SelectType = ({setTypeSelect}) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const type = useRef()
    const [types, getTypes] = UseFetch(url)

    useEffect(() => {
        getTypes();
    }, [])

    const handleChange = () =>{
        setTypeSelect(type.current.value.trim())
    }
    

  return (
    <div className='filter__type__component'>
        <span className='filter__type__component_label'>Filtro por tipo</span>
        <select defaultValue={"allPokemons"} className='type__select__component' ref={type} onChange={handleChange}>
            <option className='type__select__options' value="allPokemons">All Pokemons</option>
            {
                types?.results.map(type => (
                    <option className='type__select__options' key={type.url} value={type.url}>
                        {type.name}
                    </option>
                ))
            }
        </select>
        
    </div>
  )
}

export default SelectType