import React from "react";
import "./App.css";
import styled from "styled-components";
import Carrinho from "./components/Carrinho.js";
import { CardFiltro } from "./components/Filtro";
import TabelaProdutos from "./components/TabelaProdutos";

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
        valorProduto: 20,
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

    return (
      <div className="App">
        <CardFiltro />
        <DivHeader>
          <p>Quantidade de Produtos: {quantidadeProdutos} </p>
          <select
            value={this.state.filtroCrescente}
            onChange={this.onChangeFiltroCrescente}
          >
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </select>
        </DivHeader>
        <DivPainel>{produtosRender}</DivPainel>
      </div>
    );
  }
}

export default App;
