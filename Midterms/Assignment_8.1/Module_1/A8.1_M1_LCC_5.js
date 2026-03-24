function deepComp(a, b) {
    // Base case: if either is not an object or is null, compare directly
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
        return a === b;
    }
    // Get enumerable keys of both objects
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
    // Check if both have the same number of keys
    if (keysA.length !== keysB.length) return false;
    // Recursively compare each property
    for (let key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!deepComp(a[key], b[key])) return false;
    }
    return true;
}

let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false