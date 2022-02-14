import { useEffect } from "react";
import styled from "styled-components";
import { useParams,Link } from "react-router-dom";
import Information from './Information';
import ShowActivities from './ShowActivities';
import {useDispatch,useSelector} from 'react-redux';
import {getCountry} from '../redux/actions/actions';
import { filter } from "../redux/actions/actions.js";

function CountryDescription(props) {

  const id = useParams().country;
  const dispatch = useDispatch();
  const estado=useSelector(state=>state.country);
  const viewEstado=useSelector(state=>state.filtros);
  console.log(viewEstado)


  useEffect(() => {
    dispatch(getCountry(id));

  }, []);

  // console.log('el id es : ',id);
  return (
    <Main>
      {console.log("se monto el card")}
      <section>
        <div>
          <img src={estado.img} alt="flag" />
        </div>
        <ShowActivities activities={ estado.activities} />
      </section>
      <Information info={{ ...estado }} />

      <button
        onClick={(e) => {
          viewEstado.name = "";
          dispatch(filter(viewEstado));
        }}
      >
        <Link to="/home">BACK</Link>
      </button>
    </Main>
  );
}

const Main = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #6c597c;
  position: relative;
  opacity: 0.97;
  /* background-color: #90a3c5e8; */
  /* background-image: linear-gradient(
    113deg,
    #8bc6ec 10%,
    #90a3c5d4 24%,
    #6a7f94ad 75%
  ); */
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  section {
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;

    div {
      border: 2px solid white;
      height: 200px;
    }
    

    img {
      width: 100%;
      height: 100%;
    }
  }

  button{
    cursor: pointer;
    border:none;
    background-color:white;
    color:red;
    position:absolute;
    bottom:0;
    width:20%;
    height:30px;
    margin:10px 40%;
  }
  
`;



export default CountryDescription;
