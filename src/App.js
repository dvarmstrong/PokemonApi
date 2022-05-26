import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [Pokemon, setPokemon ] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0.')
    .then(response => response.json())
    .then(response => setPokemon(response.results))
  }, []);

  return (
    <div className="App">
      <h1>View all the Pokemon</h1>
      {Pokemon.length > 0 && Pokemon.map((pokemon, index)=>{
        return (<h2 key={index}>{pokemon.name}</h2>)
      })}
    </div>
  );
}

export default App;
