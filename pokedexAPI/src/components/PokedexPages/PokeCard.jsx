import React, { useEffect } from 'react'
import UseFetch from '../../hooks/UseFetch'
import './styles/PokeCard.css'
import { useNavigate } from 'react-router-dom'


const PokeCard = ({url}) => {
    
    const [pokemon, getPokemon] = UseFetch(url)


    useEffect(() => {
        getPokemon();

    }, [])    

    const navigate = useNavigate()

    const navegateToPokemon = () =>{
        navigate(`${pokemon.id}`)
    }


  return (
    <div className={`pokecard__border ${pokemon?.types[0].type.name}`} onClick={navegateToPokemon}>

        <article className='pokecard'>
            <header className='pokecard__header'>
                <img className='pokecard__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="Pokeon Image" />
            </header>

            <section className='pokecard__body'>

                <h3 className='pokecard__name'>{pokemon?.name}</h3>

                <ul className='pokecard__types'>
                    {
                        pokemon?.types.map(typeInfo => (
                            <li className='pokecard__types__item' key={typeInfo.type.url}>{typeInfo?.type.name}</li>
                        ))
                    }
                </ul>

                <hr className='pokecard__hr'/>

                <ul className='pokecard_stats'>
                    {
                        pokemon?.stats.map((statInfo, index) => (
                            <li className='pokecard__stats__item' key={index}>
                                <span className='pokecard__stats__label'>{statInfo.stat.name}</span>
                                <span className='pokecard__stats__value'>{statInfo.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>

            </section>
        </article>
        
    </div>
  )
}

export default PokeCard