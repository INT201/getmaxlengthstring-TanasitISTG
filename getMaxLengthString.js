const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let longest = 0;
  let longestString = [];
  if (arrayOfString === undefined || arrayOfString === null) {
    return undefined;
  }

  for (let string of arrayOfString) {
    if (string.length > longest) {
      longest = string.length;
      longestString = [string];
    } else if (string.length === longest) {
      longestString.push(string);
    }
  }
  return longestString;
}

console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']))

module.exports = getMaxLengthString
