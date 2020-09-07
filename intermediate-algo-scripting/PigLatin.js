/**
 * Pig Latin is a way of altering English Words. The rules are as follows:
 * - If a word begins with a consonant, take the first consonant or consonant cluster,
 * move it to the end of the word, and add "ay" to it.
 * - If a word begins with a vowel, just add "way" at the end.
 *
 * Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 *
 * Test Cases:

 translatePigLatin("california") should return "aliforniacay".
 translatePigLatin("paragraphs") should return "aragraphspay".
 translatePigLatin("glove") should return "oveglay".
 translatePigLatin("algorithm") should return "algorithmway".
 translatePigLatin("eight") should return "eightway".
 Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
 Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".

 * @param str
 * @returns {string}
 */
function translatePigLatin(str, charPos = 0) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    if(vowel.includes(str[0])) {
        if (charPos === 0) {
            return str +'way';
        } else {
            return str + 'ay';
        }
    } else if (charPos === str.length) {
        return str + 'ay';
    } else{
        return translatePigLatin(str.slice(1) + str[0], charPos+1);
    }
}

translatePigLatin("consonant");