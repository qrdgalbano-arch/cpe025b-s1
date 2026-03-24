function myDecorator(fn) {
    let cache = [];

    return function(...args) {
        // Check if these arguments were used before
        let key = args.join(',');
        if (cache.includes(key)) {
            console.log(`arguments already used: ${key}`);
            return;
        }
        cache.push(key);
        return fn(...args);
    };
}

let sum = function(...args) {
    let retVal = 0;
    for(let arg of args) {
        retVal += arg;
    }
    return retVal;
}
let dfn = myDecorator(sum);
dfn(2, 3, 4);
dfn(4, 5);
dfn(2, 3, 4); // -> arguments already used: 2,3,4
dfn(4, 5); // -> arguments already used: 4,5