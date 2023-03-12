import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import EditPet from "./components/EditPet";
import DisplayPet from "./components/DisplayPet";
import CreatePet from "./components/CreatePet";
import React, {useState} from "react";

function App() {

  return (
    <div className="App">
        
        <h2>Pet Shelter</h2>
        
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/new" element={<CreatePet />} />
          <Route path="/edit/:id" element={<EditPet />} />
          <Route path="/pets/:id" element={<DisplayPet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;