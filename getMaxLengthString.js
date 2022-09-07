const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let longest
  for (let item of arrayOfString) {
    if (item.length > longest.length) {
      longest = length
    }
  }
  return longest
}

module.exports = getMaxLengthString
