const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      // Check if the current element is not below a 0
      let isAboveZero = true;
      for (let k = 0; k < i; k++) {
        if (matrix[k][j] === 0) {
          isAboveZero = false;
          break;
        }
      }

      // If the current element is not below a 0, add it to the result
      if (isAboveZero) {
        result += matrix[i][j];
      }
    }
  }
  return result;
}


//   let result = 0;
//   for (i = 0; i < matrix.length; i++) {
//     for (j = 0; j < matrix[0].length; j++) {
//       while (matrix[i][j] > 0) {
//         result += matrix[i][j];
//       }
//     }
//   }
//   return result;
// }

module.exports = {
  getMatrixElementsSum
};
