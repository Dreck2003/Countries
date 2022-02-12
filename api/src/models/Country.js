const { DataTypes } = require('sequelize');
const { get } = require('../routes');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


//EL MODULE.EXPORTS es una funcion que recibe la clase sequelize y con esta crea una tabla,
//Esto para no traer sequelize a este archivo y hacerlo mas modular

module.exports = (sequelize) => {

  // defino el modelo

  sequelize.define("countries", {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(3),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(nombre){
        let name=nombre.toLowerCase();
        this.setDataValue('name',name)
      },
      get(){
        let nombre= this.getDataValue('name');
        let first=nombre[0].toUpperCase();
        let ultimo=nombre.slice(1);
        return first+ultimo;
      }
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.REAL,
    },
    population: {
      type: DataTypes.REAL,
    },
  });
};
