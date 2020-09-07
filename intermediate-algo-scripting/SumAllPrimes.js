/**
 * A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

 Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

 sumPrimes(10) should return a number.
 sumPrimes(10) should return 17.
 sumPrimes(977) should return 73156.
 * @param num
 * @returns {number}
 */
function sumPrimes(num) {
    let total = 0;
    for(let i = 1; i <= num; i++) {
        if(isPrime(i)) {
            total += i;
        }
    }
    return total;
}

function isPrime(value) {
    if (value <= 1) {
        return false;
    }
    if(value % 2 === 0 && value !== 2) {
        return false;
    }
    for(let i = 3; i <= Math.sqrt(value); i += 2) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
}

sumPrimes(10);
