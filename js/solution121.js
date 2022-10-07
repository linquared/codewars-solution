// 7kyu- Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
function rowWeights(array){
    if(array.length == 1){
        array.push(0)
    }else if(array.length == 2){
        array.push(0)
        array.push(0)
    }

    let team1 = []
    let team2 = []
    array.map((num, i) => i %2 == 0 ? team1.push(num) : team2.push(num))
    return [team1.reduce((a,b)=> a+b), team2.reduce((a,b)=> a+b)]
    
}