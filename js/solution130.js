// 8kyu- Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
function strCount(str, letter){  
    let count = 0
    for(i = 0; i < str.length; i++){
        if (str[i] == letter){
            count++
        }
    }
    return count
}