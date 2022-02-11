
import styled from 'styled-components';

const ShowActivities=(props)=>{

    return (
      <Activities>
        {props.actividades ? (
          <h1>HAY ACTIVIDADES</h1>
        ) : (
          <h1>NO HAY ACTIVIDADES PARA ESTE COUNTRY</h1>
        )}
        {/* <Spiner/> */}
      </Activities>
    );

}



const Activities = styled.main`
  border: 2px solid white;
  height: 250px;
  display:flex;
  justify-content: center;
  align-items: center;
`;




export default ShowActivities;