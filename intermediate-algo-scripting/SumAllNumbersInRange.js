/**
 * Sum All Numbers in a Range
 * We'll pass you an array of two numbers.
 * Return the sum of those two numbers plus the sum of all the numbers between them.
 * The lowest number will not always come first.
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