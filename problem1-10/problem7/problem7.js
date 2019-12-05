const findKthPrimeNumber = (k) => {
    let count = 1;
    while (k > 0) {
        count++;
        if (isPrime(count)) {
            k--;
        }
    }
    return count;
}

const isPrime = (n) => {
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let K = 6;
console.log(`the ${K}th prime number is: ${findKthPrimeNumber(K)}`);

K = 10001;
console.log(`the ${K}th prime number is: ${findKthPrimeNumber(K)}`);