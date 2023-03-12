import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Page from './components/Page';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>

        <Route element={<Home />} path="/home"/>
        <Route element={<Page />} path="/:word" />
        <Route element={<Page />} path="/:word/:color/:bckColor" />
      
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
