import React from "react"
import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"Cody"}
        lastName={"McGinnis"}
        age={35}
        hair={"dark brown"}
      />
      <PersonCard
        firstName={"Kelsey"}
        lastName={"Shaak"}
        age={28}
        hair={"black"}
      />
      <PersonCard 
        firstName={"Raven"}
        lastName={"Shaak"}
        age={7}
        hair={"white"}
      />
      <PersonCard
        firstName={"Alki"}
        lastName={"Silver"}
        age={39}
        hair={"Silver"}
      />
    </div>
  );
}

export default App;
