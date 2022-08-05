// 7kyu Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

var isAnagram = function(test, original) {
  return (test.toLowerCase().split('').sort().join('')) == (original.toLowerCase().split('').sort().join('')) ? true : false
  
};