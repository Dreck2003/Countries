
import styled from 'styled-components';

const Boton=(props)=>{

    console.log('las propiedades del boton: ',props)

    return(
        <Botoncito onClick={props.action}>
            {props.value}
        </Botoncito>
    )
}



const Botoncito = styled.button`
  padding: 8px 19px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #039be5;
  color: #f8f6f2;
  font-weight: bold;
`;

export default Boton;