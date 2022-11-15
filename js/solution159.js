// 7kyu-Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
var greet = function(name) {
    let CapName = name.split('').map((letter, i) => i ==0 ? letter.toUpperCase() : letter.toLowerCase()).join('')
    return `Hello ${CapName}!`
};