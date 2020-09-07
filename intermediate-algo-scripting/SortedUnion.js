/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

 In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

 The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

 Check the assertion tests for examples.

 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
 uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
 uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

 * @param arr
 * @returns {Array}
 */
function uniteUnique(arr) {
    let output = [];
    for(let i = 0; i < arguments.length; i++) {
        arguments[i].forEach(curr => {
            if(!output.includes(curr)) {
                output.push(curr);
            }
        });
    };
    return output;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function uniteUniqueUsingReduceFilter(arr) {
    let output = [];
    //convert arguments into array
    let args = Array.prototype.slice.call(arguments);
    // using reduce to flatten the array
    output = args.reduce((arg1, arg2) => {
        return arg1.concat(
            arg2.filter(function(i) {
                return arg1.indexOf(i) === -1;
            })
        )
    });
    return output;
}

uniteUniqueUsingReduceFilter([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function uniteUniqueUsingSet(arr) {
    //es6 code
    const output = [].concat(...Array.prototype.slice.call(arguments));
    return [...new Set(output)];
}

uniteUniqueUsingSet([1, 3, 2], [5, 2, 1, 4], [2, 1]);