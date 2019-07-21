module.exports = (req, res, next) => {
  // time in ms
  const startAt = Date.now();
  res.on('finish', () => {
    const totalTime = Date.now() - startAt;
    const currentTime = Date(Date.now());
    const strCurrentTime = currentTime.toString();
    console.log(strCurrentTime, 'Current time');
  });
  next();
};
