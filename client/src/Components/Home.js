import styled from 'styled-components';
import NavBar from './NavBar.js';
import Main from './Main.js';



const Home=(props)=>{


    return (
      <Div>
        <NavBar/>
        <Main />
      </Div>
    );
}

const Div = styled.div`
  background: linear-gradient(#585d6659, #585d6659), url("/images/home1.jpg");
  background-size: cover;
  padding-top: 130px; //este padding es para separar el main de cartas del fixed del nav
  min-height: 100vh;
  div {
    color: white;
    font-weight: bold;
  }
`;





export default Home;