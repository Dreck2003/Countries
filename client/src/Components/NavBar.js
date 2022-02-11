// import {Link} from 'react-router-dom';
import Filtrados from './Filtrados.js';
//=============================================\\
import styled from "styled-components";
// import Select from "./Select";
import Paginado from "./Paginado";





const NavBar = (props) => {

  


  return (
    <Container>
      {console.log("se monto el nav")}
      <Nav>
        <Text>
          COUNTRIES APP
          <img src="/images/bx-world.svg" alt="mundillo" />
        </Text>
        <Filtrados/>
      </Nav>
      <Paginado />
    </Container>
  );
};

const Nav = styled.nav`
  width: 100%;
  /* margin: 0% 1%; */
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #3e7078;



`;

const Text = styled.div`
  color: #7dcc23;
  img {
    animation: 2s infinite ease girar;
  }
  @keyframes girar {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  /* background-color:white; */
  z-index: 3;
`;

export default NavBar;
