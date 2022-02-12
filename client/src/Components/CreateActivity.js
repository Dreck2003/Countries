import styled from "styled-components";
import { useSelector } from "react-redux";

const CreateActivity = (props) => {

  const estado = useSelector((state) => state.allCountries);
  
  return (
    <Container>
      <Formulario
        autoComplete="off"
        action="http://localhost:3001/activity"
        method="post"
      >
        <h3>CREATE YOUR ACTIVITY</h3>
        <label>
          Name:
          <input type="text" name="name" autoFocus />
        </label>

        <label>
          Dificultad:
          <input type="range" name="dificultad" className="rango" max='5' min='1'/>
        </label>

        <label>
          Duracion: (Dias)
          <input
            type="number"
            name="duracion"
            placeholder="0"
            min="0"
            max="7"
          />
        </label>

        <Fieldset />
        <input type="submit" value="CREATE" className="btn-crear" onClick={(e)=>{
          e.preventDefault()
          fetch("http://localhost:3001/activity", {
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
              name: "dikson",
              dificultad: "500",
              duracion: 7,
            })
          })
          .then(res=>res.json())
          .then(data=>console.log(data))

          }}/>
        <div>
          <span>barra de progreso</span>
        </div>
      </Formulario>
    </Container>
  );
};

const Container = styled.div`
  /* background-color: #4b7bec; */
  /* background-color: #3F51B5; */
  background-color: #455a64;

  width: 100%;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Formulario = styled.form`
  background-color: #5fa2a9;
  border: 2px solid whitesmoke;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;

  padding: 10px 20px;
  width: 60%;
  height: 500px;

  h3 {
    text-decoration: underline;
  }

  label {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-around;
    text-align: start;

    input {
      margin-top: 10px;
      padding: 7px 8px 7px 12px;
      color: #455a64;
      font-weight: bold;
    }
  }
  input[type="submit"] {
    color: #607d8b ;
    padding: 10px;
    font-weight: bold;
    letter-spacing: 3px;
    background-color: #dfb785;
  }

  .rango {
    accent-color: #455a64;
  }

  fieldset {
    background-color: #5fa2a9;
    border: 2px solid #587d8f;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-around;

    legend {
      color: white;
      text-align: start;
      margin-left: 30px;
      font-weight: bold;
    }
  }

  .btn-crear {
    cursor: pointer;
  }
`;




const Fieldset=(props)=>{

  return (
    <fieldset>
      <legend>SEASONS</legend>
      <input type="radio" name="Season" value="Spring" />
      Spring
      <input type="radio" name="Season" value="Summer" />
      Summer
      <input type="radio" name="Season" value="Autumn" />
      Autumn
      <input type="radio" name="Season" value="Winter" />
      Winter
    </fieldset>
  );
}



export default CreateActivity;
