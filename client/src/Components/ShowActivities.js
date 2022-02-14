
import styled from 'styled-components';

const ShowActivities=(props)=>{

    return (
      <Activities>
        {/* {console.log("info activityes: ", props.activities)} */}
        {props.activities && props.activities.length ? (
          <section>
            {Array.isArray(props.activities) &&
              props.activities.map((act,index) => <h3 key={index}>{act.name}</h3>)}
          </section>
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