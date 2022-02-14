const { Router } = require("express");
const express = require("express");
// const { Activities, Countries } = require("../db.js");
const { Activities, Countries } = require("../db");

const activity = express.Router();

// console.log("todo de db activities: ", Activities);

activity.post("/activity", (req, res, next) => {
  console.log("paso por el ACTIVITY");
  const { ids,name, dificultad, duracion, season } = req.body;
  //ids-->[id1,id2,id3...]
  console.log('name: ',name,'dificul: ', dificultad,'duation: ', duracion,'ids: ',ids);

  
  return Activities.findOrCreate({
    where: { name: name },
    defaults: {
      name: name,
      dificultad: dificultad,
      duration: duracion,
      season: season,
    },
  })
    .then((data) => {
        //ESto me devuelve [object,bool] -->boll--> true(se creo) || false(ya existia)
        if(data[1]){

          ids.forEach((id) => {
            console.log(id,typeof id)

            Countries.findByPk(id)
              .then(country=>{
                // console.log(country)
                if(country){
                country.addActivities(data[0])
                }
              })
              .catch(error=>{
                console.log('algun pais no matcheo',error)
                next(error)
              })

          })

          return res.json({res:'todo ok'});
          
        }else{
          return res.json({res:'ya existe una actividad con ese nombre!'});
        }
    })
    .catch((err) => {
      console.log(err);
      return res.send("algo salio mal");
    });
});

activity.get("/activity", (req, res, next) => {

  return Countries.findAll({
    include: Activities,
  }).then(data=>{
    return res.json(data);
  })
  .catch(err => {
    console.log(err)
  })

});

module.exports = activity;
