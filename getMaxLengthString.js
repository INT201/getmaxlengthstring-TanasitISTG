const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  // let longest
  // for (let item of arrayOfString) {
  //   if (item.length > longest.length) {
  //       longest = item
  //   }
  //   else {
  //     console.log(undefined)
  //   }
  // }
  // console.log(longest)
  let longest
  for (let item of arrayOfString) {
    if (item.length > longest.length) {
      longest = item
    }
    return longest
  }
  if (arrayOfString.includes(undefined) | arrayOfString.includes(null)) {
    return undefined
  }
}

module.exports = getMaxLengthString
