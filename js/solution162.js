// 7kyu- Find the number with the most digits. If two numbers in the argument array have the same number of digits, return the first one in the array.
function findLongest(array){
    let newArr = array.join(' ').split(' ').map(num => [num, num.length])
    return Number(newArr.sort((a, b) => b[1] -a[1])[0][0])
}