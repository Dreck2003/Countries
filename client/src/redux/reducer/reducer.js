
import {
  // GET_ALL_COUNTRIES,
  GET_ID_COUNTRY,
  SIGUIENTE,
  ANTERIOR,
  NAME,
  ORDER,
  CONTINENT,
  ACTIVITY,
  FILTROS,
} from "../actions/actions";

import {crearLista} from '../../functions/Lista';


const initialState ={
    allCountries: {}, //esto me trae todo los paises y va a ser una lista es una lista;
    viewCountry:{}, //Esto es el nodo al que el paginado esta subscrito y el main muestra;
    country:{}, //Este es para el country que se muestra en el countryCard;
    filtros:{
      name:'',
      continent:'',
      activity:'',
      order:'',

    },
}


 const Reducer=(state=initialState,action) =>{

    switch (action.type) {
      // case GET_ALL_COUNTRIES:

      //   const nuevaLista=crearLista(action.payload)

      //   return {
      //     ...state,
      //     allCountries: nuevaLista,
      //     viewCountry: { ...nuevaLista.head },
      //   };

      case GET_ID_COUNTRY:
        return {
          ...state,
          country: {
            ...action.payload,
          },
        };

      //ESTOS SON REDUCER PARA EL PREVIOUS Y NEXT:

      case SIGUIENTE:
        if (
          state.viewCountry.hasOwnProperty("next") &&
          state.viewCountry.next
        ) {
          return {
            ...state,
            viewCountry: state.viewCountry.next,
          };
        }
        return { ...state };

      case ANTERIOR:
        if (
          state.viewCountry.hasOwnProperty("previous") &&
          state.viewCountry.previous
        ) {
          return {
            ...state,
            viewCountry: state.viewCountry.previous,
          };
        }
        return { ...state };

      //Reducers para el filtrado de las busquedas:

      case NAME:


        return {
          ...state,
          filtros:{
            ...state.filtros,
            name:action.payload,
          }
        };

      case ORDER:
        return {
          ...state,
          filtros: {
            ...state.filtros,
            order: action.payload.trim(),
          },
        };

      case CONTINENT:

          if(action.payload==='Continent:'){
            
            return {
              ...state,
              filtros: {
                ...state.filtros,
                continent: '',
              },
            };
          }
        
          return {
            ...state,
            filtros: {
              ...state.filtros,
              continent: action.payload,
            },
          };
       

      case ACTIVITY:
        return {
          ...state,
          filtros: {
            ...state.filtros,
            activity: action.payload,
          },
        };
      
      case FILTROS:
        const listaNueva = crearLista(action.payload);
        // console.log('los filtros son: ',state.filtros);

        return {
          ...state,
          allCountries: listaNueva,
          viewCountry: { ...listaNueva.head },
        };
        
      default:
        return { ...state };
    }

    
}


export default Reducer;