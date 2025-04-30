import React, { useEffect } from "react";
import UseFetch from "../../hooks/UseFetch";
import './styles/PokemonImg.css'
const PokemonImg = ({ url }) => {

    const [pokeImg, getPokeImg] = UseFetch(url)

    useEffect(() => {
        getPokeImg();
    }, [])
    

    return (
      <div className="pokemon__img__wrapper">
        {
          pokeImg?.sprites
            ? <img className="pokemon__img" src={pokeImg.sprites.other['official-artwork'].front_shiny} alt="" />
            : <div className="img__placeholder" />
        }
      </div>
    );
    
};

export default PokemonImg;
