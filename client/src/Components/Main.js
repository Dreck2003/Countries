import styled from 'styled-components';
import Countrycard from './CountryCard';//importamos las cartas:
import {useSelector,} from 'react-redux';



const Main=(props)=>{

  const estado=useSelector(state=>state.viewCountry);
  
  console.log('se renderiza el main')

    return (
      <Container style={{ color: "white" }}>

        {estado.hasOwnProperty('data') ? (
          estado.data.map((country) => (
            <Countrycard
              img={country.img}
              name={country.name}
              
              continent={country.continent}
              id={country.id}
              key={country.id}
            />
          ))
        ) : (
          <Spiner />
        )}
      </Container>
    );
}

const Container=styled.section`
    padding:10px ;
    font-weight: bold;
    width:96%;
    margin:0% 2%;
    height:100%;
    /* border:2px dashed violet; */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
`

const Spiner = styled.div`
     border: 10px solid #89896b47 !important;
     width:50px;
     height:50px !important;
     border-radius:50%;
     border-left-color:red !important;
     animation:spin 2s ease infinite ;

     @keyframes spin{
         0%{
             transform: rotate(0deg);
         }
         100%{
             transform: rotate(360deg);
         }
     }
  
`;



export default Main;