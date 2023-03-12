import "./App.css";
import Main from "./view/Main";
import SingleProduct from "./components/SingleProduct";
import UpdateProduct from "./components/UpdateProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/product/:id" element={<SingleProduct />}  />
                    <Route path="/product/edit/:id" element={<UpdateProduct />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;