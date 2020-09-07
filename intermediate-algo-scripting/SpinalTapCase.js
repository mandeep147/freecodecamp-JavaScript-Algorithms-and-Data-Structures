/**
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 *
 * Test Cases:
 spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
 spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
 spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
 spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
 spinalCase("AllThe-small Things") should return "all-the-small-things".
 * @param str
 * @returns {string}
 */
function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    // space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.toLowerCase().replace(/[\s_]/g,"-");
}

spinalCase('This Is Spinal Tap'); // returns this-is-spinal-tap
