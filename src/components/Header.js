import React from "react";
import styled from "styled-components";
import background from "../img/astronauta.jpg";


const DivContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 2px;
  border: 1px solid black;
`

export class Header extends React.Component{
    
    render() {
        return (
          <div>
            <DivContainerHeader>
              <img src={background}/>
              <h1>"Title"</h1>
              <p></p>
              
            </DivContainerHeader>
          </div>
        );
      }
    }
    


export default Header;