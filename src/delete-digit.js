const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const numStr = n.toString(); // Convert the number to a string
    let max = 0;
  
    for (let i = 0; i < numStr.length; i++) {
      const currentNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1)); // Exclude one digit at a time
      if (currentNum > max) {
        max = currentNum;
      }
    }
  
    return max;
  }
  

module.exports = {
  deleteDigit
};
