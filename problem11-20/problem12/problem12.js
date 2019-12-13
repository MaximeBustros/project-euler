const highlyDivisibleTriangularNumber = (requiredNumberOfFactors) => {
    let numberOfDigitsFound = 0;
    let count = 1;
    let triangleNumber = 0;

    while(numberOfDigitsFound < requiredNumberOfFactors) {
        triangleNumber += count;
        numberOfDigitsFound = calculateNumberOfFactors(triangleNumber);
        count++
    }
    return triangleNumber;
}

// Iterative method
const calculateNumberOfFactors = (n) => {
    let numberOfFactors = 2;
    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) {
            numberOfFactors++;
        }
    }
    return numberOfFactors;
}


const NUMBER_OF_DIGITS = 500;
console.log(highlyDivisibleTriangularNumber(200));