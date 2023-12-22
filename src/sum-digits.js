const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {



let sum = 0;
let k = n.toString();

while (k.length > 1) {
  sum = 0;
  for (let i = 0; i < k.length; i++) {
    sum += parseInt(k[i]);
  }
  k = sum.toString();
}

return sum;
}


module.exports = {
  getSumOfDigits
};



