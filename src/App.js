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
  render() {
    return (
      <div className="App">
        <DivHeader>
          <p>Quantidade de Produtos: </p>
          <select>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </DivHeader>
        <DivPainel>
          <TabelaProdutos nomeDoProduto={"Teste 1"} valorProduto={"R$100"} />
          <TabelaProdutos nomeDoProduto={"Teste 2"} valorProduto={"R$200"} />
          <TabelaProdutos nomeDoProduto={"Teste 3"} valorProduto={"R$300"} />
          <TabelaProdutos nomeDoProduto={"Teste 4"} valorProduto={"R$400"} />
          <TabelaProdutos nomeDoProduto={"Teste 4"} valorProduto={"R$400"} />
          <TabelaProdutos nomeDoProduto={"Teste 4"} valorProduto={"R$400"} />
          <TabelaProdutos nomeDoProduto={"Teste 4"} valorProduto={"R$400"} />
        </DivPainel>
      </div>
    );
  }
}

export default App;
