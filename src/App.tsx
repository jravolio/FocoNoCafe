import React from 'react';
import { GlobalStyle } from './styles/App';
import { Home } from './components/Home';
import { SpecialCoffee } from './components/SpecialCoffee';
import { Routes, Route } from "react-router-dom";
import { Acessories } from './components/Acessories'
import { useEffect } from 'react';


export function App() {
  const MINUTE_MS = 30000;

  useEffect(() => {
    document.body.classList.add('on')
    const interval = setInterval(() => {
      console.log('rodou')
      document.body.classList.toggle('on')
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])
  
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
