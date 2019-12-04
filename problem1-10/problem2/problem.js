const fibonacci = (n) => {
    // initialize first terms
    let a = 1;
    let b = 2;
    let sum = 0;

    while (b < n) {
        if (b % 2 === 0) {
            sum += b;
            console.log(sum);
        }
        b = a + b;
        a = b - a
    }
    return b;
}
console.log(fibonacci(100));