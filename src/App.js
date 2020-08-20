import React from "react";
import "./App.css";
import styled from "styled-components";
import Carrinho from "./components/Carrinho.js";
import CardFiltro from "./components/CardFiltro";
import TabelaProdutos from "./components/TabelaProdutos";
import ContadorFiltro from "./components/ContadorFiltro";

const DivPainel = styled.div`
  display: flex;
  max-width: 80%;
  flex-wrap: wrap;
`;

const liTeste = styled.li`
  text-align: left;
`;

class App extends React.Component {
  state = {
    arrayProdutos: [
      {
        nomeProduto: "Teste1",
        valorProduto: 10,
        id: 1,
      },
      {
        nomeProduto: "Teste2",
        valorProduto: 20,
        id: 2,
      },
      {
        nomeProduto: "Teste1",
        valorProduto: 30,
        id: 3,
      },
      {
        nomeProduto: "Teste1",
        valorProduto: 40,
        id: 4,
      },
      {
        nomeProduto: "Teste1",
        valorProduto: 20,
        id: 5,
      },
    ],
    filtroCrescente: "",
    carrinho: [],
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

  onClickCarrinho = (id) => {
    const novoCarrinho = this.state.carrinho;

    const newProductArray = this.state.arrayProdutos.filter((produto) => {
      if (id === produto.id) {
        return produto;
      }
    });

    novoCarrinho.push(newProductArray[0]);

    this.setState({ carrinho: novoCarrinho });

    console.log(novoCarrinho);
    console.log(newProductArray);
    console.log(this.state.carrinho);
  };
  render() {
    const quantidadeProdutos = this.state.arrayProdutos.length;

    const produtosRender = this.state.arrayProdutos.map((produto) => {
      return (
        <TabelaProdutos
          nomeDoProduto={produto.nomeProduto}
          valorProduto={produto.valorProduto}
          funcaoClicar={() => this.onClickCarrinho(produto.id)}
        />
      );
    });

    const carrinhoRender = () => {
      const itensCarrinho = this.state.carrinho.map((produto) => {
        return (
          <div>
            <p>Produto: {produto.nomeProduto}</p>
            <p>Valor: R${produto.valorProduto}</p>
          </div>
        );
      });
      console.log(itensCarrinho);
      return itensCarrinho;
    };

    return (
      <div className="App">
        <CardFiltro />
        <ContadorFiltro
          contadorProdutos={quantidadeProdutos}
          filtroOrdem={this.onChangeFiltroCrescente}
        />
        <DivPainel>{produtosRender}</DivPainel>

        <Carrinho funcaoCarrinho={carrinhoRender()}></Carrinho>
      </div>
    );
  }
}

export default App;
