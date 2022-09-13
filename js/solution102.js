// 7kyu- An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. 
function isIsogram(str){
    let count = 0
    let arr = str.toLowerCase().split('').sort()

    for(let i =0; i < arr.length; i++){
        if(arr[i] == arr[i+1]){
            count++
        }
    }
   return count == 0 ? true : false
}
