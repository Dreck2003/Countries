//Estos son las constantes de acciones:

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ID_COUNTRY = "GET_ID_COUNTRY";
export const SEARCH_NAME_COUNTRY= "SEARCH_NAME_COUNTRY";
export const ANTERIOR = "ANTERIOR";
export const SIGUIENTE = "SIGUIENTE";

//Acciones para el estado de la búsqueda:

export const ORDER = "ORDER";
export const CONTINENT = "CONTINENT";
export const NAME= "NAME";
export const ACTIVITY= "ACTIVITY";

//Busqueda: 
export const FILTROS = "FILTROS";



//ACTIONS PARA CAMBIAR EL NODO:
export function goBack(){
    // console.log('algo paso en el anterior');
    return {
        type:ANTERIOR,
    }
}

export function goNext(){
    // console.log("algo paso en el siguiente");
    return{
        type:SIGUIENTE,
    }
}


//Accion de busqueda
export const ordenar=(value)=>{
  return {
    type: ORDER,
    payload:value
  };

}
export const filterContinente = (value) => {
  return {
    type: CONTINENT,
    payload: value,
  };
};
export const filterName = (value) => {
  return {
    type: NAME,
    payload: value,
  };
};
export const filterActivity = (value) => {
  return {
    type: ACTIVITY,
    payload: value,
  };
};



export const getCountries=(name)=>{
    return function(dispatch){
        
        if(!name){
            return fetch("http://localhost:3001/countries")
              .then((res) => res.json())
              .then((data) => {
                dispatch({
                  type: GET_ALL_COUNTRIES,
                  payload: data,
                });
              })
              .catch((err) => {
                console.log("error all countries", err);
              });
        }else{
            return fetch(`http://localhost:3001/countries/?name=${name}`)
              .then((res) => res.json())
              .then((data) => { 
                console.log("por nombre: ", data);

                  // console.log('los paises que matchean son: ',data)
                dispatch({
                  type: GET_ALL_COUNTRIES,
                  payload: data,
                });
              })
              .catch((err) => {
                console.log("error all countries", err);
              });

        }

    }

}

export const getCountry=(id)=>{

    return function (dispatch){

        return fetch(`http://localhost:3001/countries/${id}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log('countries: ',data)
                dispatch({
                    type:GET_ID_COUNTRY,
                    payload:data,
                })
            })
            .catch((err)=>{
                console.log('getCountry',err);
            })
    }
}

export const filter=(filtros)=>{

  return function(dispatch){

      return fetch(
        `http://localhost:3001/countries?name=${filtros.name}&continent=${filtros.continent}&order=${filtros.order}`
      )
      .then((res)=>res.json())
      .then(data=>{
        dispatch({
          type: FILTROS,
          payload:data,
        });
      })
      .catch(error=>{
        console.log('filtros: ',error);
      })
  }

}



