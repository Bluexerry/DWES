/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    const sports = {}
    const toys = {}
    inventory.map((item) => {
        const { name, quantity, category } = item
        if (category === 'toys') {
            if (toys[name]) {
                toys[name] += quantity
            } else {
                toys[name] = quantity
            }
        } else if (category === 'sports') {
            if (sports[name]) {
                sports[name] += quantity
            } else {
                sports[name] = quantity
            }
        }
    })
    return {}
}

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventory)

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
]

organizeInventory(inventory2)

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }