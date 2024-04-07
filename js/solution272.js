// Modify the kebabize function so that it converts a camel case string into a kebab case.

function kebabize(str) {
    let lowerStr = str.toLowerCase()
    let result = ''

    for (let i = 0; i < lowerStr.length; i++) {
        if (str[i] !== lowerStr[i]) {
            result += '-'
        }
        result += lowerStr[i]
    }

    if (result[0] === '-') {
        return result.slice(1, result.length).replace(/[0-9]+/g, '')
    } else {
        return result.replace(/[0-9]+/g, '')
    }
}
