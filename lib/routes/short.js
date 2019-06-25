const { Router } = require('express');
const Hyperlink = require('../models/Hyperlinks');

module.exports = Router()
  .get('/:hashedUrl', (req, res, next) => {
    console.log('lvoe me', req.params);
    Hyperlink
      .findOne({ hashedUrl : req.params.hashedUrl })
      .then((LinkObject) => res.redirect(LinkObject.url))
      .catch(next);
  });
