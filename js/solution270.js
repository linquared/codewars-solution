// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

function getOrder(n) {
    let menu = {
        'burger': 0,
        'fries': 0,
        'chicken': 0,
        'pizza': 0,
        'sandwich': 0,
        'onionrings': 0,
        'milkshake': 0,
        'coke': 0,
    }
    let left = 0
    let order = []

    for (let right = 0; right < n.length; right++) {
        if (menu[n.slice(left, right + 1)] != undefined) {
            menu[n.slice(left, right + 1)]++
            left = right + 1
        }
    }

    for (let item in menu) {
        if (menu[item] >= 1) {
            let i = item[0].toUpperCase() + item.slice(1, item[item.length])
            order.push(`${i} `.repeat(menu[item]).trim())

        }
    }

    return order.join(' ')
}