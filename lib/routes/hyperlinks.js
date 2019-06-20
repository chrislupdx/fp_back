const { Router } = require('express');
const Hyperlink = require('../models/Hyperlinks');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { url } = req.body;

    Hyperlink
      .create({ url })
      .then(note => res.send(note))
      .catch(next);

  })
;


