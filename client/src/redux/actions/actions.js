//Estos son las constantes de acciones:

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ID_COUNTRY = "GET_ID_COUNTRY";
export const SEARCH_NAME_COUNTRY= "SEARCH_NAME_COUNTRY";
export const ANTERIOR = "ANTERIOR";
export const SIGUIENTE = "SIGUIENTE";


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

// export const searchCountry=(name)=>{

//     return function(dispatch){

//         if(name){
//             return fetch(`http://localhost:3001/countries/?name=${name}`)
//               .then((res) => res.json())
//               .then((data) => {
//                 dispatch({
//                   type: SEARCH_NAME_COUNTRY,
//                   payload: data,
//                 });
//               })
//               .catch((err) => {
//                 console.log("searchCountry-error: ", err);
//               });
//         }else{

//         }

//     }
// }



