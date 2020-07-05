/**
 * Pig Latin is a way of altering English Words. The rules are as follows:
 * - If a word begins with a consonant, take the first consonant or consonant cluster,
 * move it to the end of the word, and add "ay" to it.
 * - If a word begins with a vowel, just add "way" at the end.
 *
 * Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 * @param str
 * @returns {string}
 */
function translatePigLatin(str) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    if(vowel.indexOf(str.charAt(0)) !== -1) {
        str += "w";
    }
    while(vowel.indexOf(str.charAt(0)) === -1) {
        str = str.substr(1) + str.charAt(0);
    }
    return str + "ay";
}

translatePigLatin("consonant");