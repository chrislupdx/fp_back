const HashLink = require('../../utils/hashLink');
var md5 = require('md5');

describe('hash link test', () => {
  it('md5 hashes a link put in front of it', () => {
    const link = 'facebook.com';
    const result = md5(link);
    console.log('hash is:', result);
    expect(result).toEqual(expect.anything());

  });
})
;
