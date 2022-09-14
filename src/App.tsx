import React from 'react';
import { GlobalStyle } from './styles/App';
import { Header } from './components/Header';


export function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <Header/>
      </div>
    </>
  );
}
