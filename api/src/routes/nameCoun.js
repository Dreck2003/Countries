const {Countries,Activities}= require('../db.js');
const {Router}= require("express");
const express = require('express');
const {Op} = require('sequelize')
const axios = require("axios");
console.log('ELos modelos son: ',Countries.create,Activities.create);

function getCountries() {
  axios
    .get("https://restcountries.com/v3/all")
    .then((data) => {
      //Aca tendria que guardar los datos en mi database
      try {
        try {
          data.data.forEach((country) => {
            if (Array.isArray(country)) console.log(country);
            // console.log(country);

            Countries.create({
              id: country.ccn3 || country.cca3,
              name: country.name.common,
              img: country.flags ? country.flags[1] : "There is no image",
              continent: country.continents
                ? country.continents[0]
                : "Has no continent",
              capital: country.capital ? country.capital[0] : "Has no capital",
              subregion: country.subregion
                ? country.subregion
                : "There is no subregion",
              area: country.area ? country.area : "There is no area",
              population: country.population ? country.population : 0,
            }).catch((err) => {
              console.log("EL PAIS DEL ERROR ES: ", country);
              console.log("SUCEDIO UN GRAVISIMO ERROR", err);
            });
          });
        } catch (error) {
          console.log("el error es: ", error);
        }
      } catch (error) {
        console.log(error);
      }
    })
    .catch((err) => console.log(err));
}

getCountries();


const returnOrder=(order)=>{


  switch (order) {
    case "max":
      //es para la poblacion:
      return [["population", "DESC"]];

    case "min":
      //es para la poblacion:

      // return [['population','ASC']];// ESTO SE FILTRARA EN EL FRONT;
      return [];

    case "A-Zㅤ":
      //es para el name a-z

      return [
        ["name", "ASC"],
        // ["population", "ASC"],
      ];

    case "Z-Aㅤ":
      //es para el name z-a
      return [
        ["name", "DESC"],
        // ["population", 'DESC'],
      ];

    default:
      return [];
  }

}


const nameCountry=express.Router();


//ESTA RUTA ES PARA TRER EL NOMBRE A BUSCAR POR QUERIES

nameCountry.get("/countries", (req, res, next) => {

    console.log('paso por el nameCountry');

  const { name,continent,order} = req.query; // Seria el name de la query

    console.log('esta por encontrar todos los paises');

    return Countries.findAll({
      order:returnOrder(order),
      include: Activities,
      where: {
            name: {
              [Op.iLike]: name ? `%${name}%` : "%%",
            },
            continent: {
              [Op.iLike]: continent || "%%",
            },
          },
    })
      .then((countries) => {
        // console.log("backend: ", countries);
        return res.status(200).json(countries);
      })
      .catch((err) => {
        console.log("pues... no se encontro al pais XD");
        console.log("error:", err);
        next(err);
      });
      
  
});





module.exports=nameCountry;