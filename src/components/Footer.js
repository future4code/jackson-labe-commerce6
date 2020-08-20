import React from "react";
import styled from "styled-components";


const DivContainerFooter = styled.div`
display: flex;
justify-content:space-between;
margin: 2px 2px;
border: 1px solid black;
background-color: gray;
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
            </DivContainerFooter>
          </div>
        );
      }
    }
    

export default Footer;