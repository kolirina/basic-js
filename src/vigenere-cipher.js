const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

// class VigenereCipheringMachine {
//   constructor(reverse = true) {
//     this.reverse = reverse;
//   }

//   encrypt(message, key) {
//     if (!message || !key || typeof message !== 'string' || typeof key !== 'string' || message.length === 0 || key.length === 0) {
//       throw new Error('Both message and key arguments are required and must be non-empty strings.');
//     }

//     let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let result = '';

//     for (let i = 0, j = 0; i < message.length; i++) {
//       let messageChar = message[i].toUpperCase();
//       if (alphabet.includes(messageChar)) {
//         let keyChar = key[j % key.length].toUpperCase();
//         let shift = this.reverse ? alphabet.indexOf(keyChar) : alphabet.length - alphabet.indexOf(keyChar);
//         let encryptedChar = alphabet[(alphabet.indexOf(messageChar) + shift) % alphabet.length];
//         result += encryptedChar;
//         j++;
//       } else {
//         result += messageChar;
//       }
//     }

//     return result;
//   }

//   decrypt(encrMessage, key) {
//     if (!encrMessage || !key || typeof encrMessage !== 'string' || typeof key !== 'string' || encrMessage.length === 0 || key.length === 0) {
//       throw new Error('Both encrMessage and key arguments are required and must be non-empty strings.');
//     }

//     let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let result = '';

//     for (let i = 0, j = 0; i < encrMessage.length; i++) {
//       let encrMessageChar = encrMessage[i].toUpperCase();
//       if (alphabet.includes(encrMessageChar)) {
//         let keyChar = key[j % key.length].toUpperCase();
//         let shift = this.reverse ? alphabet.length - alphabet.indexOf(keyChar) : alphabet.indexOf(keyChar);
//         let decryptedChar = alphabet[(alphabet.indexOf(encrMessageChar) + alphabet.length - shift) % alphabet.length];
//         result += decryptedChar;
//         j++;
//       } else {
//         result += encrMessageChar;
//       }
//     }

//     return result;
//   }
// }

// module.exports = {
//   VigenereCipheringMachine
// };


class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) 
  {
    if (typeof message !== 'string' || typeof key !== 'string' || message.length === 0 || key.length === 0) {
      throw new Error('Both message and key arguments are required and must be non-empty strings.');
    }

    else {
  

    
    let splMes = message.split('');
    let splKey = key.split('');
   
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
     'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
     let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
     'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'P', 'Q', 'R', 'S',
     'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let encoded = [];
    while (splKey.length < splMes.length) {
      splKey = splKey.concat(splKey);
    }
    for (let i = 0; i < splMes.length; i++) {
       let encodedSymbol;
    if (letters.includes(splMes[i])) {
      let sumIndex = alphabet.indexOf(splMes[i].toUpperCase()) + alphabet.indexOf(splKey[i].toUpperCase());
      if (sumIndex < 26) {
      encodedSymbol = alphabet[sumIndex];}
      else {encodedSymbol = alphabet[sumIndex - 26];
        }
    }
      else {encodedSymbol = splMes[i]; 
        splKey.splice(i, 0, " ");};


      encoded.push(encodedSymbol);
      
    }
return encoded.join('')
    //return this.reverse ? encoded.reverse().join('') : encoded.join('');
    }

  }
  decrypt(encrMessage, key) {

    
      if (typeof encrMessage !== 'string' || typeof key !== 'string' || encrMessage.length === 0 || key.length === 0) {
        throw new Error('Both message and key arguments are required and must be non-empty strings.');
      }
      else {
    let splEncrMes = encrMessage.split('');
    let splKey = key.split('');
   
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
     'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
     let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
     'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'P', 'Q', 'R', 'S',
     'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let message = [];

    
    while (splKey.length < splEncrMes.length) {
      splKey = splKey.concat(splKey);
    }
    for (let i = 0; i < splEncrMes.length; i++) {
       let mesSymbol;
    if (letters.includes(splEncrMes[i])) {
      let difIndex = alphabet.indexOf(splEncrMes[i].toUpperCase()) - alphabet.indexOf(splKey[i].toUpperCase());
      if (difIndex >= 0) {
      mesSymbol = alphabet[difIndex];}
      else {mesSymbol = alphabet[difIndex + 26];
        }
    }
      else {mesSymbol = splEncrMes[i]; 
        splKey.splice(i, 0, " ");};


      message.push(mesSymbol);
      



    }
    return message.join('');
    // return this.reverse ? message.reverse().join('') : message.join('');
}
  }
}

module.exports = {
  VigenereCipheringMachine
};
