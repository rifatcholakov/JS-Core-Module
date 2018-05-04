let expect = require("chai").expect;
let isSymmetric = require('../p05_CheckForSymmetry/check-for-symmetry.js').isSymmetric;

describe('isSymmetric(arr) check if array is symmetric', function () {
   it('Should not be an array', function () {
       expect(isSymmetric(3)).to.be.false;
   });

   it('[1, 3, 1] should be symmetric', function () {
       expect(isSymmetric([1, 3, 1])).to.be.true;
   });

   it('[1, 3, 2] should not be symmetric', function () {
       expect(isSymmetric([1, 3, 2])).to.be.false;
   });

   it('[] should be symmetric', function () {
       expect(isSymmetric([])).to.be.true;
   });

   it('[2, "test", "test", 2] should be symmetric', function () {
       expect(isSymmetric([2, 'test', 'test', 2])).to.be.true;
   });

   it('Should return true for [5, "hi", {a:5}, new Date(), {a:5}, "hi", 5]', function () {
     expect(isSymmetric([5, 'hi', {a:5}, new Date(), {a:5}, 'hi', 5])).to.be.true;
   });
});