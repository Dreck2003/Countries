
import styled from 'styled-components';
// import Boton from './BotonPage.js';
import {goBack,goNext} from '../redux/actions/actions.js';
import {useDispatch,useSelector} from 'react-redux'





const Paginado=(props)=>{

  const dispatch=useDispatch();
  const estado=useSelector(state=>state.viewCountry);

    return (
      <Section>
        {/* <Botoncito
          color={!estado.previous && "#24536ac2"}
          onClick={(event) => dispatch(goBack())}
        >
          PREVIOUS
        </Botoncito> */}
        {/* {console.log(estado)} */}
        {estado.previous ? (
          <Botoncito onClick={(event) => dispatch(goBack())}>
            PREVIOUS
          </Botoncito>
        ) : (
          <Botoncito
            style={{ backgroundColor: "#42758e" }}
            onClick={(event) => dispatch(goBack())}
          >
            PREVIOUS
          </Botoncito>
        )}

        {estado.next ? (
          <Botoncito onClick={(event) => dispatch(goNext())}>NEXT</Botoncito>
        ) : (
          <Botoncito
            style={{ backgroundColor: "#42758e" }}
            onClick={(event) => dispatch(goNext())}
          >
            NEXT
          </Botoncito>
        )}
      </Section>
    );

}


const Section = styled.section`
  margin: 0.2px 0%;
  /* width: 100%; */
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #758b64;
`;

const Botoncito = styled.button`
  padding: 8px 19px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #039be5;
  color: #f8f6f2;
  font-weight: bold;
  transition: background-color 0.7s ease ;
`;




export default Paginado;