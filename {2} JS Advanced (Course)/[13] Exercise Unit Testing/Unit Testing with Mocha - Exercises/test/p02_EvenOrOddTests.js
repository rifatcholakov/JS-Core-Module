let expect = require('chai').expect;
let isOddOrEven = require('../p02_EvenOrOdd/even-or-odd.js').isOddOrEven;

describe('isOddOrEven', function () {
   it('with number parameter, should return undefined', function () {
      expect(isOddOrEven(13)).to.equal(undefined, 'Function did not return the correct result!');
   });

   it('with a object parameter, should return undefined', function () {
      expect(isOddOrEven({})).to.equal(undefined, 'Function did not return the correct result!');
   });

   it('with and even length string, should return correct result', function () {
      expect(isOddOrEven('roar')).to.equal('even', 'Function did not return the correct result!');
   });

   it('with an odd length string, should return correct result', function () {
      expect(isOddOrEven('pesho')).to.equal('odd', 'Function did not return correct result!');
   });
});