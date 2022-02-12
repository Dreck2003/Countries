import styled from "styled-components";
import { Link } from "react-router-dom";
import Select from "./Select";
import { getCountries } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

import { useState, useEffect } from "react";
import {
  ordenar,
  filterContinente,
  filterName,
  filterActivity,
} from "../redux/actions/actions.js";

// import { useDispatch } from "react-redux";



const Filtrados = (props) => {



  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!queries.search) {
  //     dispatch(getCountries(queries.search));
  //   }
  // }, [queries]);

  return (
    <Container>
      <input
        type="search"
        placeholder="Buscar paises..."
        name="search"
        onChange={(event) => dispatch(filterName(event.target.value))}
      />
      <button >
        BUSCAR
      </button>
      <Link to="/createActivity">
        <button>CREAR ACTIVIDAD</button>
      </Link>
      <Select
        label="Continent:"
        menu={["Europa", "America", "Asia", "Africa", "Oceania"]}
        metodo={filterContinente}
      />
      <Select label="Activity" menu={["actividad1"]} metodo={filterActivity} />
      <Select menu={["A-Zㅤ", "Z-Aㅤ"]} metodo={ordenar} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;

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
