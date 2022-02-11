

//Escribe una funcion donde devuelva el indice o el -1
//Es como un includes


function encontrar(fragmento,words){

    //fragmento : redux -->5
    //words: react-redux

    let max= fragmento.length;
    let maxWord=words.length;

    if(maxWord<max) return -1;
    let index=0;
    // let inicio=0;
    let palabra = "";

    for (let i = 0; i < maxWord.length; i++) {
      if (words[i] === fragmento[index]) {
        palabra = words.substr(i, max);
        if (palabra === fragmento) return i;
      }
    }




}

encontrar('redux','react-redux')