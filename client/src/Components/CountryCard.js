
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Countrycard=(props)=>{
  // console.log('props de la card: ',props)

    return (
      <Link to={`/countries/${props.id}`}>
        <Card>
          <div>
            <img src={props.img} alt="flag" />
          </div>
          <Contenido>
            <span>Country: {props.name}</span>
            <span>Continet: {props.continent}</span>
          </Contenido>
        </Card>
      </Link>
    );
}

const Card = styled.article`
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 250px;
  height: 300px;
  position: relative;
  margin: 10px;

  div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  //The best effects

  transition: box-shadow 0.5s,transform 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 30px rgba(161, 159, 159, 0.842);
  }
`;


const Contenido = styled.main`
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  display:flex;
  flex-direction: column;
  background-color: rgba(112, 105, 105, 0.979);
  height: 60px;
  color: var(--color-letra);
`;


export default Countrycard;