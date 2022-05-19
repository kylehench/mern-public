import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [pokemons, setPokemons] = useState(null)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response => {setPokemons(response.data.results)})
  }, [])
  
  return (
    <div className="App">
      <ul>
        { pokemons!==null ?
          pokemons.map((pokemon, index) => {
            return(<li key={index}>{ pokemon.name }</li>)
          }) : 'Pokemons loading...'
        }
      </ul>
    </div>
  );
}

export default App;
