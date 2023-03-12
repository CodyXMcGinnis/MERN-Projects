import React from "react"
import './App.css';
import PersonCard from "./components/PersonCard";
import {useState} from 'react'

const personData = [
      {
        firstName:"Cody",
        lastName:"McGinnis",
        age:35,
        hair:"dark brown"
      },
      {
        firstName:"Kelsey",
        lastName:"Shaak",
        age:29,
        hair:"black"
      },
      {
        firstName:"Raven",
        lastName:"Shaak",
        age:7,
        hair:"white"
      },
      {
        firstName:"Alki",
        lastName:"Silver",
        age:26,
        hair:"silver"
      }
]
function App() {
  
  const [state, setState] = useState(personData)

  return (
    
    <div className="App">
      {
      state.map((item,index)=>(<PersonCard key = {index} item = {item}/>))
      }
    </div>

  );
}

export default App;
