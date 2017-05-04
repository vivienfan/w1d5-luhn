var luhn = require('../lib/index');
var assert = require('chai').assert;

describe("Luhn Algorithm", function() {
  it("79927398710 is not a valid card number", function() {
    var result = luhn.check(79927398710);
    assert.isFalse(result);
  });

  it("79927398715 is not a valid card number", function() {
    var result = luhn.check(79927398715);
    assert.isFalse(result);
  });

  it("79927398719 is not a valid card number", function() {
    var result = luhn.check(79927398719);
    assert.isFalse(result);
  });

  it("79927398713 is a valid card number", function() {
    var result = luhn.check(79927398713);
    assert.isTrue(result);
  });
});