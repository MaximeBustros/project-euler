const smallestMultiple = (from, to) => {
    let count = 1;

    while (!isEvenlyDivisible(count,from, to)) { 
        count++;
    }
    return count;
}

const isEvenlyDivisible = (num,from, to) => {
    for (let i = from; i <= to; i++) {
        if (num % i !== 0) {
            return false;
        }
    }
    return true;
}

const FROM = 1;
const TO = 20;
console.log(smallestMultiple(FROM, TO));
