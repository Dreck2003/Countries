require('dotenv').config(); //Llama al archivo .ENV para usar las variables de entorno;
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');


const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners;
//Lo que hacemos es leer la carpeta MODELS y traemos los modelos y lo pusheamos en el MODELDEFINERS :);
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));


// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Activities,Countries } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Activities.belongsToMany(Countries, { through: "Activities_Country" });
Countries.belongsToMany(Activities, { through: "Activities_Country" });

  // console.log('Modelos: ',sequelize.models);

  console.log("Modelos: ",typeof Activities,typeof Countries);




module.exports = {
  ...sequelize.models,
  // Activities: Activities,
  // Countries: Countries, // para poder importar los modelos así: const { Activity, Country } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
