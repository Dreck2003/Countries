import styled from "styled-components";
import {Link} from 'react-router-dom';


// ESTA SSERIA LA PÁGINA PRINCIPAL

const Principal = (props) => {
  return (
    <Fondo>
      <Container>
        <h1 style={{ color: "white", textDecoration: "underline" }}>
          BROWSER OF COUNTRIES
        </h1>
        <Text>
          Bienvenido a mi single page apliation donde encontraran un buscador de
          paises de todo el mundo y ademas podran hacer mas consultas
        </Text>
        <Link to='/home' style={{ width: "60%"}}>
          <Boton>INGRESAR</Boton>
        </Link>
      </Container>
    </Fondo>
  );
};

const Fondo = styled.div`
  background-image: url("/images/principal.jpg");
  width: 100%;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Boton = styled.button`
  width: 100%;
  height: 53px;
  /* background: rgb(153, 69, 54); */
  background-color: #303f9f;
  color: white;
  border: none;
  /* border: 0.5px solid #f0be92; */
  letter-spacing: 2.5px;
  font-weight: bold;
  font-size: 1.2rem;
  transition: background-color 1s, letter-spacing 0.5s;

  &:hover {
    /* background-color: rgb(185, 87, 69); */
    background-color: #1e88e5;
    letter-spacing: 10px;
    cursor: pointer;
  }
`;

const Text = styled.div`
  width: 90%;
  height: 200px;
  box-sizing: border-box;
  max-height: 250px;
  border: 2px solid rgba(154, 156, 156, 0.32);
  border-radius: 15px;
  padding: 10px 20px;
  margin: 20px auto;
  color: white;
  font-weight: bold;
  text-align: justify;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: auto 15%;
  letter-spacing: 1.15px;
  /* border: 6px solid violet; */
  /* color:white; */
`;

export default Principal;
