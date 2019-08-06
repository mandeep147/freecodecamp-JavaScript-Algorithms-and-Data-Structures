/**
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number.
 * @param str
 * @param num
 * @returns {*}
 */
function repeatStringNumTimes(str, num) {
    // repeat after me
    if(num < 0)
        return "";
    if(num === 1)
        return str;
    else
        return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);