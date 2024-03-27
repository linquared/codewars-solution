// Your task is to return a number from a string.

var filterString = function (value) {
    let n = ''

    for (let i = 0; i < value.length; i++) {
        if (value[i].charCodeAt() >= 48 && value[i].charCodeAt() < 58) {
            n += value[i]
        }
    }

    return Number(n)
}