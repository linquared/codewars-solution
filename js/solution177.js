// 6kyu- Given a string of words, you need to find the highest scoring word.
function high(x){
    let sums = []
    let result = []
    let s = x.split(' ').map(word => word.split(''))
    for(let i = 0; i< s.length; i++){
        let sum = 0
        for(let j=0; j<s[i].length; j++){
            sum+= s[i][j].charCodeAt()-96
        }
        result.push(sum)
    }
    return s[result.indexOf(Math.max(...result))].join('')
}
