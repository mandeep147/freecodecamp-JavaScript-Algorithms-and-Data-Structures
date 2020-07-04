/**
 * Diff Two Arrays
 *
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 * In other words, return the symmetric difference of the two arrays.
 *
 * Note:
 * You can return the array with its elements in any order.
 * @param arr1
 * @param arr2
 * @returns {Array}
 */
function diffArray(arr1, arr2) {
    // Same, same; but different.
    function diff(a, b){
        return a.filter(item => b.indexOf(item) === -1)
    }
    return [
        ...diff(arr1, arr2),
        ...diff(arr2, arr1)
    ];
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);