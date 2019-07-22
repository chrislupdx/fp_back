const { Router } = require('express');
const TimeStamps = require('../models/Time');

module.exports = Router()
  .get('/:id', (req, res, next) => {
    TimeStamps
      .findById(req.params.id)
      .then((timestamps) => res.send(timestamps))
      .catch(next);
  });
