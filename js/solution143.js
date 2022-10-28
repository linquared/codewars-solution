// 7kyu- You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
function mxdiflg(a1, a2) {
    let a2First = Math.max(...a2.map(word => word.length)) - Math.min(...a1.map(word => word.length))
    let a1First = Math.max(...a1.map(word => word.length)) - Math.min(...a2.map(word => word.length))
    if(a1 == '' || a2 == ''){
        return -1
    } else {
        return a2First > a1First ? a2First : a1First
    }
}