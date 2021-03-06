const { Router } = require('express');
const Hyperlink = require('../models/Hyperlinks');
// const Time = require('../models/Time');

module.exports = Router()
  .get('/:hashedUrl', (req, res, next) => {
    // const dateObj = Date.now();
    // const currentPreStringTime = Date(Date.now());
    // const strCurrentTime = currentPreStringTime.toString();
    // Time
    //   .create({ time : strCurrentTime, dateobj: dateObj, url: req.params.hashedUrl })
    //   .then(timeData => res.send(timeData))
    //   .catch(err => {
    //     console.log(err);
    //   });
    console.log('hash url', req.params.hashedUrl);

    Hyperlink
      .findOne({ hashedUrl: req.params.hashedUrl })
      .then((LinkObject) => res.redirect(LinkObject.url))
      .catch(err => {
        next(err);
      });
  });

