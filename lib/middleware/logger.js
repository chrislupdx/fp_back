const Time = require('../models/Time');

module.exports = (req, res, next) => {
  // time in ms
  res.on('finish', () => {
    const dateObj = Date.now();
    const currentPreStringTime = Date(Date.now());
    const strCurrentTime = currentPreStringTime.toString();
    console.log(strCurrentTime, 'Current time');
    console.log(dateObj, 'dateojb');
    Time
      .create({ time : strCurrentTime, dateobj: dateObj })
      .then(timeData => res.send(timeData))
      .catch(next);
  });
  next();
};
