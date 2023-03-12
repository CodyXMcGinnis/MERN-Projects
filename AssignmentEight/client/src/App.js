import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response) => {
        console.log(response.data.results);
        setPokemon(response.data.results);
      })
      .catch((e) => console.log(e));
  }, []);  

  return (
    <div className="App" style={{ width: "100px", margin: "auto" }}>
      <ul>
        {
          pokemon.map((pokeObj, index)=>{
            return (<li key={index}>{pokeObj.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;