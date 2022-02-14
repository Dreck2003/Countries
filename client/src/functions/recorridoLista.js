
 const searchList=(lista)=>{

    //Esto me devuelve un array de una lista

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






