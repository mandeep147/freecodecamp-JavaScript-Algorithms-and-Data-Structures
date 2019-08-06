/**
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 * Return the truncated string with a ... ending.
 * @param str
 * @param num
 * @returns {*}
 */
function truncateString(str, num) {
    // Clear out that junk in your trunk
    if(str.length > num){
        return str.slice(0, num) + "...";
    }else return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);