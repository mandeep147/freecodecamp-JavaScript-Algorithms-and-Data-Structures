/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument)
 * and returns them as a two-dimensional array.
 * @param arr
 * @param size
 * @returns {*}
 */
function chunkArrayInGroups(arr, size) {
    // Break it up.
    let chunkArr = [];
    for (let i = 0; i < arr.length; i+= size) {
        chunkArr.push(arr.slice(i , i+size));
    }
    return chunkArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);