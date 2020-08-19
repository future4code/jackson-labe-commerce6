import React from "react";
import "./App.css";
import styled from 'styled-components'
import Carrinho from './components/Carrinho.js'
import { CardFiltro } from './Components/Filtro'

function App() {
  return (
    <div>     
      <CardFiltro />
      <Carrinho />

    </div>
  );
}

export default App;
