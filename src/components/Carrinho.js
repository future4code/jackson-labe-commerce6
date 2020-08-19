import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
    border: solid 1px black;
    margin: 1%;
    height: 95vh;
    width: 20vw;
    text-align: left;
    padding-left: 1%;
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