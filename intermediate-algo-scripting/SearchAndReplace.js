/**
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.

 First argument is the sentence to perform the search and replace on.

 Second argument is the word that you will be replacing (before).

 Third argument is what you will be replacing the second argument with (after).

 Note
 Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

 Test Cases:
 myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
 myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
 myReplace("I think we should look up there", "up", "Down") should return "I think we should look down there".
 myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
 myReplace("His name is Tom", "Tom", "john") should return "His name is John".
 myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
 * @param str
 * @param before
 * @param after
 * @returns {string}
 */
function myReplace(str, before, after) {
    const words = str.split(" ");
    const indexOfBefore = words.indexOf(before);
    const isUpperCase = isCapital(before.charAt(0));
    if(isUpperCase) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    words[indexOfBefore] = after;
    return words.join(" ");
}

function isCapital(ch) {
    return ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90 ;
}


myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
