// 8kyu- Define a function that removes duplicates from an array of numbers and returns it as a result. order of elements has to stay the same
function distinct(a) {
    return [...new Set(a)]
}