// For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array

// 1
function flatten(...arr) {

    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            let result = flatten(...curr);
            acc.push(...result);
        } else {
            acc.push(curr);
        }
        return acc
    }, []);

}


//2
function flatten(...stack) {
    const flat = [];

    while (stack.length) {
        const elem = stack.pop();
        if (Array.isArray(elem)) {
            stack.push(...elem);
            continue;
        }
        flat.unshift(elem);

    }

    return flat;
}



console.log(flatten(1, [2, 3], 4, 5, [6, [7]]));    // [1, 2, 3, 4, 5, 6, 7]
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']])); // ['a', 'b', 2, 3, null, 4, 'c']