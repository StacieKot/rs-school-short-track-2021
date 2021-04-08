/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  const nArr = n.toString().split('');
  const digitArr = [];
  nArr.forEach((v) => digitArr.push(Number(v)));

  function getArrSum(arr) {
    let digitSum = 0;
    for (let i = 0; i < arr.length; i++) {
      digitSum += arr[i];
    }
    return digitSum;
  }
  let sum = getArrSum(digitArr);
  if (sum > 9) {
    sum = getSumOfDigits(sum);
  }
  return sum;
}

module.exports = getSumOfDigits;
