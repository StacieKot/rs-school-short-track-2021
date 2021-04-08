/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const numberStr = n.toString();
  const numberArr = [];
  for (let i = 0; i < numberStr.length; i++) {
    numberArr.push(Number(numberStr[i]));
  }
  numberArr.sort((a, b) => a - b);

  const i = numberStr.indexOf(numberArr[0]);

  return Number(numberStr.slice(0, i) + numberStr.slice(i + 1));
}

module.exports = deleteDigit;
