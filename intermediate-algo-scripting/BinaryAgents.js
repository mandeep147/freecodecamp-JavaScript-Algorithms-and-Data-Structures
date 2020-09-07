/**
 * Return an English translated sentence of the passed binary string. The binary string will be space separated.
 * Test Cases:

 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
 binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
 * @param str
 * @returns {string}
 */
function binaryAgent(str) {
    const inputs = str.split(" "); //get individual word
    let output = [];
    /*using the radix (or base) parameter in parseInt, we can convert the binary number to a decimal number while simultaneously converting to a char*/
    inputs.forEach(word => {
        output.push(String.fromCharCode(parseInt(word, 2)));
    });
    return output.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");