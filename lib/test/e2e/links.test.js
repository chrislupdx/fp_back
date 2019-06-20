require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../../utils/connect');
const app = require('../../app');

describe('links routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a link via post', () => {
    return request(app)
      .post('/api/v1/hyperlinks')
      .send({ url: 'hrmk' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          url: 'hrmk',
          __v: 0
        });
      });
  });

});
