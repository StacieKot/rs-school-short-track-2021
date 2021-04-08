/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    arr.push([]);
  }
  for (let i = 0; i < arr.length; i++) {
    matrix.forEach((v) => arr[i].push(v[i]));
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let n = 0; n < arr[i].length; n++) {
      if (arr[i][n - 1] !== 0) {
        sum += arr[i][n];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
