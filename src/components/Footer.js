import React from "react";
import styled from "styled-components";


const DivContainerFooter = styled.div`
display: flex;
justify-content:space-around;
border: 1px solid #49A695;
background-color: #D2657C;
color: #031226;
width: 100vw;
font-family: 'Space Mono', monospace;
`


export class Footer extends React.Component{
    
    render() {
        return (
          <div>
            <DivContainerFooter>
              <p>Redes Sociais</p>
           {/*<img src={}/>
              <img src={}/>
              <img src={}/>
        */}
              <p>Contato</p>
              
            </DivContainerFooter>
          </div>
        );
      }
    }
    

export default Footer;