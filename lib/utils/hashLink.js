const md5 = require('md5');

function HashUrl(link) {
  const newHash = md5(link);
  console.log('newhash', newHash);
  return newHash;
}

module.exports = {
  HashUrl
};
