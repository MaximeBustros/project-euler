/*  
solution would consist of finding factors first then checking if they're prime
because calculating prime numbers first can lead to worse performance
*/

const largestPrimeFactor = (n) => {
    // We start with the largest possible factor that we can find which is Square root of n;
    for (let i = Math.floor(Math.sqrt(n)); i > 2; i--) {
        // if i is factor of n
        if (checkIfFactor(i,n)) {
            if (checkIfPrime(i)) {
                // return first largest prime number found
                return i;
            }
        }
    }
    return "No prime factors";
}

const checkIfFactor = (i, n) => {
    return n % i === 0;
}

const checkIfPrime = (num) => {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(largestPrimeFactor(600851475143));