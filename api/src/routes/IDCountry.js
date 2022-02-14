
const {Router}= require('express');
const express = require('express');
const {Countries,Activities} = require('../db.js')



const IDCountry=express.Router();
    console.log('Country',Countries);


IDCountry.get('/countries/:idPais',(req,res,next) => {

    console.log('paso por id Country')

    const {idPais}=req.params;
    console.log(idPais)

    if(!idPais){
        return res.status("400").json({ mess: "I do not send information" });
    }

    return Countries.findOne({
      include: Activities,
      where: {
        id: idPais,
      },
    }).then((country) => {
      if (country === null) {
        return res.status("404").json({ mess: "the country does not exist" });
      }

      return res.json(country);
    });

})



module.exports=IDCountry;