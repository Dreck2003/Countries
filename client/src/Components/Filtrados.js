import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";

//importar funciones: 


import Select from "./Select";
import {
  ordenar,
  filterContinente,
  filterName,
  search_Activities,
  actividad,
  filter,
} from "../redux/actions/actions.js";




const Filtrados = (props) => {



  const dispatch = useDispatch();
  const estado=useSelector(state=>state.filtros)
  const actividades=useSelector(state=>state.actividades)

  useEffect(() => {
    dispatch(filter(estado));
    dispatch(search_Activities());
  }, [estado]);

  return (
    <Container>
      {console.log('algo paso en el filtrado')}
      <input
        type="search"
        placeholder="Buscar paises..."
        name="search"
        onChange={(event) => dispatch(filterName(event.target.value))}
      />
      {/* <button>BUSCAR</button> */}
      <Link to="/createActivity">
        <button>CREAR ACTIVIDAD</button>
      </Link>
      <Select
        label="Continent:"
        menu={[
          "Europe",
          "North America",
          "South America",
          "Asia",
          "Africa",
          "Oceania",
        ]}
        metodo={filterContinente}
      />
      <Select
        label="Activity"
        menu={actividades}
        metodo={filter}
        estado={estado}
        envio={actividad}
      />
      <Select
        menu={["A-Zㅤ", "Z-Aㅤ", "max", "min"]}
        metodo={ordenar}
      />
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
