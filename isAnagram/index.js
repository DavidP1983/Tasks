
function transformData(rest) {
    const str1 = rest[0].toLowerCase().replace(/\s/g, '');
    const str2 = rest[1].toLowerCase().replace(/\s/g, '');
    return [str1, str2];
}

function isAnagram(...rest) {
    if (!rest.every((item) => (typeof item === "string"))) {
        return "Accept Only string"
    }

    const [str1, str2] = transformData(rest);

    // return [...new Set(str1.split('').concat(str2.split('')))].length === str1.length
    return str1.split('').every((item) => str2.split('').includes(item))

}

console.log(isAnagram("ca1t", "tac1"));

