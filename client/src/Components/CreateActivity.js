import styled from "styled-components";
import { useState, useEffect } from "react";
import {Fieldset,Modal} from './ModalCountry';
import { useDispatch } from "react-redux";
import {search_Activities} from '../redux/actions/actions.js';
import { useNavigate } from "react-router-dom";

console.log(useNavigate);

const CreateActivity = (props) => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [features, setFeatures] = useState({
    name: "",
    dificultad: 5,
    duracion: '',
    season: 0,
    ids:[]
  });
  const [error, setError] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    season: "",
    ids:''
  });

  const validate=(input)=>{

    const target=input.target;

   switch (target.name) {

     case "name":
       if(/[^a-z\x20]/i.test(target.value)){
         //significa que tiene signos o numeros:
         setError({
           ...error,
           name:'El nombre no puede tener signos o numeros..'
         })

          // input.target.value=features.name;
         break;
       }
       //Todo salio bien:

       setError({
         ...error,
         name:'',
       })
       setFeatures({
         ...features,
         name:target.value
       })
       break;


     case "dificultad":
       if(target.value > 5 || target.value < 1){

         setError({
           ...error,
           dificultad:'La dificultad no puede ser mayor a 5 ni menor a 1..'
         })

         input.target.value=features.value;

         break;
       }
       
       //Si el rango esta [1-5]:
       setError({
         ...error,
         dificultad: "",
       })


       setFeatures({
         ...features,
         dificultad:target.value
       })
       break;

     case "duracion":

       if(target.value > 30 || target.value < 1){
         setError({
           ...error,
           duracion:'La duracion debe ser mayor a 1 y menor a 30'
         })

        //  input.target.value=features.duracion;
         break;
       }

       //Si esta entre [1-30]:

       setError({
         ...error,
         duracion: "",
       })

       setFeatures({
         ...features,
         duracion: target.value,
       })
       break;

     case "season":

        if(target.value ==='Spring'||
        target.value ==='Summer'||
        target.value==='Autumn'||
        target.value==='Winter'){

          //Se eligio un solo season
            setError({
              ...error,
              season:'',
            })

          setFeatures({
            ...features,
            season:target.value,
          })
          break;

          }

          setError({
            ...error,
            season:'Debe elegir una estación'
          })
          input.target.value=features.season;
            break;
        

            case 'ids':

              const ids=input.target.value;
              console.log('el valor del checbox: ',ids)

              if (features.ids.indexOf(ids) !== -1) {
                //entonces se encontro uno repetido:
                console.log('hay uno repetido: ',ids);
                
                setFeatures({
                  ...features,
                  ids: features.ids.filter(
                    (coun) => coun !== ids
                  )
                });
                break;
              }


              setFeatures({
                ...features,
                ids: [...features.ids, input.target.value],
              });

              break;

       default :
        setFeatures({
          ...features
        })
   }

  }

  
  useEffect(()=>{

    // console.log(features.country.length)

    if(features.ids.length>5){
      console.log('Hay mas de 5 elements: ',features.ids)
      setError({
        ...error,
        ids:'No puedes seleccionar mas de 5 paises'
      })

    }else if(features.ids.length < 1){
      // console.log('hay menos de 1 pais');
      
      setError({
        ...error,
        ids:'Escoge al menos 1 pais'
      })

    }else if(features.ids.length > 0 || features.length < 6){
      // console.log('esta entre [1-5]')
      setError({
        ...error,
        ids:''
      })
    }
    
    

  },[features])


  
  return (
    <Container>
      {/* {console.log(features)} */}
      <button className="btn-back" onClick={()=>navigate('/home')}>BACK</button>
      <Formulario
        id="activity"
        autoComplete="off"
        action="http://localhost:3001/activity"
        method="post"
      >
        <h3>CREATE YOUR ACTIVITY</h3>
        <label>
          Name:
          <input type="text" name="name" autoFocus onChange={validate} />
          {error.name && <span>{error.name}</span>}
        </label>

        <label>
          Dificultad:
          <input
            type="range"
            name="dificultad"
            className="rango"
            max="5"
            min="1"
            step="1"
            onChange={validate}
          />
          {error.dificultad && <span>{error.dificultad}</span>}
        </label>

        <label>
          Duracion: (Dias)
          <input
            type="number"
            name="duracion"
            placeholder="0"
            min="1"
            max="30"
            onChange={validate}
          />
          {error.duracion && <span>{error.duracion}</span>}
        </label>

        <Fieldset action={validate} />
        <Modal action={validate} error={error.ids}/>
        <input
          type="submit"
          value="CREATE"
          className="btn-crear"
          onClick={(e) => {
            e.preventDefault();

            let flag=true;

            for(const index in error){
              // console.log(!!error[index])
              if(error[index]) {
                flag=false;
                break;
              }
            }
            // console.log(' hay errores: ',flag)
            //Si flag es true --> no hay errores

            if(flag){
              fetch("http://localhost:3001/activity", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(features),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data)
                  if(data.res !=='ya existe una actividad con ese nombre!'){
                    dispatch(search_Activities());
                      alert("Actividad creada");
                    setTimeout(() =>{
                    navigate("/home");

                    },1000)
                  }
                  alert(data.res)
                })
                .catch((err) => {
                  console.log("error en post activity", err);
                });
            }else{
              alert('Faltan campos a completar! o hay errores 😒')
            }
          }
        }
        />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .btn-back {
    background-color: #9dbdcd;
    padding: 7px 10px 7px 13px;
    position: absolute;
    color: #6e5d48;
    top: 20px;
    left: 20px;
    cursor: pointer;
    border-radius: 76px 7px 7px 76px;
    font-weight: bold;
    &:hover {
      color: #d5dba3;
    }
  }
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
    span {
      color: #2d0dad;
    }
  }
  input[type="submit"] {
    color: #607d8b;
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








export default CreateActivity;
