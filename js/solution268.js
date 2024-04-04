// Winter is coming, you must prepare your ski holidays.The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

function numberOfPairs(gloves) {
    let pairs = {}
    let count = 0

    for (let side of gloves) {
        pairs[side] = (pairs[side] || 0) + 1
    }

    for (let color in pairs) {
        if (pairs[color] > 1) {
            count += Math.floor(pairs[color] / 2)
        }
    }

    return count
}