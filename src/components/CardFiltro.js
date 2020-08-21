import React from 'react'
import styled from 'styled-components'

const ContainerFiltro = styled.div `
    display: flex;
    flex-direction: column;
    padding: 1%;
    width: 25vw;
    height: 200%;
    margin: 1em 1em;
    align-items: center;
    border: 1px dotted #0D33A6;
    color: #F2DFE2;
`
export class CardFiltro extends React.Component {  
    
    render(){          

        return (
            <ContainerFiltro>     
                                                      
                <h2>Filtros:</h2>
                <label for="valorMinimo">Valor mínimo</label>
                <input 
                    type="number" 
                    placeholder="Valor mínimo" 
                    name="buscarProduto"                   
                    onChange={this.props.inputMinimo}
                />

                <label for="valorMaximo">Valor máximo</label>
                <input 
                    type="number" 
                    placeholder="Valor máximo" 
                    name="buscarProduto"
                    onChange={this.props.inputMaximo}
                />

                <label for="buscarProduto">Buscar produto:</label>
                <input 
                    type="text" 
                    placeholder="Nome do produto" 
                    name="buscarProduto"
                    onChange={this.props.inputBusca}
                />
            </ContainerFiltro>
        )
    }
}

export default CardFiltro;
