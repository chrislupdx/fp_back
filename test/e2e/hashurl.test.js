const request = require('supertest');
const app = require('../../app');

require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../../utils/connect');

const createLink = link => {
  return request(app)
    .post('/api/v1/hyperlinks')
    .send(link)
    .then(res => res.body);
};

describe('hashedurl routes', () => {
  beforeAll(() => {
    return connect() ;
  });

  beforeEach(() => {
    return connect();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can find redirect the hashed url to the right site', async() => {
    const  link = await createLink({ url: 'facebook.com', name: 'faesbouk' });

    return request(app)
      .get(`/${link.hashedUrl}`)
      .then(res => {
        expect(res.redirect).toEqual(true);
      });
  });
});
