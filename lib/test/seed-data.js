const Url = require('../models/Hyperlinks');
const chance = require('chance').Chance();

module.exports = ({ urlCount = 1 } = {}) => {
  const url = [...Array(urlCount)].map(() => ({
    url: chance.url(),
    name: chance.name()
  }));
  return Url
    .create(url);
}
;
