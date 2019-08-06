/**
 * Create a function that looks through an array (first argument) and
 * returns the first element in the array that passes a truth test (second argument).
 * If no element passes the test, return undefined.
 * @param arr
 * @param func
 * @returns {*}
 */
function findElement(arr, func) {
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i]))
            return arr[i];
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);