import React, { useState } from 'react'
import axios from 'axios'

const UseFetch = (url) => {

    const [response, setResponse] = useState()

    const getApi=()=>{
        axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }

    const getTypesPokemons = (urlType) =>{
        axios.get(urlType)
        .then(res => {
            const obj = {
                results: res.data.pokemon.map(pokeinfo => (pokeinfo.pokemon))
            }
            setResponse(obj)
        })
        .catch(err=> console.log(err))
    }

    return [response, getApi, getTypesPokemons]

}

export default UseFetch