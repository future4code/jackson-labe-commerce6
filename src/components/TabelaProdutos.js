
import React from "react";
import styled from "styled-components";

const DivTabela = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px;
  border: 1px dotted #49A695;
  justify-content: center;
  color: #F2DFE2;
  background-color: transparent;
  font-family: 'Space Mono', monospace;
`;

const ImgProduto = styled.img`
  width: 200px;
  height: 200px;
`;

const ProductsButton = styled.button`
  margin: 5px 5px;
  background-color: #49A695;
  border: none;
  color: #031226;
  height: 2em;
  &:hover {
    background-color: #D94141;
    color: #031226;
  }
`;

class TabelaProdutos extends React.Component {
  render() {
    return (
      <div>
        <DivTabela>
          <ImgProduto src={this.props.imagemDoProduto} />
          <h3>{this.props.nomeDoProduto}</h3>
          <p>R$ {this.props.valorProduto}</p>
          <ProductsButton onClick={this.props.funcaoClicar}>
            Adicionar ao Carrinho
          </ProductsButton>
        </DivTabela>
      </div>
    );
  }
}

export default TabelaProdutos;
