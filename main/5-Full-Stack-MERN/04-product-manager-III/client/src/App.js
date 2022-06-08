import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Product from './views/Product';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="" />
        <Route element={<Product />} path="/:id" />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
