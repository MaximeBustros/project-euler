// n is number of digits;
const largestPalindromeProduct = (NUMBER_OF_DIGITS) => {
    let res = 0;
    let temp;
    for (let i = 1; i < Math.pow(10, NUMBER_OF_DIGITS); i++) {
        for (let j = 1; j < Math.pow(10, NUMBER_OF_DIGITS); j++) {
            temp = i*j;
            if(isPalindromeNumber(temp) && temp > res) {
                res = temp;
            }
        }
    }
    return res;
}

// Consists of inversing the number and then comparing values
const isPalindromeNumber = (num) => {
    let res = 0;
    let x = num;

    do {
        const lowestDigit = x % 10;
        res = res*10 + lowestDigit;
        x = Math.floor(x / 10);
    } while (x >= 1);

    if (num === res)
        return true;
    return false;
}

const NUMBER_OF_DIGITS = 2;
console.log(largestPalindromeProduct(NUMBER_OF_DIGITS));