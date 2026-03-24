class MyIterable {
    #data = [];

    // Add element only if not already present
    add(el) {
        if (!this.has(el)) this.#data.push(el);
    }

    // Check if element exists
    has(el) {
        return this.#data.includes(el);
    }

    // Delete element from collection
    del(el) {
        this.#data = this.#data.filter(e => e !== el);
    }

    // Return count of elements
    get length() {
        return this.#data.length;
    }

    // Generator to enable iteration
    *[Symbol.iterator]() {
        for (let el of this.#data) yield el;
    }
}

let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);

console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5