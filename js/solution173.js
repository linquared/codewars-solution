// 7kyu- write a function determine how many arguments there are in a function
function args_count(){
    return arguments.length
}

// --OR--
function args_count(...args){
    return args.length
}
