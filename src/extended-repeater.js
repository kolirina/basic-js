const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Set default values for options if they are not provided
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options || {};

  // Create an array to hold repeated additions separated by additionSeparator
  const repeatedAddition = new Array(additionRepeatTimes)
    .fill(String(addition))
    .join(additionSeparator);

  // Create the final repeated string
  const repeatedString = new Array(repeatTimes)
    .fill(String(str) + repeatedAddition)
    .join(separator);

  return repeatedString;

}

module.exports = {
  repeater
};
