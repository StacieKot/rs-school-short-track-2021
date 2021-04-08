/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortArr = arr;
  let count = 0;
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] !== -1) {
      let nextElem = sortArr[i + 1];
      let char = i;
      while (nextElem === -1) {
        char++;
        nextElem = sortArr[char + 1];
      }
      if (sortArr[i] > nextElem) {
        const elem = nextElem;
        sortArr[char + 1] = sortArr[i];
        sortArr[i] = elem;
        count++;
      }
    }
    if (count !== 0) {
      sortArr = sortByHeight(sortArr);
    }
  }
  return sortArr;
}

module.exports = sortByHeight;
