import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [pokemons, setPokemons] = useState(0)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response => response.json())
      .then(response => setPokemons(response.results))
  }, [])
  
  
  return (
    <div className="App">
      <ul>
        { pokemons!==0 ?
          pokemons.map((pokemon, index) => {
            return(<li key={index}>{ pokemon.name }</li>)
          }) : 'Pokemons loading...'
        }
      </ul>
    </div>
  );
}

export default App;
