const { Router } = require("express");
const express = require("express");
const { Activities, Countries } = require("../db");
const { Op } = require("sequelize");

const activity = express.Router();

//Function para crear una actividad:

function createActivity(datos) {
  //DAtos son un objecto
}

// console.log("todo de db activities: ", Activities);

activity.post("/activity", (req, res, next) => {
  console.log("paso por el ACTIVITY");
  const { ids, name, dificultad, duracion, season } = req.body;
  console.log(
    "name: ",
    name,
    "dificul: ",
    dificultad,
    "duation: ",
    duracion,
    "ids: ",
    ids
  );

  if (!Array.isArray(ids)) {
    return res.status(400).json("no hay paises");
  }

  let identificadores = ids.slice(0, 5);
  console.log("los ids son: ", identificadores);

  Promise.all(
    identificadores.map((id) => {
      return Countries.findByPk(id);
    })
  )
    .then((promesas) => {
      // console.log(promesas)

      const paises = promesas.filter(
        (promesa) => promesa !== null && promesa.dataValues.name !== null
      );
      console.log("los paises que matchean son : ", paises);

      if (!paises.length) {
        //Si los paises del array es vacio --> no existe ningun pais que matchee
        console.log("No hay paises que matchean length:0 ");
        return res.status(400).json("No existen esos paises");
      } else {
        //Si existen paises que matchean o tan solo 1:
        console.log("Si hay paises que matchean");
        Activities.findOrCreate({
          where: {
            name: name,
          },
          defaults: {
            name: name,
            dificultad: dificultad,
            duration: duracion,
            season: season,
          },
        })
          .then((data) => {
            if (data[1]) {
              //Si es true se creo!
              //Entonces añadimos la actividad a cada pais!

              paises.forEach((pais) => {
                pais.addActivities(data[0]);
              });
              return res.json("todo ok");
            } else {
              //Ya habia una actividad igual:
              return res.json("LA actividad ya existia");
            }
          })
          .catch(function (err) {
            console.log("hay un error en la creacion del activity");
          });
      }
    })
    .catch((err) => {
      //Si existe un error en el Promise All
      console.log("Se encontro un error en el promise.All: ", err);
    });

  // return res.json('se hizo la peticion post')
});

activity.get("/activity", (req, res, next) => {
  console.log("PASO POR GET ACTIVITIES!");
  console.log("otra cosa!");

  const { nombre } = req.query;
  console.log(nombre);
  let objeto = {
    include: Countries,
    where: {
      name: {
        [Op.iLike]: `%${nombre}%`,
      },
    },
  };

  if (nombre) {
    console.log("el nombre no es vacio");
  } else {
    console.log("el nombre esta vacio");
    objeto = {
      include: Countries,
      where: {
        name: {
          [Op.iLike]: "%%",
        },
      },
    };
  }

  return Activities.findAll(objeto)
    .then((activity) => {
      console.log("EL nombre fue: ", nombre);
      console.log("LA actividad es: ", activity);
      return res.json(activity);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = activity;
