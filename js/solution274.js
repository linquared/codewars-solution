// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
    if (Object.keys(recipe).length > Object.keys(available).length) return 0

    let count = []

    for (let ingre in recipe) {
        if (recipe[ingre] === available[ingre]) {
            count.push(1)
        } else if (recipe[ingre] < available[ingre]) {
            count.push(Math.floor(available[ingre] / recipe[ingre]))
        } else {
            return 0
        }
    }

    return Math.min(...count)
}
