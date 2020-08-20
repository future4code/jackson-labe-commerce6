import React from "react";
import "./App.css";
import styled from "styled-components";
import Carrinho from "./components/Carrinho.js";
import { CardFiltro } from "./components/Filtro";
import TabelaProdutos from "./components/TabelaProdutos";
import Header from "./components/Header";
import Footer from "./components/Footer"

const DivPainel = styled.div`
  display: flex;
  max-width: 80%;
  flex-wrap: wrap;
`;

const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2em;
  margin-top: 1em;
  padding: 1em 3em;
`;

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Header/>

      </div>
    );
  }
  state = {
    arrayProdutos: [
      {
        nomeProduto: "Teste1",
        valorProduto: 10,
      },
      {
        nomeProduto: "Teste2",
        valorProduto: 20,
      },
      {
        nomeProduto: "Teste1",
        valorProduto: 30,
      },
      {
        nomeProduto: "Teste1",
        valorProduto: 40,
      },
      {
        nomeProduto: "Teste1",
        valorProduto: 40,
      },
    ],
  };

  render() {
    const quantidadeProdutos = this.state.arrayProdutos.length;

    const produtosRender = this.state.arrayProdutos.map((produto) => {
      return (
        <TabelaProdutos
          nomeDoProduto={produto.nomeProduto}
          valorProduto={produto.valorProduto}
        />
      );
    });

    return (
      <div className="App">
        <CardFiltro />
        <DivHeader>
          <p>Quantidade de Produtos: {quantidadeProdutos} </p>
          <select>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </DivHeader>
        <DivPainel>{produtosRender}</DivPainel>
      </div>
      
    );
    
    return(
      <div className="App">
        <Footer/>

      </div>
    );
  }

  
    
  
}


export default App;
