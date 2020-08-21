import React from "react";
import styled from "styled-components";
import background from "../img/astronauta.jpg";
import ContadorFiltro from "./ContadorFiltro";


const DivContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #49A695;
  background-color: #322E3F;
  width: 100vw;
  height: 100%;
  color: #f2dfe2;
  font-family: 'Space Mono', monospace;
`

export class Header extends React.Component{
    
    render() {
        return (
          <div>
            <DivContainerHeader>
              <img src={background}/>
              <h1>Planet Clothes</h1>
              <p></p>
            </DivContainerHeader>
          </div>
        );
      }
    }
    


export default Header;