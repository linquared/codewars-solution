// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

function count(string) {
    if (string === null) return {};
    let obj = {}

    for (let letter of string) {
        obj[letter] = (obj[letter] || 0) + 1
    }
    return obj
}