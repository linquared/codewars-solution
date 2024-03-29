// Santa has misplaced his list of gift to all the children, he has however a condensed version lying around.

// The integer for each child is such that the child should get the highest toy lower than or equal to that integer, and then, if there's more left, also get the highest toy lower than the rest and so on. Know that Santa never gives the same gift twice.

// For example, by Timmy's name is 160. This means that Timmy should get both a football and a teddy, because 128 + 32 = 160.

// You should help Santa by decoding his own list and recreate the missing list for him.Santa's elf wants the list sorted alphabetically by the toys, so you should help them as well and list the toys in a sorted order.

function gifts(number) {
    const gift = {
        1: 'Toy Soldier',
        2: 'Wooden Train',
        4: 'Hoop',
        8: 'Chess Board',
        16: 'Horse',
        32: 'Teddy',
        64: 'Lego',
        128: 'Football',
        256: 'Doll',
        512: "Rubik's Cube",
    }

    let max = 0

    if (number === 0) return []

    for (let toy in gift) {
        if (toy <= number) {
            max = Math.max(max, toy)
        }
    }

    return [gift[max]].concat(gifts(number - max)).sort();
}