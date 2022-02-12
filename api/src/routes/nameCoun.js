
const {Countries}= require('../db');
const {Router}= require("express");
const express = require('express');
const {Op} = require('sequelize')

const returnOrder=(order)=>{


  switch (order) {
    case "max":
      //es para la poblacion:
      return [['population','DESC']];

    case "min":
      //es para la poblacion:

      // return [['population','ASC']]; ESTO SE FILTRARA EN EL FRONT;
      return [];

    case "A-Z":
      //es para el name a-z

    return [
      ["name", "ASC"],
      // ["population", "ASC"],
    ];  

    case "Z-A":
      //es para el name z-a
    return [
      ["name",'DESC'],
      // ["population", 'DESC'],
    ];   

    default:
      return []
  }

}


const nameCountry=express.Router();


//ESTA RUTA ES PARA TRER EL NOMBRE A BUSCAR POR QUERIES

nameCountry.get("/countries", (req, res, next) => {

    console.log('paso por el nameCountry');

  const { name,continent,activity,order} = req.query; // Seria el name de la query


    return Countries.findAll({
      order:returnOrder(order),
      where: {
        name: {
          [Op.iLike]: name ?`%${name}%`:'%%',
        },
        continent: {
          [Op.iLike]: continent || '%%',
        },
      },
    })
      .then((countries) => {
        // console.log("backend: ", countries);
        return res.json(countries);
      })
      .catch((err) => {
        console.log("pues... no se encontro al pais XD");
        console.log("error:", err);
        next(err);
      });
      
  
});





module.exports=nameCountry;