const sumOfPrimesUnder = (value) => {
    let count = 3;
    sum = 2;
    while (count < value) {
        if(isPrime(count)) {
            sum += count;
        }
        count += 2;
    }
    return sum;
}

const isPrime = (value) => {
    for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}


let value = 10;
console.log(`for values under: ${value}, sum of primes = ${sumOfPrimesUnder(value)}`);

value = 2000000;
console.log(`for values under: ${value}, sum of primes = ${sumOfPrimesUnder(value)}`);