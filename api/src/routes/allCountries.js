
const {Router} = require('express');

const axios = require('axios');
const express=require('express');

const{Countries} = require('../db');


//Funcion para traerme todos los countries.

 function GetCountries() {
     axios.get("https://restcountries.com/v3/all")
        .then(data=>{
            //Aca tendria que guardar los datos en mi database
            try {
              try{
                  data.data.forEach((country) => {
                    if(Array.isArray(country)) console.log(country)
                  // console.log(country);

                      Countries.create({
                        id: country.ccn3 || country.cca3,
                        name: country.name.common,
                        img: country.flags ? country.flags[1] : "There is no image",
                        continent: country.continents
                          ? country.continents[0]
                          : "Has no continent",
                        capital: country.capital
                          ? country.capital[0]
                          : "Has no capital",
                        subregion: country.subregion
                          ? country.subregion
                          : "There is no subregion",
                        area: country.area ? country.area : "There is no area",
                        population: country.population
                          ? country.population
                          : 0,
                      })
                      .then(data=>{
                        console.log('SE CREO EL PAIS')
                      })
                      .catch(err=>{
                        console.log('EL PAIS DEL ERROR ES: ',country)
                        console.log('SUCEDIO UN GRAVISIMO ERROR',err)
                      })
                  });
              }catch(error){
                console.log('el error es: ',error)
              }
            } catch (error) {
              console.log(error);
            }
        }) 
        .catch(err =>console.log(err))

}
GetCountries();


const allCountries=express.Router();

allCountries.get('/countries',(req,res,next)=>{
  
  console.log('allCountry , req.QUERY:  ',req.query);
  console.log("el numero de props del objeto: ", Object.keys(req.query).length);

  if (Object.keys(req.query).length != 0 ) return next();

  console.log('se pide mas countries')

    return Countries.findAll() 
        .then(country => {
            res.send(country); 
        })
        .catch(err => next(err))

})


module.exports = allCountries;