// 7kyu- Write a function which takes a list of strings and returns each line prepended by the correct number.
var number=function(array){
    return array.map((let, index) => index + 1 + ': ' + let)
}