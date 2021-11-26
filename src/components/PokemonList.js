import React from 'react'

const PokemonList = ({id, name, image, type}) => {
    return (
        <div className="pokemon-box">
            <h2 className="pokemon-name">{name}</h2>
            <img src={image} alt={name} />
            <h4>Nature: {type}</h4>
        </div>
    )
}

export default PokemonList
