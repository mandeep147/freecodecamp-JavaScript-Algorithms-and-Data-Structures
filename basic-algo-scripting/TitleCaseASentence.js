/**
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 *
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 * @param str
 * @returns {string|*}
 */
function titleCase(str) {
    let arr = str.split(" ");
    for(let i = 0 ; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    str = arr.join(" ");
    return str;
}

titleCase("I'm a little tea pot");