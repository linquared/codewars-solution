// longest substring without repeating char. Given a string s, find the length of the longest substring without repeating characters.

const substrs = (strs) => {
    let max = 0
    let left = 0
    let right = 0
    let set = new Set()

    while (right < strs.length) {
        let letter = strs[right]
        if (!set.has(letter)) {
            set.add(letter)
            right++
            max = Math.max(max, set.size)
        } else {
            set.delete(strs[left])
            left++
        }
    }
    return max

}