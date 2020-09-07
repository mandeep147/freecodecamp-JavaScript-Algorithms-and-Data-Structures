/**
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 *
 * Test Cases:
 fearNotLetter("abce") should return "d".
 fearNotLetter("abcdefghjklmno") should return "i".
 fearNotLetter("stvwx") should return "u".
 fearNotLetter("bcdf") should return "e".
 fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 * @param str
 * @returns {*}
 */
function fearNotLetter(str) {
    const length = str.length;
    const firstWord = str.charCodeAt(0);
    const lastWord = str.charCodeAt(length-1);
    let j = 0;
    for(let i = firstWord; i < lastWord; i++) {
        if(String.fromCharCode(i) !== str.charAt(j)) {
            return String.fromCharCode(i);
        }
        j++;
    }
    return undefined;
}

fearNotLetter("abce");
