/**
 * You will be provided with an initial array (the first argument in the destroyer function),
 * followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 *
 * Test Cases:
 *
 destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
 destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
 destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
 destroyer([2, 3, 2, 3], 2, 3) should return [].
 destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
 destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
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