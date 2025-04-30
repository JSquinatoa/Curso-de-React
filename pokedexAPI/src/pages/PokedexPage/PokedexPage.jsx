import React, { useEffect, useRef, useState } from 'react'
import UseFetch from '../../hooks/UseFetch.js'
import PokeCard from '../../components/PokedexPages/PokeCard.jsx'
import SelectType from '../../components/PokedexPages/SelectType.jsx'
import './styles/PokedexPage.css'
import GeneralHeader from '../../components/Shared/GeneralHeader.jsx'
import NavigationMenu from '../../components/Shared/NavigationMenu.jsx'
import { useSelector } from 'react-redux'

import { Pagination } from '@mui/material'

const PokedexPage = () => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`
    const [pokemons, getPokemons, getTypesPokemons] = UseFetch(url)

    const [typeSelect, setTypeSelect] = useState('allPokemons')
    const [filteredPokemons, setFilteredPokemons] = useState([])
    
    const trainerName = useSelector((states) => states.trainer)
    const inputName = useRef()

    /*Estaod s que se manjen apra la parte de paginación*/ 

    const [page, setPage] = useState(1)
    const [limitPerPage, setLimitPerPage] = useState(10)

    useEffect(() => {
        if (typeSelect === 'allPokemons') {            
            getPokemons();        
        }else{
            getTypesPokemons(typeSelect)
        }
    }, [typeSelect])
    
    useEffect(() => {
        const searchValue = inputName.current.value.trim().toLowerCase()
        const filtered = pokemons?.results.filter(pokeinfo => pokeinfo.name.toLowerCase().includes(searchValue))
        setFilteredPokemons(filtered || [])

    }, [pokemons, inputName])
    
    const handleSearch = (e) => {
        e.preventDefault()

        const searchValue = inputName.current.value.trim().toLowerCase()
        const filtered = pokemons?.results.filter((pokeinfo) => pokeinfo.name.toLowerCase().includes(searchValue) )
        inputName.current.value='';
        setFilteredPokemons(filtered)

    }

    
    /*Paginación*/
    let startIndex = (page-1) * limitPerPage
    let endIndex = startIndex + limitPerPage
    let pokeResults = filteredPokemons.slice(startIndex,endIndex)

    const handleChange = (e, value) => {
        e.preventDefault()
        setPage(value)
    }

    let totalPokemons = filteredPokemons.length

    const inputPerPage = useRef()

    const handlePagination = (e) => {
        e.preventDefault()
        let inputValue  = inputPerPage.current.value.trim()
        if (inputValue.length > 0) {
            setLimitPerPage(inputValue)
            setPage(1)                       
        } 
        
    }

  return (
    <div className='pokedex__page'>

        <GeneralHeader/>
        <NavigationMenu/>        
        <h2 className='greating__welcome'> 
            Welcome <span>{trainerName}</span>, here you can find your favorites pokemons
        </h2>

        <div className='filter__bar'> 
            <form onSubmit={handleSearch}>
                <input type="text" ref={inputName} />
                <button >Buscar</button>

            </form>

            <SelectType
            setTypeSelect = {setTypeSelect}
            />

            <article>
                <span>Paginación</span>
                <select 
                defaultValue={10}
                ref={inputPerPage}
                onChange={handlePagination}
                >
                    <option value={2}>2</option>
                    <option value={4}>4</option>
                    <option value={6}>6</option>
                    <option value={8}>8</option>
                    <option value={10}>10</option>
                    <option value={13}>13</option>
                    <option value={17}>17</option>
                    <option value={20}>20</option>

                </select>
            </article>
        </div>       


        <div className='pokemons__container'>

            {
                pokeResults?.map(pokeInfo => (
                    <PokeCard     
                    key={pokeInfo.url}           
                    url={pokeInfo.url}
                    />
                ))
            }
        </div>

        <section className='container__pagination'>
            <Pagination
            count = {Math.ceil(totalPokemons/limitPerPage)}
            page = {page}
            onChange={handleChange}
            />            
        </section>
        

    </div>
  )
}

export default PokedexPage