// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type

function isValid(s) {
    let map = {
        '[': ']',
        '{': '}',
        '(': ')'
    }
    const stack = []

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (map[char]) {
            stack.push(map[char])
        } else if (stack.length > 0 && char === stack[stack.length - 1]) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
}