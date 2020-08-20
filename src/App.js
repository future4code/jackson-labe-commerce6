import React from "react";
import "./App.css";
import styled from "styled-components";
import Carrinho from "./components/Carrinho.js";
import CardFiltro from "./components/CardFiltro";
import TabelaProdutos from "./components/TabelaProdutos";
import Header from "./components/Header";
import Footer from "./components/Footer"
import ContadorFiltro from "./components/ContadorFiltro";

const DivPainel = styled.div`
  display: flex;
  max-width: 80%;
  flex-wrap: wrap;
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
        id: Date.now(),
      },
      {
        nomeProduto: "Teste2",
        valorProduto: 20,
        id: Date.now(),
      },
      {
        nomeProduto: "Teste1",
        valorProduto: 30,
        id: Date.now(),
      },
      {
        nomeProduto: "Teste1",
        valorProduto: 40,
        id: Date.now(),
      },
      {
        nomeProduto: "Teste1",
        valorProduto: 20,
        id: Date.now(),
      },
    ],
    filtroCrescente: "",
  };

  onChangeFiltroCrescente = (event) => {
    this.setState({
      filtroCrescente: event.target.value,
    });

    switch (this.state.filtroCrescente) {
      case "crescente":
        return this.setState({
          arrayProdutos: this.state.arrayProdutos.sort(function (a, b) {
            return b.valorProduto - a.valorProduto;
          }),
        });

      case "decrescente":
        return this.setState({
          arrayProdutos: this.state.arrayProdutos.sort(function (a, b) {
            return a.valorProduto - b.valorProduto;
          }),
        });
    }
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
    
    const produtosFiltrados = (parametro) => {
        console.log(parametro[0])
    }    

    return (
      <div className="App">
        <CardFiltro filtroProdutos={produtosRender} osProdutos={produtosFiltrados}/>               
        <DivHeader>
          <p>Quantidade de Produtos: {quantidadeProdutos} </p>
          <select>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </DivHeader>
        <DivPainel>{produtosRender}</DivPainel>
        {produtosFiltrados} 
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
