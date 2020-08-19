import React from "react";
import styled from "styled-components";

import "./App.css";
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
    contador: 0,
    arrayProdutos: [
      {
        nomeProduto: "Teste1",
        valorProduto: "10",
      },
    ],
  };

  render() {
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
        <DivHeader>
          <p>Quantidade de Produtos: </p>
          <select>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </DivHeader>
        <DivPainel>{produtosRender}</DivPainel>
      </div>
    );
  }
}

export default App;
