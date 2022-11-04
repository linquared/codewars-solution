// 7kyu- Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
function bump(x){
    let counter = 0
    for(let i =0; i < x.length; i++){
        if(x[i]== 'n'){
            counter++
        }
    }
    if(counter > 15){
        return "Car Dead"
    }else {
        return "Woohoo!"
    }

}