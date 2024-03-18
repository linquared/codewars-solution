// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

function twoOldestAges(ages) {
    let first = 0
    let sec = 0

    for (let i = 0; i < ages.length; i++) {
        let temp = ages[i]
        first = Math.max(first, temp)
    }

    let index = ages.indexOf(first)
    ages.splice(index, 1)

    for (let i = 0; i < ages.length; i++) {
        let temp = ages[i]
        sec = Math.max(sec, temp)

    }

    return [sec, first]

}