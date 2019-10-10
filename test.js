const chai = require('chai'), expect = chai.expect, should = chai.should();

const { checkCoupon } = require('./theCouponCode.js');

describe('checkCoupon', function () {
  it(`Should return true or false`, function () {
    checkCoupon('123','123','September 5, 2014','October 1, 2014').should.equal(true);
    checkCoupon('123a','123','September 5, 2014','October 1, 2014').should.equal(false);
    });
})
