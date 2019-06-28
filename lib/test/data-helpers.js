require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../utils/connect');
const Url = require('../models/Hyperlinks');

beforeAll(() => {
  return connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

afterAll(() => {
  return mongoose.connection.close();
});

const prepare = model => JSON.parse(JSON.stringify(model));
const createGetters = Model => ({
  [`get${Model.modelName}`]: query => Model.findOne(query).then(prepare),
  [`get${Model.modelName}`]: query => Model.find(query).then(models => models.map(prepare))
});

module.exports = {
  ...createGetters(Url),
};
