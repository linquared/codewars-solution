// 6kyu- Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
    let result = []
    if (typeof iterable == String){
        let newstr = iterable.split('')
        for(let i = 0; i < newstr.length; i++){
        if(newstr[i] != newstr[i+1]){
            result.push(newstr[i])
        }
    }
    return result

    } else {
        for(let i = 0; i < iterable.length; i++){
            if(iterable[i] != iterable[i+1]){
                result.push(iterable[i])
            }
        }
        return result
        } 
    

}