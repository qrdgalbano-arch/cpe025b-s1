function getRandomSet(m, n, repeatable, sorted) {
    let result = new Set();

    // If repeatable, allow duplicates by using an array instead
    if (repeatable) {
        let arr = [];
        while (arr.length < m) {
            arr.push(Math.floor(Math.random() * (n + 1)));
        }
        if (sorted) arr.sort((a, b) => a - b);
        return arr;
    }

    // No repeats: use Set to ensure uniqueness
    while (result.size < m) {
        result.add(Math.floor(Math.random() * (n + 1)));
    }

    let arr = [...result];
    if (sorted) arr.sort((a, b) => a - b);
    return arr;
}

console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));