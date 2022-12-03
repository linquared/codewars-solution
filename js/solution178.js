// 6kyu - Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
function digitalRoot(n) {

    if(n < 10){
        return n
    }else {
        return digitalRoot(
            n.toString().split('').reduce((a,c)=> Number(a)+ Number(c))
        )
    }

}