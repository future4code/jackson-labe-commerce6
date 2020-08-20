import React from 'react'
import styled from 'styled-components'
import TabelaProdutos from './TabelaProdutos'

const ContainerFiltro = styled.div `
    display: flex;
    flex-direction: column;
    width: 15%;
    padding: 1%;
    border: 1px solid black;
`

export class CardFiltro extends React.Component {  
    state = {
        valorInputMinimo: undefined,
        valorInputMaximo: undefined,
        valorInputBusca: undefined,             
    }

    onChangeInputMinimo = (e) => {
       this.setState({valorInputMinimo: e.target.value})      
    }
    
    onChangInputMaximo = (e) => {
        this.setState({valorInputMaximo: e.target.value})
    }

    onChangeInputBusca = (e) => {
        this.setState({valorInputBusca: e.target.value})
    }
    
    render(){           

        const filtrarValor = this.props.filtroProdutos.map((produto) => {
           if(produto.props.valorProduto >= this.state.valorInputMinimo && produto.props.valorProduto <= this.state.valorInputMaximo && this.state.valorInputBusca === undefined) {              
               return produto.props           

           } else if (produto.props.valorProduto >= this.state.valorInputMinimo && produto.props.valorProduto <= this.state.valorInputMaximo && produto.props.nomeDoProduto === this.state.valorInputBusca){                
                return produto.props         
        }})
        
        this.props.osProdutos(filtrarValor)
      
        return (
            <ContainerFiltro>     
                                                      
                <h2>Filtros:</h2>
                <label for="valorMinimo">Valor mínimo</label>
                <input 
                    type="number" 
                    placeholder="Valor mínimo" 
                    name="buscarProduto"
                    value={this.state.valorInputMinimo}
                    onChange={this.onChangeInputMinimo}
                />

                <label for="valorMaximo">Valor máximo</label>
                <input 
                    type="number" 
                    placeholder="Valor máximo" 
                    name="buscarProduto"
                    onChange={this.onChangInputMaximo}
                />

                <label for="buscarProduto">Buscar produto:</label>
                <input 
                    type="text" 
                    placeholder="Nome do produto" 
                    name="buscarProduto"
                    onChange={this.onChangeInputBusca}
                />
            </ContainerFiltro>
        )
    }
}

export default CardFiltro;