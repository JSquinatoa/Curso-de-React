import React, { useEffect } from 'react'
import UseFetch from '../../hooks/UseFetch'
import PokemonImg from './PokemonImg'
import './styles/AreaCard.css'

const AreaCard = ({ url }) => {

    const [infoArea, getInfoArea] = UseFetch(url)

    useEffect(() => {
        getInfoArea();
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr className='row__titles'>
                        <th className='area__id__colum'>Area id: {infoArea?.id}</th>
                        <th className='pokemons__colum'>Pokemos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{infoArea?.name}</td>
                        <td>
                            <div className='container__img__area'>
                                {
                                    infoArea?.pokemon_encounters.map((poke, index) => (
                                        <PokemonImg
                                            key={index}
                                            url={poke.pokemon.url}
                                        />
                                    ))
                                }
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AreaCard
