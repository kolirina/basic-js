const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

    const occurrences = {};

    for (let i = 0; i < names.length; i++) {
        if (occurrences[names[i]] === undefined) {
            occurrences[names[i]] = 1;
        } else {
            let newName = `${names[i]}(${occurrences[names[i]]})`;
            while (occurrences[newName] !== undefined) {
                occurrences[names[i]]++;
                newName = `${names[i]}(${occurrences[names[i]]})`;
            }
            names[i] = newName;
            occurrences[newName] = 1;
        }
    }

    return names;
}

//     for (i = 1; i < names.length; i++) {
//       for (j = 1; j < i; j++)
//         if (names[i] === names[i-j]) {
//           let k = 1;
//           names[i] = (names[i] + '(' + k + ')')
//           k++;
//         }
//     }
//     return names;
// }

module.exports = {
  renameFiles
};
