function volumeOfBox(sizes) {
    return sizes.width * sizes.length * sizes.height;
}

console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));