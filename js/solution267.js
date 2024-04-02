// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
const orderedCount = function (text) {

    if (text.length === 0) return [];
    let hash = {}
    let result = []
    let set = new Set()

    for (const l of text) {
        hash[l] = (hash[l] || 0) + 1
        if (!set.has(l)) {
            set.add(l)
        }
    }
    for (let n of set) {
        if (hash[n]) {
            result.push([n, hash[n]])
        }
    }

    return result
}
