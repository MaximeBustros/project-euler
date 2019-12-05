const specialPythagorianTriplet = (valueToFind) => {
    results = [];
    pow2 = [];

    // Calculate all power of 2 at the start so that we don t have to recalculate them everytime
    // example: to get 4^2 we just access pow2[4];
    for (let i = 0;  i <= valueToFind; i++) {
        pow2.push(Math.pow(i, 2));
    }

    for (let c = 3; c <= valueToFind; c++) {
        for (let b = 2; b < c; b++) {
            for (let a = 1; a < b; a++) {
                let sumOfSquares = pow2[a] + pow2[b] ;
                if (sumOfSquares === pow2[c]) {
                    if (a + b + c === valueToFind) {
                        results.push([a, b, c]);
                    }
                }
            }
        }
    }
    return results;
}

const VALUE_TO_FIND = 1000
console.log(`Value to find = ${VALUE_TO_FIND}`)
console.log(`Special Pythagorian Triplet: ${specialPythagorianTriplet(VALUE_TO_FIND)}`);