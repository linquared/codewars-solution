// 8kyu array- Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function arrayMadness(a, b) {
    return a.map(num => Math.pow(num, 2)).reduce((a,c) => a + c) > b.map(num => Math.pow(num,3)).reduce((a,c) => a + c) ? true :false
  
  }