function sumMix(x){
    const numX = x.map(str => {
        return Number(str);
    })
    const sum = numX.reduce((acc, curr) => acc + curr)
    return sum
}

alert('he')