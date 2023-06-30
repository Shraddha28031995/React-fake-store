// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./redux/components/Header";
import ProductDetail from "./redux/components/ProductDetail";
import ProductListing from "./redux/components/ProductListing";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetail />} />           
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
