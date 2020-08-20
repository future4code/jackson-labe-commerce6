import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 95vh;
  margin: 1em 1em;
  align-items: center;
  border: 1px dotted #0D33A6;
  color: #F2DFE2;
`;

const InputFiltro = styled.input`
  width: 40%;
  margin: 20px 0;
`;

export class CardFiltro extends React.Component {
  render() {
    return (
      <div>
        <ContainerFiltro>
          <h2>Filtros:</h2>
          <label for="valorMinimo">Valor mínimo</label>
          <InputFiltro
            type="number"
            placeholder="Valor mínimo"
            name="buscarProduto"
          />

          <label for="valorMaximo">Valor máximo</label>
          <InputFiltro
            type="number"
            placeholder="Valor máximo"
            name="buscarProduto"
          />

          <label for="buscarProduto">Buscar produto:</label>
          <InputFiltro
            type="text"
            placeholder="nome do produto"
            name="buscarProduto"
          />
        </ContainerFiltro>
      </div>
    );
  }
}

export default CardFiltro;
