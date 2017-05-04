module.exports = {
  digitsOf: function(number) {
    var arr = [];
    for(var digit of number.toString()) {
      arr.push(digit * 1);
    }
    return arr;
  },

  getOddDigits: function(digits) {
    var arr = [];
    for (var i = digits.length - 1; i >= 0; i -= 2) {
      arr.push(digits[i]);
    }
    return arr;
  },

  getEvenDigits: function(digits) {
    var arr = [];
    for (var i = digits.length - 2; i >= 0; i -= 2) {
      arr.push(digits[i]);
    }
    return arr;
  },

  checksum: function(number) {
    var digits = this.digitsOf(number);
    var odd_digits = this.getOddDigits(digits);
    var even_digits = this.getEvenDigits(digits);
    var total = odd_digits.reduce(function(a, b) {
      return a + b;
    });
    for (var digit of even_digits) {
      var tmp = this.digitsOf(2 * digit);
      total += tmp.reduce(function(a, b) {
        return a + b;
      });
    }
    return total % 10;
  },

  check: function(number) {
    return this.checksum(number) === 0;
  }
};