
const {Countries}= require('../db');
const {Router}= require("express");
const express = require('express');

const nameCountry=express.Router();


//ESTA RUTA ES PARA TRER EL NOMBRE A BUSCAR POR QUERIES

nameCountry.get("/countries", (req, res, next) => {

    console.log('paso por el nameCountry')

  const { name } = req.query; // Seria el name de la query


  if (!name || name.length == 0) {
      console.log('la query esta vacia');
      return next({mess:'no hay query'});
    }

  console.log("EL nombre de la query es: ", name);

  
  return Countries.findOne({
    where:{
      name:name,
    }
  })
    .then((country) => {
      return res.json(country);
    })
    .catch((err) => {
        console.log('pues... no se encontro al pais XD')
        console.log('error:',err)
      next(err);
    });
});





module.exports=nameCountry;