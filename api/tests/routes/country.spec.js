/* eslint-disable import/no-extraneous-dependencies */

const { expect } = require('chai');
const session = require('supertest-session'); //trae la session--> una FUNCION QUE DEVUELVE UNA CLASE
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => { //Este describe contiene todo el test de rutas

  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(pokemon)));



  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });

});
