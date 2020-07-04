/**
 * You will be provided with an initial array (the first argument in the destroyer function),
 * followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 * @param arr
 * @returns {*}
 */
function destroyer(arr) {
    // Remove all the values
    let argsArr = Array.prototype.slice.call(arguments);

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < argsArr.length; j++){
            if(arr[i] === argsArr[j]){
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);