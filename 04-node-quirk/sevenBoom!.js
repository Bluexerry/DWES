function sevenBoom(arr = []) {
    if (arr.join('').includes('7')) {
        return "Boom!"
    } else {
        return "Not Boom!"
    }
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));