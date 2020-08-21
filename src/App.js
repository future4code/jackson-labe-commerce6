import React from "react";
import "./App.css";
import styled from "styled-components";
import Carrinho from "./components/Carrinho.js";
import CardFiltro from "./components/CardFiltro";
import TabelaProdutos from "./components/TabelaProdutos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContadorFiltro from "./components/ContadorFiltro";

const SectionPagina = styled.section`
  background-color: #031226;
  width: 100vw;
  height: 100%;
  color: #f2dfe2;
  display: flex;
`;

const DivPainel = styled.div`
  display: flex;
  max-width: 80%;
  flex-wrap: wrap;
`;

const DivProdutosCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonDelete = styled.div`
  border-radius: 5px;
  background-color: #305496;
  color: white;
  width: 7em;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #254174;
  }
`;

const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2em;
  margin-top: 1em;
  padding: 1em 3em;
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
  state = {
    arrayProdutos: [
      {
        nomeProduto: "Traje  - Plutão",
        imagemProduto:
          "https://www.bellacollezione.com/image/cache/catalog/products/masculino/fantasia-astronauta-do-espaco-adulto-mascote-branco-800x800.jpg",
        valorProduto: 100,
        id: 1,
        quantidade: 0,
      },
      {
        nomeProduto: "Traje - X",
        imagemProduto:
          "https://www.bellacollezione.com/image/cache/catalog/products/masculino/fantasia-adulto-macacao-de-astronauta-autentico-800x800.jpg",
        valorProduto: 200,
        id: 2,
        quantidade: 0,
      },
      {
        nomeProduto: "Teste3",
        imagemProduto:
          "https://www.dhresource.com/0x0/f2/albu/g9/M01/4E/D1/rBVaVVylqxqAPAhNAARi2g9O04s933.jpg",
        valorProduto: 400,
        id: 3,
        quantidade: 0,
      },
      {
        nomeProduto: "Teste4",
        imagemProduto:
          "https://sc01.alicdn.com/kf/HTB1PsHLbjfguuRjy1zeq6z0KFXaI/231834524/HTB1PsHLbjfguuRjy1zeq6z0KFXaI.jpg_.webp",
        valorProduto: 350,
        id: 4,
        quantidade: 0,
      },
      {
        nomeProduto: "Teste5",
        imagemProduto:
          "https://cdn.awsli.com.br/800x800/488/488909/produto/37825150/5d2946d92d.jpg",
        valorProduto: 220,
        id: 5,
        quantidade: 0,
      },
      {
        nomeProduto: "Teste6",
        imagemProduto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQshlvVSZTG7fBTfDTMst0VgLn7MtzZ3O5oLg&usqp=CAU",
        valorProduto: 150,
        id: 6,
        quantidade: 0,
      },
      {
        nomeProduto: "Teste7",
        imagemProduto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc009wYjCJNW8er_XXgYK_hhFqEe_lZ-SRJQ&usqp=CAU",
        valorProduto: 250,
        id: 7,
        quantidade: 0,
      },
      {
        nomeProduto: "Teste8",
        imagemProduto:
          "https://www.bellacollezione.com/image/cache/catalog/products/infantil/fantasia-infantil-astronauta-classica-800x800.jpg",
        valorProduto: 380,
        id: 8,
        quantidade: 0,
      },
    ],
    filtroCrescente: "",
    carrinho: [],
    valorInputMinimo: '',
    valorInputMaximo: '',
    valorInputBusca: ''
  };

  onChangeInputMinimo = (e) => {
    this.setState({valorInputMinimo: e.target.value})   
  }
 
  onChangeInputMaximo = (e) => {
      this.setState({valorInputMaximo: e.target.value})
      console.log(this.state.valorInputMaximo)
  }
 
  onChangeInputBusca = (e) => {
      this.setState({valorInputBusca: e.target.value})
  }

  onChangeFiltroCrescente = (event) => {
    // Pegando o valor do filtro.
    this.setState({
      filtroCrescente: event.target.value,
    });

    switch (this.state.filtroCrescente) {
      // Caso o filtro seja crescente.
      case "crescente":
        // Função de comparação, retornando menor pro maior
        return this.setState({
          arrayProdutos: this.state.arrayProdutos.sort(function (a, b) {
            return b.valorProduto - a.valorProduto;
          }),
        });

      // Caso seja decrescente
      case "decrescente":
        // Função de comparação, retornando maior pro menor
        return this.setState({
          arrayProdutos: this.state.arrayProdutos.sort(function (a, b) {
            return a.valorProduto - b.valorProduto;
          }),
        });
    }
  };
  onDelete = (itemDelete) => {
    const novaLista = this.state.carrinho.filter((produto) => {
      return produto.id !== itemDelete.id;
    });

    this.setState({ carrinho: novaLista });
  };

  onClickCarrinho = (id) => {
    // Cópia do carrinho
    let novoCarrinho = [...this.state.carrinho];

    // Se tiver um produto encontrado no array e esse id for igual ao do produto
    const foundProduct = this.state.arrayProdutos.find((produto) => {
      if (id === produto.id) {
        return true;
      }
      return false;
    });

    // Mensagem de erro caso o find não encontre nada.
    if (foundProduct === undefined) {
      console.error("Produto inválido.");
      return;
    }

    // Verificando os produtos no carrinho, se houver, vai retornar true
    const foundProductInCart = novoCarrinho.find((item) => {
      if (id === item.id) {
        return true;
      }
      return false;
    });

    // Se não for encontrado nenhum produto,
    if (foundProductInCart === undefined) {
      const newProduct = {
        // Será criado um novo produto aumentando a quantidade pra 1
        ...foundProduct,
        quantidade: 1,
      };
      novoCarrinho = [newProduct, ...novoCarrinho]; // Adicionando o produto no carrinho caso não existe nenhum produto igual.
    } else {
      novoCarrinho = novoCarrinho.map((item) => {
        // Se existir um produto igual
        if (id === item.id) {
          return {
            ...item,
            quantidade: item.quantidade + 1, // Vou pegar o produto e mudar o item quantidade pra +1
          };
        } else {
          return item; // Se não for igual, mantenho o item como tá.
        }
      });
    }

    this.setState({ carrinho: novoCarrinho }); // Atualizando a lista.
  };
  render() {
    const quantidadeProdutos = this.state.arrayProdutos.length;

    const produtosRender = this.state.arrayProdutos.map((produto) => {
      return (
        <TabelaProdutos
          imagemDoProduto={produto.imagemProduto}
          nomeDoProduto={produto.nomeProduto}
          valorProduto={produto.valorProduto}
          funcaoClicar={() => this.onClickCarrinho(produto.id)}
        />
      );
    });

    const filtrarProdutos = this.state.arrayProdutos.filter((produto) => {  
      if((produto.valorProduto <= this.state.valorInputMaximo && produto.valorProduto >= this.state.valorInputMinimo) || produto.nomeProduto === this.state.valorInputBusca){
        return produto
        } 
      }
    )

    const produtosFiltrados = filtrarProdutos.map((elemento) => {
      return (
        <TabelaProdutos
          nomeDoProduto={elemento.nomeProduto}
          valorProduto={elemento.valorProduto}
        />
      )
    })    

    const carrinhoRender = () => {
      const itensCarrinho = this.state.carrinho.map((produto) => {
        return (
          <DivProdutosCarrinho>
            <p>Produto: {produto.nomeProduto}</p>
            <p>Valor: R${produto.valorProduto}</p>
            <p>Quantidade: {produto.quantidade}</p>
            <ButtonDelete onClick={() => this.onDelete(produto)}>
              Deletar todas quantidades
            </ButtonDelete>
          </DivProdutosCarrinho>
        );
      });
      return itensCarrinho;
    };

    return (
      <div className="App">
        <SectionPagina>
          <CardFiltro
            inputMinimo={this.onChangeInputMinimo}
            inputMaximo={this.onChangeInputMaximo}
            inputBusca={this.onChangeInputBusca}
          />
          <ContadorFiltro
            contadorProdutos={quantidadeProdutos}
            filtroOrdem={this.onChangeFiltroCrescente}
          />
          <DivPainel>{produtosRender}</DivPainel>

          <Carrinho funcaoCarrinho={carrinhoRender()}></Carrinho>
        </SectionPagina>
        <Footer />
      </div>
    );
  }
}

export default App;
