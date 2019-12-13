const longestCollatzSequence = (under) => {
    let longestChainSize = 0;
    for (let i = 1; i < under; i++) {
        let n = i;
        let count = 0
        do {
            n = (n % 2 === 0) ? isEvenNumber(n):isUnevenNumber(n);
            count++;
        } while (n != 1);
        if (count > longestChainSize) {
            longestChainSize = count;
        }
    }
    return longestChainSize;
}

const isEvenNumber = (n) => {
    return n / 2;
}

const isUnevenNumber = (n) => {
    return n*3 + 1;
}

const BIG_NUMBER = 1000000;
console.log(longestCollatzSequence(BIG_NUMBER));