// 7kyu As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
function gimme (triplet) {
  const newTrip = triplet
    .map((num, i) => [num, i])
    .sort((a,b) => a[0] - b[0])
  return newTrip
}

function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}
