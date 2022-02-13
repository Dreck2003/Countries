
 const searchList=(lista)=>{

    let current=lista.head;
    let arrayLista=[];

    if(!current){
        return arrayLista;
    }
    let i=0;

    while(current.next){
        if(i===10000) break;
        arrayLista=arrayLista.concat(current.data)


        current=current.next;
    }
    arrayLista=arrayLista.concat(current.data);
    return arrayLista;

}

export default searchList;


function* cortes(countries){

    let array=[];
    array.push(countries[0]);

    for(let i=1;i<countries.length;i++){

        if(i % 50===0){
            //Llego hasta el multiplo de 83
            yield array;
            array=[];
        }
        if (i === countries.length-1){
        array.push(countries[i]);
            return array;
        }

        array.push(countries[i]);
    }

}




