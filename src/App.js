import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [Pokemon, setPokemon ] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0.')
    .then(response =>{setPokemon(response.data.results)})
    // .then(response => setPokemon(response.results))
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
