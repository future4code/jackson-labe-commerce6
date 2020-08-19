import React from 'react'
import styled from 'styled-components'

const ContainerFiltro = styled.div `
    display: flex;
    flex-direction: column;
    width: 15%;
    padding: 1%;
    border: 1px solid black;
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
                />

                <label for="valorMaximo">Valor máximo</label>
                <input 
                    type="number" 
                    placeholder="Valor máximo" 
                    name="buscarProduto"
                />

                <label for="buscarProduto">Buscar produto:</label>
                <input 
                    type="text" 
                    placeholder="Nome do produto" 
                    name="buscarProduto" 
                />
            </ContainerFiltro>
        )
    }
}

export default CardFiltro;