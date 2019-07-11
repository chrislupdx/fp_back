const { Router } = require('express');
const Hyperlink = require('../models/Hyperlinks');
var md5 = require('md5');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { url, name } = req.body;
    const newhashedUrl = md5(url);
    Hyperlink
      .create({ url, name, hashedUrl: newhashedUrl })
      .then(hyperlink => res.send(hyperlink))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Hyperlink
      .findById(req.params.id)
      .then((url) => res.send(url))
      .catch(next);
  })

  // this is redundant
  .get('/:hashedUrl', (req, res, next) => {
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
    Hyperlink
      .find()
      .then(links => res.send(links))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    const { id } = req.params;
    const { url, name } = req.body;

    const updateObj = {};
    if(url) updateObj.url = url;
    if(name) updateObj.name = name;

    Hyperlink
      .findByIdAndUpdate(id, updateObj, { new: true })
      .then(updatedInfo => res.send(updatedInfo))
      .catch(next);
  });
