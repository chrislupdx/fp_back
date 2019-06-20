require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../../utils/connect');
const app = require('../../app');

const createLink = link => {
  return request(app)
    .post('/api/v1/hyperlinks')
    .send(link)
    .then(res => res.body);
};

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

  it('can get links via post', async() => {
    const link = await Promise.all([
      createLink({ url: 'iguesscool' })
    ]);

    return request(app)
      .get('/api/v1/hyperlinks')
      .then(res => {
        expect(res.body).toEqual(link);
      });
  });

});
