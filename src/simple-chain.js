const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * '( 1 )~~( 2 )~~( 3 )'
 * 
 */

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value !== undefined ? value : ''} )`);
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position <= 0 ||
      position > this.chain.length ||
      Math.floor(position) !== position
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};
// const chainMaker = {
//   let chain;
//   getLength(chain) {
//     let splitted = chain.split('');
//     let length = 0;
//     for (i = 0; i < splitted.length; i++) {
//       if (/^\d+$/.test(splitted[i])) {length +=1}
//     }
//     return length;
//   },
//   addLink(value) {
//     chain = `${chain}( ${value} )~~`;
//   },
//   removeLink(position) {
    
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };

module.exports = {
  chainMaker
};
