const { Router } = require('express');
const Hyperlink = require('../models/Hyperlinks');

module.exports = Router()
  .get('/:hashedUrl', (req, res, next) => {
    Hyperlink
      .findOne({ hashedUrl : req.params.hashedUrl })
      .then((LinkObject) => res.redirect(LinkObject.url))
      // .then(req.get(headerName))
      .catch(next);
  });
