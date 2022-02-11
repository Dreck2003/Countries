import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
//=============================================\\
import styled from "styled-components";
import Select from "./Select";
import Paginado from "./Paginado";
import { getCountries } from '../redux/actions/actions';

const busqueda=(event,queries,set)=>{

  event.preventDefault();
  // console.log(event.target.value);
  const {value,name}=event.target;
  console.log(value,' : ',name);
  set({
    ...queries,
    [name]:value
  })

}





const NavBar = (props) => {

  const [queries,setQueries]= useState({
    search:'',
  });
  const dispatch=useDispatch();
 

  useEffect(()=>{

    if(!queries.search){
      
      dispatch(getCountries(queries.search));

    }


  },[])


  return (
    <Container>
      {console.log("se monto el nav")}
      {console.log('LAS QUERIES: ',queries)}
      <Nav>
        <Text>
          COUNTRIES APP
          <img src="/images/bx-world.svg" alt="mundillo" />
        </Text>
        <input 
        type="search" 
        placeholder="Buscar paises..." 
        name='search' 
        onChange={(event)=>busqueda(event,queries,setQueries)}
        />
        <button onClick={(event)=>dispatch(getCountries(queries.search))}>
          BUSCAR
        </button>
       <Link to='/createActivity'>
         <button>CREAR ACTIVIDAD</button> 
       </Link> 
        <Select
          label="Continent:"
          menu={["Europa", "America", "Asia", "Africa",'Oceania']}
        />
        <Select label="Activity" menu={["actividad1"]} />
        <Select label="Ordenar por: " menu={["A-Zㅤ", "Z-Aㅤ"]} />
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

  input {
    padding: 10px;
    font-weight: bold;
    background-color: #585d6667;
    border: 1px solid white;
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--color-letra);

    &::placeholder {
      color: #b3b2ab;
    }
    &:hover {
      background-color: transparent;
    }
  }
  button{
    background-color: #68888d;
    padding: 3px 8px;
    border-radius: 7px;
    border: 2px solid #8c9c9a;
    color: #2757a0;
    font-weight: bold;
    font-size: 0.8em;
    cursor:pointer;
  }


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
