function getPromiseArray(arr) {
    // Map each element to a promise based on its value
    return arr.map(el => {
        if (Number.isInteger(el) && el > 0) {
            // Resolve after delay equal to element value
            return new Promise(resolve => setTimeout(() => resolve(el), el));
        } else {
            // Reject immediately for invalid values
            return Promise.reject(new Error(`${el} is not a positive integer`));
        }
    });
}

let promises1 = getPromiseArray([10, 30, 5, 20, 'a']);
Promise.all(promises1).then(a => console.log(`all: ${a}`))
.catch(e => console.log(`all: ${e.message}`)); // -> any: 10 
Promise.any(promises1).then(a => console.log(`any: ${a}`)).
catch(e => console.log(`any: ${e.message}`)); // -> all: a is not a positive integer