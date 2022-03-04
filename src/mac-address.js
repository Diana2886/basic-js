const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  function isHex(h) {
    var a = parseInt(h, 16);
    return (a.toString(16).padStart(2, '0') === h.toLowerCase());
  }
  let arr = n.split('-');
  if (arr.length !== 6) return false;
  for (let item of arr) {
    if (!isHex(item)) return false;
  }
  return true;
}

module.exports = {
  isMAC48Address
};
