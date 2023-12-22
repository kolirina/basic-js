const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  
    const atIndex = email.lastIndexOf('@');
    return email.slice(atIndex + 1);

  // const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  // const valid = re.test(email);
  // if (valid = false) {throw new Error}
  // else {return email.substring(email.indexOf('@')+3)}
}

module.exports = {
  getEmailDomain
};
