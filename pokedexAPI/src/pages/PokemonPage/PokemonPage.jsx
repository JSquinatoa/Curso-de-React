import React, { useEffect, useState } from 'react'
import GeneralHeader from '../../components/Shared/GeneralHeader'
import NavigationMenu from '../../components/Shared/NavigationMenu'
import { useNavigate, useParams } from 'react-router-dom'
import UseFetch from '../../hooks/UseFetch'
import './styles/PokemonPage.css'
import '../../components/PokedexPages/styles/PokeCard.css'

const PokemonPage = () => {

    let {id} = useParams()
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const [pokemon, getPokemon] = UseFetch(url)
    useEffect(() => {
        getPokemon();
    }, [url])


    const navigate = useNavigate()

    const goToNextPokemon = (e) => {
        e.preventDefault()
        if (id<=1) {
            id=10000            
        }else{
            id--
        }
        setUrl(`https://pokeapi.co/api/v2/pokemon/${id}`)
        navigate(`/pokedex/${id}`)
    }

    const goToPrevPokemon = (e) => {
        e.preventDefault()
        if (id>=10000) {
            id=1            
        }else{
            id++
        }
        setUrl(`https://pokeapi.co/api/v2/pokemon/${id}`)
        navigate(`/pokedex/${id}`)
    }
    
    

  return (
    <div className='pokemon__inof__container'>
        <GeneralHeader/>
        <NavigationMenu/>

        <article className='card__info'>
            <header className={`header__card ${pokemon?.types[0].type.name}`}>

                <button className='preview__next__pokemonpage__info' onClick={goToNextPokemon}>{'<-'}</button>
                    <img className='pokemon__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="Imagen del pokemon" />               
                <button className='preview__next__pokemonpage__info' onClick={goToPrevPokemon}>{'->'}</button>

            </header>

            <div className='body__card__info'>
                <section className='general__card__info'>

                    <h2 className='pokemons__order'>#{pokemon?.id}</h2>
                    <hr className='pokemon__info__hr'/>

                    <h3 className='pokemon__card__name'>{pokemon?.name}</h3>

                    <ul className='pokemon__card__hw'>
                        <li className='pokemon__hw__item'>
                            <span className='pokemon__hw__label'>Peso: </span>
                            {pokemon?.weight}
                        </li>
                        <li className='pokemon__hw__item'>
                            <span className='pokemon__hw__label'>Altura:</span>
                            {pokemon?.height}
                        </li>  
                    </ul>

                    <ul className='container__types__habilities'>
                        <li className='types__habilities__item'>
                            <span className='pokemon__type__label'>Type</span>
                            <ul className='values__types__habilities'>
                                {
                                    pokemon?.types.map((typeInfo, index) =>(
                                        <li className={` type__list__item ${typeInfo.type.name}`} key={index}>{typeInfo.type.name}</li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li className='types__habilities__item'>
                            <span className='pokemon__habilities__label'>Ability</span>
                            <ul className='values__types__habilities'>
                                {
                                    pokemon?.abilities.map((abilityInfo, index) =>(
                                        <li className='type__list__item' key={index}>{abilityInfo.ability.name}</li>
                                    ))
                                }
                            </ul>

                        </li>
                    </ul>

                </section>

                <section className='stats__container'>
                    <hr className='poke_hr'/>
                    <h3 className='stats__title'>Stats</h3>

                    <ul className='container__stats__info'>
                        {
                            pokemon?.stats.map((statInfo, index) => (
                                <li className='stats__info' key={index}>
                                    <div className='header__stat__info'>
                                        <span className='stat__info__label'>{statInfo.stat.name}</span>
                                        <span>{statInfo.base_stat}/255</span>
                                    </div>
                                    <progress className={`progress__bar__status ${pokemon?.types[0].type.name}`} max={255} value={statInfo.base_stat}></progress>
                                </li>
                            ))
                        }
                    </ul>
                </section>

            </div>
            <article className='container__movements'>
                <hr className='movements__hr'/>
                <h3 className='movements__titlle'>Movements</h3>

                <ul className='movements__name__container'>
                    {
                        pokemon?.moves.map((moveInfo, index) =>(
                            <li key={index} className='move__name'>{moveInfo.move.name}</li>
                        ))
                    }                    
                </ul>

            </article>            

        </article>
    </div>
  )
}

export default PokemonPage