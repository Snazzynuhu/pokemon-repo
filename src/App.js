import React,{useState, useEffect} from 'react';
import "./styles/index.css";
import PokemonList from "./components/PokemonList";
import Loading from "./components/Loading";
import {  Modal } from './components/Modal';
const App = () => {
  const [loading, setLoading] = useState(true)
  const [pokemons, setpokemons] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  const getAllPokemons = async () =>{
    try {
      const response = await fetch(currentUrl)
    setLoading(false);
    const data = await response.json()
    setCurrentUrl(data.next)

    function createPokemonObject(result){
        result.forEach( async (pokemon) =>{
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data = await res.json();
          setpokemons(currentList => [...currentList, data])
        })
    }
    createPokemonObject(data.results);
    
      
    } catch (error) {
      console.error("Couldn't get item,please try again")
      setLoading(false)
      throw new Error("Poor network connection, please try again...")
    }
    
  }
  useEffect(() => {
    setLoading(true)
    getAllPokemons()
  }, [])


  if(loading)return <Loading />
  return (
    <>
   
      <h1 className="title">POKEMON EVOLUTION</h1>
      <div className ="pokemon-container">
        <div className= "list-container">
        {pokemons.map((pokemon)=>{
          return <PokemonList key={pokemon.id} 
          id={pokemon.id}
          name={pokemon.name}
          weight={pokemon.weight}
          // stats={pokemon.stats[0].stat.name}
          image={pokemon.sprites.other.dream_world.front_default}
          homeImg={pokemon.sprites.other.home.front_default}
          type={pokemon.types[0].type.name}
          />
        })}
        </div> <br/>
      <button className="load-more-btn" onClick={()=> getAllPokemons()}>Load More</button>
      </div>
      
    </>
  )
}

export default App
