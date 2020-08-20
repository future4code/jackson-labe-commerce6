import React from "react";
import styled from "styled-components";

const DivTabela = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
  margin: 20px 20px;
`;

const ProductsButton = styled.button`
  margin: 5px 5px;
  background-color: black;
  border: none;
  color: white;
  height: 2em;
  &:hover {
    background-color: orange;
  }
`;

class TabelaProdutos extends React.Component {
  render() {
    return (
      <div>
        <DivTabela>
          <img src="https://picsum.photos/200/200?a=1" />
          <h3>{this.props.nomeDoProduto}</h3>
          <p>{this.props.valorProduto}</p>
          <ProductsButton onClick={this.props.funcaoClicar}>
            Adicionar ao Carrinho
          </ProductsButton>
        </DivTabela>
      </div>
    );
  }
}

export default TabelaProdutos;
