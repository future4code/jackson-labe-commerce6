import React from "react";
import styled from "styled-components";

const DivHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 2em;
  margin-top: 1em;
  padding: 1em 3em;
  color: white;
  font-size: 14px;
  
`;

class ContadorFiltro extends React.Component {
  render() {
    return (
      <DivHeader>
        <p>Quantidade de Produtos: {this.props.contadorProdutos} </p>
        <select
          value={this.props.filtroCrescente}
          onChange={this.props.filtroOrdem}
        >
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
        </select>
      </DivHeader>
    );
  }
}

export default ContadorFiltro;
