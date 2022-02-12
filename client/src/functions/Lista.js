

function Nodo(data){

    this.data=data; //Este va a ser el array de 10 paises cada uno
    this.next=null;
    this.previous=null;

}

//Exportamos la clase Lista;

export function Lista(){
    this.size=0;
    this.head=null;
}


Lista.prototype.add=function(data){

    let newNodo=new Nodo(data);
    let current=this.head;

    //Si no existe un endpoint de la lista entonces este nuevo nodo
    //Va a ser el head:

    if(!current){
        this.head=newNodo;
        this.size++;
        return newNodo;
    }

    while(current.next){
        current=current.next;
    }

    current.next=newNodo;
    newNodo.previous=current;
    this.size++;
    return newNodo;


}


export  function crearLista(payload) {
    // console.log('el payload de crear lista es: ',payload)

  let COUNTRIES = [];
  if (!Array.isArray(payload)) {
    COUNTRIES.push(payload);
    // console.log('Los countries: ',COUNTRIES);
  } else COUNTRIES = [...payload];

  let nuevaLista = new Lista();
  let content = Math.ceil(COUNTRIES.length / 9);

  let inicio = 0,
    final = 0,
    sliceArray = 0;

  for (let i = 1; i < content + 1; i++) {
    final = inicio + 9;

    if (i === content) {
      sliceArray = COUNTRIES.slice(inicio, COUNTRIES.length);
      // console.log('el corte final: ',sliceArray);
    } else {
      sliceArray = COUNTRIES.slice(inicio, final);
    }
    nuevaLista.add(sliceArray);
    inicio = final;
  }
  // console.log(nuevaLista);
  return nuevaLista;
}


