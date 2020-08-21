import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  height: 95vh;
  width: 20vw;
  padding-left: 1%;
  display: flex;
  flex-direction: column;
  margin: 1em 1em;
  align-items: center;
  border: 1px dotted #0d33a6;
  color: #f2dfe2;
`;

export class Carrinho extends React.Component {
  render() {
    return (
      <div>
        <ContainerCarrinho>
          <h2>Carrinho</h2>
          {this.props.funcaoCarrinho}
        </ContainerCarrinho>
      </div>
    );
  }
}
export default Carrinho;
