/**
 * Sum All Numbers in a Range
 * We'll pass you an array of two numbers.
 * Return the sum of those two numbers plus the sum of all the numbers between them.
 * The lowest number will not always come first.
 *
 * Test Cases:

 sumAll([1, 4]) should return a number.
 sumAll([1, 4]) should return 10.
 sumAll([4, 1]) should return 10.
 sumAll([5, 10]) should return 45.
 sumAll([10, 5]) should return 45.

 * @param arr
 * @returns {number}
 */
function sumAll(arr) {
    let sum = 0;
    // let first = arr[0] < arr[1] ? arr[0] : arr[1];
    // let last = arr[0] > arr[1] ? arr[0] : arr[1];
    let last = Math.max(arr[0], arr[1]);
    let first = Math.min(arr[0], arr[1]);
    for(let i = first; i <= last; i++){
        sum+= i;
    }
    return sum;;
}

sumAll([1, 4]);