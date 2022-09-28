import React from 'react';
import { GlobalStyle } from './styles/App';
import { Home } from './components/Home';
import { SpecialCoffee } from './components/SpecialCoffee';
import { Routes, Route } from "react-router-dom";
import { Acessories } from './components/Acessories'

export function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cafe" element={<SpecialCoffee/>} />
        <Route path="/acessorios" element={<Acessories/>} />
      </Routes>
    </>
  );
}
