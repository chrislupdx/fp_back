module.exports = (req, res, next) => {
  // time in ms
  res.on('finish', () => {
    const dateObj = Date.now();
    const currentPreStringTime = Date(Date.now());
    const strCurrentTime = currentPreStringTime.toString();
    console.log(strCurrentTime, 'Current time');
    console.log(dateObj, 'dateojb');
  });
  next();
};
