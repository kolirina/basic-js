const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function isFakeDate(date) {
  if (!(date instanceof Date)) {
    return true; // Not a Date object
  }

  if (isNaN(date.getTime())) {
    return true; // Invalid Date object
  }

  const year = date.getFullYear();
  const dateString = date.toString();
  if (!dateString.includes(year)) {
    return true; // Inconsistent date string representation
  }

  return false; // Valid Date object
}

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (isFakeDate(date)) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();

  if (month === 11 || month === 0 || month === 1) {
    return 'winter';
  } else if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else {
    return 'autumn';
  }
}
  module.exports = {
    getSeason
  };

