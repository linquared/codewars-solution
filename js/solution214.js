// 7kuu-Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
function numberJoy(n) {
    let sum = n.toString().split('').reduce((a, c) => Number(a) + Number(c))
    let reverse = Number(sum.toString().split('').reverse().join(''))
    return reverse * sum == n
}