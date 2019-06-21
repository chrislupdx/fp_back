const { Router } = require('express');
const Hyperlink = require('../models/Hyperlinks');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { url } = req.body;
    Hyperlink
      .create({ url })
      .then(links => res.send(links))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    console.log('bi id', req.params.id);

    Hyperlink
      .findById(req.params.id)
      .then((url) => res.send(url))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    console.log('getted');
    Hyperlink
      .find()
      .then(links => res.send(links))
      .catch(next);
  })




;


