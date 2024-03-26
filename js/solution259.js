// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
function removeDuplicateWords(s) {
    let str = s.split(' ')
    let set = new Set(str)

    return Array.from(set).join(' ')

}