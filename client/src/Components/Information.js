
import styled from 'styled-components';

const Information=({info})=>{
    // console.log('el info es:  ',info)


    return (
      <Description>
        <header>Country: {info.name}</header>
        <h3>Description:</h3>
            {/* {console.log('se monto el info')} */}
        <dl>
          {/* <dt>Name Official:</dt>
          <dd>{info.nameOficial}</dd> */}
          <dt>Continente:</dt>
          <dd>{info.continent}</dd>
          <dt>Subregion:</dt>
          <dd>{info.subregion}</dd>
          <dt>Capital:</dt>
          <dd>{info.capital}</dd>
          <dt>Poblacion:</dt>
          <dd>{info.population}</dd>
          <dt>Area:</dt>
          <dd>{info.area} km2</dd>
        </dl>
      </Description>
    );
}


const Description = styled.main`
  border: 2px solid white;
  width: 33%;
  height: 75%;
  overflow: hidden;
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly; */

  h3 {
    margin: 10px 0px 7px -40px;
    /* width:60%;
    margin:10px 30% 10px 10%; */
    border-bottom: 3px solid #6c597c;
    display: inline-block;
  }

  header {
    background-color: yellow;
    font-weight: bold;
    padding:6px ;
    /* margin:auto 0px; */
  }
  dl {
    /* border: 2px solid white; */
    width: 93%;
    margin: 10px 1% 5px 6%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    dt {
      font-weight: bold;
      &::before {
        content: "» ";
      }
    }
    dd {
      margin: 3px 0px 10px 30px;
    }
  }
`;

export default Information;