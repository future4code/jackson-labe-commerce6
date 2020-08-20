
import React from "react";
import styled from "styled-components";

const DivTabela = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px;
  border: 1px dotted #0D33A6;
  justify-content: center;
  color: #F2DFE2;
  background-color: transparent;
`;

const ImgProduto = styled.img`
  width: 200px;
  height: 200px;
`;

const ProductsButton = styled.button`
  margin: 5px 5px;
  background-color: #0D33A6;
  border: none;
  color: #F2DFE2;
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
