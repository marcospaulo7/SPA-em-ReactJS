import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produto from "./Components/Produto";
import Contato from "./Components/Contato";
import Header from "./Components/Header";
import "./App.css";
import ProdutoL from "./Components/ProdutoL";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produto />} />
            <Route path="produto/:id" element={<ProdutoL />} />

            <Route path="/Contato" element={<Contato />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
