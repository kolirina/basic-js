const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */


function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let s2Copy = s2.slice(); // Create a copy of s2

  for (let i = 0; i < s1.length; i++) {
    const index = s2Copy.indexOf(s1[i]); // Check if character from s1 exists in s2Copy
    if (index !== -1) {
      count++;
      s2Copy = s2Copy.slice(0, index) + s2Copy.slice(index + 1); // Remove the found character
    }
  }

  return count;
}




//   let count = 0;
//   for (let i = 0; i < s1.length; i++) {
//     for (let j = 0; j < s2.length; j++) {
//       if (s1[i] === s2[j]) {
//         count ++;
//         s2 = s2.slice(0,j) + s2.slice(j+1);
//       }

// }
//   }
//   return count;
// }

module.exports = {
  getCommonCharacterCount
};
