const solution = (to) => {
    let sumOfSquares = 0;
    for (let i = 1; i <= to; i++) {
        sumOfSquares += Math.pow(i, 2);
    }

    let squaresOfSum = 0;
    for (let i = 1; i <= to; i++) {
        squaresOfSum += i;
    }
    squaresOfSum = Math.pow(squaresOfSum, 2);

    return squaresOfSum - sumOfSquares; 
}

const FIRST = 100;
console.log(solution(FIRST));
