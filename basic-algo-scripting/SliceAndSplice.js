/**
 * You are given two arrays and an index.
 *
 * Use the array methods slice and splice to copy each element of the first array into the second array, in order.
 * Begin inserting elements at index n of the second array.
 * Return the resulting array. The input arrays should remain the same after the function runs.
 * @param arr1
 * @param arr2
 * @param n
 * @returns {*}
 */
function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let newArr = arr2.slice(0, arr2.length)
    for(let i = 0; i < arr1.length; i++) {
        newArr.splice(n, 0, arr1[i]);
        n++;
    }
    return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);