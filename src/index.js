module.exports = function reverse (n) {
  let numStr = n.toString();
  let resultStr = '';
  for (let i = numStr.length - 1; i >= 0; i--) {
    resultStr += numStr[i];
  }
  let result = parseInt(resultStr, 10);
  return result;
}
