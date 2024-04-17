
function isPrime(num) {
    if (num < 1) return false;
    let count = 0;
    for (let i = num; i >= 0; i--) {
        if (num % i === 0) {
            count++;
        }
    }
    return count > 2 ? 'The number is composite' : "The number is prime";
}

console.log(isPrime(13));