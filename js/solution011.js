// 8Kyu
function findDifference(a, b) {
   return Math.abs((a.reduce((a, c) => a * c)) - (b.reduce((a, c) => a * c)))
}

// 7kyu
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
};

