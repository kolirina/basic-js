const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const transformedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++; // Skip the next element
    } else if (arr[i] === '--discard-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        transformedArray.pop(); // Remove the previous element
      }
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        transformedArray.push(arr[i + 1]); // Duplicate the next element
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        transformedArray.push(arr[i - 1]); // Duplicate the previous element
      }
    } else {
      transformedArray.push(arr[i]); // Add non-control sequence elements
    }
  }

  return transformedArray;

//   let newArr = [];
//   if (Array.isArray(arr)) {
//   for (i = 0; i < arr.length; i++) {
// // --discard-next excludes the next element of the array from the transformed array.
// // --discard-prev excludes the previous element of the array from the transformed array.
// // --double-next duplicates the next element of the array in the transformed array.
// // --double-prev duplicates the previous element of the array in the transformed array.

// if (arr[i] === '--discard-next') {
//   arr === arr.splice(i, 2)
// }
// if (arr[i] === '--discard-prev') {
//   arr === arr.splice(i-1, 2)
// }
// if (arr[i] === '--double-next') {
//   arr === arr.splice(i, 1, i+1)
// }
// if (arr[i] === '--double-prev') {
//   arr === arr.splice(i, 1, i-1)


//   }
// }
//   }
// return arr;
}
module.exports = {
  transform
};
