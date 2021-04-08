/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArr = str.split('');
  let storage = {};
  let encodeStr = '';
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] in storage) {
      storage[strArr[i]]++;
    } else {
      const k = Object.keys(storage);
      if (k[0]) {
        encodeStr = storage[k[0]] === 1 ? `${encodeStr}${k[0]}` : `${encodeStr}${storage[k[0]]}${k[0]}`;
      }
      storage = {};
      storage[strArr[i]] = 1;
    }
  }
  const k = Object.keys(storage);
  if (k[0]) {
    encodeStr = storage[k[0]] === 1 ? `${encodeStr}${k[0]}` : `${encodeStr}${storage[k[0]]}${k[0]}`;
  }
  return encodeStr;
}

module.exports = encodeLine;
