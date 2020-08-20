import React from "react";
import "./App.css";
import styled from "styled-components";
import Carrinho from "./components/Carrinho.js";
import CardFiltro from "./components/CardFiltro";
import TabelaProdutos from "./components/TabelaProdutos";
import ContadorFiltro from "./components/ContadorFiltro";

const SectionPagina = styled.section`
  background-color: #031226;
  width: 100vw;
  height: 100%;
  color: #F2DFE2;
  display: flex;
`

const DivPainel = styled.div`
  display: flex;
  max-width: 80%;
  flex-wrap: wrap;
`;

class App extends React.Component {
  state = {
    arrayProdutos: [
      {
        nomeProduto: "Traje  - Plutão não é mais planeta",
        imagemProduto: "https://www.bellacollezione.com/image/cache/catalog/products/masculino/fantasia-astronauta-do-espaco-adulto-mascote-branco-800x800.jpg",
        valorProduto: 100,
        id: Date.now(),
      },
      {
        nomeProduto: "Teste2",
        imagemProduto: "https://www.bellacollezione.com/image/cache/catalog/products/masculino/fantasia-adulto-macacao-de-astronauta-autentico-800x800.jpg",
        valorProduto: 200,
        id: Date.now(),
      },
      {
        nomeProduto: "Teste3",
        imagemProduto: "https://www.dhresource.com/0x0/f2/albu/g9/M01/4E/D1/rBVaVVylqxqAPAhNAARi2g9O04s933.jpg",
        valorProduto: 400,
        id: Date.now(),
      },
      {
        nomeProduto: "Teste4",
        imagemProduto: "https://sc01.alicdn.com/kf/HTB1PsHLbjfguuRjy1zeq6z0KFXaI/231834524/HTB1PsHLbjfguuRjy1zeq6z0KFXaI.jpg_.webp",
        valorProduto: 350,
        id: Date.now(),
      },
      {
        nomeProduto: "Teste5",
        imagemProduto: "https://cdn.awsli.com.br/800x800/488/488909/produto/37825150/5d2946d92d.jpg",
        valorProduto: 220,
        id: Date.now(),
      },
      {
        nomeProduto: "Teste6",
        imagemProduto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQshlvVSZTG7fBTfDTMst0VgLn7MtzZ3O5oLg&usqp=CAU",
        valorProduto: 150,
        id: Date.now(),
      },
      {
        nomeProduto: "Teste7",
        imagemProduto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc009wYjCJNW8er_XXgYK_hhFqEe_lZ-SRJQ&usqp=CAU",
        valorProduto: 250,
        id: Date.now(),
      },
      {
        nomeProduto: "Teste8",
        imagemProduto: "https://www.bellacollezione.com/image/cache/catalog/products/infantil/fantasia-infantil-astronauta-classica-800x800.jpg",
        valorProduto: 380,
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
          imagemDoProduto={produto.imagemProduto}
          nomeDoProduto={produto.nomeProduto}
          valorProduto={produto.valorProduto}
        />
      );
    });

    return (
      <div className="App">
        <SectionPagina>
          <CardFiltro />
          <ContadorFiltro
            contadorProdutos={quantidadeProdutos}
            filtroOrdem={this.onChangeFiltroCrescente}
          />
          <DivPainel>{produtosRender}</DivPainel>
  
        </SectionPagina>
  
      </div>
    );
  }
}

export default App;
