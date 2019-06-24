const { Router } = require('express');
const Hyperlink = require('../models/Hyperlinks');
var md5 = require('md5');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { url, name } = req.body;
    const newhashedUrl = md5(url);
    console.log('req.body', req.body);
    Hyperlink
      .create({ url, name, hashedUrl: newhashedUrl })
      .then(hyperlink => res.send(hyperlink))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    console.log('bi id', req.params.id);
    Hyperlink
      .findById(req.params.id)
      .then((url) => res.send(url))
      .catch(next);
  })

  .get('/:hashedUrl', (req, res, next) => {
    console.log('hash url', req.params.hashedUrl);
    Hyperlink
      .findById(req.params.hashedUrl)
      .then((url) => req.send(url))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const { id } = req.params;
    Hyperlink
      .findByIdAndDelete(id)
      .then(result => res.send(result))
      .catch(err => {
        next(err);
      });
  })

  .get('/', (req, res, next) => {
    console.log('getted');
    Hyperlink
      .find()
      .then(links => res.send(links))
      .catch(next);
  });



