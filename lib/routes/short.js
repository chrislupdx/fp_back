const { Router } = require('express');
const Hyperlink = require('../models/Hyperlinks');

//this route exists to allow users to

module.exports = Router()
  .get('/:hashedUrl', (req, res, next) => {
    console.log('hash url', req.params.hashedUrl);
    Hyperlink
      .findOne({ hashedUrl : req.params.hashedUrl })
      .then((url) => res.send(url))
      .catch(next);
  });

