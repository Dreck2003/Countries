/* eslint-disable import/no-extraneous-dependencies */

const { expect } = require('chai');
const session = require('supertest-session'); //trae la session--> una FUNCION QUE DEVUELVE UNA CLASE
const app = require('../../src/app.js');
const { Countries, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
  id:'564',
  img:'https://algo.com',
  continent:'Africa',
  capital:'foo',


};


describe('Country routes', () => { //Este describe contiene todo el test de rutas

  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Countries.sync({ force: true })
    .then(() => Countries.create(country)));

  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries')
      .expect(200)
      // .expect('Content-Type',/json/)
    );
  });

});
