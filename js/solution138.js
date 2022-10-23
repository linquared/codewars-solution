// 7kyu- Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

function alphabetWar(fight){
    let arr1 = [['w', 4],['p', 3], ['b', 2], ['s', 1]]
    let arr2 = [['m', 4],['q', 3], ['d', 2], ['z', 1]]
    let left = []
    let right = []
    let newfight = fight.split('')

    
    for (let i = 0; i < arr1.length; i++){
        for(let j = 0; j< newfight.length; j++)
        if(arr1[i].includes(newfight[j])){
            left.push(arr1[i])
        }
    } 

    for (let i = 0; i < arr2.length; i++){
        for(let j = 0; j< newfight.length; j++)
        if(arr2[i].includes(newfight[j])){
            right.push(arr2[i])
        }
    } 
    
    left = left.map(([num, i]) => [i]).reduce((a, c) => Number(a) + Number(c),0)
    right = right.map(([num, i]) => [i]).reduce((a, c) => Number(a) + Number(c),0)

    if(left > right){
        return "Left side wins!"
    }else if(right > left){
        return "Right side wins!"
    }else{
        return "Let's fight again!";
    }
}