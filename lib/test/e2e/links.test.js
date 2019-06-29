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
          hashedUrl: expect.any(String),
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

  it('can get a link by id', async() => {
    const link = await createLink({ url: 'anotherone', name: 'badname' });
    return request(app)
      .get(`/api/v1/hyperlinks/${link._id}`)
      .then(res => {
        expect(res.body).toEqual(link);
      });
  });

  it('can patch a link by id', async() => {
    const link = await createLink({ url: 'url1', name: 'ugh' });
    return request(app)
      .patch(`/api/v1/hyperlinks/${link._id}`)
      .send({ url: 'url2', name: 'nope' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          url: 'url2',
          hashedUrl: expect.any(String),
          name: 'nope',
          __v: 0
        });
      });
  });

  it('can delete a link by id', async() => {
    const link = await createLink({ url : 'url1', name: 'ugh' });
    return request(app)
      .delete(`/api/v1/hyperlinks/${link._id}`)
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          hashedUrl: expect.any(String),
          name: 'ugh',
          url: 'url1'
        });
      });
  });



});
