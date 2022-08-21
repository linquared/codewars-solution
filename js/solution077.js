// 7kyu- Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
function toWeirdCase(string){
 return string
   .split(' ')
   .map(word => word.split('').map((word, index) => index %2 == 0 ? word.toUpperCase() : word.toLowerCase()).join('')).join(' ')
    }