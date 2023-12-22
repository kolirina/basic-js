const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    sampleActivity = parseFloat(sampleActivity);
  }

  if (
    isNaN(sampleActivity) || // Check if the input is a valid number
    sampleActivity <= 0 || // Check if the activity is greater than zero
    sampleActivity > MODERN_ACTIVITY || // Check if the activity is within the valid range
    typeof sampleActivity !== 'number' // Check if the input is a number
  ) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD; // Calculate the decay constant
  const age = Math.log(MODERN_ACTIVITY / sampleActivity) / k; // Calculate the age

  return Math.ceil(age); // Return the estimated age rounded up to the nearest whole number
}

module.exports = {
  dateSample
};