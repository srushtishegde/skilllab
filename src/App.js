import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import MyRecipe from './Component/Myrecipe';
import About from './Component/AboutUs';
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/myrecipe" element={MyRecipe} />
          <Route path="/aboutus" element={About} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
