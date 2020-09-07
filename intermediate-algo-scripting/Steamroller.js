/**
 * Flatten a nested array. You must account for varying levels of nesting.
 *
 * Test Cases:

 steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
 steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
 steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
 steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
 Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

 * @param arr
 * @returns {*}
 */
function steamrollArray(arr) {
    let output = [];
    let flatten = function(arg) {
        if(!Array.isArray(arg)) {
            output.push(arg);
        } else {
            for(let i in arg ) {
                flatten(arg[i]);
            }
        }
    };
    arr.forEach(flatten);
    return output;
}

steamrollArray([1, [2], [3, [[4]]]]);

function steamRollArrayRecursive(arr, flat=[]) {
    arr.forEach(item => {
        if(Array.isArray(item)) {
            steamRollArrayRecursive(item, flat);
        } else {
            flat.push(item);
        }
    });
    return flat;
}

steamRollArrayRecursive([1, [2], [3, [[4]]]]);