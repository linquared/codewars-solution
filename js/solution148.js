// 7kyu - Given an array of ones and zeroes, convert the equivalent binary value to an integer.
const binaryArrayToNumber = arr => {
    const binary = arr.join('')
    return parseInt(binary, 2)
  };