const request = require('supertest');
const app = require('../../app');
const { getUrl } = require('../data-helpers');
require('../data-helpers');

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

  // it('can by patch a link by id', async() => {
  //   const urlId = await getUrl();
  //   const updateUrl = await request(app)
  //     .patch(`/api/v1/hyperlinks/${urlId[0]._id}`)
  //     .send({
  //       url: 'urllllll',
  //       name: 'ughname'
  //     });

  //   expect(updateUrl.body).toEqual({
  //     ...urlId[0],
  //     name: 'ughname',
  //     url: 'urllllll'
  //   });

  // });

  // it('can patch a link by id', async() => {
  //   const link = await Promise.all([
  //     createLink({ url: 'url' })
  //   ]);
  //create a new url for its url
  //check it has an id we can grab with a varibalbe

  //act
  //patch the damn url by id

  //assert
  //check the patched url 
  // });

});
