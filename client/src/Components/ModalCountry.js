
import styled from 'styled-components';
import {useState,useEffect} from 'react';
// import recorrido from '../functions/recorridoLista.js';


function* cortes(countries) {
  let array = [];
  array.push(countries[0]);

  for (let i = 1; i < countries.length; i++) {
    if (i % 50 === 0) {
      //Llego hasta el multiplo de 83
      yield array;
      array = [];
    }
    if (i === countries.length - 1) {
      array.push(countries[i]);
      return array;
    }

    array.push(countries[i]);
  }
}


export const Modal=(props)=>{

  const [visible,setVisible]=useState('hidden');
  const[countries,setCountries]=useState([]);

  // const [funcion,setFuncion]=useState(()=>{});

  useEffect(() => {
    fetch("http://localhost:3001/countries?name")
    .then(res=>res.json())
    .then(data=>{
      setCountries(data);
    })
    .catch(err =>{
      console.log('ModalCountry: ',err)
    })
  },[]);

  let funcion;
  if(countries.length){
    funcion=cortes(countries);

  }

    return (
      <Container>
        {/* {console.log(estado.size)} */}
        <input
          type="button"
          value="Buscar paises"
          onClick={() => {
            setVisible("visible");
          }}
        />

        <div style={{ visibility: visible }} className="ctn-fixed">
          {props.error && <span>{props.error}</span>}

          <main>
            <span
              onClick={() => {
                setVisible("hidden");
              }}
            >
              X
            </span>
            <header>
              Selecciona los paises!
              {/* {console.log("el error en el modal: ", props.error)} */}
            </header>
            <section className="sec-container" onClick={props.action}>
              <section className="sec-countries">
                {countries.length &&
                  funcion.next().value.map((country) => (
                    <label key={country.id}>
                      <input
                        type="checkbox"
                        name="ids"
                        value={country.id}
                      />
                      {country.name}
                    </label>
                  ))}
              </section>
              <section className="sec-countries">
                {countries.length &&
                  funcion.next().value.map((country) => (
                    <label key={country.id}>
                      <input
                        type="checkbox"
                        name="ids"
                        value={country.id}
                        // onClick={props.action}
                      />
                      {country.name}
                    </label>
                  ))}
              </section>
              <section className="sec-countries">
                {countries.length &&
                  funcion.next().value.map((country) => (
                    <label key={country.id}>
                      <input
                        type="checkbox"
                        name="ids"
                        value={country.id}
                        // onClick={props.action}
                      />
                      {country.name}
                    </label>
                  ))}
              </section>
              <section className="sec-countries">
                {countries.length &&
                  funcion.next().value.map((country) => (
                    <label key={country.id}>
                      <input
                        type="checkbox"
                        name="ids"
                        value={country.id}
                        // onClick={props.action}
                      />
                      {country.name}
                    </label>
                  ))}
              </section>
              <section className="sec-countries">
                {countries.length &&
                  funcion.next().value.map((country) => (
                    <label key={country.id}>
                      <input
                        type="checkbox"
                        name="ids"
                        value={country.id}
                        // onClick={props.action}
                      />
                      {country.name}
                    </label>
                  ))}
              </section>
            </section>
          </main>
        </div>
      </Container>
    );

}




const Container = styled.div`
  /* visibility: hidden; */

  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #595a5ceb;
    height: 100vh;
    /* opacity:0.4; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main {
    width: 600px;
    height: 400px;
    background-color: #869f6a;
    padding: 0px 10px;
    position: relative;
    overflow: scroll;
    span {
      position: absolute;
      top: 2px;
      right: 2px;
      border: 2px solid red;
      padding: 4px;
      cursor:pointer;
      margin-bottom: 10px;
    }
    header {
      /* padding: 5px; */
      background-color: orange;
    }
    .sec-container {
      display: flex;
      flex-direction: row;
    }
  }
`;






export const Fieldset = (props) => {
  return (
    <fieldset>
      <legend>SEASONS</legend>
      <input
        type="radio"
        name="season"
        value="Spring"
        onChange={props.action}
      />
      Spring
      <input
        type="radio"
        name="season"
        value="Summer"
        onChange={props.action}
      />
      Summer
      <input
        type="radio"
        name="season"
        value="Autumn"
        onChange={props.action}
      />
      Autumn
      <input
        type="radio"
        name="season"
        value="Winter"
        onChange={props.action}
      />
      Winter
    </fieldset>
  );
};
