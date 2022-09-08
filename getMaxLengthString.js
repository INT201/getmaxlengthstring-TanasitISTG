const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let longest = 0;
  let longestString = [];
  if (arrayOfString === undefined || arrayOfString === null) {
    return undefined;
  }
  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i].length > longest) {
      longest = arrayOfString[i].length;
    }
  }
  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i].length === longest) {
      longestString.push(arrayOfString[i]);
    }
  }
  return longestString;
}

module.exports = getMaxLengthString
