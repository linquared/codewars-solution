// 6kyu-There is an array with some numbers. All numbers are equal except for one. Try to find it!
function findUniq(arr) {
    let newarr = arr.sort((a,b) => a -b)
    if(newarr[0] == newarr[1]){
        return newarr[newarr.length-1]
    } else {
        return newarr[0]
    }
}