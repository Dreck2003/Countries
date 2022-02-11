

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


