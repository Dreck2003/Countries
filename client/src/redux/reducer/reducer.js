
import {
  GET_ALL_COUNTRIES,
  GET_ID_COUNTRY,
  // SEARCH_NAME_COUNTRY,
  SIGUIENTE,
  ANTERIOR
} from "../actions/actions";

import {Lista} from '../../functions/Lista';


const initialState ={
    allCountries: {}, //esto me trae todo los paises y va a ser una lista es una lista
    viewCountry:{},
    country:{},
}


 const Reducer=(state=initialState,action) =>{

    switch (action.type) {
      case GET_ALL_COUNTRIES:

          let COUNTRIES=[];
        if(!Array.isArray(action.payload)){
          COUNTRIES.push(action.payload)
          // console.log('Los countries: ',COUNTRIES);
        }else COUNTRIES=[...action.payload];
        


        let nuevaLista = new Lista();
        let content = Math.ceil(COUNTRIES.length / 10);

        let inicio = 0,
          final = 0,
          sliceArray = 0;

        for (let i = 1; i < content + 1; i++) {
          final = inicio + 10;

          if (i === content) {
            sliceArray = COUNTRIES.slice(
              inicio,
              COUNTRIES.length 
            );
            // console.log('el corte final: ',sliceArray);
          } else {
            sliceArray = COUNTRIES.slice(inicio, final);
          }
          nuevaLista.add(sliceArray);
          inicio = final;
        }
        // console.log('LA lista que se entrega es: ',nuevaLista);

        return {
          ...state,
          allCountries: nuevaLista,
          viewCountry: { ...nuevaLista.head },
        };

      case GET_ID_COUNTRY:
        return {
          ...state,
          country: {
            ...action.payload,
          },
        };

      // case SEARCH_NAME_COUNTRY:
      //   return {
      //     ...state,
      //     searchCountries: action.payload,
      //   };


      //ESTOS SON REDUCER PARA EL PREVIOUS Y NEXT:

      case SIGUIENTE:
        if (state.viewCountry.hasOwnProperty("next") && state.viewCountry.next) {
          return {
            ...state,
            viewCountry: state.viewCountry.next,
          };
        }
        return { ...state };

      case ANTERIOR:
        if (state.viewCountry.hasOwnProperty("previous") && state.viewCountry.previous) {
          return {
            ...state,
            viewCountry: state.viewCountry.previous,
          };
        }
        return { ...state };

      default:
        return { ...state };
    }

    
}


export default Reducer;