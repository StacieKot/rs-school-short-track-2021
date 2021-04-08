/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const storage = {};
  const domain = [];
  for (let i = 0; i < domains.length; i++) {
    domain.push(domains[i].split('.').reverse());
  }
  for (let i = 0; i < domain.length; i++) {
    let dns = '';
    for (let n = 0; n < domain[i].length; n++) {
      dns = `${dns}.${domain[i][n]}`;
      if (dns in storage) {
        storage[dns]++;
      } else {
        storage[dns] = 1;
      }
    }
  }
  return storage;
}

module.exports = getDNSStats;
