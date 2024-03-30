// For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array

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

console.log(flatten(1, [2, 3], 4, 5, [6, [7]]));    // [1, 2, 3, 4, 5, 6, 7]
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']])); // ['a', 'b', 2, 3, null, 4, 'c']