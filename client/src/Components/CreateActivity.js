import styled from "styled-components";

const CreateActivity = (props) => {
  return (
    <Container>
      <Formulario autoComplete="off">
        <input type="text" name="nombre" autoFocus />
        <input type="range" className="rango"/>
        
        <input type="number" />
       <Fieldset/> 
        
        <input type="button" value="Crear"  className='crear'/>
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
  background-color: brown;
  border: 2px solid whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 10px 20px;
  width: 60%;
  height: 500px;

  .rango{
    accent-color:yellow;
  }


  fieldset{
    background-color:blue;
    border:2px solid red;

    legend{
      color:yellow;
      text-align: start;
      margin-left:30px;
    }
  }


  .crear{
    cursor:pointer;
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
