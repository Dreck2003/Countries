import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Select from "./Select";
import { getCountries } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

import { useState, useEffect } from "react";


// import { useDispatch } from "react-redux";

const busqueda = (event, queries, set) => {
  event.preventDefault();
  // console.log(event.target.value);
  const { value, name } = event.target;
//   console.log(value, " : ", name);
  set({
    ...queries,
    [name]: value,
  });

};




const Filtrados=(props)=>{


    const [queries, setQueries] = useState({
      search: "",
    });





    const dispatch = useDispatch();

    useEffect(() => {
      if (!queries.search) {
        dispatch(getCountries(queries.search));

      }
    }, [queries]);

    return (
      <Container>
        <input
          type="search"
          placeholder="Buscar paises..."
          name="search"
          onChange={(event) => busqueda(event, queries, setQueries)}
        />
        <button onClick={(event) => dispatch(getCountries(queries.search))}>
          BUSCAR
        </button>
        <Link to="/createActivity">
          <button>CREAR ACTIVIDAD</button>
        </Link>
        <Select
          label="Continent:"
          menu={["Europa", "America", "Asia", "Africa", "Oceania"]}
        />
        <Select label="Activity" menu={["actividad1"]} />
        <Select label="Ordenar por: " menu={["A-Zㅤ", "Z-Aㅤ"]} />
      </Container>
    );
}

const Container = styled.div`

  display:flex;
  flex-direction: row;
  align-items: center;
  padding:0px 20px;

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
  button {
    background-color: #68888d;
    padding: 3px 8px;
    border-radius: 7px;
    border: 2px solid #8c9c9a;
    color: #2757a0;
    font-weight: bold;
    font-size: 0.8em;
    cursor: pointer;
  }
`;



export default Filtrados;