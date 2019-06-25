const { Router } = require('express');
const Hyperlink = require('../models/Hyperlinks');

//this route exists to allow users to

module.exports = Router()
  .get('/:hashedUrl', (req, res, next) => {
    console.log('lvoe me', req.params);
    Hyperlink
      .findOne({ hashedUrl : req.params.hashedUrl })
      .then(LinkObject => res.send(LinkObject.url))
      .catch(next);

    //we know redirect works
    // .then((url) => res.redirect(url));
  });


