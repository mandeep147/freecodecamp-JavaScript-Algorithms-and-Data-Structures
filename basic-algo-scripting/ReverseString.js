/**
 * Reverse the provided string.
 * You may need to turn the string into an array before you can reverse it.
 * Your result must be a string.
 * @param str
 * @returns {string}
 */

function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("hello");