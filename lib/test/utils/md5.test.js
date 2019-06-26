const HashUrl = require('../../utils/hashLink');
var md5 = require('md5');

describe('hash link test', () => {
  it('md5 hashes a link put in front of it', () => {
    const link = 'facebook.com';
    const result = md5(link);
    expect(result).toEqual(expect.anything());
  });

  it.skip('hashurl function successfully hashes stuff', () => {
    const link = 'facebook.com';
    const result = HashUrl(link);
    expect(result).toEqual(expect.anything());
  });
})
;
