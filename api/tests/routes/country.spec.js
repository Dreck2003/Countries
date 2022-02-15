/* eslint-disable import/no-extraneous-dependencies */

const session = require('supertest'); //trae la session--> una FUNCION QUE DEVUELVE UNA CLASE
const app = require('../../src/app.js');
const { Countries, conn } = require('../../src/db.js');


const agent = session(app);


const paises = [
  {
    name: "Argentina",
    id: "564",
    img: "https://algo.com",
    continent: "Africa",
    capital: "foo",
  },
  {
    name: "Paraiso",
    id: "001",
    img: "https://otro.com",
    continent: "Africa",
    capital: "foo",
  },
  {
    name: "Eden",
    id: "100",
    img: "https://eden.com",
    continent: "Asia",
    capital: "root",
  },
  {
    name: "Edenismo",
    id: "345",
    img: "https://legen.com",
    continent: "Africa",
    capital: "0-Day",
  },
  {
    name: "Vulcan",
    id: "234",
    img: "https://vulcan.com",
    continent: "Asia",
    capital: "exploit",
  },
];
// console.log('la conecciones : ',conn)


describe('Peticiones: ',()=>{

  beforeEach(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

   beforeEach(() =>
     Countries.sync({ force: true })
    //  .then(() => Countries.create(country))
   );


  describe('GET /countries:  ',()=>{

    xit('responds width 200 status and content type = json',async()=>{

      await agent.get('/countries')
      .expect(200)
      .expect('Content-Type', /json/)

    })

    xit('Responds width empty array',async()=>{

      const response=await agent.get('/countries')
        expect(response.body.length).toEqual(0)
    })
    xit('Debe retornar 1 si se creo una actividad',async()=>{

      await Countries.create(paises[0]);
      const response=await agent.get('/countries')
      expect(response.status).toEqual(200)
      expect(response.body.length).toEqual(1)

    })
    xit('Deberia retornar 2 si se crean 2 paises',async()=>{
      await Countries.create(paises[0]);
      await Countries.create(paises[1]);
      const response = await agent.get("/countries");
      expect(response.status).toEqual(200);
      expect(response.body.length).toEqual(2);

    })

    xit('DEberia devolver los paises que matchean con el nombre: ', async()=>{

      paises.forEach(country => {
        Countries.create(country)
      })
      const respuesta= await agent.get('/countries?name=eden');
      expect(respuesta.status).toEqual(200);
      expect(respuesta.body).toHaveLength(2);
      //Son dos por el Eden y el Eden-ismo
      
    })
    xit('deberia filtrar por continent',async()=>{
      paises.forEach((country) => {
        Countries.create(country);
      });
      const respuesta = await agent.get("/countries?continent=Africa");
      expect(respuesta.status).toEqual(200);
      expect(respuesta.body).toHaveLength(3); //Argentina,Paraiso,Edenismo
    })

  })

  xdescribe('GET /activity',()=>{

    it('DEberia retornar un arreglo vacio si no hay actividades',async()=>{

      const respuesta = await agent.get("/activity");
      expect(respuesta.status).toEqual(200);
      expect(respuesta.body).toHaveLength(1);

    })
  })



  describe('POST /activity', () =>{

    const actividades = [
      {
        ids: ["123", "122", "342"],
        name: "beisbol",
        dificultad: 3,
        duracion: 10,
        season: "Sptring",
      },
      {
        ids: ["123", "122", "342"],
        name: "voleybol",
        dificultad: 4,
        duracion: 12,
        season: "Winter",
      },
      {
        ids: ["120", "222", "345"],
        name: "futsal",
        dificultad: 3,
        duracion: 10,
        season: "Summer",
      },
      {
        ids: ["564", "001", "100", "234"],
        name: "visitar museos",
        dificultad: 2,
        duracion: 3,
        season: "Autumn",
      },
    ];



    it('No deberia crear la activity si un pais no matchea', async()=>{

      await agent.post('/activity')
      .send(actividades[0])
      .expect(400)
       
    })

  })


})


afterAll(()=>{
  // app.close()
  conn.close();
})












// xdescribe('Country routes', () => { //Este describe contiene todo el test de rutas

//   beforeAll(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));

//   beforeEach(() => Countries.sync({ force: true })
//     .then(() => Countries.create(country)));

//   describe('GET /countries', () => {
//     it('should get 200', () =>
//       agent.get('/countries')
//       .expect(200)
//       // .expect('Content-Type',/json/)
//     );
//   });

// });








