

//este doc es de prueba
require('dotenv').config();

let usuario = process.env.DB_USER || 'no lo se';


console.log(usuario);