// 8kyu-Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
function addLength(str) {
    return str.split(' ').map(word => word + ' ' + word.length)
}

