// 7kyu- Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((a,c) => Number(a) + Number(c))
}

