import React,{useState, useEffect} from 'react';
import "./styles/index.css";
import PokemonList from "./components/PokemonList";
import Loading from "./components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true)
  const [pokemons, setpokemons] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  const getAllPokemons = async () =>{
    const response = await fetch(currentUrl)
    setLoading(false);
    const data = await response.json()
    setCurrentUrl(data.next)
    console.log(data.results);

    function createPokemonObject(result){
        result.forEach( async (pokemon) =>{
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data = await res.json();
          setpokemons(currentList => [...currentList, data])
        })
    }
    createPokemonObject(data.results)
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
        {pokemons.map((pokemon, index)=>{
          return <PokemonList 
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
          key={pokemon.id}/>
        })}
        </div> <br/>
      <button className="load-more-btn" onClick={()=> getAllPokemons()}>Load More</button>
      </div>
      
    </>
  )
}

export default App
