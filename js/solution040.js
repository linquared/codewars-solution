// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
    return array.reduce((pre, curr) => (pre + curr)) / array.length;
  }
  