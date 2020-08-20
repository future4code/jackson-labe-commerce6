import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 95vh;
    margin: 1em 1em;
    align-items: center;
    border: 1px dotted #0D33A6;
    color: #F2DFE2;
`

export class Carrinho extends React.Component {
  
    render() {

        return (
            <div>
                <ContainerCarrinho>
                    <h2>Carrinho:</h2>
                    <p>Total: R$</p>

                </ContainerCarrinho>


            </div>
        )
  }
}
export default Carrinho;