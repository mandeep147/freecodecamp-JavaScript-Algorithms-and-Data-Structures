function rot13(str) { // LBH QVQ VG!
    var rotated = [];
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
            rotated.push(str.charAt(i));
        } else if (str.charCodeAt(i) > 77) {
            rotated.push(String.fromCharCode(str.charCodeAt(i) - 13));
        } else {
            rotated.push(String.fromCharCode(str.charCodeAt(i) + 13));
        }
    }
    return rotated.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");