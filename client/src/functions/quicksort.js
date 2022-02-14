
let corte=0;


let numeros=[9,4,7,-2,0,-4,6,1,-8];

function sort(array){

    // console.log("EL array es: ", array);

    if(array.length <=1) return array;

    let pivot=array[Math.floor(array.length/2)];
    let left=[];
    let derecho=[];
    let iguales=[];


    for(let i=0;i<array.length;i++){
       
        if(array[i].population > pivot.population){
            // console.log('entro a la derecha')
            derecho.push(array[i])
        }else if (array[i].population < pivot.population) {
        //   console.log("entro a la izquierda");
          left.push(array[i]);
        }else{
            iguales.push(array[i])
        }

        corte++;
    }


    // console.log('left: ',left);
    // console.log('rigth: ',derecho)
    return sort(left).concat(iguales.concat(sort(derecho)));

}


export default sort;